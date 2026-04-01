//  Toolbar.jsx

function Toolbar(props) {
  // 부모 컴포넌트에서 전달받은 props 객체에서 객체 분할 할당을 사용하여 각 key 와 일치하는 변수에 데이터를 저장
  // isLoggedIn 는 boolean 데이터, onClickLogin / onClickLogout 함수가 저장됨
  const { isLoggedIn, onClickLogin, onClickLogout } = props;

  return (
    <div>
      {/* inline if 의 단축 판정으로 && 연산자 오른쪽의 내용을 표시할지 여부 결정 */}
      {isLoggedIn && <span className={'me-3'}>환영합니다.</span>}
      {/* 삼항 연산자로 조건부 렌더링을 구현 */}
      {isLoggedIn ? (
        <button type={'button'} className={'btn btn-primary'} onClick={onClickLogout}>
          로그아웃
        </button>
      ) : (
        <button type={'button'} className={'btn btn-secondary'} onClick={onClickLogin}>
          로그인
        </button>
      )}
    </div>
  );
}

export default Toolbar;
