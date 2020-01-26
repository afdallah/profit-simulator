import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import cs from '../images/cs.png'
import { format } from '../utils'
import { updateInput } from '../actions'

import { Form, InputNumber, Button, Modal, Result, Typography, Icon, Divider } from 'antd'
const { Text, Paragraph } = Typography


class Step3 extends React.Component {
  state = {
    visible: false
  }

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const sales = Math.ceil(this.props.data.profit / this.props.data.margin)
    const { form } = this.props
    const { getFieldDecorator } = form

    return (
      <>
        <img src={cs} className="img-center" alt="Illustration" />
        <Form.Item label="Jumlah Cs">
        {getFieldDecorator('totalCs', {
            initialValue: this.props.data.totalCs,
            rules: [{
              required: true,
              message: 'Please input something'
            }, {
              pattern: /^[0-9]+$/,
              message: 'Only number can be entered'
            }]
          })(<InputNumber
          style={{width: '100%'}}
          placeholder="Masukan jumlah cs"
          name="totalCs"
          onChange={value => this.props.updateInput('totalCs', value)}
        />)}
        </Form.Item>
        <Form.Item label="Gaji CS">
        {getFieldDecorator('salary', {
            initialValue: this.props.data.salary,
            rules: [{
              required: true,
              message: 'Please input something'
            }, {
              pattern: /^[0-9]+$/,
              message: 'Only number can be entered'
            }]
          })(<InputNumber
          formatter={value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\Rp\s?|(,*)/g, '')}
          style={{width: '100%'}}
          placeholder="Masukan gaji"
          name="salary"
          onChange={value => this.props.updateInput('salary', value)}
        />)}
        </Form.Item>

        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Result
            icon={<Icon type="smile" theme="twoTone" />}
            title="Successfully generate your report!"
            subTitle="Ora umum! Ora umum! Ora umum! Ora umum!"
          />

          <Divider orientation="left">Submitted data</Divider>
          <table>
            <tbody>
              <tr>
                <td>Profit goal </td>
                <td>{format(this.props.data.profit)}</td>
              </tr>

              <tr>
                <td>Harga Produk </td>
                <td>{format(this.props.data.price)}</td>
              </tr>

              <tr>
                <td>Margin Produk </td>
                <td>{this.props.data.margin / 100 * this.props.data.price}</td>
              </tr>

              <tr>
                <td>Jumlah CS</td>
                <td>{this.props.data.totalCs}</td>
              </tr>

              <tr>
                <td>Gaji CS</td>
                <td>{format(this.props.data.salary)}</td>
              </tr>

            </tbody>
          </table>

          <Divider orientation="left">Penjualan</Divider>
          <table>
            <tbody>
              <tr>
                <td rowSpan="3">Sales</td>
                <td>{sales}/tahun</td>
              </tr>

              <tr>
                <td>{Math.ceil(sales / 12)}/bulan</td>
              </tr>

              <tr>
                <td>{Math.ceil(sales / 365)}/hari</td>
              </tr>

              <tr>
                <td>Omzet</td>
                <td>{format(this.props.data.price * sales)}/tahun</td>
              </tr>
            </tbody>
          </table>
          <Divider orientation="left">Customer service</Divider>
            {/* <div className="desc">
              <Paragraph>
                <Icon style={{ color: 'red' }} type="close-circle" /> Your account has been frozen
                <a>Thaw immediately &gt;</a>
              </Paragraph>
              <Paragraph>
                <Icon style={{ color: 'red' }} type="close-circle" /> Your account is not yet eligible to
                apply <a>Apply Unlock &gt;</a>
              </Paragraph>
            </div> */}
        </Modal>

        <Button type="primary" size="large" block onClick={() => this.setState({visible: true})}>Shut up and take my money!</Button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { data: state }
}

export default compose(
  connect(mapStateToProps, { updateInput }),
  Form.create()
)(Step3)