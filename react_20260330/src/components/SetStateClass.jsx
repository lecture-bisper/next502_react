//  SetStateClass.jsx

import React from 'react';

//  es6 버전에서는 자바스크립트에서 클래스를 사용할 수 있도록 제공
//  React.Component 클래스를 상속받아 클래스 컴포넌트를 선언
class SetStateClass extends React.Component {
  // 생성자 선언
  constructor(props) {
    super(props);

    // 클래스 컴포넌트의 state 객체 선언, key = StateString, value = clicked
    this.state = {
      StateString: 'clicked',
    };
  }

  // 클래스 컴포넌트의 메소드
  StateChange(flag) {
    // 매개변수가 direct 이면
    if (flag == 'direct') {
      // 컴포넌트의 state 객체의 요소 StateString 을 값을 = 연산자를 사용하여 직접 수정
      // 리엑트에서는 Virtual DOM 을 사용하기 때문에 state 의 내용을 직접 수정 시 수정된 내용일 Virtual DOM 에 적용되지 않음.
      // Virtual DOM 에 적용되지 않으면 실제 DOM 과의 교체도 없음(UI 변경이 없음)

      // 변경 전의 state 객체의 정보 출력
      console.log(`원본 내용 : ${this.state.StateString}`);
      // state 객체에 값을 직접 대입, 변수의 값 자체는 변경 됨(UI 에는 적용되지 않음)
      this.state.StateString = '멤버 변수인 StateString의 값을 직접 변경';
      // 현재 state 객체의 정보 출력
      console.log(`수정 내용 : ${this.state.StateString}`);
    }
    //   매개변수가 setState 이면
    else if (flag == 'setState') {
      // 컴포넌트의 state 객체의 요소인 StateString 의 값을 setState() 함수를 사용하여 수정
      // setState() 를 사용하여 state 의 내용을 수정 시 Virtual DOM 의 내용이 변경됨
      // Virtual DOM 이 변경되었으므로 실제 DOM 과 교체가 발생함 (UI가 변경됨)

      // 변경 전의 state 객체의 정보 출력
      console.log(`원본 내용 : ${this.state.StateString}`);
      // setState() 함수로 지정한 요소의 데이터를 수정, setState() 를 사용하여 변경을 요청함
      this.setState({ StateString: 'setState() 함수로 멤버 변수인 StateString 의 값 변경' });
      // 현재 state 객체의 정보 출력, setState() 를 사용하기 전과 데이터가 동일함
      console.log(`수정 내용 : ${this.state.StateString}`);
    }
  }

  //  render() : 클래스 컴포넌트에서 UI 를 그려주는 메소드
  render() {
    return (
      <div>
        {/* JSX 문법의 문자열은 {} 없이 사용 가능, {} 사용 시 자바스크립트 코드 사용 가능 */}
        {/* JSX 문법은 기본적으로 모든 html 태그 및 html 태그의 속성을 제공하지만 JS의 예약어가 겹치는 것들이 존재하기 때문에 몇몇 속성은 다른 이름을 사용함 */}
        {/* 대표적으로 class -> className, 이벤트 속성(onclick -> onClick 등등)*/}

        {/* onClick 속성에 화살표 함수를 사용하여 js 코드 실행 */}
        <button
          type={'button'}
          className={'btn btn-primary me-2'}
          onClick={(e) => {
            // StateChange() 메소드를 호출
            this.StateChange('direct', e);
          }}
        >
          state 직접 수정
        </button>

        {/* JSX 문법에서 CSS 속성 사용 시 ' - ' 기호를 생략하고, 카멜명명법으로 사용 */}
        {/* JSX 문법에서 CSS 사용 시 object 타입으로 설정해야 함 */}
        <button
          type={'button'}
          className={'btn btn-success'}
          style={{ marginLeft: '10px' }}
          onClick={(e) => this.StateChange('setState', e)}
        >
          setState()로 변경
        </button>
        <br />
        <h4>[state 변경하기] StateString : {this.state.StateString}</h4>
      </div>
    );
  }
}

//  디폴트 export 를 사용하여 선언한 클래스 컴포넌트 SetStateClass 를 외부에서 사용하도록 제공
export default SetStateClass;
