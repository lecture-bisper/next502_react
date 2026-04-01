import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

function RequestForm() {
  // useState()로 상태관리 설정, textarea 의 value 속성 값에 사용되는 변수
  const [textValue, setTextValue] = useState('');

  //  textarea 의 value 속성값이 변경 시 동작하는 이벤트 처리 함수
  const handleChange = (e) => setTextValue(e.target.value);

  //  form 태그의 submit 이벤트 처리 함수
  const handleSubmit = (e) => {
    alert(`입력한 요청사항 : ${textValue}`); // 현재까지 textarea 에 입력된 내용 출력
    e.preventDefault();
  }

  //  form 태그의 reset 이벤트 처리 함수
  const handleReset = (e) => {
    setTextValue(''); // textarea 에 입력된 모든 내용을 제거
    e.preventDefault();
  }

  return (
    <div>
      <Row>
        <Col sm={6} className={'mx-auto'}>
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className={'mt-3'}>
              <label htmlFor={'comment'} className={'form-label'}>요청사항 : </label>
              <textarea name="comment" id={'comment'} className={'form-control'} rows="5" placeholder={'요청사항을 입력하세요'} value={textValue} onChange={handleChange}></textarea>
            </div>
            <div className={'mt-3 d-grid gap-2'}>
              <Button type={'submit'} variant={'primary'}>확인</Button>
              <Button type={'reset'} variant={'secondary'}>취소</Button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default RequestForm;