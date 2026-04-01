//  Accommodate.jsx

import useCounter from './useCounter.jsx';
import { useEffect, useState } from 'react';

const MAX_CAPACITY = 10;

function Accommodate() {

  // state 로 관리 중인 변수, 초기값 false
  const [isFull, setIsFull] = useState(false);
  // 커스텀 훅을 사용하여 커스텀 훅에서 전달하는 데이터를 가져옴
  // 변수 및 함수를 커스텀 훅을 사용하여 간단하게 표시
  const [count, incrementCount, decrementCount] = useCounter(0);

  useEffect(() => {
    console.log('-------------------------------');
    console.log('useEffect() 호출');
    console.log(`isFull : ${isFull}`);
  }, []);

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`현재 count 값 : ${count}`);
  }, [count]);

  return (
    <div>
      <p>{`총 ${count} 명 수용했습니다.`}</p>
      <button type={'button'} className={'btn btn-primary'} onClick={incrementCount} disabled={isFull}>입장</button>
      <button type={'button'} className={'btn btn-warning ms-2'} onClick={decrementCount}>퇴장</button>
      {/* state 로 관리 중인 변수 isFull 이 true 이면 && 연산자 오른쪽의 태그를 화면에 출력 */}
      {isFull && <p className={'text-danger'}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;