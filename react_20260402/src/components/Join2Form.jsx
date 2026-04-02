import { useState } from 'react';

// 자식 컴포넌트
function Join2Form(props) {
  // useState 로 상태관리 설정, 자식 컴포넌트에서 변경되는 상태를 관리하기 위함
  const [value, setValue] = useState('');

  // 부모 컴포넌트의 변수를 수정할 수 있는 함수를 부모 컴포넌트를 통해서 전달받음
  // parentSendData() 를 호출 시 부모 컴포넌트의 변수를 수정하는 함수를 대신 실행하는 것이 됨
  const parentSendData = props.sendData;

  // 자식 컴포넌트의 상태를 변경하기 위한 이벤트 처리 함수
  const valueChange = (e) => {
    // 자식 컴포넌트인 자신의 상태를 변경하기 위한 setState 함수
    setValue(e.target.value);
    // 부모의 변수를 수정하는 함수를 대신 실행, 매개변수로 자식 컴포넌트가 가지고 있는 데이터를 사용
    parentSendData(e.target.value);
    e.preventDefault();
  };

  return (
    <div className="form-floating mt-3">
      <input
        type={props.types}
        className="form-control"
        id={props.id}
        placeholder={props.label}
        value={value}
        onChange={valueChange}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default Join2Form;