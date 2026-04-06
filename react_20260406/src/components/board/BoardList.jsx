//  File: BoardList.jsx
//  User: it
//  Date: 2026-04-06
//  Time: 오후 12:39
//  Desc :

//  임시 더미 데이터
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';

const tempBoardList = [
  {
    boardIdx: 7,
    title: '테스트 제목 7',
    createId: 'test2',
    createDate: '2026-04-06',
    updateId: null,
    updateDate: null,
    hitCnt: 1,
  },
  {
    boardIdx: 6,
    title: '테스트 제목 6',
    createId: 'test1',
    createDate: '2026-04-06',
    updateId: null,
    updateDate: null,
    hitCnt: 3,
  },
  {
    boardIdx: 5,
    title: '테스트 제목 5',
    createId: 'test4',
    createDate: '2026-04-05',
    updateId: 'test5',
    updateDate: '2026-04-06',
    hitCnt: 8,
  },
  {
    boardIdx: 4,
    title: '테스트 제목 4',
    createId: 'test4',
    createDate: '2026-04-04',
    updateId: null,
    updateDate: null,
    hitCnt: 20,
  },
  {
    boardIdx: 3,
    title: '테스트 제목 3',
    createId: 'test3',
    createDate: '2026-04-02',
    updateId: 'test3',
    updateDate: '2026-04-02',
    hitCnt: 4,
  },
  {
    boardIdx: 2,
    title: '테스트 제목 2',
    createId: 'test2',
    createDate: '2026-04-01',
    updateId: null,
    updateDate: null,
    hitCnt: 10,
  },
  {
    boardIdx: 1,
    title: '테스트 제목 1',
    createId: 'test1',
    createDate: '2026-04-01',
    updateId: null,
    updateDate: null,
    hitCnt: 14,
  },
];

function BoardList() {
  const [boardList, setBoardList] = useState([]);
  const navi = useNavigate();

  // componentDidMount() 기능을 하는 useEffect() 훅
  useEffect(() => {
    // axios 라이브러리를 사용하여 비동기로 서버에서 게시물 목록 정보를 가져옴
    setBoardList(tempBoardList);
  }, []);

  // 게시물 클릭 시 페이지 이동 처리 이벤트
  const clickPost = (boardIdx, e) => {
    navi(`/board/${boardIdx}`);
    e.preventDefault();
  }

  return (
    <div className={'container mt-5'}>
      <div className={'row'}>
        <div className={'col-sm'}>
          <table className={'table table-striped table-hover text-center'}>
            <colgroup>
              <col width={'5%'} />
              <col width={'60%'} />
              <col width={'10%'} />
              <col width={'20%'} />
              <col width={'5%'} />
            </colgroup>
            <thead>
              <tr>
                <th>글번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>등록시간</th>
                <th>추천수</th>
              </tr>
            </thead>
            <tbody>
              {
                boardList.map((item) => {
                  return (
                    <tr key={item.boardIdx}>
                      <td>{item.boardIdx}</td>
                      <td className={'text-start'} onClick={(e) => {
                        clickPost(item.boardIdx, e);
                      }}>{item.title}</td>
                      <td>{item.createId}</td>
                      <td>{item.createDate}</td>
                      <td>{item.hitCnt}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
          <div className={'mt-3 d-flex justify-content-end'}>
            <Link to={'/board/boardWrite'} className={'btn btn-primary'}>글쓰기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardList;











