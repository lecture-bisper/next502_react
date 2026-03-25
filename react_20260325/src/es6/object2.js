console.log('\n ----- 객체 확장 표현식 사용하기 ----- \n');

console.log('----- ES6 의 객체 표현식 ----- \n');

// 일반 변수 선언
const x = 10;
const y = 20;
// ES6 방식으로 object 타입의 변수를 선언과 동시에 데이터를 입력 시 미리 선언해 놓은 변수를 사용하고자 할 경우 key명을 생략할 수 있음
// value 로 사용되는 변수명이 key 명으로 지정되고, 변수의 값이 value 가 됨
const obj = {x, y};
console.log('원본 object 타입 : ');
console.log(obj);

console.log();

// ES6 방식으로 선언과 동시에 object 타입을 생성 시 key 명과 value 를 저장할 수 있음
// [] 를 사용하여 지정한 object 의 key 를 설정하고, : 기호 뒤에 value를 입력
const randomKeyString = 'other';
const combined = {['one' + randomKeyString]: 'some value'};
console.log('object 타입 combined : ');
console.log(combined);

console.log();

// object 타입의 변수 선언과 동시에 데이터를 입력
// object 타입의 요소 선언 시 key 명을 생락
// 입력 되는 데이터가 함수일 경우 key명을 생략하고 함수명을 key 명으로 사용함
const obj2 = {
  x,
  methodA() {
    console.log('methodA');
  },
  methodB() {
    return 0;
  }
}

console.log('원본 object 타입 obj2 : ');
console.log(obj2);
obj2.methodA();
console.log(obj2.methodB());



