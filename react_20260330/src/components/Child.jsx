//  Child.jsx

import { useState } from 'react';

// props 는 부모 컴포넌트에서 자식 컴포넌트로 전달하여 자식 컴포넌트가 전달받은 데이터, 읽기전용
// 부모에게서 전달받은 데이터를 수정하려면 자식 컴포넌트의 변수에 저장 후 자식 컴포넌트의 변수를 수정
// state 는 현재 자신의 컴포넌트에서 관리하는 데이터

function Child(props) {
  //  부모 컴포넌트에서 전달받은 데이터를 자식 컴포넌트의 변수에 단순 대입
  let parentData1 = props.data1;
  let parentData2 = props.data2;

  //  자식 컴포넌트 Child 에서 state 로 관리하는 변수 childData1, 초기값 300
  let [childData1, setChildData1] = useState(300);
  //  부모 컴포넌트에서 전달한 값을 자식 컴포넌트에서 state로 관리하는 변수 childData2 의 초기값으로 설정
  //  childData2 도 자식 컴포넌트 child 에서 state 로 관리하는 변수임
  let [childData2, setChildData2] = useState(props.data2);

  // 버튼 클릭 이벤트 선언

  const btn1Event = () => {
    // 부모에게서 전달받은 데이터를 자식 컴포넌트의 지역변수에 저장하고 지역 변수의 값을 직접 변경
    console.log(`자식 컴포넌트 parentData1 : ${++parentData1}`);
  }

  const btn2Event = () => {
    // 부모에게서 전달받은 데이터를 자식 컴포넌트의 지역변수에 저장하고 지역 변수의 값을 직접 변경
    console.log(`자식 컴포넌트 parentData2 : ${++parentData2}`);
  }

  const btn3Event = () => {
    // 부모에게서 전달받은 데이터 원본에 부모에게서 전달받은 데이터 원본을 더하여 부모에게서 전달받은 변수에 그대로 저장
    // 부모에게서 전달받은 데이터 객체인 props 는 읽기 전용, 수정 불가
    props.data1 += props.data1;
    console.log(`자식 컴포넌트 props.data1 : ${props.data1}`);
  }

  const btn4Event = () => {
    // 부모에게서 전달받은 데이터 원본에 부모에게서 전달받은 데이터 원본을 더하여 부모에게서 전달받은 변수에 그대로 저장
    // 부모에게서 전달받은 데이터 객체인 props 는 읽기 전용, 수정 불가
    props.data2 += props.data2;
    console.log(`자식 컴포넌트 props.data2 : ${props.data2}`);
  }
  
  const btn5Event = () => {
    // 자식 컴포넌트에서 state 로 관리되는 변수의 값을 setState 로 수정
    setChildData1(++childData1);
    console.log(`자식 컴포넌트 childData1 : ${childData1}`);
  };

  const btn6Event = () => {
    // 자식 컴포넌트에서 state 로 관리되는 변수의 값을 setState 로 수정
    setChildData2(++childData2);
    console.log(`자식 컴포넌트 childData2 : ${childData2}`);
  }

  return (
    <div className={'border border-2 border-primary rounded-2 p-3'}>
      <h3>자식 컴포넌트</h3>

      <h4>parentData1 : {parentData1}, parentData2 : {parentData2}</h4>
      <h4>props.data1 : {props.data1}, props.data2 : {props.data2}</h4>
      <h4>childData1 : {childData1}, childData2 : {childData2}</h4>
      <hr/>

      <button type={'button'} className={'btn btn-info me-2'} onClick={btn1Event}>props.data1 의 값을 받은 parentData1 수정</button>
      <button type={'button'} className={'btn btn-info'} onClick={btn2Event}>props.data2 의 값을 받은 parentData2 수정</button>
      <hr/>
      <button type={'button'} className={'btn btn-success me-2'} onClick={btn3Event}>자식 컴포넌트가 props.data1 직접 수정</button>
      <button type={'button'} className={'btn btn-success'} onClick={btn4Event}>자식 컴포넌트가 props.data2 직접 수정</button>
      <hr/>
      <button type={'button'} className={'btn btn-primary me-2'} onClick={btn5Event}>자식 컴포넌트의 state 값 수정</button>
      <button type={'button'} className={'btn btn-primary'} onClick={btn6Event}>props.data2 의 값을 자식 컴포넌트의 state 로 받고 setState 로 수정</button>
    </div>
  );
}

export default Child;