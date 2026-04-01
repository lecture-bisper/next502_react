//  LifeCycleFunc.jsx

import { useEffect, useState } from 'react';

function LifeCycleFunc() {
  let num1;
  let [num2, setNum2] = useState();

  // 함수 컴포넌트이므로 생성자가 없음
  // 가장 먼저 화면을 구성함, 함수 컴포넌트의 return 키워드 부분을 먼저 실행

  useEffect(() => {
    num1 = 1000;
    num2 = 2000;
    console.log(`num1 : ${num1}, num2 : ${num2}`);
  }, []);

  useEffect(() => {
    console.log('화면 업데이트 후 자동 동작되는 useEffect')
  }, [num2]);

  return (
    <div>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        setNum2(num2 + 1);
        console.log(num2 + 1);
      }}>화면 업데이트</button>
      <p>num1 : {num1}</p>
      {console.log(num1)}
      <p>num2 : {num2}</p>
      {console.log(num2)}
    </div>
  );
}

export default LifeCycleFunc;