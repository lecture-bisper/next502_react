import Child21 from './Child21.jsx';
import { useState } from 'react';
import Child22 from './Child22.jsx';

function Parent2() {

  let parentValue1 = 100;
  const [parentValue2, setParentValue2] = useState(0);

  const btn1Click = () => {
    parentValue1++;
    console.log(parentValue1);
  }

  const btn2Click = () => setParentValue2(parentValue2 + 1);

  return (
    <div className={'m-3 p-3 border'}>
      <h3>Parent2</h3>
      <button type={'button'} className={'btn btn-primary me-2'} onClick={btn1Click}>
        데이터1 증가
      </button>
      <button type={'button'} className={'btn btn-success'} onClick={btn2Click}>
        데이터2 증가
      </button>
      <br />
      <h4>부모 컴포넌트가 가지고 있는 데이터1 : {parentValue1}</h4>
      <h4>부모 컴포넌트가 가지고 있는 데이터2 : {parentValue2}</h4>
      <br />

      <div className={'row'}>
        <div className={'col'}>
          <Child21 data1={parentValue1} data2={parentValue2} />
        </div>
        <div className={'col'}>
          <Child22 data1={parentValue1} data2={parentValue2} />
        </div>
      </div>
    </div>
  );
}

export default Parent2;