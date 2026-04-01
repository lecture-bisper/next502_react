import { useState } from 'react';

// 함수 컴포넌트에서 이벤트 사용하기
//  1. UI 가 있는 JSX 문법의 html 태그에 리액트의 이벤트 속성명을 입력
//  2. 컴포넌트 안에 function 이나 화살표 함수를 사용하여 이벤트 처리 함수를 미리 선언
//  3. JSX 문법을 사용한 태그의 이벤트 속성에 미리 선언한 이벤트 처리 함수를 입력하여 이벤트 동작
//  3-1. JSX 문법을 사용한 태그의 이벤트 속성에 직접 콜백함수를 입력하여 이벤트 동작

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  // function 키워드로 이벤트 처리 함수 선언
  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  // 화살표 함수로 이벤트 처리 함수 선언
  // const handleClick = () => setIsToggleOn((isToggleOn) => !isToggleOn);

  // 매개변수를 전달받는 이벤트 처리 함수
  const handleDelete = (id, event) => {
    alert(`id : ${id}, target : ${event.target}`);
    console.log(event);
    console.log(event.target);
  };

  return (
    <div>
      {/* 미리 선언한 함수를 이벤트 속성에 등록하여 사용 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={handleClick}>
        {isToggleOn ? '켜짐' : '꺼짐'}
      </button>
      {/* 이벤트 속성에 콜백함수를 직접 입력하여 사용 */}
      <button
        type={'button'}
        className={'btn btn-primary'}
        onClick={() => setIsToggleOn((isToggleOn) => !isToggleOn)}
      >
        {isToggleOn ? '켜짐' : '꺼짐'}
      </button>
      <br />
      <br />
      {/* 콜백함수의 매개변수로 사용된 event 는 실제로 html 문서에서 동작하는 이벤트 객체 */}
      {/* 매개변수로 이벤트 객체와 추가되는 데이터를 전달할 수 있음, 이벤트 객체와 매개변수의 위치는 상관없음 */}
      <button
        type={'button'}
        className={'btn btn-primary'}
        onClick={(event) => handleDelete(1, event)}
      >
        매개변수가 있는 버튼 이벤트
      </button>
    </div>
  );
}

export default Events;
