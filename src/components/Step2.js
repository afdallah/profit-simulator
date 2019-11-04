import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateInput } from '../actions'

import { Form, InputNumber, Select, Icon } from 'antd'

import product from '../images/product.png'
const { Option } = Select

function Step2(props) {
  const { form } = props
  const { getFieldDecorator } = form

  return (
    <>
      <img src={product} className="img-center" alt="Illustration" />
      <Form.Item label="Harga Produk">
        {getFieldDecorator('price', {
            initialValue: props.data.price,
            rules: [{
              required: true,
              message: 'Please input something'
            }, {
              pattern: /^[0-9]+$/,
              message: 'Only number can be entered'
            }]
          })(<InputNumber
          style={{width: '100%'}}
          suffix={<span style={{ color: 'rgba(0,0,0,.25)' }}>IDR </span>}
          formatter={value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\Rp\s?|(,*)/g, '')}
          placeholder="Masukan harga"
          name="price"
          onChange={value => props.updateInput('price', value)}
        />)}
      </Form.Item>
      <Form.Item label="Margin Produk">
        {getFieldDecorator('margin', {
            initialValue: props.data.margin,
            rules: [{
              required: true,
              message: 'Please input something'
            }, {
              pattern: /^[0-9]+$/,
              message: 'Only number can be entered'
            }]
          })(<InputNumber
          style={{width: '100%'}}
          suffix={<span style={{ color: 'rgba(0,0,0,.25)' }}>IDR </span>}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
          min={0}
          max={100}
          placeholder="Masukan margin"
          name="margin"
          onChange={value => props.updateInput('margin', value)}
        />)}
      </Form.Item>
      <Form.Item label="Category Product">
        <Select
          showSearch
          style={{ width: '100%' }}
          placeholder="Select a business category"
          optionFilterProp="children"
          name="category"
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onSearch={onSearch}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          onChange={(value) => props.updateInput('category', value)}
        >
          <Option value="financials">Financials</Option>
          <Option value="ecommerce">Ecommerce</Option>
          <Option value="others">Others</Option>
        </Select>
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
)(Step2)