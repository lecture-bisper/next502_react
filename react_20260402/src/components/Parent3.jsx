import Child3 from "./Child3.jsx";
import {useState} from "react";

function Parent3() {
  // useState() 로 상태 관리 설정
  const [data1, setData1] = useState(10);
  const [data2, setData2] = useState(20);

  // Parent3 의 state 변수 data1 에 대한 데이터 수정하는 이벤트 처리 함수
  const btn1Click = () => setData1(data1 + 1);

  return (
    <div className={'p-3 m-3 border border-primary rounded-3'}>
      <h3>부모 컴포넌트</h3>
      <br />
      <button type={'button'} className={'btn btn-primary'} onClick={btn1Click}>
        부모의 데이터 변경
      </button>
      <h4>부모의 상태 데이터 data1 : {data1}</h4>
      {/* state 로 관리하는 변수 data2 의 값 화면 출력*/}
      <h4>부모의 상태 데이터 data2 : {data2}</h4>
      <h4>자식이 부모에게 전달한 데이터 : {data2}</h4>
      <hr />

      {/* 자식 컴포넌트 호출, data2 라는 이름으로 state로 관리 중인 변수 data2 를 전달 */}
      {/* editData2 라는 이름으로 state로 관리 중인 변수 data2 를 수정하는 setState 함수를 전달 */}
      <Child3 data2={data2} editData2={setData2} />
    </div>
  );
}

export default Parent3;