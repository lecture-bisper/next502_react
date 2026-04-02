import { useState } from 'react';

//  문제 1) 회원 가입 페이지를 작성하세요
//  id, 비밀번호, 이름, email, 휴대전화, 성별 정보를 입력받고 확인 버튼 클릭 시 console.log(), alert() 으로 결과를 출력하는 리액트 컴포넌트를 작성하세요
//  변수명 - id : userId, 비밀번호 : userPw, 이름 : userName, email : userEmail, 휴대전화 : userphone, 성별 : userGender
//  컴포넌트 명 - Join

function Join() {
  // useState() 로 상태관리 설정,
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userGender, setUserGender] = useState('');

  //  form 태그의 submit 이벤트 처리 함수
  const handleSubmit = (e) => {
    const message = `User ID : ${userId}
User PW : ${userPw}
User Name : ${userName}
User Email : ${userEmail}
User Phone : ${userPhone}
User Gender : ${userGender}`;

    console.log(message);
    alert(message);
    e.preventDefault(); // 현재 이벤트 중지
  };

  // form 태그의 reset 이벤트 처리 함수
  const handleReset = (e) => {
    // 사용자가 입력한 내용을 모두 삭제
    setUserId('');
    setUserPw('');
    setUserName('');
    setUserEmail('');
    setUserPhone('');
    setUserGender('');

    e.preventDefault();
  };

  //  사용자 입력을 받는 input 태그에 대한 입력값 변경 처리 이벤트
  const handleUserIdChange = (e) => setUserId(e.target.value);
  const handleUserPwChange = (e) => setUserPw(e.target.value);
  const handleUserNameChange = (e) => setUserName(e.target.value);
  const handleUserEmailChange = (e) => setUserEmail(e.target.value);
  const handleUserPhoneChange = (e) => setUserPhone(e.target.value);
  const handleUserGender = (e) => setUserGender(e.target.value);

  return (
    <div className={'container mt-5'}>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto'}>
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className={'mt-3'}>
              <label htmlFor="user-id" className={'form-label'}>
                ID :{' '}
              </label>
              <input
                type="text"
                className={'form-control'}
                id={'user-id'}
                placeholder={'ID를 입력하세요'}
                value={userId}
                onChange={handleUserIdChange}
              />
            </div>
            <div className={'mt-3'}>
              <label htmlFor="user-pw" className={'form-label'}>
                PW :{' '}
              </label>
              <input
                type="password"
                className={'form-control'}
                id={'user-pw'}
                placeholder={'비밀번호를 입력하세요'}
                value={userPw}
                onChange={handleUserPwChange}
              />
            </div>
            <div className={'mt-3'}>
              <label htmlFor="user-name" className={'form-label'}>
                Name :{' '}
              </label>
              <input
                type="text"
                className={'form-control'}
                id={'user-name'}
                placeholder={'사용자 이름을 입력하세요'}
                value={userName}
                onChange={handleUserNameChange}
              />
            </div>
            <div className={'mt-3'}>
              <label htmlFor="user-email" className={'form-label'}>
                Email :{' '}
              </label>
              <input
                type="email"
                className={'form-control'}
                id={'user-email'}
                placeholder={'Email 을 입력하세요'}
                value={userEmail}
                onChange={handleUserEmailChange}
              />
            </div>
            <div className={'mt-3'}>
              <label htmlFor="user-phone" className={'form-label'}>
                Phone :{' '}
              </label>
              <input
                type="text"
                className={'form-control'}
                id={'user-phone'}
                placeholder={'전화번호를 입력하세요'}
                value={userPhone}
                onChange={handleUserPhoneChange}
              />
            </div>
            <div className={'mt-3'}>
              <label htmlFor="user-gender" className={'form-label'}>
                Gender :{' '}
              </label>
              <input
                type="text"
                className={'form-control'}
                id={'user-gender'}
                placeholder={'성별을 입력하세요'}
                value={userGender}
                onChange={handleUserGender}
              />
            </div>
            <div className={'mt-3 d-grid gap-2'}>
              <button type={'submit'} className={'btn btn-primary'}>
                회원 가입
              </button>
              <button type={'reset'} className={'btn btn-secondary'}>
                취소
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Join;