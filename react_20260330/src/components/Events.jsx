//  Events.jsx

function Events() {
  // 화살표 함수로 이벤트 처리 함수 선언
  const clickEvent1 = () => {
    alert('이벤트 처리함수를 미리 생성하고, html 태그의 이벤트 속성에 함수명만 입력하여 처리');
  };

  // 화살표 함수로 이벤트 처리 함수 선언, 매개변수로 이벤트 객체를 받아옴
  const clickEvent2 = (e) => {
    alert('이벤트 처리함수를 미리 생성하고, html 태그의 이벤트 속성에 함수명만 입력하여 처리');
    alert(`이벤트가 발생한 태그 : ${e.target}, id : ${e.target.id}`);
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
  };

  return (
    <div>
      <button
        type={'button'}
        className={'btn btn-primary me-2'}
        onClick={function () {
          alert('콜백함수를 직접 선언하여 이벤트 처리');
        }}
      >
        클릭
      </button>
      <button
        type={'button'}
        className={'btn btn-primary me-2'}
        onClick={() => alert('콜백함수로 화살표 함수를 사용하여 이벤트 처리')}
      >
        클릭
      </button>
      {/*미리선언한 이벤트 처리 함수를 함수명만 등록*/}
      <button type={'button'} className={'btn btn-success me-2'} onClick={clickEvent1}>
        클릭
      </button>
      {/*미리선언한 이벤트 처리 함수를 함수명만 등록, 매개변수로 이벤트 객체 사용*/}
      <button type={'button'} className={'btn btn-success me-2'} onClick={clickEvent2}>
        클릭
      </button>
      <button
        type={'button'}
        className={'btn btn-info me-2'}
        id={'btn-5'}
        onClick={(e) => {
          alert('클릭 이벤트 발생');
          console.log(e);
          console.log(e.target);
          console.log(e.target.id);
        }}
      >
        이벤트 객체 e 사용하기 클릭
      </button>
      {/* 미리 선언한 이벤트 처리 함수를 여러개의 html 태그에서 공통으로 사용할 수 있음 */}
      <button type={'button'} className={'btn btn-info'} id={'btn-6'} onClick={clickEvent2}>
        클릭
      </button>
    </div>
  );
}

export default Events;











