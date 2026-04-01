//  HookUseRef.jsx

import { useRef } from 'react';

//  useRef() : 특정 컴포넌트에 접근할 수 있도록 해주는 Hook
//  jsx 문법으로 선언한 태그에 ref 속성을 추가하고 useRef() 훅으로 생성한 변수명을 입력
//  ref 속성명을 사용한 태그에 직접 접근할 수 있게 됨

//  사용법 :
//  const ref변수명 = useRef(초기값);
//  <html태그 ref={ref변수명} />
function HookUseRef() {

  // useRef() 를 사용하여 변수 선언, 초기값으로 null을 사용하여 빈 태그로 설정
  const inputBox = useRef(null);

  const onButtonClick = () => {
    // jsx 문법으로 ref 를 설정한 태그가 useRef() 훅으로 만든 변수에 저장되어 있으므로, 변수명을 사용하여 지정한 태그를 사용할 수 있음
    inputBox.current.focus();
  }

  return (
    <div>
      <input type={'text'} className={'form-control mb-2'} />
      {/*jsx 문법으로 ref 속성에 useRef() 를 사용하여 반든 변수를 설정*/}
      <input type={'text'} className={'form-control mb-2'} ref={inputBox} placeholder={'아래 버튼 클릭 시 포커스를 받는 태그'}/>
      <button type={'button'} className={'btn btn-primary'} onClick={onButtonClick}>클릭 시 포커스 이동</button>
    </div>
  );
}

export default HookUseRef;