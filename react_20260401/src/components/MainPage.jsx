//  MainPage.jsx

import { useState } from 'react';
import WarningBanner from './WarningBanner.jsx';

function MainPage() {
  //  state 로 상태 관리 설정
  const [showWarning, setShowWarning] = useState(false);

  //  이벤트 처리 함수 선언
  const handleToggleClick = () => setShowWarning((prev) => !prev);

  return (
    <div>
      {/* 자식 컴포넌트 호출, showWarning 의 값을 warning 라는 이름으로 데이터를 전달 */}
      <WarningBanner warning={showWarning} />
      <button type={'button'} className={'btn btn-primary'} onClick={handleToggleClick}>
        {/* 현재 showWarning 의 값에 따라 텍스트 변경 */}
        {showWarning ? '감추기' : '보이기'}
      </button>
    </div>
  );
}

export default MainPage;