
const name2 = '장원영';
let email2 = 'jang10@bitc.ac.kr';

function sum2(num1, num2) {
  console.log(`두 수의 덧셈은 ${num1 + num2}`);
}

// person1.mjs 에서 제공하는 함수명과 동일한 이름의 함수가 존재함
const sub = (num1, num2) => {
  console.log('person2 에서 제공하는 함수');
  console.log(`두 수의 뺄셈은 ${num1 - num2}`);
  return num1 - num2;
}

const multi2 = num1 => num1 * num1;

class Circle2 {
  constructor(radius) {
    this.radius = radius;
  }

  area = num1 => this.radius * this.radius * num1;
}

export { name2, email2, sum2, sub, Circle2 };

// export default 로 설정, {} 없이 변수, 함수, 클래스명을 입력
export default multi2;




