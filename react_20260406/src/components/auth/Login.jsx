//  File: Login.jsx
//  User: it
//  Date: 2026-04-06
//  Time: 오후 12:38
//  Desc :

import { Link } from 'react-router';
import { useState } from 'react';

function Login() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const changeUserId = (e) => setUserId(e.target.value);
  const changeUserPw = (e) => setUserPw(e.target.value);

  const submitForm = (e) => {
    //  axios 로 서버와 통신
    e.preventDefault();
  }

  return (
    <div className={'container mt-5'}>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto'}>
          <div className={'border border-2 border-primary-subtle rounded-4 p-4 m-3'}>
            <form onSubmit={submitForm}>
              <div>
                <div className={'form-floating'}>
                  <input
                    type="text"
                    className={'form-control'}
                    id={'user-id'}
                    placeholder={'사용자 ID'}
                    value={userId}
                    onChange={changeUserId}
                  />
                  <label htmlFor={'user-id'}>사용자 ID</label>
                </div>
              </div>
              <div className={'mt-3'}>
                <div className={'form-floating'}>
                  <input
                    type="password"
                    className={'form-control'}
                    id={'user-pw'}
                    placeholder={'비밀번호'}
                    value={userPw}
                    onChange={changeUserPw}
                  />
                  <label htmlFor={'user-pw'}>비밀번호</label>
                </div>
              </div>
              <div className={'mt-3'}>
                <div className={'d-grid gap-1'}>
                  <button type={'submit'} className={'btn btn-outline-success'}>
                    로그인
                  </button>
                  <div className={'d-flex justify-content-end'}>
                    <Link to={'/auth/signup'} className={'btn btn-link'}>
                      회원가입
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
