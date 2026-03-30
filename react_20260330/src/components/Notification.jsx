//  Notification.jsx

import { Component } from 'react';

let constructorCount = 0;
let mountCount = 0;
let renderCount = 0;
let updateCount = 0;
let unmountCount = 0;

// 클래스 컴포넌트로 만들어진 자식 컴포넌트 선언
class Notification extends Component {
  // 생성자, 현재 컴포넌트가 mount 될 경우 1번 호출
  constructor(props) {
    super(props);

    this.state = {};
    console.log(`Notification의 constructor() ${++constructorCount} 번 호출됨`);
  }

  // mount 가 끝난 후 호출되는 메소드 1번 호출
  componentDidMount() {
    console.log(`Notification의 componentDidMount() ${++mountCount} 번 호출됨`);
  }

  // constructor() 호출 후 자동 호출되는 메소드, 여러번 호출
  render() {
    return (
      <div className={'m-2 p-2 d-flex border rounded-3'}>
        <span className={'text-black fs-4'}>{this.props.message}</span>
        {console.log(`render() ${++renderCount} 번 호출됨`)}
      </div>
    );
  }

  // update 시 render() 호출 후 자동 호출되는 메소드
  componentDidUpdate() {
    console.log(`Notification의 componentDidUpdate() ${++updateCount} 번 호출됨`);
  }

  // unmount 시 한번 호출되는 메소드
  componentWillUnmount() {
    console.log(`Notification의 componentWillUnmount() ${++unmountCount} 번 호출됨`);
  }
}

export default Notification;