//  File: Home.jsx
//  User: it
//  Date: 2026-04-06
//  Time: 오전 10:12
//  Desc :

import { Link } from 'react-router';

function Home() {
  return (
    <div>
      <h1 className={'text-center'}>Home 페이지</h1>
      <p>접속 시 가장 먼저 보이는 페이지</p>

      <Link to={'about'}>소개 페이지</Link>
    </div>
  );
}

export default Home;
