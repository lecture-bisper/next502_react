// ClassComponent.jsx

import React from 'react';

//  클래스 컴포넌트 React 의 Component 클래스를 상속받아 사용함
//  자바스크립트 ES6의 클래스이기 때문에 리액트의 생명주기 함수를 사용할 수 있음
//  멤버 변수, 멤버 메소드 를 선언하여 사용할 수 있음
//  UI 구성은 render() 메소드를 통해서 JSX 문법으로 UI 를 구현함
class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h4>클래스 컴포넌트 방식으로 컴포넌트 생성</h4>
        <p>클래스 컴포넌트로 생성한 자식 컴포넌트입니다.</p>
      </div>
    );
  }
}

export default ClassComponent;
