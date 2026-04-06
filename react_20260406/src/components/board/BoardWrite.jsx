//  File: BoardWrite.jsx
//  User: it
//  Date: 2026-04-06
//  Time: 오후 12:39
//  Desc :

import { Link } from 'react-router';
import { useState } from 'react';

function BoardWrite() {
  const [title, setTitle] = useState('');
  const [createId, setCreateId] = useState('');
  const [contents, setContents] = useState('');

  const changeTitle = (e) => setTitle(e.target.value);
  const changeCreateId = (e) => setCreateId(e.target.value);
  const changeContents = (e) => setContents(e.target.value);

  const eventSubmit = (e) => {
    // axios 를 사용하여 서버와 통신
    e.preventDefault();
  }

  return (
    <div className={'container mt-5'}>
      <div className={'row'}>
        <div className={'col-sm-6 mx-auto'}>
          <form onSubmit={eventSubmit}>
            <div className={'mt-3'}>
              <label htmlFor="title" className={'title'}>제목 : </label>
              <input type="text" className={'form-control'} id={'title'} value={title} onChange={changeTitle} placeholder={'제목을 입력하세요'}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor="user-id" className={'user-id'}>사용자 ID : </label>
              <input type="text" className={'form-control'} id={'user-id'} value={createId} onChange={changeCreateId} placeholder={'사용자 ID 를 입력하세요'}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor="contents" className={'form-label'}>내용 : </label>
              <textarea className={'form-control'} id={'contents'} rows={5} value={contents} onChange={changeContents} placeholder={'내용을 입력하세요'}></textarea>
            </div>
            <div className={'mt-3 d-flex justify-content-end'}>
              <button type={'submit'} className={'btn btn-primary me-2'}>등록</button>
              <Link to={'/board'} className={'btn btn-secondary'}>취소</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BoardWrite;
