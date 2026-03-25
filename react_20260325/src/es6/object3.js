console.log('\n ----- 구조 분해 할당 -----\n');

console.log('----- ES5 방식의 구조 분해 할당 -----\n');

var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
// ES5 방식에서 기본값 설정
// || 연산자 왼쪽에 데이터가 있으면 왼쪽의 데이터를 그대로 사용
// || 연산자 왼쪽에 데이터가 없으면 || 연산자 오른쪽의 데이터를 기본값으로 사용
var item3 = list[2] || -1;
console.log('원본 배열 list : ');
console.log(list);
console.log(`변수 item1 : ${item1}`);
console.log(`변수 item2 : ${item2}`);
console.log(`변수 item3 : ${item3}`);

console.log();

console.log(`원본 item1 의 내용 : ${item1}`);
console.log(`원본 item2 의 내용 : ${item2}`);

// 스왑, 두 변수의 데이터를 서로 바꿔 가지기 위한 방식
// ES5 에서는 임시 변수를 선언하고, 임시 변수에 기존 값을 저장 후 각각의 값을 순서대로 변경
var temp = item2;
item2 = item1;
item1 = temp;

console.log(`값을 서로 바꾼 후 item1 의 내용 : ${item1}`);
console.log(`값을 서로 바꾼 후 item2 의 내용 : ${item2}`);

console.log();

// object 타입의 변수 선언
var obj = {
  key1: 'one',
  key2: 'two',
};

// 일반 변수에 object 타입의 변수가 가진 데이터를 저장
var key1 = obj.key1;
var key2 = obj.key2;
// ES5 에서 object 타입의 변수에 기본값 설정
var key3 = obj.key3 || 'default key3 value';
// object 타입의 변수 obj의 key1 이 가지고 있는 값을 새로운 변수 newKey 에 저장
var newKey = obj.key1;

console.log('원본 object 타입 obj의 값 : ');
console.log(obj);
console.log(`key1 의 값 : ${key1}`);
console.log(`key2 의 값 : ${key2}`);
console.log(`key3 의 값 : ${key3}`);
console.log(`newKey 의 값 : ${newKey}`);


console.log('\n ----- ES6 방식의 구조 분해 할당 ----- \n');

var list = [0, 1];
// ES6 에서 배열의 구조 분해 할당 방식은 ' = ' 연산자 오른쪽에 대상이 되는 배열을 입력
// ' = ' 연산자 오른쪽에 배열처럼 [] 안에 변수명을 순서대로 입력
// 기본값 설정 시 [] 안의 변수에 ' = ' 기호로 값을 설정
var [item1, item2, item3 = -1] = list;

console.log('원본 배열 list : ');
console.log(list);
console.log(`변수 item1 : ${item1}`);
console.log(`변수 item2 : ${item2}`);
console.log(`변수 item3 : ${item3}`);

console.log('\n ----- ES6에서 swap 사용하기 -----\n');

console.log(`원본 item1 의 내용 : ${item1}`);
console.log(`원본 item2 의 내용 : ${item2}`);

// ES6 방식에서의 swap 은 변수를 [변수명1, 변수명2] 형태로 만들고, ' = ' 연산자 오른쪽에서 기존 순서의 변수를, ' = ' 연산자 왼쪽에는 순서가 바뀐 변수를 위치 시키면 순서에 값이 바뀌어 저장됨
[item2, item1] = [item1, item2];

console.log(`swap 후 item1 의 내용 : ${item1}`);
console.log(`swap 후 item2 의 내용 : ${item2}`);

console.log('\n ----- ES6 의 object 타입에 대한 구조 분해 할당 ----- \n');

var obj = {
  key1: 'one',
  key2: 'two'
};

console.log('원본 object 타입의 변수 obj 의 값 : ');
console.log(obj);

// ES6 에서 object 타입의 구조 분해 할당 방법은 배열의 구조 분해 할당과 같음
// ' = ' 연산자 왼쪽에 있는 변수명이 ' = ' 연산자 오른쪽에 있는 object 타입이 가지고 있는 key 명과 동일해야 함
// object 타입의 구조 분해 할당은 key 명을 기준으로 하기 때문에 key 명과 변수명이 동일해야 하고, key 명이 같으면 순서는 상관없음
// key1: newKey 는 기존 object 타입이 가지고 있는 요소의 key 중 key1 의 값을 가져와서 ' : ' 기호 뒤에 있는 새로운 변수에 값을 저장

var {key2, key1: newKey, key3 = '기본값 설정'} = obj;

console.log(`변수 key1 의 값 : ${key1}`);
console.log(`변수 key2 의 값 : ${key2}`);
console.log(`변수 key3 의 값 : ${key3}`);
console.log(`변수 newKey 의 값 : ${newKey}`);






