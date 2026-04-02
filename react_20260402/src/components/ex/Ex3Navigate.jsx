//  File: Ex3Navigate.jsx
//  User: it
//  Date: 2026-04-02 16:20
//  Time: 오후 4:20
//  Desc :

function Ex3Navigate(props) {
  return (
    <nav className={'navbar navbar-expand-sm navbar-light bg-white fixed-top shadow-sm'}>
      <div className={'container-fluid'}>
        <a href="" className={'navbar-brand'}>
          Gourmet au Catering
        </a>
        <ul className={'navbar-nav ms-auto'}>
          <li className={'nav-item'}>
            <a href="#about" className={'nav-link'}>
              About
            </a>
          </li>
          <li className={'nav-item'}>
            <a href="#menu" className={'nav-link'}>
              Menu
            </a>
          </li>
          <li className={'nav-item'}>
            <a href="#contact" className={'nav-link'}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Ex3Navigate;
