import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateInput } from '../actions'

import coins from '../images/coins.png'
import { Form, InputNumber, Tooltip, Icon } from 'antd'

function Step1(props) {
  const { form } = props
  const { getFieldDecorator, getFieldError } = form
  const isError = getFieldError('profit')

  return (
    <>
      <img src={coins} className="img-center" alt="Illustration" />
      <Form.Item
        label={
          <span>
            Goal&nbsp;
            <Tooltip title="What do you want others to call you?">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          </span>
        }
      >
        {getFieldDecorator('profit', {
          initialValue: props.data.profit,
          rules: [{
            required: true,
            message: 'Please input something'
          }, {
            pattern: /^[0-9]+$/,
            message: 'Only number can be entered'
          }]
        })(<InputNumber
          style={{width: '100%'}}
          formatter={value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\Rp\s?|(,*)/g, '')}
          suffix={
            <>
              <span style={{ color: 'rgba(0,0,0,.25)', marginRight: 5 }}>IDR </span>
            </>
          }
          placeholder="Masukan target profit"
          name="profit"
          onChange={value => props.updateInput('profit', value)}
        />)}
      </Form.Item>
    </>
  );
}

const mapStateToProps = state => {
  return { data: state }
}

export default compose(
  connect(mapStateToProps, { updateInput }),
  Form.create()
)(Step1)