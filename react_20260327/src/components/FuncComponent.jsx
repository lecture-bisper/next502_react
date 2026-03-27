// FuncComponent.jsx

//  함수 컴포넌트는 자바스크립트의 함수를 생성하고, return 부분에 JSX 문법으로 UI 코드를 입력하여 사용
//  export default 로 해당 함수를 export 함
//  함수 컴포넌트는 리액트의 생명주기 함수를 사용할 수 없음
//  함수 컴포넌트는 리액트의 Hooks 라는 기능을 사용하여 생명주기 함수를 사용할 수 있음
function FuncComponent() {
  return (
    <div>
      <h4>함수 컴포넌트 방식으로 컴포넌트 생성</h4>
      <p>함수 컴포넌트로 생성한 자식 컴포넌트</p>
    </div>
  );
}

export default FuncComponent;
