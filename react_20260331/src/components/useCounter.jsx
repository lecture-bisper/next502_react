//  useCounter.jsx

import { useState } from 'react';

// 커스텀 훅 생성
// 함수의 이름에 접두사로 'use' 사용
// 함수의 내부에서 리액트 훅 사용

function useCounter(initValue) {

  // useState 훅을 사용하여 변수 count 를 state 로 관리
  const [count, setCount] = useState(initValue);


  const incrementCount = () => setCount((count) => count + 1);

  // Math.max() : 매개변수로 입력받은 값 중 최대값을 구하여 반환하는 함수
  const decrementCount = () => setCount((count) => Math.max(count - 1, 0));

  // 배열로 반환
  return [count, incrementCount, decrementCount];
}

export default useCounter;