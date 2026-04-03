//  File: SplitPanel.jsx
//  User: it
//  Date: 2026-04-03
//  Time: 오전 10:02
//  Desc :

//  부모 컴포넌트에서 props를 통해서 전달한 html 태그 혹은 컴포넌트를 사용할 수 있음
import Contact from './Contact.jsx';

function SplitPanel(props) {
  return <div className={'SplitPanel row'}>
    <div className={'SplitPanel-left col-sm border border-primary m-2 p-3'}>
      {/* props 를 통해서 전달받은 html 태그 및 컴포넌트를 사용하여 UI 를 구성*/}
      {props.left}
      {/*<Contact />*/}
    </div>
    <div className={'SplitPanel-right col-sm border border-success m-2 p-3'}>
      {props.right}
    </div>
  </div>;
}

export default SplitPanel;
