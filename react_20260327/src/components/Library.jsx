//  Library.jsx

import Book from './Book.jsx';

function Library(props) {
  return (
    <div>
      {/* Library 컴포넌트에서 자식 컴포넌트인 Book 컴포넌트를 여러개 호출 */}
      {/* Book 컴포넌트 호출 시 데이터를 Book 으로 전달함 */}
      <Book name={'처음 만난 파이썬'} numOfPage={300} />
      <Book name={'처음 만난 리액트'} numOfPage={400} />
      <Book name={'처음 만난 스프링'} numOfPage={500} />
    </div>
  );
}

export default Library;
