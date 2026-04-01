//  LifeCycleClass.jsx

import { Component } from 'react';

class LifeCycleClass extends Component {
  num1;

  constructor(props) {
    super(props);

    this.state = {
      num2: null
    }

    console.log("컴포넌트 생성 시 가장 먼저, 단 1번만 동작하는 컴포넌트의 생성자");
  }

  componentDidMount() {
    this.num1 = 100;
    // this.state.num2 = 200;
    this.setState({num2: 2000});
    console.log('컴포넌트 생성 시 render() 실행 후 단 1번만 동작하는 componentDidMount()');
  }

  componentDidUpdate() {
    console.log('setState() 실행 후 동작하는 componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('현재 컴포넌트가 삭제될 때 실행되는 componentWillUnmount()');
  }

  render() {
    return (
      <div>
        <p>num1 : {this.num1}</p>
        {console.log(this.num1)}
        <p>num2 : {this.state.num2}</p>
        {console.log(this.num2)}
      </div>
    );
  }
}

export default LifeCycleClass;