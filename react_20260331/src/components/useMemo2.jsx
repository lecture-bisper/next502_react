//  UseMemo2.jsx

import { useEffect, useMemo, useState } from 'react';

function UseMemo2() {
  // state 로 관리 중인 변수 설정
  const [number, setNumber] = useState(0); // 초기값 0
  const [isType, setIsType] = useState(true); // 초기값 true

  // useMemo의 의존성 배열에 등록된 변수의 값이 변경되면 useMemo 의 콜백함수를 실행
  // useMemo의 의존성 배열에 등록된 변수의 값이 변경되지 않으면 기존의 값을 그대로 사용
  const food = useMemo(() => {
    return { type: isType ? '찍먹' : '부먹'};
  }, [isType]);

  // useMemo 를 사용하지 않을 경우 아래의 내용을 매번 다시 실행하여 결과를 얻음
  // const food = {type: isType ? '찍먹' : '부먹'};

  useEffect(() => {
    console.log('componentDidUpdate 역할의 useEffect() 호출');
  }, [food]);

  return (
    <div>
      <h4>숫자 카운트</h4>
      {/* 값 변경 시 setState 가 동작하여 state 의 값을 수정하고 UI 화면을 다시 그림 */}
      <input type={'number'} className={'form-control'} value={number} onChange={(e) => {
        setNumber(e.target.value);
      }} />
      <br/>
      <h4>boolean 값 변경</h4>
      {/* 변수 food 는 useMemo 에 의해서 메모리에 저장되어 있는 데이터 */}
      <p>찍먹 vs 부먹 : <span className={'fs-3'}>{food.type}</span></p>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        // setState 를 사용하여 현재 isType 의 값을 반대로 저장
        setIsType(!isType);
      }}>클릭</button>
    </div>
  );
}

export default UseMemo2;