//  File: ProfileCard.jsx
//  User: it
//  Date: 2026-04-03
//  Time: 오전 11:08
//  Desc :

import Card from './Card.jsx';

function ProfileCard() {
  return (
    // 부모 컴포넌트인 ProfileCard 에서 자식 컴포넌트인 Card 를 호출
    // 자식 컴포넌트 호출 시 title, backgroundColor 속성을 추가하여 데이터 전달(Specialization)
    // 자식 컴포넌트 호출 시 표현할 UI 를 부모 컴포넌트에서 지정하여 호출 (Containment)
    <div>
      <Card title={'아이유'} backgroundColor={'#1e90ff'}>
        <p>안녕하세요 아이유입니다.</p>
        <p>리액트는 처음입니다.</p>
      </Card>
      <Card title={'아이유'} backgroundColor={'DeepPink'}>
        <p>안녕하세요 아이유입니다.</p>
        <p>리액트는 처음입니다.</p>
      </Card>
      <Card title={'아이유'}>
        <p>안녕하세요 아이유입니다.</p>
        <p>리액트는 처음입니다.</p>
      </Card>
      <Card backgroundColor={'#1e90ff'}>
        <p>안녕하세요 아이유입니다.</p>
        <p>리액트는 처음입니다.</p>
      </Card>
    </div>
  );
}

export default ProfileCard;
