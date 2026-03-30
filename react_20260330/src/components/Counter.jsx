//  Counter.jsx

function Counter() {
  // state : 자바스크립트의 object 타입의 변수, 현재 컴포넌트의 상태 정보를 저장하는 역할
  // state 가 변경 시 화면 UI 를 재렌더링함

  // 일반변수 count 를 선언
  let count = 0;

  return (
    <div className={''}>
      {/*button 이라는 일반 html 태그 */}
      {/* jsx 문법으로 만들어진 html 태그의 속성은 js의 예약어와 겹치는 속성명을 사용할 수 없기 때문에 html 태그의 속성명이 조금씩 다름 */}
      <button typeof={'button'} className={'btn btn-primary'} onClick={() => {
        count++;  // 일반 변수 count 의 값을 증가
        console.log(`count : ${count}`);  // 콘솔 화면에 증가된 count 값 출력
        // alert(`count : ${count}`); // 알림창에 증가된 count 값 출력
      }}>클릭!!</button>
      {/* UI 에서는 count 의 값이 변경되지 않음 */}
      {/* UI 를 새로 그리지 않았기 때문에 기존의 UI가 그대로 유지되고 있음 */}
      <p>총 {count}번 클릭했습니다.</p>
    </div>
  );
}

export default Counter;