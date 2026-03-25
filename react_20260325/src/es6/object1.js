
console.log('\n ----- 객체 확장 표현식 사용하기 ----- \n');

console.log('----- ES5 의 객체 표현식 ----- \n');

const x = 10; // 변수 선언
const y = 20;
// object 타입 선언 시 미리 선언한 변수를 사용하여 key 명과 value 의 변수명을 동일하게 맞춤
const obj = {x: x, y: y};
console.log('원본 object 타입 : ');
console.log(obj);

console.log();

const randomKeyString = 'other';
const combined = {}; // 빈 object 타입을 선언
console.log('원본 object 타입 combined : ');
console.log(combined);

// object 타입의 상수 combined 에 요소 추가
combined['one' + randomKeyString] = 'some value';
console.log('데이터가 추가된 object 타입 combined : ');
console.log(combined);

console.log();

// 자바스크립트의 object 타입은 모든 데이터를 다 저장할 수 있으므로 함수도 key 에 대한 value 로 저장할 수 있음
const obj2 = {
  // x 라는 key 명에 미리 선언한 변수 x 를 value 로 설정
  x: x,
  // methodA 라는 key 명에 이름이 없는 익명함수를 value 로 설정
  methodA: function() {
    console.log('methodA');
  },
  methodB: function() {
    return 0;
  }
}

console.log('원본 object 타입 obj2 : ');
console.log(obj2);
obj2.methodA();
console.log(obj2.methodB());







