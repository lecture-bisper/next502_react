import { useState } from 'react';
import Join2Form from './Join2Form.jsx';

// 부모 컴포넌트로 데이터 전달하는 방법
// 1. 부모 컴포넌트에 자식 컴포넌트에서 전달하는 데이터를 저장할 변수를 선언 (state 로 관리되는 변수)
// 2. 자식 컴포넌트 호출 시 변수의 값을 수정할 수 있는 함수를 자식 컴포넌트에게 전달함
// 3. 자식 컴포넌트는 부모 컴포넌트로 전달할 데이터를 전달받은 함수에서 사용함
// 4. 부모 컴포넌트의 변수 수정용 함수가 자식 컴포넌트에서 대신 실행되면서 부모 컴포넌트의 데이터가 수정됨

// 부모 컴포넌트
function Join2() {

  // useState 로 상태관리 설정, 부모 컴포넌트에서는 아래의 변수를 수정하는 setState 함수를 사용하지 않음
  // setState 함수는 자식 컴포넌트에게 전달하여 자식 컴포넌트가 대신 실행하도록 함
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const submitEvent = (e) => {
    const message = `User ID : ${userId}
User Password : ${userPw}
User Name : ${userName}
User Email : ${userEmail}`;
    alert(message);
    e.preventDefault();
  }

  const resetEvent = (e) => {
    setUserId('');
    setUserPw('');
    setUserName('');
    setUserEmail('');
    e.preventDefault();
  }

  // const userIdChange = (e) => setUserId(e.target.value);
  // const userPwChange = (e) => setUserPw(e.target.value);
  // const userNameChange = (e) => setUserName(e.target.value);
  // const userEmailChange = (e) => setUserEmail(e.target.value);

  return (
    <div className={'row'}>
      <div className={'col-sm-4 mx-auto border border-2 border-into rounded-3'}>
        <form onSubmit={submitEvent} onReset={resetEvent}>
          {/* 자식 컴포넌트 호출 */}
          {/* sendData 라는 이름으로 state 값을 수정하는 setState 함수를 전달함 */}
          <Join2Form label={'User ID'} types={'text'} id={'user-id'} sendData={setUserId} />
          <Join2Form label={'User Password'} types={'password'} id={'user-pw'} sendData={setUserPw} />
          <Join2Form label={'User Name'} types={'text'} id={'user-name'} sendData={setUserName} />
          <Join2Form label={'User Email'} types={'email'} id={'user-email'} sendData={setUserEmail} />
          {/*<div className="form-floating mt-3">*/}
          {/*  <input type="text" className="form-control" id="user-id" placeholder="User ID" value={userId} onChange={userIdChange} />*/}
          {/*  <label htmlFor="user-id">User ID</label>*/}
          {/*</div>*/}
          {/*<div className="form-floating mt-3">*/}
          {/*  <input type="password" className="form-control" id="user-pw" placeholder="User Password" value={userPw} onChange={userPwChange} />*/}
          {/*  <label htmlFor="user-pw">User Password</label>*/}
          {/*</div>*/}
          {/*<div className="form-floating mt-3">*/}
          {/*  <input type="text" className="form-control" id="user-name" placeholder="User Name" value={userName} onChange={userNameChange} />*/}
          {/*  <label htmlFor="user-name">User Name</label>*/}
          {/*</div>*/}
          {/*<div className="form-floating mt-3">*/}
          {/*  <input type="email" className="form-control" id="user-email" placeholder="User Email" value={userEmail} onChange={userEmailChange} />*/}
          {/*  <label htmlFor="user-email">User Email</label>*/}
          {/*</div>*/}
          <div className={'my-3 d-grid gap-2'}>
            <button type={'submit'} className={'btn btn-outline-primary'}>
              회원 가입
            </button>
            <button type={'reset'} className={'btn btn-outline-secondary'}>
              취 소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Join2;
