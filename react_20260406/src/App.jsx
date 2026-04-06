// react-router-dom : 리액트 프로젝트를 MPA 방식으로 사용할 수 있도록 해주는 라이브러리

// 설치 : npm install react-route

// <BrowserRouter> : SPA 페이지를 MPA 페이지로 만들어주는 컴포넌트, 라우터 기본 컴포넌트
// <Routes> : 페이지 컴포넌트를 여러개 가질 수 있는 컴포넌트
// <Route> : 화면에 그려지는 페이지 객체, Route 컴포넌트에 자식 컴포넌트로 Route 컴포넌트를 사용 시 부모 Route 컴포넌트의 주소를 기본 주소로 사용함
//    path : 웹 브라우저에 표시되는 url 주소를 설정, 절대 경로/ 상대 경로 모두 사용 가능, * 기호 사용 시 모든 페이지를 의미함 (* 은 주로 error 페이지 설정 시 사용함)
//    element : path 속성을 지정한 url 과 매칭되는 컴포넌트를 설정
// <Link> : 리액트 라우터에서 사용되는 링크 전용 컴포넌트, html 태그의 <a> 태그와 같은 기능
//    to : 이동할 url 주소를 설정, Route 컴포넌트의 path 속성에 입력한 url 을 설정

// <Outlet> : 현재 선택된 경로의 컴포넌트를 화면에 표시

// 페이지 접속 시 데이터 전달 방식
// 1. URL 파라미터 : RestAPI 방식의 주소 형태로 구성되는 파라미터
//    Route 컴포넌트의 path 속성값 뒤에 '/' 와 ':파라미터명' 을 사용하여 데이터를 전달하는 방식
//    rest 방식으로 구성되어 있을 경우 사용
//    연결된 컴포넌트에서 useParams() 훅을 사용해야 함
//  사용법:
//    기존URL/:파라미터1/:파라미터2...   // 브라우저에 주소 입력
//    <Route path={url/:test1/:test2} element={<Url />} />  // 리액트 라우터 세팅

// 2. 쿼리스트링 : 기존의 get 방식으로 웹 브라우저의 주소창에 파라미터를 함께 전달하는 방식
//    <Route> 컴포넌트의 path 속성에 변경이 없음
//    element 속성에서 지정한 컴포넌트에서 몇가지 옵션 사항을 사용할 수 있음
//    옵션 :
//      pathname : 쿼리스트링을 제외한 현재 주소의 경로
//      search : url 가장 앞의 ? 문자를 포함한 쿼리스트링 값 전체
//      hash : 주소의 # 문자열 뒤의 값 (구형 브라우저에서만 동작)
//      state : 페이지 이동 시 임의로 추가할 상태 값
//      key : location 객체의 고유한 값

//    useLocation(), useSearchParams() 훅을 사용하여 데이터를 가져올 수 있음
//    useLocation() 훅을 사용하여 데이터를 가져오면 원하는 파라미터값을 얻기 위해 직접 데이터 파싱 작업을 진행해야 함
//    useSearchParams() 훅을 사용하여 데이터를 가져오면 파라미터 데이터만 따로 가져올 수 있음
//    사용법 :
//      기존URL?파라미터1=값1&파라미터2=값2...

//  useNavigate() : <Link> 컴포넌트를 사용하지 않고 다른 페이지로 이동하는 훅
//    사용법 :
//      const navigate = useNavigate();
//      navigate(-1);  // History 를 사용하여 이전 페이지로 이동, 숫자를 음수로 입력 시 이전 페이지로 이동, 양수로 입력 시 다음 페이지로 이동
//      navigate(url); // 지정한 url 로 이동

import { BrowserRouter, Route, Routes } from 'react-router';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Logout from './pages/Logout.jsx';
import Profile1 from './pages/Profile1.jsx';
import Profile2 from './pages/Profile2.jsx';
import Area from './pages/Area.jsx';

function App() {
  return (
    <div className={'container mt-5'}>
      <BrowserRouter>
        <Routes>
          {/* path 속성의 url 은 절대/상대 경로 모두 사용 가능 */}
          {/* 상대 경로 형식 사용 시 부모 컴포넌트(Route) 의 주소가 존재해야 함 */}

          {/* 웹 브라우저 주소창에 '서버주소/' 입력 시 Home 컴포넌트가 표시됨 */}
          <Route path={'/'} element={<Home />} />
          {/* url을 '서버주소/about' 으로 입력 시 About 컴포넌트가 표시됨 */}
          <Route path={'/about'} element={<About />}>
            {/* Outlet 사용 시 부모 컴포넌트의 내용과 자식 컴포넌트의 내용이 함께 표시됨 */}
            {/* Outlet 사용 시 url 을 '부모 url + 자식 url' 로 하면 둘다 표시됨 */}
            <Route path={'area'} element={<Area />} />

            {/* Outlet 사용 시 자식 컴포넌트에 index 속성 사용 시 부모 컴포넌트의 url 만 입력해도 자식 컴포넌트의 내용까지 모두 출력 됨*/}
            {/*<Route index element={<Area />} />*/}
          </Route>
          {/* Route 컴포넌트의 path 속성에 없는 url 을 입력 시 접속되는 페이지로 설정 */}
          <Route path={'*'} element={<ErrorPage />} />

          {/* 절대 경로 방식을 사용하여 path 를 설정 */}
          <Route path={'/pages/login'} element={<Login />} />
          {/* Route 를 중첩하여 사용할 수 있음 (상대 경로 방식) */}
          {/* 부모 Route 는 element 속성이 존재하지 않음 */}
          <Route path={'/pages'}>
            {/* 자식 Route 중 index 속성을 사용한 Route 가 부모 Route 의 페이지로 동작 */}
            {/* index : 부모 Route 의 URL 을 자신의 URL 로 사용한다는 의미 */}
            <Route index element={<Signup />} />
            {/* 자식 Route 의 URL 은 '부모 Route의 URL + 자식 Route 의 URL' 형태로 사용 */}
            {/* 자식 Route 의 path 속성의 시작부분에 '/' 를 사용하지 않음*/}
            <Route path={'logout'} element={<Logout />} />

            <Route path={'profile1'} element={<Profile1 />} />
            <Route path={'profile2/:name/:age'} element={<Profile2 />} />
            {/* rest 방식 사용 시 파라미터 다음에 추가 url 입력 가능함 */}
            <Route path={'profile2/:name/param/:age'} element={<Profile2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
