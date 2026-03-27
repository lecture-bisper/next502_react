// Avatar.jsx

//  컴포넌트 추출을 통해서 새로 생성된 컴포넌트
//  부모 컴포넌트에서 user 라는 이름을 데이터를 전달
function Avatar(props) {
  return (
    <img
      src={props.user.avatarUrl}
      alt={props.user.name}
      className={'avatar'}
      style={{ width: '100px', height: '100px' }}
    />
  );
}

export default Avatar;
