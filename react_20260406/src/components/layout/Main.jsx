//  File: Main.jsx
//  User: it
//  Date: 2026-04-06
//  Time: 오후 12:22
//  Desc :

import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import BoardList from '../board/BoardList.jsx';
import BoardDetail from '../board/BoardDetail.jsx';
import BoardWrite from '../board/BoardWrite.jsx';
import Login from '../auth/Login.jsx';
import Signup from '../auth/Signup.jsx';
import BoardErrorPage from '../board/BoardErrorPage.jsx';

function Main() {
  return (
    <div>
      <BrowserRouter>
        {/* Header 컴포넌트 내부에서 Link 컴포넌트를 사용하므로 BrowserRoute 의 자식 컴포넌트로 존재 */}
        <Header />

        {/* 라우팅 시스템 설정 */}
        <Routes>
          <Route path={'/board'}>
            <Route index element={<BoardList />} />
            <Route path={':boardIdx'} element={<BoardDetail />} />
          </Route>
          <Route path={'/board/boardWrite'} element={<BoardWrite />} />
          <Route path={'/auth'}>
            <Route path={'login'} element={<Login />} />
            <Route path={'signup'} element={<Signup />} />
          </Route>
          <Route path={'*'} element={<BoardErrorPage />} />
        </Routes>
      </BrowserRouter>

      {/* 라우터와 상관없이 모든 페이지에서 출력하기 위해서 BrowserRoute 밖에 존재 */}
      <Footer />
    </div>
  );
}

export default Main;
