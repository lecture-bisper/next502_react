//  main.jsx, 리액트 프로젝트의 시작 파일

//  리액트에 필요한 모듈 import
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//  기본 스타일 파일 import
// import './index.css'
//  자식 컴포넌트 import
import App from './App.jsx';

//  리액트-부트스트랩 사용 시 CSS 파일을 필수적으로 로드
import 'bootstrap/dist/css/bootstrap.css';
import Clock from './components/Clock.jsx';

//  index.html 파일 안에서 id 값이 root 인 태그를 검색
//  createRoot() : 리액트 virtualDOM 생성
//  render() : 리액트 virtualDOM 에 리액트 컴포넌트를 활용하여 UI를 그려줌
//  JSX 문법을 사용하여 화면 UI 를 그려줌
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

//  타이머 사용 예시
// const root = createRoot(document.getElementById('root'));
//
// setInterval(() => {
//   root.render(
//     <StrictMode>
//       <Clock />
//     </StrictMode>,
//   );
// }, 2000);
