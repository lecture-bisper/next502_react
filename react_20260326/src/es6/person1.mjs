// 변수 export

// 각각의 변수 export 키워드 사용
export const name = '카리나';
export const age = 25;

// 변수 선언
let email = 'karina@bitc.ac.kr';
let tel = '01012345678';
let addr = '부산광역시 부산진구 전포동';

// 선언된 변수를 한번에 export 로 등록
// as 키워드를 사용하여 export 로 등록 시 별칭을 사용함
export { email, tel as phone, addr };


// 함수에 export 를 직접 사용
export function sum(num1, num2) {
  console.log(`두 수의 덧셈은 ${num1 + num2} 입니다.`);
}

// 함수 선언
function sub(num1, num2) {
  console.log(`두 수의 뺄셈은 ${num1 - num2} 입니다.`);
}

// 익명함수를 변수에 저장, export 를 직접 입력하여 사용
export const multi = function (num1) {
  return num1 * num1;
}

// 화살표 함수(람다식)를 사용하여 함수 선언
const divide = (num1, num2) => num1 / num2;

// 여러개의 함수를 한번에 export
// as 를 사용하여 함수의 별칭을 설정
export { sub, divide as div };


// 클래스 선언
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area(num1) {
    return this.radius * this.radius * num1;
  }
}

// 클래스를 export 함
export { Circle };



