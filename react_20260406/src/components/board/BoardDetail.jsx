//  File: BoardDetail.jsx
//  User: it
//  Date: 2026-04-06
//  Time: 오후 12:39
//  Desc :

import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';

function BoardDetail() {
  //  서버에서 전달받은 게시물 정보를 저장하는 변수
  const [board, setBoard] = useState({});

  //  사용자가 입력하는 데이터를 저장하는 변수
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //  rest 방식으로 전달받은 파라미터 데이터를 가져오기 위한 useParams() 훅
  const params = useParams();

  //  사용자가 데이터 입력 시 동작하는 이벤트 처리 함수
  const changeTitle = (e) => setTitle(e.target.value);
  const changeContent = (e) => setContent(e.target.value);

  //  화면 로딩 시 서버와 ajax 통신을 통하여 게시물 정보를 가져오기 위한 useEffect() 훅
  useEffect(() => {
  //   axios 를 사용하여 서버와 통신
  }, []);

  return (
    <div className={'container mt-5'}>
      <div className={'row'}>
        <div className={'col-sm-2'}>
          <div className={'form-floating'}>
            <input
              type="text"
              className={'form-control'}
              id={'board-idx'}
              placeholder={'글번호'}
              value={''}
              readOnly={true}
            />
            <label htmlFor={'board-idx'}>글번호</label>
          </div>
        </div>
        <div className={'col-sm'}>
          <div className={'form-floating'}>
            <input
              type="text"
              className={'form-control'}
              id={'title'}
              placeholder={'글제목'}
              value={''}
            />
            <label htmlFor={'title'}>글제목</label>
          </div>
        </div>
      </div>
      <div className={'row mt-3'}>
        <div className={'col-sm'}>
          <div className={'form-floating'}>
            <input
              type="text"
              className={'form-control'}
              id={'create-id'}
              placeholder={'글쓴이'}
              value={''}
              readOnly={true}
            />
            <label htmlFor={'create-id'}>글쓴이</label>
          </div>
        </div>
        <div className={'col-sm'}>
          <div className={'form-floating'}>
            <input
              type="text"
              className={'form-control'}
              id={'create-date'}
              placeholder={'등록시간'}
              value={''}
              readOnly={true}
            />
            <label htmlFor={'create-date'}>등록시간</label>
          </div>
        </div>
        <div className={'col-sm'}>
          <div className={'form-floating'}>
            <input
              type="text"
              className={'form-control'}
              id={'hit-cnt'}
              placeholder={'조회수'}
              value={''}
              readOnly={true}
            />
            <label htmlFor={'hit-cnt'}>조회수</label>
          </div>
        </div>
      </div>
      <div className={'row mt-3'}>
        <div className={'col-sm'}>
          <div className={'form-floating'}>
            <textarea
              className={'form-control'}
              id={'contents'}
              rows={10}
              placeholder={'내용'}
              value={''}
              style={{ minHeight: '200px' }}
            ></textarea>
            <label htmlFor={'contents'}>내용</label>
          </div>
        </div>
      </div>
      <div className={'row mt-3'}>
        <div className={'col-sm'}>
          <Link to={'/board'} className={'btn btn-secondary'}>목록</Link>
        </div>
        <div className={'col-sm d-flex justify-content-end'}>
          <button type={'button'} className={'btn btn-danger me-2'}  >삭제</button>
          <button type={'button'} className={'btn btn-warning'}  >수정</button>
        </div>
      </div>
    </div>
  );
}

export default BoardDetail;
