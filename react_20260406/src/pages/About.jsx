//  File: About.jsx
//  User: it
//  Date: 2026-04-06
//  Time: 오전 10:12
//  Desc :

import { Link, Outlet } from 'react-router';

function About() {
  return (
    <div>
      <h1 className={'text-center'}>소개 페이지</h1>
      <p>리액트 라우터를 사용하여 About 으로 이동한 페이지</p>

      <Link to={'/'}>홈으로</Link>
      <br />
      <Link to={'/about'}>about 으로 이동</Link>
      <br />
      <Link to={'/about/area'}>area 로 이동</Link>

      {/* Route 에서 자식 컴포넌트로 설정된 컴포넌트를 Outlet 컴포넌트에 함께 표시 함 */}
      <Outlet />
    </div>
  );
}

export default About;
