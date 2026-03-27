//  Book.jsx

// 자식 컴포넌트 Book
function Book(props) {
  // 화면에 출력될 UI
  return (
    <div>
      {/* 부모컴포넌트가 전달한 데이터를 화면에 출력 */}
      <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
      <h1>{`이 책은 총 ${props.numOfPage} 페이지로 이루어져 있습니다.`}</h1>
    </div>
  );
}

export default Book;
