// Car.jsx

import Profile from './Profile.jsx';

// 자식 컴포넌트인 Car 컴포넌트
// 부모에게서 전달받은 데이터가 없음
function Car() {
  return (
    <div>
      {/* 자식 컴포넌트 Profile 호출 */}
      {/* 자식 컴포넌트 호출 시 4가지 데이터를 전달 */}
      {/* 속성명이 props 의 key 가 되고 속성값이 value 가 됨 */}
      {/* 문자열은 {} 생략 가능, 따옴표는 필수로 사용, 데이터 전달 방식을 통일하는 것이 좋음 */}
      {/* 숫자, 논리형 데이터는 {} 필수, 따옴표 사용 안함 */}
      {/* object 및 배열은 {} 필수, 따옴표 사용 안함 */}
      {/* 컴포넌트도 {} 필수, 따옴표 사용 안함 */}
      <Profile name="EV6" type={'세단'} price={4360} ele={true} />
      <Profile name={'투싼'} type="SUV" price={2805} ele={false} />
      <Profile name={'더 뉴 스타리아'} type={'MPV'} price={3259} ele={false} />
    </div>
  );
}

export default Car;
