//  CounterFunc.jsx

//  리액트는 UI 화면을 Virtual DOM 이라는 것을 사용하여 먼저 UI 화면을 구성하고, 실제 사용자가 보고 있는 DOM 화면과 교체함
//  리액트를 통해서 UI 화면을 그리는 시점은 컴포넌트가 가지고 있는 render() 함수가 실행될 때 UI 화면을 그림
//  render() 함수가 재실행되는 상황은 부모 컴포넌트가 전달한 props 의 값이 변경되거나, 현재 컴포넌트의 state 에서 관리하는 데이터가 변경되어거나, forceUpdate() 함수를 호출했을 경우 render() 가 재실행됨

// react hook : 리액트의 state 와 생명주기 기능에 갈고리를 걸어서 원하는 시점에 정해진 함수를 실행하도록 하는 것
//  useState : 컴포넌트의 state 상태관리를 쉽게하기 위해서 사용
//  useEffect : 생명주기 함수를 쉽게 사용하기 위해서 사용
//  useNavigate : React Router 를 사용하여 MPA 방식 웹을 만드는 것처럼 하기 위해서 사용
//  useMemo : 기존에 수행한 결과값을 메모리에 저장하여 동일한 입력이 들어왔을 경우 저장된 데이터를 재활용하여 로딩 속도를 높이기 위해서 사용
//  useCallback : useMemo 와 동일한 기능이지만 useMemo 는 결과값을 재활용하는 것이지만 useCallback 은 함수를 재활용 함
//  useRef : 특정 컴포넌트에 접근할 경우 사용

const CounterFunc = () => {
  let count = 0;

  return (
    <div className={'m-3'}>
      <h4>총 {count} 번 클릭했습니다.</h4>
      <button
        type={'button'}
        className={'btn btn-primary'}
        onClick={() => {
          count++;
          console.log(`function count : ${count}`);
        }}
      >
        클릭
      </button>
    </div>
  );
};

export default CounterFunc;
