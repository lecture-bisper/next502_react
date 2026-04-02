import { useState } from 'react';

//  자식 컴포넌트
function Child3(props) {
  //  자식 컴포넌트에서 useState 로 상태 관리 설정
  const [childData1, setChildData1] = useState(100);
  //  부모 컴포넌트에서 전달한 데이터 중 editDate2 라는 이름으로 전달받은 함수
  //  props.editDate2 는 부모 컴포넌트에서 state 로 관리 중인 변수 data2 의 값을 수정하는 setState 함수임
  //  자식 컴포넌트의 변수 sendData 에 부모 컴포넌트의 setData2() 함수를 저장
  //  sendData() 라는 이름으로 부모 컴포넌트의 setData2() 함수를 대신 실행할 수 있음
  const sendData = props.editData2;

  const childBtnClick = () => setChildData1(childData1 + 1);

  //  버튼 이벤트 처리 함수 선언
  const parentDataEdit = () => {
    //  부모 컴포넌트의 setData2() 함수를 대신 실행하는 sendData() 함수를 실행
    //  매개변수로 자식 컴포넌트의 데이터를 사용
    sendData(props.data2 + 100);
  };

  return (
    <div className={'m-3 p-3 border border-secondary rounded-3 bg-secondary-subtle'}>
      <h3>자식 컴포넌트</h3>
      <br />
      <button type={'button'} className={'btn btn-info me-2'} onClick={childBtnClick}>
        자식의 데이터 변경
      </button>
      <button type={'button'} className={'btn btn-warning'} onClick={parentDataEdit}>
        부모의 데이터 대신 변경
      </button>
      <hr />
      <h4>자식의 데이터 childData1 : {childData1}</h4>
      <h4>부모에게서 전달받은 데이터 (data2) : {props.data2}</h4>
    </div>
  );
}

export default Child3;