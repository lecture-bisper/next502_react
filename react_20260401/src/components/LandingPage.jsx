//  LandingPage.jsx

import { useState } from 'react';
import Toolbar from './Toolbar.jsx';

function LandingPage() {
  // state 로 상태 관리 설정
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 이벤트 처리 함수 선언
  const onClickLogin = () => setIsLoggedIn(true);
  const onClickLogout = () => setIsLoggedIn(false);

  return (
    <div>
      {/*자식 컴포넌트 호출, 3개의 데이터를 전달*/}
      {/*isLoggendIn 에는 boolean 값, onClickLogin/onClickLogout 에는 이벤트 처리 함수를 전달*/}
      <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
      <div className={'p-3'}>로그인 여부 확인</div>
    </div>
  );
}

export default LandingPage;