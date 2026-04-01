// 자식 컴포넌트 선언
function UserGreeting() {
  return <h1>방문해 주셔서 감사합니다.</h1>
}

// 자식 컴포넌트 선언
function GuestGreeting() {
  return <h1>회원 가입이 필요합니다.</h1>
}

//  조건부 렌더링 : 어떠한 조건에 따라서 UI 렌더링이 달라지는 것
//  자바스크립트에서 조건식으로 데이터를 구분할 경우 true/false 2가지 경우로 구분할 수 있는데, 이를 Truthy/Falsy 로 구분함
//  간단하게 데이터가 있으면 Truthy, 데이터가 없으면 Falsy 라고 할 수 있음
//  Truthy : true(Boolean 값 true), {} (빈 object 타입), [] (빈 배열), 100, -200, 0.5, -0.1 (0 이 아닌 숫자), "0", "false", "  " (빈 문자열이 아닌 문자열)
//  Falsy : false(Boolean 값 false), 0, -0, -0.0, 0.0 (양수, 음수, 정수, 실수 상관없이 숫자 0), 0n (BigInt 0), '', "", `` (빈 문자열), null (데이터 없음), undefined (초기화되지 않음), NaN (Not a Number, 숫자가 아님)

// 부모컴포넌트에서 props 를 통해서 isLoggedIn 이라는 데이터를 전달받음
function Greeting(props) {
  // 자식 컴포넌트의 지역 변수 isLoggedIn 에 부모 컴포넌트에서 전달받은 데이터를 저장
  const isLoggedIn = props.isLoggedIn;

  // 변수에 저장된 값을 비교하여 출력할 자식 컴포넌트를 선택
  if (isLoggedIn) {
    return <UserGreeting />
  }
  else {
    return <GuestGreeting />
  }
}

export default Greeting;