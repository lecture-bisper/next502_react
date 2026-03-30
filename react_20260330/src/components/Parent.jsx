//  Parent.jsx

import { useState } from 'react';
import Child from './Child.jsx';

//  부모 컴포넌트에서 선언한 일반 변수
let data1 = 100;

function Parent() {
  // 함수 컴포넌트 Parent 의 지역 변수 data2 선언, useState 훅을 사용하여 state 객체로 관리, 초기값 200
  let [data2, setData2] = useState(200);

  // 버튼의 클릭 이벤트 발생 시 동작할 함수 선언
  const firstDataChange = () => {
    // 변수 data1 의 값을 직접 변경, setState 를 사용하지 않으므로 변수의 값은 변경되지만 VirtualDOM에 적용되지 않아 UI 변경이 없음
    console.log(`data1 : ${++data1}`);
  }

  const secondDataChange = () => {
    // state 로 관리되고 있는 변수 data2 의 값을 setState 를 사용하여 데이터 수정 요청
    // setState 를 사용하여 데이터를 수정하므로 VirtualDOM  적용되어 UI 변경이 발생됨
    setData2(++data2);
    console.log(`data2 : ${data2}`);
  };

  return (
    <div className={'border border-2 rounded-3 p-3'}>
      <h3>부모 컴포넌트</h3>

      {/*버튼 이벤트 설정*/}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={firstDataChange}>
        부모 첫번째 데이터 수정
      </button>
      <button type={'button'} className={'btn btn-success'} onClick={secondDataChange}>
        부모 두번째 데이터 수정
      </button>

      {/*현재 부모의 데이터 확인*/}
      <h4 className={'my-3'}>
        <span>
          data1 : {data1}, data2 : {data2}
        </span>
      </h4>
      <hr />

      {/*자식 컴포넌트 호출*/}
      {/*자식 컴포넌트에 부모 컴포넌트의 데이터 data1, data2 의 값을 전달함*/}
      <Child data1={data1} data2={data2} />
    </div>
  );
}

export default Parent;