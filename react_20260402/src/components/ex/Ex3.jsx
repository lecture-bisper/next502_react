// Ex3.jsx

// 문제 3) https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm 를 클론 코딩하세요
// 반복 되는 부분을 자식 컴포넌트로 따로 분리하여 호출하는 방식으로 클론 코딩
// about, contact, contactFrom, footer, menu, menuitem, navigate

import Ex3Navigate from './Ex3Navigate.jsx';
import Ex3Footer from './Ex3Footer.jsx';
import Ex3About from './Ex3About.jsx';
import Ex3Menu from './Ex3Menu.jsx';
import Ex3Contact from './Ex3Contact.jsx';

function Ex3() {
  return (
    <div>
      <Ex3Navigate />
      <header className={'d-flex justify-content-center'}>
        <div className={'position-relative'}>
          <img
            src={'https://www.w3schools.com/w3images/hamburger.jpg'}
            alt="햄버거"
            className={'mw-100'}
          />
          <div className={'position-absolute'} style={{ top: '89%', left: '2%' }}>
            <h1>Le Catering</h1>
          </div>
        </div>
      </header>
      <main className={'container'}>
        <Ex3About />
        <hr />
        <Ex3Menu />
        <hr />
        <Ex3Contact />
      </main>
      <Ex3Footer />
    </div>
  );
}
export default Ex3;
