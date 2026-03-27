//  DivComponent.jsx

import UserInfo from './UserInfo.jsx';

function formatDate(date) {
  return date.toLocaleString();
}

function DivComponent(props) {
  return (
    //  컴포넌트 추출
    //  UI 구성이 복잡한 컴포넌트를 간소화된 형태의 컴포넌트로 UI 를 분리 구성할 수 있음
    //  기능 단위, 재사용이 가능한 형태로 추출하는 것이 좋음
    <div className={'comment'}>
      {/* 컴포넌트 전의 원본 컴포넌트 내용 */}
      {/*<div className={'user-info'}>*/}
      {/*  <img*/}
      {/*    src={props.author.avatarUrl}*/}
      {/*    alt={props.author.name}*/}
      {/*    className={'avatar'}*/}
      {/*    style={{ width: '100px', height: '100px' }}*/}
      {/*  />*/}
      {/*  <div className={'user-info-name'}>{props.author.name}</div>*/}
      {/*</div>*/}

      {/* 컴포넌트 추출을 통해서 자식 컴포넌트로 만든 UserInfo 를 호출함 */}
      <UserInfo userData={props.author} />

      <div className={'comment-text'}>{props.text}</div>
      <div className={'comment-date'}>{formatDate(props.date)}</div>
    </div>
  );
}

export default DivComponent;
