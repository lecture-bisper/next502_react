
console.log('\n ----- forEach 사용하기 -----\n');

// forEach() : ES6에서 배열 관련 함수로 새롭게 추가된 함수
// 지정한 배열의 첫번째 요소에서 마지막 요소까지 차례대로 반복 실행하는 함수
// 매개변수로 콜백함수를 받아서 사용
// 자바의 향상된 for 문과 비슷한 역할을 함

// 사용법 :
//  배열명.forEach(function(currentValue, index, array) {
//    반복 실행할 소스코드 ... ;
//  });

// currentValue (필수) : 지정한 배열에서 추출한 요소의 값
// index (옵션) : 지정한 배열에서 추출한 요소의 index 번호
// array (옵션) : 지정한 배열, 원본 배열에 접근할 수 있음

const numbers = [10, 20, 30, 40, 50];
console.log('원본 배열 numbers : ');
console.log(numbers);

console.log('\n ----- ES5에서 배열의 내용을 for 문으로 출력 -----\n');

for (let i = 0; i < numbers.length; i++) {
  console.log(`배열 numbers의 ${i} index 의 값 : ${numbers[i]}`);
}

console.log('\n ----- ES5에서 배열의 내용을 for ~ in 문으로 출력 -----\n');

for (let item in numbers) {
  console.log(`배열 numbers의 ${item} 의 값 : ${numbers[item]}`);
}

console.log('\n ----- ES5에서 배열의 내용을 for ~ of 문으로 출력 -----\n');

for (let item of numbers) {
  console.log(`배열 numbers에서 추출한 요소 item 의 값 : ${item}`);
}

console.log('\n ----- ES6의 forEach() 로 배열의 내용 출력 -----\n');

numbers.forEach(function(item) {
  console.log(`배열 numbers에서 추출한 요소 item : ${item}`);
});

console.log();

numbers.forEach(function(item, index) {
  console.log(`현재값 : ${item}, index 번호 : ${index}`);
});

console.log();
console.log('원본 배열 numbers : ');
console.log(numbers);
console.log();

numbers.forEach(function(item, index, array) {
  console.log(`index : ${index}, 현재값 : ${item}`);
  console.log('배열(array) 내용 : ');
  console.log(array);
  console.log('--------------------------');
});

console.log();

numbers.forEach((item) => {
  console.log(`람다함수 사용 시 현재 값 : ${item}`);
});

numbers.forEach((item) => console.log(`람다 함수 2번째 방식 : ${item}`));






