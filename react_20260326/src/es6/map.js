console.log('\n----- map() 함수 사용 -----\n');

// map() : ES6에서 추가된 배열 관련 함수
// forEach() 와 동일한 기능과 사용방법을 가지고 있음
// foreach() 는 반환값이 없지만, map() 은 반환값이 존재함
// map() 함수를 통해서 실행된 결과를 모아서 새로운 배열로 출력
// map() 함수의 매개변수로 콜백함수를 사용함

// 사용법 :
// let 변수명 = 배열명.map(function(currentValue, index, array) {
//    반복 실행할 소스코드 ... ;
//    return 반환할 값;
// });

//  currentValue : 필수 입력, 지정한 배열에서 추출한 요소의 값
//  index : 옵션, 지정한 배열에서 추출한 요소의 index 번호
//  array : 옵션, 지정한 배열, 원본 배열에 접근할 수 있음

const numbers = [10, 20, 30, 40, 50];

console.log('\n----- forEach() 로 배열 내용 출력 -----\n');

numbers.forEach(function(item) {
  console.log(`forEach() 로 출력한 현재 item : ${item}`);
});

console.log('\n----- map() 로 배열 내용 출력 -----\n');

numbers.map(function(item) {
  console.log(`map() 으로 출력한 현재 item : ${item}`);
});

console.log('\n----- forEach() 와 map() 의 차이점 -----\n');

let newArray = [];

newArray = numbers.forEach(function(item) {
  console.log(`forEach() 로 출력한 현재 item : ${item}`);
  return item * 2;
});

// forEach() 는 반환 타입이 없으므로 출력되는 데이터가 없음
console.log('forEach() 에서 반환한 값 : ');
console.log(newArray);

console.log();

// 반환하는 데이터를 모아서 마지막에 배열로 출력
newArray = numbers.map(function(item) {
  console.log(`map() 으로 출력한 현재 item : ${item}`);
  return item * 2;
});

// map() 배열을 반환하므로 출력되는 내용이 배열임
console.log('map() 에서 반환한 값 : ');
console.log(newArray);

console.log('\n----- 화살표 함수를 매개변수로 사용한 map() -----\n');

newArray = numbers.map((item) => {
  console.log(`map() 으로 출력한 현재 item : ${item}`);
  return item * 2;
});

console.log('map() 에서 반환한 값 : ');
console.log(newArray);






