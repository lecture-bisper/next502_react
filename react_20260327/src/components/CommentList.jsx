// CommentList.jsx

import Comment from './Comment.jsx';

const comments = [
  { name: '아이유', comment: '안녕하세요, 아이유 입니다.' },
  { name: '장원영', comment: '안녕하세요 아이브 장원영입니다.' },
  { name: '윈터', comment: '안녕하세요. 애스파 윈터입니다.' },
  { name: '카즈하', comment: '안녕하세요 르세라핌 카즈하입니다.' },
];

function CommentList() {
  return (
    <div>
      {
        // map() 을 사용하여 배열에 있는 내용을 모두 출력하여 연산 후 반환값을 모아서 새로운 배열을 생성
        comments.map((item, index) => {
          // 반환값에 Comment 컴포넌트를 반환
          // Comment 컴포넌트 호출 시 name, comment 라는 이름으로 데이터를 전달
          return <Comment name={item.name} comment={item.comment} key={index} />;
        })
      }

      {/*<Comment name={comments[0].name} comment={comments[0].comment} />*/}
      {/*<Comment name={comments[1].name} comment={comments[1].comment} />*/}
      {/*<Comment name={comments[2].name} comment={comments[2].comment} />*/}
      {/*<Comment name={comments[3].name} comment={comments[3].comment} />*/}
    </div>
  );
}

export default CommentList;
