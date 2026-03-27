//  OriComponent.jsx

function formatDate(date) {
  return date.toLocaleString();
}

// 컴포넌트 추출을 하지 않은 원본 컴포넌트
function OriComponent(props) {
  return (
    <div className={'comment'}>
      <div className={'user-info'}>
        <img
          src={props.author.avatarUrl}
          alt={props.author.name}
          className={'avatar'}
          style={{ width: '100px', height: '100px' }}
        />
        <div className={'user-info-name'}>{props.author.name}</div>
      </div>
      <div className={'comment-text'}>{props.text}</div>
      <div className={'comment-date'}>{formatDate(props.date)}</div>
    </div>
  );
}

export default OriComponent;
