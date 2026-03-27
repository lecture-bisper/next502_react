//  App.jsx, 주로 App.jsx 파일부터 화면 UI 를 구성함

// import './App.css'

// prettier 설정
// 프로젝트 최상위 폴더에 '.prettierrc' 파일을 생성하고 아래의 내용을 입력
// {
//   "useTabs": false,          - 탭 기호 사용 여부 (true : 탭사용, false : 탭 미사용)
//   "printWidth": 100,         - 한 라인에 사용할 글자 수 설정, 80 ~ 100 추천
//   "tabWidth": 2,             - Tab 키 사용 시 공백 기호 수 설정 (프론트엔드 분야에서 2칸을 선호함)
//   "trailingComma": "all",    - 객체 및 배열의 마지막 요소 뒤에 ' , ' 기호 자동 붙이기
//   "semi": true,              - 문장 끝에 ' ; ' 기호 자동 붙이기 (true : 자동)
//   "singleQuote": true,       - 큰 따옴표 대신 작은 따옴표 사용 여부 (true : 작은따옴표)
//   "jsxSingleQuote": false,   - JSX 문법 안에서 큰 따옴표 사용 여부
//   "arrowParens": "always"    - 화살표 함수 사용 시 매개변수가 1개일 경우에도 () 사용
// }

// App 이라는 이름의 함수 컴포넌트
import { Button } from 'react-bootstrap';
import Library from './components/Library.jsx';
import Car from './components/Car.jsx';
import Compo from './components/Compo.jsx';
import CommentList from './components/CommentList.jsx';

function App() {
  // jsx 문법으로 그려진 UI 화면
  return (
    <div className={'container mt-5'}>
      <Button variant={'primary'}>리액트 부트스트랩으로 만든 버튼</Button>
      <br />
      <br />
      <button className={'btn btn-primary'}>web 용 부트스트랩으로 만든 버튼</button>

      <br />
      <hr />
      <br />

      {/* 자식 컴포넌트 호출 */}
      <Library />

      <br />
      <hr />
      <br />

      {/* 자식 컴포넌트 호출 */}
      <Car />

      <hr />

      <Compo />

      <br />
      <hr />
      <br />

      <h3>댓글 만들기</h3>
      <CommentList />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
