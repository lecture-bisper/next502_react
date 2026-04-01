//  UseMemo1.jsx

import { useCallback, useMemo, useState } from 'react';

function UseMemo1() {
  // state 로 관리 중인 변수
  const [btnX, setBtnX] = useState(0);
  const [btnY, setBtnY] = useState(0);

  // useMemo 훅 사용
  // 메모로 지정해 놓은 변수의 데이터가 수정될 경우 전체 화면을 다시 그림
  // 메모로 지정하지 않은 변수의 데이터가 변경될 경우 메모로 지정한 변수만 빼고 다시 UI 를 그림
  useMemo(() => {
    console.log(`useMemo btnX : ${btnX}`);
  }, [btnX]);


  const returnFunc = useCallback(() => {
    console.log(btnX);
  }, [btnX]);

  return (
    <div>
      <button type={'button'} className={'btn btn-primary me-2'} onClick={() => {
        setBtnX((prev) => {
          console.log(`setBtnX prev : ${prev}`);
          return prev + 1;
        });
      }}>useMemo 사용</button>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        setBtnY((prev) => {
          console.log(`setBtnY prev : ${prev}`);
          return prev + 1;
        });
      }}>useMemo 미사용</button>
    </div>
  );
}

export default UseMemo1;