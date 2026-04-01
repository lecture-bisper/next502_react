//  LoginControl.jsx

import {useState} from "react";

// 자식 컴포넌트
function LoginButton(props) {
  return (
    <button type={'button'} className={'btn btn-success'} onClick={props.onClick}>로그인</button>
  );
}

// 자식 컴포넌트
function LogoutButton(props) {
  return (
    <button type={'button'} className={'btn btn-warning'} onClick={props.onClick}>로그아웃</button>
  );
}

//  부모 컴포넌트
function LoginControl() {
  // state 로 관리하는 변수 설정
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 이벤트 처리 함수 선언
  const handelLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handelLogoutClick = () => setIsLoggedIn(false);

  //  엘리먼트 변수 선언, 실제로는 일반 자바스크립트 변수 선언
  //  자바스크립트의 변수는 모든 데이터 타입을 다 저장할 수 있음
  //  변수에 저장되는 내용이 JSX 문법으로 만들어진 컴포넌트가 저장된 변수
  //  일반 자바스크립트 변수에 리액트 컴포넌트가 저장되면 해당 변수를 엘리먼트 변수라고 표현함
  let button;

  //  조건부 렌더링 연산, state 로 관리되고 있는 isLoggedIn 변수의 값이 true/false 에 따라서 저장되는 컴포넌트를 변경함
  if (isLoggedIn == true) {
    // LoginButton, LogoutButton 컴포넌트에 전달할 데이터의 이름으로 onClick 을 설정
    // onClick 이라는 이름에 handleLogoutClick, handleLoginClick 함수를 매개변수로 전달
    button = <LogoutButton onClick={handelLogoutClick} />
  } else {
    button = <LoginButton onClick={handelLoginClick} />
  }

  //  엘리먼트 변수를 사용한 조건부 렌더링
  return (
    <div className={'mt-3'}>
      {button}
    </div>
  );

  // 엘리먼트 변수를 사용하지 않고, 조건부 렌더링
  // true 이면 LogoutButton 컴포넌트 출력, false 이면 LoginButton 컴포넌트 출력
  // if (isLoggedIn == true) {
  //   return (
  //     <div className={'mt-3'}>
  //       <LogoutButton onClick={handelLogoutClick} />
  //     </div>
  //   );
  // }
  // else {
  //   return (
  //     <div className={'mt-3'}>
  //       <LoginButton onClick={handelLoginClick} />
  //     </div>
  //   );
  // }
}

export default LoginControl;