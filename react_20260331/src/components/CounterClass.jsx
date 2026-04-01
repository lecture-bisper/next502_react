//  CounterClass.jsx

import { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);

    // 클래스 컴포넌트의 일반 멤버 변수 선언
    this.count = 0;
    // 클래스 컴포넌트의 state 객체 선언
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className={'m-3'}>
        <h4>총 {this.count} 번 클릭했습니다.</h4>
        <h4>총 {this.state.count} 번 클릭했습니다.</h4>
        <button
          type={'button'}
          className={'btn btn-primary me-2'}
          onClick={() => {
            this.count++;
            console.log(`class count : ${this.count}`);
            // forceUpdate() 를 사용하여 강제로 화면을 업데이트함 (클래스 컴포넌트 전용)
            // forceUpdate() 는 리액트에서 사용을 권장하지 않음
            this.forceUpdate();
          }}
        >
          클릭
        </button>
        <button
          type={'button'}
          className={'btn btn-info'}
          onClick={() => {
            // 클래스 컴포넌트의 setState() 를 사용하여 state 로 관리되는 변수 count 의 값을 수정
            // setState() 가 호출되었으므로 자동으로 화면 업데이트가 발생함
            this.setState({ count: this.state.count + 1 });
            console.log(`class count : ${this.state.count}`);
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}

export default CounterClass;
