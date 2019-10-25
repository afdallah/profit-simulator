import React from 'react';
import { connect } from 'react-redux'
import { updateInput } from './actions'
import {
  Typography,
  Button,
  Steps,
  Form,
  Input,
  Card,
  Select
} from 'antd';

import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Result from './components/Result'
const { Title } = Typography;
const { Step } = Steps
const { Option } = Select

const steps = [
  {
    title: 'Goal',
    content: (props) => {
      return (
        <Form.Item label="Goal">
          <Input
            placeholder="Masukan target profit"
            name="profit"
            onChange={props.onChange}
            // defaultValue={props.profit}
          />
        </Form.Item>
      )
    },
  },
  {
    title: 'Product',
    content: (props) => {
      return (
        <>
          <Form.Item label="Harga Produk">
            <Input
              placeholder="Masukan harga"
              name="price"
              onChange={props.onChange}
              // defaultValue={props.price}
            />
          </Form.Item>
          <Form.Item label="Margin Produk">
            <Input
              placeholder="Masukan margin"
              name="margin"
              onChange={props.onChange}
              // defaultValue={props.margin}
            />
          </Form.Item>
          <Form.Item label="Caategory Product">
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={props.onSelectChange}
              name="category"
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>
        </>
      )
    },
  },
  {
    title: 'Customer service',
    content: (props) => {
      return (
        <>
          <Form.Item label="Jumlah Cs">
            <Input
              placeholder="Total Cs"
              name="totalCs"
              onChange={props.onChange}
              defaultValue={props.totalCs}
            />
          </Form.Item>
          <Form.Item label="Gaji CS">
            <Input
              placeholder="Masukan gaji"
              name="salary"
              onChange={props.onChange}
              defaultValue={props.salary}
            />
          </Form.Item>
        </>
      )
    },
  },
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      currentStep: 1,
      done: false,
      profit:  '',
      price: '',
      margin: '',
      category: '',
      totalCs: '',
      salary: '',
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSelect = value => {
    this.setState({
      category: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      done: true
    })
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    return (
      <button
        className="btn btn-outline-secondary"
        type="button" onClick={this._prev}
        disabled={currentStep === 1}
      >
        Previous
      </button>
    )
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
        Next
        </button>
      )
    }
    return null;
  }

  closeResult = () => {
    this.setState({
      done: false
    })
  }

  onChangenav = (current) => {
    this.setState({ current });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container container-slim">
          <Title level={3}>Profit Simulator</Title>
          <Steps current={this.state.current} size="small" onChange={this.onChangenav}>
            {steps.map((step, index) => {
              return <Step title={step.title} key={step.title + index + +new Date()} />
            })}
          </Steps>

          <Card onClick={() => this.props.updateInput(10)}>
            {steps[this.state.current].content(
              {
                ...this.state,
                onChange: this.props.updateInput,
                onSelectChange: this.handleSelect
              }
            )}
          </Card>
          <p style={{textAlign: 'center'}}  hidden={this.state.done}>Step {this.state.currentStep} </p>
          <Result done={this.state.done} closeResult={this.closeResult} {...this.state} />

          <form onSubmit={this.handleSubmit} hidden={this.state.done}>
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              profit={this.state.profit}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              price={this.state.price}
              margin={this.state.margin}
              category={this.state.category}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              totalCs={this.state.totalCs}
              salary={this.state.salary}
            />
            {this.previousButton()}
            {this.nextButton()}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { data: state }
}

export default connect(
  mapStateToProps,
  { updateInput }
)(App);
