//  UserInfo.jsx

// DivComponent의 내용 중 컴포넌트 추출이 가능한 부분을 분리하여 새로운 컴포넌트로 만듬
import Avatar from './Avatar.jsx';

function UserInfo(props) {
  return (
    <div className={'user-info'}>
      {/* 컴포넌트 추출을 통해서 재 사용이 가능한 컴포넌트 Avatar 를 생성 */}
      {/*<img*/}
      {/*  src={props.author.avatarUrl}*/}
      {/*  alt={props.author.name}*/}
      {/*  className={'avatar'}*/}
      {/*  style={{ width: '100px', height: '100px' }}*/}
      {/*/>*/}

      {/* 컴포넌트 추출을 통해서 생성한 Avatar 컴포넌트를 호출 */}
      <Avatar user={props.userData} />

      <div className={'user-info-name'}>{props.userData.name}</div>
    </div>
  );
}

export default UserInfo;
