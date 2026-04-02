import Join from './components/Join.jsx';
import Parent from './components/Parent.jsx';
import Parent2 from './components/Parent2.jsx';
import Parent3 from './components/Parent3.jsx';
import Join2 from './components/Join2.jsx';
import Exercise from './components/Exercise.jsx';

function App() {
  return (
    <div className={'mt-5'}>
      <div className={'container'}>
        <h3>회원 가입 페이지 만들기</h3>
        <Join />

        <br />
        <hr />
        <br />

        <h3>상태 공유하기</h3>
        <Parent />

        <br />
        <br />

        <Parent2 />

        <br />
        <hr />
        <br />

        <h3>부모 컴포넌트로 데이터 전달하기</h3>
        <Parent3 />

        <br />
        <hr />
        <br />

        <h3>회원 가입 화면을 이용한 부모 컴포넌트로 데이터 전달</h3>

        <Join2 />
      </div>

      <br />
      <hr />
      <br />

      <div>
        <h3>리액트로 클론 코딩</h3>

        <Exercise />
      </div>

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
