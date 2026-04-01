import { useState } from 'react';

function FruitSelect() {
  //  useState() 로 상태 관리 설정, multiple 미사용 시
  //  select 의 내용을 변경하지 않고 바로 sumit 이벤트를 통해서 내용을 출력 시 useState() 의 초기값이 출력
  const [value, setValue] = useState('apple');

  //  select 의 onChange 이벤트 처리 함수, multiple 미사용 시
  const handleChange = (e) => setValue(e.target.value);

  // select 에 multiple 옵션 사용 시
  const selectList = ['apple', 'peach', 'grape', 'banana', 'watermelon'];
  // useState로 상태 관리 설정, mutiple 사용 시, 초기값이 배열이어야 함
  const [multiValue, setMultiValue] = useState([]);

  // multiple 사용 시 select 의 이벤트 처리 함수
  const handleChangeMultiple = (e) => {
    // e.target.selectedOptions 를 사용하여 select 에서 선택된 요소를 모두 가져옴
    // ... (전개연산자) 를 사용하여 select 에서 선택된 모든 요소를 출력
    // 배열 options 에 저장된 요소는 <option> 태그
    const options = [...e.target.selectedOptions];
    // 배열 options 를 map() 를 통해서 <option> 태그의 value 속성값만 하나씩 출력
    const values = options.map((item) => item.value);
    setMultiValue(values);
  }

  const handleSubmit = (e) => {
    alert(`선택한 과일 : ${value}\nmultiple 사용 시 선택한 과일 : ${multiValue.toString()}`);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={'mt-3'}>
          <label htmlFor="fruitSelect" className={'form-label'}>
            과일을 선택하세요 :{' '}
          </label>
          {/* value 속성에 useState() 상태관리하는 변수를 연동 */}
          <select
            id={'fruitSelect'}
            className={'form-control'}
            value={value}
            onChange={handleChange}
          >
            <option value={'apple'} selected={true}>사과</option>
            <option value={'peach'}>복숭아</option>
            <option value={'grape'}>포도</option>
            <option value={'banana'}>바나나</option>
            <option value={'watermelon'}>수박</option>
          </select>
        </div>
        <div className={'mt-3'}>
          <label htmlFor="multiSelect" className={'form-label'}>과일을 여러개 선택하세요 : </label>
          <select id="multiSelect" className={'form-control'} multiple={true} value={multiValue} onChange={handleChangeMultiple}>
            {/* 배열함수 map() 을 이용하여 배열의 요소를 모두 꺼내어 select 의 자식 태그로 만듬 */}
            {selectList.map((item, index) => {
              return <option value={item} key={index}>{item}</option>
            })}
          </select>
        </div>

        <div className={'mt-3 d-grid gap-2'}>
          <button type={'submit'} className={'btn btn-primary'}>확 인</button>
        </div>
      </form>
    </div>
  );
}

export default FruitSelect;
