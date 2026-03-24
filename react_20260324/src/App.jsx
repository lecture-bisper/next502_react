// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

// node.js 란?
//    - Node.js 는 Chrome V8 Javascript 엔진으로 빌드 된 Javascript 실행 환경
//    - Javascript 를 일반 Java 프로그램처럼 사용할 수 있도록 해줌
//      - alert() 와 같은 web 환경에서 표시되는 몇 가지 함수는 지원하지 않음

// npm 이란?
//    - Node Package Manager 의 줄임말로 node.js 프로그램을 동작시키기 위한 각종 모듈을 web에서 다운로드 받아 관리하는 패키지 매니저
//    - 사용자가 직접 모든 프로그램을 만들지 않고, 미리 만들어진 모듈을 다운받아 자신의 프로젝트에 추가하여 사용하는 형태
//    - Spring 의 Maven, Gradle 와 동일한 역할
//  사용법
//    - npm install  : package.json 에 있는 내용대로 종속성 모듈을 현재 프로젝트에 추가
//    - npm install 모듈명  : 지정한 모듈을 현재 프로젝트에 추가
//    - npm install --save-dev 모듈명  : 지정한 모듈을 개발 버전용으로만 현재 프로젝트에 추가
//    - npm uninstall 모듈명  : 지정한 모듈을 현재 프로젝트에서 제거
//    - npm uninstall --save-dev 모듈명  : 지정한 개발 버전용 모듈을 현재 프로젝트에서 제거

// NVM 이란?
//    - Node Version Manager 의 줄임말로 node.js 가 버전업이 빠르기 때문에 node의 버전을 관리하기 위한 버전 매니저
//    - windows : nvm-windows 를 다운받아서 사용
//    - linux : 해당 리눅스 배포판의 패키지 매니저를 통해서 nvm 설정
//      - sudo apt-get install nvm
//      - sudo yum install nvm
//    - mac : homebrew 를 통해서 nvm 설치
//      - sudo brew install nvm
//  사용법
//    - nvm install 버전명  : 지정한 node.js 버전을 설치, 버전명 대신 'lts' 입력 시 최신 LTS 버전을 설치
//    - nvm uninstall 버전명  : 지정한 node.js 버전을 설치 제거, 버전명 대신 'lts' 입력 시 설치된 LTS 버전을 제거
//    - nvm list  : 현재 설치된 node.js 의 목록을 출력
//    - nvm use 버전명  : 설치된 node.js 버전 중 지정한 버전의 node.js 를 사용하도록 설정, 버전명 대신 'lts' 입력 시 설치된 LTS 버전을 사용 설정
//    - nvm version  : nvm 의 버전을 확인

//  vite 란?
//    - React 프로젝트를 자동으로 생성해주는 빠르고 간편한 프론트엔드 빌드 도구
//    - 현재 React 개발 시 vite 사용을 권장하고 있음
//  사용법
//    - npx create-vite 프로젝트명  : vite 를 사용하여 새로운 React 프로젝트를 생성
//    - npm create vite@latest 프로젝트명  : vite 를 사용하여 새로운 React 프로젝트를 생성
//    - vite dev  : 개발 모드로 React 프로젝트를 시작
//    - vite build  : 개발된 React 프로젝트를 배포 버전으로 출력


// 리액트 프로젝트 구조
//  node_modules : 리액트 프로젝트에서 필요한 자바스크립트 모듈이 설치되는 폴더, 사용자가 건들일 필요 없음, 프로젝트 복사 시 해당 폴더는 제외
//  public : 리액트 프로젝트의 기본 웹 파일이 존재하는 폴더, vite 로 만든 리액트 프로젝트에서는 사용하지 않음
//  src : 리액트 프로젝트의 실제 소스 파일이 위치하는 폴더
//  src/assets : 리액트 프로젝트에서 사용할 리소스 파일이 위치하는 폴더

//  package.json : 리액트 프로젝트의 설정 파일, 리액트 프로젝트의 각종 정보와 라이브러리 종속성 정보가 포함되어 있음(spring 의 application.properties 파일과 같은 역할)
//  vite.config.js : vite 빌드 툴의 설정 파일, 프록시 서버 설정 내용을 주로 입력함
//  eslint.config.js : 자바스크립트 문법 검사 모듈인 eslint 의 설정 파일

//  index.html : 리액트를 통해서 동적으로 생성되는 웹 UI 화면이 출력되는 html 파일, 사용자가 수정할 필요가 없음
//  main.jsx : vite 빌드 툴로 생성한 리액트 프로젝트의 프로젝트 시작 파일
//  App.jsx : vite 빌드 툴로 생성한 리액트 프로젝트의 시작 컴포넌트 파일, main.jsx 가 App.jsx 파일을 호출하여 화면에 출력함
//  index.css, app.css : 리액트 프로젝트의 기본 css 파일 (기본 CSS UI 설정이 있으므로 사용 유무는 사용자가 선택)
function App() {
  return (
    // 사용자가 화면에 출력할 web UI 를 그리는 곳
    <div>
      <h1>처음 만들어보는 리액트 프로젝트</h1>
      <br/>
    </div>
  );
}

export default App
