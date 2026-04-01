import {Container} from "react-bootstrap";
import Events from "./components/Events.jsx";
import Greeting from './components/Greeting.jsx';
import LoginControl from './components/LoginControl.jsx';
import MailBox from './components/MailBox.jsx';
import LoginControl2 from './components/LoginControl2.jsx';
import MainPage from './components/MainPage.jsx';
import LandingPage from './components/LandingPage.jsx';
import MapEx from './components/MapEx.jsx';
import AttendanceBook from './components/AttendanceBook.jsx';
import NameForm from './components/NameForm.jsx';
import RequestForm from './components/RequestForm.jsx';
import FruitSelect from './components/FruitSelect.jsx';
import Reservation from './components/Reservation.jsx';

function App() {

  return (
    <Container className={'mt-5'}>
      <h3>이벤트 사용하기</h3>
      <Events/>

      <br/><hr/><br/>

      <h3>조건부 렌더링</h3>
      <Greeting isLoggedIn={true} />

      <br/><hr/><br/>

      <h3>엘리먼트변수 사용하기</h3>
      <LoginControl />

      <br/><hr/><br/>

      <h3>인라인 if else 사용하기</h3>
      <MailBox unreadMessages={0} count={0} />

      <br/><br/>

      <h3>삼항 연산자로 조건부 렌더링</h3>
      <LoginControl2 />

      <br/><hr/><br/>

      <h3>렌더링 막기</h3>
      <MainPage />

      <br/><br/>

      <LandingPage />

      <br/><hr/><br/>

      <h3>map() 으로 배열의 내용 출력하기</h3>
      <MapEx />

      <br/><br/>

      <AttendanceBook />

      <br/><hr/><br/>

      <h3>form 사용하기</h3>
      <NameForm />

      <br/><br/>

      <RequestForm />

      <br/><br/>

      <FruitSelect />

      <br/><br/>

      <Reservation />

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Container>
  );
}

export default App











