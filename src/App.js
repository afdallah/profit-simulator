import React from 'react';
import { connect } from 'react-redux'
import { updateInput, syncStorage } from './actions'
import {
  Layout,
  Typography,
  Steps,
  Card,
  Icon,
} from 'antd';

import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'

const { Title, Text } = Typography;
const { Step } = Steps

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      done: false,
      width: '',
      height: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    const data = JSON.parse(localStorage.getItem('data'));
    const propsData = props.data
    const isEmpty = Object.entries(propsData).length === 0 && propsData.constructor === Object
    console.log(propsData)
    if (!isEmpty) {
      localStorage.setItem('data', JSON.stringify({...propsData}))
    }

    return data
  }

  componentDidMount() {
    // Setup localstorage
    const data = localStorage.getItem('data');
    if (!data) {
      localStorage.setItem('data', JSON.stringify(this.props.data))
    } else {
      this.props.syncStorage(data)
    }

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  _next = (event) => {
    let currentStep = this.state.current
    currentStep = currentStep >= 1 ? 2: currentStep + 1
    this.setState({
      current: currentStep
    })
  }

  _prev = (event) => {
    let currentStep = this.state.current
    currentStep = currentStep <= 0 ? 0: currentStep - 1
    this.setState({
      current: currentStep
    })
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
    let currentContent
    const { current } = this.state
    if (current === 0) {
      currentContent = <Step1 {...this.state} />
    } else if (current === 1) {
      currentContent = <Step2 {...this.state} />
    } else {
      currentContent = <Step3 {...this.state} />
    }

    return (
      <React.Fragment>
        <Layout className="container container-slim">
          <div style={{textAlign: 'center'}}>
            <Title level={3}>Profit Simulator</Title>
            <Text>Maksimalkan bisnis anda, dan jadilah partner kami. Kami telah membantu puluhan partner kami ke jalan yang bener.Tapir!</Text>
          </div>
          <Card bordered={false}>
            <Steps
              current={this.state.current}
              size="small"
              onChange={this.onChangenav}
              type={this.state.width > 500 ? 'navigation' : 'default'}>
              <Step title="Goal" />
              <Step title="Product" />
              <Step title="Team" />
            </Steps>
          </Card>

          <Card
            actions={[
              <div onClick={this._prev} disabled={this.state.current <= 0}><Icon type="left" /> Previous</div>,
              <div onClick={this._next} disabled={this.state.current >= 2}>Next <Icon type="right" /></div>
            ]}
          >
            {currentContent}
          </Card>
        </Layout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { data: state }
}

export default connect(
  mapStateToProps,
  { updateInput, syncStorage }
)(App);
