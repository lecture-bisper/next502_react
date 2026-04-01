//  CounterUseEffect.jsx

import { useEffect, useState } from 'react';

//  useEffect : 리액트에서 제공하는 hook 중 하나로 클래스 컴포넌트만 사용할 수 있었던 생명주기 함수를 사용할 수 있도록 하는 hook
//  하나의 컴포넌트에서 여러개의 useEffect 를 사용할 수 있음

//  사용법 :
//  useEffect(effect콜백함수, 의존성 배열);
//  effect 콜백함수 : useEffect 사용 시 동작할 소스코드
//  의존성 배열 : 의존성 배열 안에 지정된 변수의 내용이 변경될 경우 useEffect 의 effect 콜백함수가 호출

function CounterUseEffect() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // componentDidMount() 의 역할
  // 현재 컴포넌트가 생성될 경우 단 1번만 실행
  // useEffect 사용 시 의존성 배열을 빈 배열로 지정
  useEffect(() => {
    console.log('컴포넌트 mount 시 동작!!');
  }, []);

  // componentDidUpdate() 의 역할
  // useEffect 사용 시 의존성 배열에 변수를 지정함
  // 해당 변수의 값이 변경되었을 경우 useEffect 가 동작함
  useEffect(() => {
    document.title = `총 ${count1} 번 클릭!!`;
    console.log('컴포넌트 update 시 동작!!');
  }, [count1]);

  // componentWillUnmount() 의 역할
  // useEffect 사용 시 effect 콜백 함수에 return 키워드를 사용하고, 콜백함수를 입력하면 현재 컴포넌트가 삭제될 때 useEffect 가 동작함
  // useEffect 사용 시 의존성 배열을 빈 배열로 지정
  useEffect(() => {
    return () => {
      console.log('컴포넌트 unmount 시 동작!!');
    };
  }, []);

  return (
    <div>
      <h4>총 {count1} 번 클릭했습니다.</h4>
      <button type={'button'} className={'btn btn-primary'} onClick={() => setCount1(count1 + 1)}>
        클릭
      </button>
      <div className={'mt-3'}>
        <h4>두번째 count2 의 값 : {count2}</h4>
        <button
          type={'button'}
          className={'btn btn-primary'}
          onClick={() => setCount2(count2 + 10)}
        >
          +10 클릭
        </button>
      </div>
    </div>
  );
}

export default CounterUseEffect;