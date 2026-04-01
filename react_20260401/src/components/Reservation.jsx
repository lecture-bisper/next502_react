//  Reservation.jsx

import { useState } from 'react';

function Reservation(){
  // useState() 로 상태 관리 설정, checkbox 용
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  // useState() 로 상태 관리 설정
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  const handleSubmit = (e) => {
    alert(`아침 식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest}`);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={'chk'} className={'form-label'}>아침 식사 여부 :
          {/* checkbox 의 checked 속성에 상태 관리 중인 변수를 연동 */}
          {/* setState에 현재 checkbox 의 checked 속성값을 매개변수로 전달하여 수정 요청 */}
          <input type={'checkbox'} className={'form-check-input ms-2'} id={'chk'} checked={haveBreakfast} onChange={(e) => setHaveBreakfast(e.target.checked)} />
        </label>
        <label htmlFor={'count'} className={'form-label ms-3'}>방문객 수 :
          <input type={'number'} className={'form-control'} id={'count'} value={numberOfGuest} onChange={(e) => setNumberOfGuest(e.target.value)} />
        </label>
        <button type={'submit'} className={'btn btn-primary ms-2'}>확인</button>
      </form>
    </div>
  );
}

export default Reservation;