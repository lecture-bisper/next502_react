import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// document.getElementById('root') : index.html 파일에서 id 값이 root 인 태그를 검색
// createRoot() : 리액트의 root 컴포넌트를 생성하는 명령어
// render() : 리액트의 web UI 를 그리는 명령어

// <StrictMode> : 리액트의 컴포넌트로 javascript 의 문법을 엄격한 검사 모드로 사용한다는 의미
// <App /> : 리액트 컴포넌트, 사용자가 생성하여 화면에 표시할 web UI 를 의미
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*<div>*/}
    {/*  <h1>처음 만들어보는 리액트 프로젝트</h1>*/}
    {/*  <br/>*/}
    {/*</div>*/}
  </StrictMode>,
)
