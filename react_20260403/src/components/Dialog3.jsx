//  File: Dialog3.jsx
//  User: it
//  Date: 2026-04-03
//  Time: 오전 10:39
//  Desc :

import FancyBorder2 from './FancyBorder2.jsx';

function Dialog3(props) {
  return (<div>
    {/* specialization 방식을 사용하여 부모가 전달한 데이터를 각각 출력*/}
    <FancyBorder2 color={props.color}>
      <h1 className={'Dialog-title'}>{props.title}</h1>
      <p className={'Dialog-message'}>{props.message}</p>
      {/* containment 방식을 사용하여 부모가 전달한 UI 를 출력 */}
      {props.children}
    </FancyBorder2>
  </div>);
}

export default Dialog3;
