console.log('\n ----- ES5 방식의 함수 사용 -----\n');

// ES5 에서 함수 선언 방식
// 1. function 키워드와 함수명, 매개변수를 선언하고 코드 블럭 안에 소스코드를 입력하는 방식
// 2. 함수명 없이 function 키워드와 매개변수를 사용하는 익명 함수를 선언하고, 변수에 저장하여 사용하는 방식

// 1번 방식
function add1(num1, num2) {
  return num1 + num2;
}

// 2번 방식
var add2 = function(num1, num2) {
  return num1 + num2;
}

console.log(`함수 add1() 호출 : ${add1(10, 20)}`);
console.log(`함수 add2() 호출 : ${add2(10, 20)}`);

console.log(`함수 add1() 의 타입 : ${typeof add1}`);
console.log(`함수 add2() 의 타입 : ${typeof add2}`);









