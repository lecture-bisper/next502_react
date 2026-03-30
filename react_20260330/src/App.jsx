import Counter from './components/Counter.jsx';
import SetStateClass from './components/SetStateClass.jsx';
import SetStateFunction from './components/SetStateFunction.jsx';
import Parent from './components/Parent.jsx';
import NotificationList from './components/NotificationList.jsx';
import Events from './components/Events.jsx';

function App() {
  return (
    <div className={'container mt-5'}>
      <h3>state 없이 변수의 값 변경</h3>
      <Counter />

      <br />
      <hr />
      <br />

      <h3>클래스 컴포넌트에서 state 사용하기</h3>
      <SetStateClass />

      <br />
      <hr />
      <br />

      <h3>함수 컴포넌트에서 state 사용하기</h3>
      <SetStateFunction />

      <br />
      <hr />
      <br />

      <h3>props와 state의 차이</h3>
      <Parent />

      <br />
      <hr />
      <br />

      <h3>컴포넌트의 생명주기</h3>
      <NotificationList />

      <br/><hr/><br/>

      <h3>이벤트 사용하기</h3>
      <Events />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
