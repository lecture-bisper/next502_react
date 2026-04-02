function Child21(props) {
  let childValue1 = 1000;

  let parentValue21 = props.data1 + 10;
  let parentValue22 = props.data2 + 20;

  return (
    <div className={'m-3 p-3 border border-secondary bg-success-subtle'}>
      <h3>Child21</h3>
      <h4>부모 컴포넌트가 전달한 데이터1 : {parentValue21}</h4>
      <h4>부모 컴포넌트가 전달한 데이터2 : {parentValue22}</h4>
      <h4>자식 컴포넌트가 가지고 있는 데이터1 : {childValue1}</h4>
    </div>
  );
}

export default Child21;