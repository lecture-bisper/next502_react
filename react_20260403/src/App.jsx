import WelcomeDialog from './components/WelcomeDialog.jsx';
import SplitPanel from './components/SplitPanel.jsx';
import Contact from './components/Contact.jsx';
import Chat from './components/Chat.jsx';
import WelcomeDialog2 from './components/WelcomeDialog2.jsx';
import SignUpDialog from './components/SignUpDialog.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import AxiosTest from './components/AxiosTest.jsx';
import AxiosDailyBoxOffice from './components/AxiosDailyBoxOffice.jsx';
import AxiosRestApiConnect from './components/AxiosRestApiConnect.jsx';

function App() {
  return (
    <div className={'container mt-5'}>
      <h3>합성과 상속</h3>
      <WelcomeDialog />

      <br />
      <br />

      {/* 부모 컴포넌트 App 에서 자식 컴포넌트 SplitPanel 호출 */}
      {/* 자식 컴포넌트 호출 시 left, right 이라는 이름으로 각각의 다른 컴포넌트를 전달 */}
      <SplitPanel left={<Contact />} right={<Chat />} />

      <br />
      <hr />
      <br />

      <h3>Specialization</h3>
      <WelcomeDialog2 />

      <br />
      <hr />
      <br />

      <h3>Containment, Specialization 함께 사용하기</h3>
      <SignUpDialog/>

      <br/><br/>

      <ProfileCard />

      <br/><hr/><br/>

      <h3>axios 비동기 통신</h3>

      <AxiosTest />

      <br/><hr/><br/>

      <h3>일일 박스오피스</h3>
      <AxiosDailyBoxOffice />

      <br/><hr/><br/>

      <h3>Axios 로 RestApi 서버 접속하기</h3>
      <AxiosRestApiConnect />

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

export default App
