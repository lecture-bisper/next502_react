//  useUserStatus.jsx

import { useEffect, useState } from 'react';

//  커스텀 훅 사용하기
//  리액트에서 제공하는 Hook 중에서 사용자가 원하는 기능이 없을 경우 사용자가 직접 Hook 을 생성하여 사용할 수 있음

//  커스텀 훅의 이름의 'use' 로 시작해야 하고, 함수 내부에서 다른 리액트 Hook 을 호출하는 자바스크립트 함수를 커스텀 훅이라고 함
//  커스텀 훅의 이름을 'use' 로 시작하지 않으면 리액트 내부적으로 해당 함수가 훅을 실행하는지 일반 함수를 실행하는지 판단할 수 없기 때문에 커스텀 훅의 이름은 반드시 'use' 로 시작해야 함
//  여러가지 컴포넌트에서 반복적으로 사용되는 코드를 자바스크립트 함수로 묶어 놓은 것을 커스텀 훅이라함

function useUserStatus(userId) {

  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscribeUserStatus(userId, handleStatusChange);
  }, []);

  return isOnline;
}

export default useUserStatus;