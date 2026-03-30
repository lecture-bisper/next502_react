//  NotificationList.jsx

import React from 'react';
import Notification from './Notification';

//  화면에 출력할 데이터, 전역 변수
const reservedNotifications = [
  { message: '안녕하세요 메시지 테스트 입니다.', key: 1 },
  { message: '두번째 메시지 입니다.', key: 2 },
  { message: '세번째 메시지 입니다.', key: 3 },
  { message: '네번째 메시지 입니다.', key: 4 },
  { message: '다섯번째 메시지 입니다.', key: 5 },
  { message: '여섯번째 메시지 입니다.', key: 6 },
];

// 자바스크립트 타이머 객체를 저장하기 위한 변수, 타이머를 정지하려면 타이머 객체 값을 알아야 함
// setTimeout() 은 1회용으로 타이머 객체가 필요없음
// setInterval() 은 타이머 객체로 정지를 시키기 전까지 반복해서 계속 실행
let timer;

// 클래스 컴포넌트 선언
class NotificationList extends React.Component {
  // 생성자
  constructor(props) {
    super(props);

    // 클래스 컴포넌트의 state 객체 선언
    // key 명이 notifications, value 가 빈 배열
    // 클래스 컴포넌트가 notifications 라는 이름의 빈 배열을 state 로 관리함
    this.state = {
      notifications: [],
    };
  }

  // 생성자 호출 후 UI 를 그리는 render() 함수가 호출
  // render() 이후에 componentDidMount() 가 호출됨
  render() {
    return (
      <div>
        {/* JSX 문법 안에서 {} 사용 시 JS 코드를 입력 */}
        {
          // map() : 배열 관련 함수, 배열의 모든 요소를 하나씩 꺼내어 연산 후 결과를 배열로 출력
          // this.state.notifications 는 클래스 컴포넌트가 state 로 관리 중인 배열, 처음에는 빈 배열
          // 빈 배열이면 map() 을 실행하지 않음

          // setState() 를 통해서 다시 호출된 render() 가 state로 관리되고 있는 배열 notifications 의 크기만큼 반복 실행
          this.state.notifications.map((item) => {
            // 자식 컴포넌트 Notification 를 호출 시 데이터를 함께 전달
            return <Notification message={item.message} key={item.key} />;
          })
        }
      </div>
    );
  }

  // 현재 컴포넌트의 UI 구성하는 render() 함수가 동작한 후 자동 호출되는 함수
  componentDidMount() {
    // 객체 분할 할당 방식을 사용하여 object 타입의 요소를 변수에 저장
    // state로 관리되고 있는 객체 notifications 를 객체 분할 할당을 통해서 componentDidMount 함수의 지역 변수 notifications 에 대입함
    const { notifications } = this.state; // 지역 변수인 notifications 임

    // setInterval() 을 사용하여 2초에 한번씩 반복 실행
    timer = setInterval(() => {
      // 지역 변수 notifications의 크기와 전역 변수 reservedNotifications의 크기를 비교
      // 지역 변수 notifications의 크기가 작으면 if 문 실행
      if (notifications.length < reservedNotifications.length) {
        // 지역 변수 notifications의 크기를 변수 index에 저장
        const index = notifications.length;
        // 지역 변수 notifications의 끝에 전역 변수 reservedNotifications의 index 번째 값을 저장
        notifications.push(reservedNotifications[index]);
        // setState() 를 이용하여 state 로 관리되고 있는 notifications 에 지역 변수 notifications 를 저장
        // setState() 를 사용했으므로 render() 가 다시 호출됨
        this.setState({ notifications: notifications });
      } else {
        clearInterval(timer);
      }
    }, 2000);
  }
}

export default NotificationList;
