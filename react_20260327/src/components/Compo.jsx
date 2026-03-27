// Compo.jsx

import FuncComponent from './FuncComponent.jsx';
import ClassComponent from './ClassComponent.jsx';
import Welcome from './Welcome.jsx';
import OriComponent from './OriComponent.jsx';
import DivComponent from './DivComponent.jsx';

const data = {
  name: '아이유',
  avatarUrl:
    'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg',
};

function Compo() {
  return (
    <div>
      <h3>함수 컴포넌트 사용하기</h3>
      <FuncComponent />

      <br />
      <hr />
      <br />

      <h3>클래스 컴포넌트 사용하기</h3>
      <ClassComponent />

      <br />
      <hr />
      <br />

      <div>
        <h3>컴포넌트 합성</h3>
        {/* Welcome 이라는 자식 컴포넌트를 Compo 라는 부모 컴포넌가 호출하여 하나의 큰 컴포넌트를 생성하는 것을 컴포넌트 합성이라고 함 */}
        <Welcome name={'아이유'} />
        <Welcome name={'장원영'} />
        <Welcome name={'윈터'} />
      </div>

      <br />
      <hr />
      <br />

      <div>
        <h3>컴포넌트 추출</h3>
        <h4>원본 컴포넌트</h4>
        {/* 자식 컴포넌트 호출 시 text, date, author 이라는 속성명으로 각각의 데이터를 전달 */}
        <OriComponent text={'외부이미지 사용'} date={new Date()} author={data} />

        <hr />

        <h4>추출된 컴포넌트</h4>
        {/* 자식 컴포넌트 호출 시 text, date, author 이라는 속성명으로 각각의 데이터를 전달 */}
        <DivComponent text={'컴포넌트 추출'} date={new Date()} author={data} />
      </div>
    </div>
  );
}

export default Compo;
