//  File: Dialog2.jsx
//  User: it
//  Date: 2026-04-03
//  Time: 오전 10:25
//  Desc :

import FancyBorder2 from './FancyBorder2.jsx';

//  범용적으로 사용할 수 있는 컴포넌트
function Dialog2(props) {
  return (<div>
    {/* Containment 방식을 사용하여 Specialization 을 구현할 수 있음 */}
    <FancyBorder2 color={props.color}>
      <h1 className={'Dialog-title'}>{props.title}</h1>
      <p className={'Dialog-message'}>{props.message}</p>
    </FancyBorder2>
  </div>);
}

export default Dialog2;
