//  MailBox.jsx

function MailBox(props) {
  const unreadMessages = props.unreadMessages;
  const count = props.count;

  return (
    <div>
      <h1>안녕하세요</h1>
      {/* && 연산자를 사용한 inline if 문에서 단축 평가를 사용하여 조건의 결과에 따라 UI 를 구성 */}
      {unreadMessages > 0 && <h2>현재 {unreadMessages} 개의 읽지 않은 메일이 있습니다.</h2>}
      {/* && 연산자를 이용한 단축 평가 시 && 왼쪽에서 평가되는 연산식이 연산식이 아닌 Falsy 로 인정되는 리터럴 데이터일 경우 해당 리터럴 데이터가 출력됨 */}
      {count && <h3>현재 카운트 : {count}</h3>}
    </div>
  );
}

export default MailBox;