//  File: Card.jsx
//  User: it
//  Date: 2026-04-03
//  Time: 오전 11:08
//  Desc :

// function Card(props) {
  // 부모 컴포넌트에서 전달받은 데이터를 객체 분할 할당 방식으로 변수에 저장
  // children 은 props 에 기본적으로 존재함
  // Containment 방식을 통해서 부모가 전달한 UI 가 children 에 저장되어 있음
  // const {title, backgroundColor, children} = props;

function Card({ title, backgroundColor, children }) {
  const myStyles = {
    cardStyle: {
      margin: 8,
      padding: 8,
      borderRadius: 8,
      backgroundColor: backgroundColor || 'white',
    },
  };

  return (
    <div
      style={myStyles.cardStyle}
      // style={{
      //   margin: 8,
      //   padding: 8,
      //   borderRadius: 8,
      //   backgroundColor: backgroundColor || 'white',
      // }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;
