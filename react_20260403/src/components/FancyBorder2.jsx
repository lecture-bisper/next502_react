//  File: FancyBorder2.jsx
//  User: it
//  Date: 2026-04-03
//  Time: 오전 9:32
//  Desc :

//  자식 컴포넌트 UI의 일부분을 부모 컴포넌트에서 전달받아서 사용
function FancyBorder2(props) {
  return (
    <div className={`border border-2 border-${props.color} m-3 p-3`}>
      <h4 className={'mb-3'}>자식 컴포넌트 영역</h4>
      {/* 부모 컴포넌트에서 전달한 html 및 컴포넌트는 props 를 통해서 사용할 수 있음 */}
      {/* props.children 을 통해서 사용할 수 있음, children 속성은 고정되어 있음 */}
      {props.children}
    </div>
  );
}

export default FancyBorder2;
