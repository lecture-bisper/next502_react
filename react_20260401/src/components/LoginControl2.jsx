//  LoginControl2.jsx

import {useState} from "react";
import Greeting from "./Greeting.jsx";

//  자식 컴포넌트
function LoginButton(props) {
  return <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그인</button>
}

//  화살표 함수로 자식 함수 컴포넌트 선언
const LogoutButton = props => <button type={'button'} className={'btn btn-warning'} onClick={props.onClick}>로그아웃</button>

function LoginControl2() {
  // state 로 상태 관리 선언
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 이벤트 처리 함수 선언
  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {
        // JSX 문법에서 일반 if ~ else 문을 사용할 수 없으므로 삼항연산자로 대체하여 사용
        isLoggedIn
          ? <LogoutButton onClick={handleLogoutClick} />
          : <LoginButton onClick={handleLoginClick} />
      }
    </div>
  );
}

export default LoginControl2;