//  SetStateFunction.jsx

import { useState } from 'react';

//  함수 컴포넌트로 SetStateFunction 컴포넌트 선언
function SetStateFunction() {
  // useState() : 리액트의 hooks 기능 중 하나로 클래스 컴포넌트의 setState() 를 함수 컴포넌트에서 사용할 수 있도록하는 함수, useState()의 매개변수가 초기값, 초기값을 설정하지 않으면 null 이 들어감

  // 사용법 :
  // let [변수명, set함수명] = useState(초기값); // state 로 관리 설정
  // set함수명(수정할 값); // state의 값 수정 시

  // 리액트의 hooks 기능 중 useState 기능을 사용하여 컴포넌트의 state를 수정하도록 설정
  // = 연산자 왼쪽의 첫번째 요소인 stateString 이 현재 컴포넌트에서 state 로 관리되는 변수가 됨
  // = 연산자 왼쪽의 두번째 요소인 setStateString 이 현재 컴포넌트에서 state 로 관리되는 변수의 값을 수정하는 함수가 됨
  // state 수정 함수의 이름은 'set + 변수명' 형태로 카멜명명법을 사용함
  // state 로 관리되는 변수를 수정 시 화면 업데이트가 발생함

  // useState() 로 현재 컴포넌트에서 state 로 관리되는 변수 및 수정 함수 설정
  let [stateString, setStateString] = useState('clicked');

  const StateChange = (e) => {
    // 원본 stateString 변수 내용 출력
    console.log(`원본 : ${stateString}`);
    // 컴포넌트에서 관리 중닌 stateString 변수의 값을 = 기호로 직접 수정함
    // 직접 수정 시 변수의 값은 수정되지만 Virtual DOM에는 적용되지 않음(UI 변경 없음)
    stateString = 'stateString 직접 수정';
    // 현재 stateString 변수 내용 출력, 변수의 값 자체는 변경되었으므로 콘솔에 수정된 내용이 출력
    console.log(`수정 : ${stateString}`);
    // 현재 이벤트 중지
    e.preventDefault();
  };

  return (
    <div>
      <button
        type={'button'}
        className={'btn btn-primary'}
        style={{ marginRight: '16px' }}
        onClick={(e) => {
          // 버튼 클릭 이벤트 발생 시 StateChange() 함수를 호출
          StateChange(e);
        }}
      >
        state 직접 수정
      </button>
      <button
        type={'button'}
        className={'btn btn-success'}
        onClick={(e) => {
          // 버튼 클릭 이벤트 발생 시 setStateString() 함수를 호출

          // 원본 stateString 변수 내용 출력
          console.log(`원본 : ${stateString}`);
          // setStateString() 함수를 사용하여 state 로 관리중인 변수 stateString 의 값을 수정 요청
          // setState() 가 동작하여 변수 stateString 의 값을 수정하고 Virtual DOM 에 적용(UI 변경)
          setStateString('setState로 수정');
          // 현재 stateString 변수 내용 출력, setState() 를 통해서 변수값을 수정하라고 요청한 것이기 때문에 실제로는 수정이 console.log() 보다 늦게 진행됨 (이전 값을 콘솔에 출력)
          console.log(`수정 : ${stateString}`);
          e.preventDefault();
        }}
      >
        setState 로 변경
      </button>
      <br />
      <h4>[함수 컴포넌트에서 state 변경하기] StateString : {stateString}</h4>
    </div>
  );
}

//  디폴트 export 로 함수 컴포넌트 SetStateFunction 를 외부에서 사용하도록 제공
export default SetStateFunction;
