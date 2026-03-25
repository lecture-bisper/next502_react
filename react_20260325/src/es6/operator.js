console.log('\n ----- 전개 연산자 사용 ----- \n');

console.log('----- ES5 방식 -----\n');

// 배열 선언과 동시에 데이터 입력
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
console.log('원본 배열 array1 : ');
console.log(array1);
console.log('원본 배열 array2 : ');
console.log(array2);

// ES5 에서는 두 배열의 내용을 합쳐서 새로운 배열을 만들 때 새로운 배열에 기존 배열의 데이터를 모두 출력하여 입력
var combined = [array1[0], array1[1], array2[0], array2[1]];
console.log('합쳐진 배열 combined : ');
console.log(combined);

// 배열의 무결성 내장 함수인 concat() 을 사용하여 array1 에 array2 의 내용을 추가하고 새로운 배열 combined1 에 저장
var combined1 = array1.concat(array2);
console.log('concat() 으로 합쳐진 배열 combined1 : ');
console.log(combined1);

// 배열의 무결성 내장 함수인 concat() 을 빈 배열에 사용하여 array1, array2 를 순서대로 추가하여 새로운 배열 combined2 에 저장
var combined2 = [].concat(array1, array2);
console.log('concat() 으로 합쳐진 배열 combined2 : ');
console.log(combined2);

console.log('\n ----- ES5의 구조분해할당 -----\n');

var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';
console.log(`구조 분해 할당 후 first : ${first}`);
console.log(`구조 분해 할당 후 second : ${second}`);
console.log(`구조 분해 할당 후 three : ${three}`);

console.log('\n ----- ES6 방식 -----\n');

// 배열 선언과 동시에 데이터 입력
var array1 = ['one', 'two', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var array2 = ['three', 'four'];
console.log('원본 배열 array1 : ');
console.log(array1);
console.log('원본 배열 array2 : ');
console.log(array2);

console.log();

// ... : 전개연산자, ES6에서 추가된 연산자, 배열이나 object 의 전체 요소 및 요소의 일부를 다른 배열이나 다른 object 타입으로 빠르게 출력함
var combined = [...array1, ...array2];
console.log('합쳐진 배열 combined : ');
console.log(combined);

console.log('\n ----- ES6의 전개 연산자 구조분해할당 -----\n');

// 구조분해할당 중 ' = ' 연산자 왼쪽의 변수에 전개연산자(...) 를 사용 시 ' = ' 연산자 오른쪽에 위치한 배열이나 object 타입이 가지고 있는 나머지 요소를 모두 가져옴
var [first, second, three = 'empty', ...others] = array1;
console.log(`구조 분해 할당 후 first : ${first}`);
console.log(`구조 분해 할당 후 second : ${second}`);
console.log(`구조 분해 할당 후 three : ${three}`);
console.log(`구조 분해 할당 후 others : ${others}`);

console.log(`first 의 타입 : ${typeof first}`);
console.log(`second 의 타입 : ${typeof second}`);
console.log(`three 의 타입 : ${typeof three}`);
console.log(`others 의 타입 : ${typeof others}`);
console.log(others);


var obj = {
  key1: 'one',
  key2: 'two',
  key3: 10,
  key4: 20,
  key5: 30,
  key6: 40,
  key7: 50,
};

console.log();

var {key3 = '기본값', key2, key1, ...objOthers} = obj;

console.log(`key1 : ${key1}`);
console.log(`key2 : ${key2}`);
console.log(`key3 : ${key3}`);
console.log(`objOthers : ${objOthers}`);
console.log(objOthers);




