console.log("\n ----- ES6 방식의 함수 -----\n");

// ES6 에서는 람다식(화살표 함수)을 사용하여 함수를 선언할 수 있음
// ES5의 익명함수를 변수에 저장하는 방식과 비슷

// function 키워드를 생략, 매개변수 다음에 => 기호를 사용
// => 기호 다음에 {} 를 사용하여 소스코드를 입력
// 플러터와는 다르게 여러줄을 소스코드를 입력할 수  있음

// 기본 화살표 함수 선언 방식
const add1 = (num1, num2) => {
  return num1 + num2;
}

var result = add1(10, 20);
console.log(`기본 화살표 함수 선언 방식 사용 : ${result}`);

console.log();

// 함수의 소스 코드가 1개의 라인이면 {} 생략 가능
// return 값이 있을 경우 return 키워드 생략 가능
const add2 = (num1, num2) => num1 + num2;
// 함수의 소스 코드가 1개의 라인이며, return 값이 없을 경우 {} 와 return 를 생략
const add3 = (num1, num2) => console.log(`반환값이 없을 때 : ${num1 + num2}`);

result = add2(10, 20);
console.log(`{} 를 생략한 화살표 함수 선언 방식 사용 : ${result}`);
add3(10, 20);

console.log(`화살표 함수 add1 의 타입 : ${typeof add1}`);
console.log(`화살표 함수 add2 의 타입 : ${typeof add2}`);
console.log(`화살표 함수 add3 의 타입 : ${typeof add3}`);

console.log();

// 화살표 함수의 매개변수가 1개인 경우 () 생략 가능
const add4 = (num1) => num1 * num1;
console.log(`매개변수가 1개인 화살표 함수 add4 : ${add4(10)}`);

const add5 = num1 => num1 * num1;
console.log(`매개변수가 1개로 ()를 생략한 화살표 함수 add5 : ${add5(10)}`);

console.log();

// 화살표 함수의 매개변수가 없는 경우 반드시 () 가 있어야 함
const add6 = () => { console.log('매개변수가 없는 화살표 함수')};
const add7 = () => console.log('매개변수가 없고 소스코드가 1줄인 화살표 함수');
add6();
add7();

console.log();

// 화살표 함수의 반환값이 object 타입일 경우 반드시 () 감싸야 함
// object 타입을 반환하는지 코드 블럭을 뜻하는지 구분하기 위함
const addAndMulti = (num1, num2) => ({
    add: num1 + num2,
    multi: num1 * num2
  });
console.log(addAndMulti(10, 20));

// return 키워드를 사용하여 object 타입을 반환할 경우, () 가 없음
const addAndMulti2 = (num1, num2) => {
  return {add: num1 + num2, multi: num1 * num2};
}
console.log(addAndMulti2(10, 20));

console.log();

// 함수의 반환 타입이 함수일 경우
function func1(num) {
  let value = num;

  // 반환 값이 익명함수
  return function (value) {
    return num + value;
  }
}

console.log(func1(10));
// ES5의 함수 선언방식 2번과 동일한 형태가 됨
// 변수 result 에 익명함수가 저장되어 result() 라는 함수가 선언됨
result = func1(10);
// 선언된 result() 함수를 호출
console.log(result(10));

console.log();

// 함수의 반환 타입이 함수인 함수를 화살표 함수로 표현
const func2 = num => value => num + value;
console.log(func2(10));
result = func2(10);
console.log(result(10));

// 화살표 함수 func2() 의 반환값인 익명함수를 변수에 저장하고 저장한 익명함수를 다시 실행하는 소스코드를 한번에 표현
console.log(func2(10)(10));








