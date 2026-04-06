//  File: Header.jsx
//  User: it
//  Date: 2026-04-06
//  Time: 오후 12:22
//  Desc :

import { Link } from 'react-router';

function Header() {
  return (
    <div>
      <nav className={'navbar navbar-expand-sm navbar-dark bg-dark'}>
        <div className={'container-fluid'}>
          <Link to={'/board'} className={'navbar-brand'}>
            Home
          </Link>
          <ul className={'navbar-nav'}>
            <li className={'nav-item'}>
              <a href="#" className={'nav-link'}>
                링크1
              </a>
            </li>
            <li className={'nav-item'}>
              <a href="#" className={'nav-link'}>
                링크2
              </a>
            </li>
            <li className={'nav-item'}>
              <a href="#" className={'nav-link'}>
                링크3
              </a>
            </li>
          </ul>
          <div className={'ms-auto'}>
            <Link to={'/auth/login'} className={'btn btn-success'}>
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
