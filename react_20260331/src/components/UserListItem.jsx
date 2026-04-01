//  UserListItem.jsx

import { useEffect, useState } from 'react';
import useUserStatus from './useUserStatus.jsx';

function UserListItem(props) {
  // //   커스텀 훅 미사용
  // const [isOnline, setIsOnline] = useState(null);
  //
  // // 생명주기 함수 중 componentDidMount() 의 기능 수행
  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }
  //
  //   ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
  // }, []);

  // 커스텀 훅 사용
  const isOnline = useUserStatus(props.user.id);

  return <li style={{ color: isOnline ? 'green' : 'black' }}>{props.user.name}</li>;
}

export default UserListItem;