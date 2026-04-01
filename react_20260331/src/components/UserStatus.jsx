//  UserStatus.jsx

import { useEffect, useState } from 'react';
import useUserStatus from './useUserStatus.jsx';

function UserStatus(props) {

// //   커스텀 훅 미사용
//   const [isOnline, setIsOnline] = useState(null);
//
//   // 생명주기 함수 중 componentDidMount() 의 기능 수행
//   useEffect(() => {
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }
//
//     // 지정한 사용자가 서버에 접속중인지 아닌지 확인하는 로직
//     ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
//   }, []);

  // 커스텀 훅 사용
  const isOnline = useUserStatus(props.user.id);

  if (isOnline === null) {
    return '대기 중 ...';
  }

  return isOnline ? '온라인' : '오프라인';
}

export default UserStatus;