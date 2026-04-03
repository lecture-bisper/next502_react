//  File: SignUpDialog.jsx
//  User: it
//  Date: 2026-04-03
//  Time: 오전 10:39
//  Desc :

import { useState } from 'react';
import Dialog3 from './Dialog3.jsx';

function SignUpDialog() {
  const [nickName, setNickName] = useState('');

  const handleNickName = (e) => setNickName(e.target.value);
  const handleSignUp = () => alert(`어서오세요, ${nickName} 님`);
  const handleCheckboxChange = () => alert('체크되었습니다.');

  return (
    <div>
      {/* 부모 컴포넌트에서 자식 컴포넌트 호출 시 containment 방식을 사용하여 html 태그를 자식 컴포넌트에 포함 시켜서 전달 후 호출함 */}
      <Dialog3 title={'화성 탐사 프로그램'} message={'닉네임을 입력하세요'} color={'primary'}>
        <input type="text" className={'form-control'} value={nickName} onChange={handleNickName} />
        <button type={'button'} className={'btn btn-primary mt-3'} onClick={handleSignUp}>가입하기</button>
      </Dialog3>

      <br/>

      <Dialog3 title={'심해 탐사 프로그램'} message={'닉테임을 입력하세요'} color={'success'}>
        <label htmlFor={'chk'} className={'form-label me-3'}>18세 이상 :
          <input type={'checkbox'} id={'chk'} className={'form-check-input ms-2'} onChange={handleCheckboxChange} />
        </label>
        <button type={'button'} className={'btn btn-primary'} onClick={handleSignUp}>가입하기</button>
      </Dialog3>
    </div>
  );
}

export default SignUpDialog;
