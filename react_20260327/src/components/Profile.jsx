// Profile.jsx

// 자식 컴포넌트 Profile
// 부모 컴포넌트 Car 에서 전달받은 데이터가 props 에 저장되어 있음
// 전달받은 object 타입의 데이터인 props 이름은 'props' 로 고정되어 있음
const Profile = (props) => {
  // JSX 문법이 적용되지 않는 자바스크립트의 일반 함수 코드 블럭이기 때문에 if 문을 사용할 수 있음
  let item = props.ele;

  if (item == true) {
    console.log(`${props.name}은 ele 값이 true 입니다.`);
  } else {
    console.log(`${props.name}은 ele 값이 false 입니다.`);
  }

  // return 부분이 JSX 문법이 적용되는 영역
  return (
    <div className={'p-3 border-bottom'}>
      {/* 부모에게서 전달받은 데이터 props 에서 key를 통하여 value 를 출력*/}
      <p>이름 : {props.name}</p>
      <p>차종 : {props.type}</p>
      <p>가격 : {props.price}</p>
      {/* 삼항연산자로 조건에 따라 출력되는 형태를 변경 */}
      {/* JSX 문법에서는 자바스크립트의 if 문을 사용할 수 없음 */}
      <p>전기차 : {props.ele ? '전기차' : '내연기관차'}</p>

      {/* 오류 발생, JSX 문법 안에서는 if 문 사용 불가 */}
      {/*<p>{if (props.ele) {*/}
      {/*  console.log('ele 값이 true 입니다.');*/}
      {/*}*/}
      {/*else {*/}
      {/*  console.log('ele 값이 false 입니다.');*/}
      {/*}}</p>*/}
    </div>
  );
};

export default Profile;
