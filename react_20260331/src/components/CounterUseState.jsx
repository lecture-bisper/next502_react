//  CounterUseState.jsx

// 리액트에서 제공하는 useState 훅을 import
import { useState } from 'react';

function CounterUseState() {

  //  useState() 훅을 사용하기 위해서 설정
  //  변수는 const 키워드를 사용하여 직접 수정할 수 없도록 막음
  //  변수값을 수정하는 setCount() 함수를 선언
  //  useState() 함수에 매개변수로 초기값을 설정
  const [count, setCount] = useState(0);

  //  현재 컴포넌트에서 관리할 state 가 여러개 이면 useState 를 여러개 사용
  const [userName, setUserName] = useState('');
  const [userNickname, setUserNickname] = useState('');

  // 이벤트 처리 함수를 미리 선언
  const clickEvent = () => {
    //  setCount() 를 호출하여 useState 를 사용하여 state 로 관리되고 있는 변수 count 의 값을 수정 요청
    setCount(count + 1);
    //  useState 는 비동기 방식으로 동작하기 때문에 화면에 표시되는 값과 console에 출력되는 값이 다르게 출력될 수 있음
    console.log(`useState() count : ${count + 1}`);
  }

  return (
    <div className={'mt-3'}>
      <h4>총 {count} 번 클릭했습니다.</h4>
      <button type={'button'} className={'btn btn-primary'} onClick={clickEvent}>클릭</button>

      <div className={'mt-3'}>
        <label htmlFor="user-name" className={'form-label'}>이름 : </label>
        <input type="text" className={'form-control'} id={'user-name'} placeholder={'이름을 입력하세요'} value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className={'mt-3'}>
        <label htmlFor="user-nick" className={'form-label'}>닉네임 : </label>
        <input type="text" className={'form-control'} id={'user-nick'} placeholder={'닉네임을 입력하세요'} value={userNickname} onChange={(e) => setUserNickname(e.target.value)} />
      </div>
      <div className={'mt-3'}>
        <h4>이름 : {userName}</h4>
        <h4>닉네임 : {userNickname}</h4>
      </div>
    </div>
  );
}

export default CounterUseState;