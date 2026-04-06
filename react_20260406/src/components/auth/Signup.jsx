//  File: Signup.jsx
//  User: it
//  Date: 2026-04-06
//  Time: 오후 12:38
//  Desc :

import { useState } from 'react';
import { useNavigate } from 'react-router';

function Signup() {

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const navi = useNavigate();

  const changeUserId = (e) => setUserId(e.target.value);
  const changeUserPw = (e) => setUserPw(e.target.value);
  const changeUserName = (e) => setUserName(e.target.value);
  const changeUserEmail = (e) => setUserEmail(e.target.value);

  const submitForm = (e) => {
  //   axios 를 통한 서버와 통신
    e.preventDefault();
  }

  const resetForm = (e) => {
    navi(-1);
    e.preventDefault();
  }

  return (
    <div className={'container mt-5'}>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto'}>
          <div className={'border border-2 border-primary-subtle rounded-4 p-4 m-3'}>
            <form onSubmit={submitForm} onReset={resetForm}>
              <div>
                <div className={'form-floating'}>
                  <input type="text" className={'form-control'} id={'user-id'} placeholder={'사용자 ID'} value={userId} onChange={changeUserId} />
                  <label htmlFor={'user-id'}>사용자 ID</label>
                </div>
              </div>
              <div className={'mt-3'}>
                <div className={'form-floating'}>
                  <input type="text" className={'form-control'} id={'user-pw'} placeholder={'비밀번호'} value={userPw} onChange={changeUserPw} />
                  <label htmlFor="user-pw">비밀번호</label>
                </div>
              </div>
              <div className={'mt-3'}>
                <div className={'form-floating'}>
                  <input type="text" className={'form-control'} id={'user-name'} placeholder={'사용자 이름'} value={userName} onChange={changeUserName} />
                  <label htmlFor={'user-name'}>사용자 이름</label>
                </div>
              </div>
              <div className={'mt-3'}>
                <div className={'form-floating'}>
                  <input type="text" className={'form-control'} id={'user-email'} placeholder={'사용자 Email'} value={userEmail} onChange={changeUserEmail} />
                  <label htmlFor={'user-email'}>사용자 이메일</label>
                </div>
              </div>
              <div className={'mt-3 d-grid gap-2'}>
                <button type={'submit'} className={'btn btn-primary'}>회원가입</button>
                <button type={'reset'} className={'btn btn-secondary'}>취 소</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
