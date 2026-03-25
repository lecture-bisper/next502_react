
console.log('\n----- ES6의 변수 선언 키워드 -----\n');

// var : 자바스크립트의 기본 변수 선언 키워드, 변수가 메모리 상에 살아있는 범위가 함수를 기준으로 함, 동일한 이름으로 변수를 재 선언한 하는 것이 가능
// let : ES6 에서 추가된 변수 선언 키워드, 변수가 메모리 상에 살아있는 범위가 코드 블럭을 기준으로 함, 동일한 이름으로 변수를 재 선언할 수 없음
// const : ES6 에서 추가된 상수 선언 키워드, 상수가 메모리 상에 살아있는 범위가 코드 블럭을 기준으로 함, 리액트에서 데이터를 단순 저장 시 const를 사용하는 것을 기본으로 함

// 변수 및 상수 선언
var varA = 10;
let letA = 10;
const constA = 10;

console.log('var 로 선언한 변수 : ' + varA);
console.log('let 로 선언한 변수 : ' + letA);
console.log(`const 로 선언한 변수 : ${constA}`);

// var 로 선언한 변수의 데이터 변경
varA = 100;
// let 으로 선언한 변수의 데이터 변경
letA = 100;
// const 로 선언한 상수의 데이터는 상수이므로 수정불가
// constA = 100;

console.log();

// var 로 선언한 변수는 동일한 범위내에서 동일한 이름으로 재 선언 가능함
var varA = 1000;
console.log(`재 선언한 varA 의 값 : ${varA}`);

// let 으로 선언한 변수는 동일한 범위내에서 동일한 이름으로 재 선언 불가
// let letA = 1000;

// const 로 선언한 상수는 동일한 범위내에서 동일한 이름으로 재 선언 불가
// const constA = 1000;

var varA = 200;
console.log(`다시 재 선언한 varA 의 값 : ${varA}`);

console.log();

// if 문의 조건식에 true 를 입력하여 무조건 if 문의 조건식 결과를 true로 함
if (true) {
  var varB = 20;
  let letB = 20;
  console.log(`if 문의 코드 블럭 안에서 선언 된 var 변수 varB : ${varB}`);
  console.log(`if 문의 코드 블럭 안에서 선언 된 let 변수 letB : ${letB}`);
}

// var 로 선언한 변수의 스코프는 함수를 기준으로 하기 때문에 if 문 안에서 선언한 변수를 if 문 밖에서 호출 할 수 있음
console.log(`if 문의 코드 블럭 밖에서 호출한 var 변수 varB : ${varB}`);
// let 으로 선언한 변수의 스코프는 코드 블럭을 기준으로 하기 때문에 if 문 안에서 선언한 변수를 if 문 밖에서 호출 할 수 없음
// console.log(`if 문의 코드 블럭 밖에서 호출한 let 변수 letB : ${letB}`);

console.log();

function funcA() {
  var varC = 30;
  let letC = 30;
  console.log(`함수 안에서 선언한 var 변수 varC : ${varC}`);
  console.log(`함수 안에서 선언한 let 변수 letC : ${letC}`);
}

funcA();

// var 키워드로 선언한 변수의 스코프는 함수이므로 함수를 벗어나면 메모리에서 삭제됨, 함수 밖에서는 함수 안에서 선언한 변수를 호출할 수 없음
// console.log(`함수 밖에서 호출한 var 변수 varC : ${varC}`);
// let 키워드로 선언한 변수의 스코프는 코드 블럭이므로 코드 블럭을 벗어나면 메모리에서 삭제됨, 함수 밖에서는 함수 안에서 선언한 변수를 호출할 수 없음
// console.log(`함수 밖에서 호출한 let 변수 letC : ${letC}`);

console.log("\n ----- const 로 선언한 object, array 의 요소 값 변경 -----\n");

const obj = {name: '윈터', age: 25};
console.log('object 타입의 상수 obj : ');
console.log(obj);

const arr = ['윈터', 25];
console.log('array 타입의 상수 arr : ');
console.log(arr);

// 상수로 선언한 object 타입을 수정할 수 없음
// 상수로 선언한 object 타입의 주소 자체가 변경되기 때문에 오류가 발생
// obj = {name: '카리나', age: 25};
// 상수로 선언한 배열 타입을 수정할 수 없음
// 상수로 선언한 배열 타입의 주소 자체가 변경되기 때문에 오류가 발생
// arr = ['카리나', 25];

// console.log('수정 된 obj : ');
// console.log(obj);
// console.log('수정된 arr : ');
// console.log(arr);

console.log();

// const 로 선언 한 상수에 저장되는 데이터가 기본 타입(리터럴 데이터)이 아닌 객체 타입일 경우 값 자체가 저장되는 것이 아니라 주소가 저장됨
// obj = {name: '카리나', age: 25}; 와 같은 예시는 const 로 선언된 object 타입의 상수에 저장된 주소 자체를 변경하려고 하기 때문에 오류가 발생
// obj.name = '로제'; 와 같은 예시는 const 로 선언도니 object 타입의 상수에 저장된 주소가 아닌 해당 주소 안에 저장된 데이터를 수정하기 때문에 정상 수정 됨

// const 로 선언한 object 타입의 상수 obj 의 주소는 변경되지 않고, 내부 요소의 데이터만 변경하기 때문에 문제없이 수정됨
obj.name = '로제';
obj.age = 29;
console.log('수정 후 obj : ');
console.log(obj);

// const 로 선언한 array 타입의 상수 arr 의 주소는 변경되지 않고, 내부 요소의 데이터만 변경하기 때문에 문제없이 수정됨
arr[0] = '리사';
arr[1] = 28;
console.log('수정 후 arr : ');
console.log(arr);


console.log('\n ----- 무결성 내장 함수 -----\n');

// react 및 ES6 에서는 원본 배열을 직접 수정하는 함수를 사용하는 것을 지양함
// 자바스크립트에서 제공하는 무결성 내장 함수를 사용해야 함

const arr1 = [10, 20, 30];
const arr2 = [10, 20, 30];

console.log(`원본 배열 arr1 : ${arr1}`);
// ES5 에서 사용하던 배열에 데이터를 추가하는 방식
// 원본 배열이 원래 가지고 있던 데이터의 무결성이 사라짐
arr1.push(40);
arr1.push(50);

console.log(`수정된 배열 arr1 : ${arr1}`);

console.log();

console.log(`원본 배열 arr2 : ${arr2}`);
// ES6 에서 배열에 데이터를 추가하는 방식
// ES6 에서는 원본은 그대로 두고, 데이터를 추가하여 새로운 배열을 생성하는 함수를 사용하여 데이터를 추가
// 원본 배열에 대한 데이터 무결성이 지켜짐
const arr3 = arr2.concat(40);
const arr4 = arr3.concat(50);
console.log(`무결성 내장 함수로 수정한 배열 arr2 : ${arr4}`);
console.log(`원본 배열 arr2 : ${arr2}`);
console.log(`수정된 배열 arr3 : ${arr3}`);

console.log();

arr1.pop();
arr1.pop();
console.log(`배열의 가변 내장 함수를 사용하여 수정한 arr1 : ${arr1}`);

console.log();

const arr5 = arr4.slice(0, arr4.length - 1);
const arr6 = arr5.slice(0, arr5.length - 1);
console.log(`배열의 무결성 내장 함수를 사용하여 수정한 arr6 : ${arr6}`);
console.log(`원본 배열 arr4 : ${arr4}`);
console.log(`수정된 배열 arr5 : ${arr5}`);











