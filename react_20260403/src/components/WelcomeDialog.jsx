//  File: WelcomeDialog.jsx
//  User: it
//  Date: 2026-04-03
//  Time: 오전 9:27
//  Desc :

import FancyBorder1 from './FancyBorder1.jsx';
import FancyBorder2 from './FancyBorder2.jsx';

function WelcomeDialog() {
  return (
    <div className={'border border-2 border-primary p-3'}>
      <h3>부모 컴포넌트 영역</h3>
      {/* 부모 컴포넌트인 WelcomeDialog 에서 자식 컴포넌트를 호출하여 UI 를 구성 */}
      {/* 부모 컴포넌트에서 자식 컴포넌트를 호출할 때 html 태그 및 다른 컴포넌트를 포함하여 호출할 수 있음 */}
      <br />
      <h3>기존 방식 사용</h3>
      <FancyBorder1 color={'blue'} />
      <hr />
      <h3>Containment 사용</h3>
      {/* 부모 컴포넌트가 자식 컴포넌트를 호출 시 자식 컴포너트의 자식 태그 및 자식 컴포넌트를 추가하여 UI 를 구성하도록 함 */}
      {/* 자식 컴포넌트 호출 시 자식 컴포넌트의 시작 태그와 끝 태그 사이에 추가한 html 및 컴포넌트가 props 를 통해서 전달됨 */}
      <FancyBorder2 color={'blue'}>
        <h1 className={'Dialog-title'}>안녕하세요</h1>
        <p className={'Dialog-message'}>우리 사이트에 방문하신 것을 환영합니다.</p>
      </FancyBorder2>
    </div>
  );
}

export default WelcomeDialog;
