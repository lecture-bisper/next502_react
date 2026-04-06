//  File: Profile2.jsx
//  User: it
//  Date: 2026-04-06
//  Time: 오전 10:22
//  Desc :

import { useNavigate, useParams } from 'react-router';

function Profile2() {

  //  리액트 라우터에서 제공하는 useParams() 훅을 사용하여 파라미터로 전달된 데이터를 가져옴
  //  useParams() 훅으로 가져오는 데이터는 object 타입
  //  '변수명.파라미터명' 으로 데이터에 접근
  //  Route 설정 시 사용했던 key 명과 동일해야 함
  //  Route 설정 시 사용했던 형식과 동일해야 접속 가능
  const profile = useParams();
  console.log('useParams() 로 가져온 데이터 : ');
  console.log(profile);

  console.log('\n----- useNavigate() 훅 사용하기 -----\n');

  // 리액트 라우터에서 제공하는 useNavigate() 훅을 사용하여 이전페이지, 다음페이지로 이동 가능
  //  <Route> 컴포넌트의 path 속성에 입력된 주소를 입력하여 <Link> 컴포넌트 없이 원하는 컴포넌트로 이동 가능 (자바스크립트 코드를 이용하여 직접 페이지 이동 시 사용)

  const navi = useNavigate();

  const goPrev = () => navi(-1);
  const goNext = () => navi(+1);
  const goAbout = () => navi('/about');

  return (
    <div>
      <h1>Rest 방식으로 데이터를 가져오는 페이지</h1>
      <br/>
      <h4>useParams() 사용 파라미터 1 : {profile.name}</h4>
      <h4>useParams() 사용 파라미터 2 : {profile.age}</h4>

      <hr/>

      <button type={'button'} className={'btn btn-warning'} onClick={goPrev}>뒤로 가기</button>
      <button type={'button'} className={'btn btn-info'} onClick={goNext}>앞으로 가기</button>
      <button type={'button'} className={'btn btn-primary'} onClick={goAbout}>지정한 곳으로 이동</button>
    </div>
  );
}

export default Profile2;
