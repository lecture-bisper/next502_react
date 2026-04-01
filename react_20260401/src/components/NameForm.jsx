//  NameForm.jsx

import { useState } from 'react';

function NameForm() {
  // useState()로 상태 관리 설정, input 태그에 입력된 내용을 저장하는 변수
  const [inputValue, setInputValue] = useState('');

  // event : 지정한 태그에서 발생한 이벤트의 정보를 가지고 있는 객체
  // event.target : 해당 이벤트가 발생한 태그를 출력
  // event.target.value : 해당 이벤트가 발생한 태그가 value 속성을 가지고 있을 경우 value 속성을 출력

  //  이벤트 처리 함수, input 의 value 값이 변경 시 동작하는 이벤트 함수
  const handleChange = (e) => setInputValue(e.target.value);
  // form 태그에 포함된 버튼 중 submit 버튼을 클릭 시 동작하는 이벤트 함수
  const handleSubmit = (e) => {
    alert(`입력한 이름 : ${inputValue}`);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={'mt-3'}>
          <label htmlFor="user-name" className={'form-label'}>이름 : </label>
          {/* input 태그의 value 속성은 기본값이 '', value 에 값을 입력 시 기본값으로 화면에 출력 */}
          {/* 리액트에서는 state 로 관리하고 있는 변수를 value 속성의 값으로 사용 */}
          {/* onChange 이벤트를 통해서 state 로 관리하는 변수의 값을 수정하면, input 태그의 value 값이 변경되어 화면에 출력됨 */}
          <input type="text" className={'form-control'} id={'user-name'} placeholder={'이름을 입력하세요'} value={inputValue} onChange={handleChange} />
        </div>
        <div className={'mt-3 d-grid gap-2'}>
          <button type={'submit'} className={'btn btn-primary'}>확 인</button>
        </div>
      </form>
    </div>
  );
}

export default NameForm;