
console.log('----- 기존 ES5에서의 문자열 사용 -----\n');

var string1 = '안녕하세요';
var string2 = '반갑습니다.';
// ES5 에서는 문자열 연결 연산자를 사용하여 변수와 문자열을 하나로 합함
var greeting = string1 + ' ' + string2;
var product = {name: '도서', price: '8,500원'};
// object 타입과 문자열을 문자열 연결 연산자를 사용하여 하나로 합함
var message = '제품 ' + product.name + '의 가격은 ' + product.price + '입니다.';
var value1 = 1;
var value2 = 2;
var boolValue = false;
// 문자열과 연산식이 함께 있을 경우 연산식을 () 를 사용하여 먼저 연산하고, 문자열 연결 연산자로 문자열과 합함
var operator1 = '곱셈값은 ' + value1 * value2 + '입니다.';
var operator2 = '불리언 값은 ' + (boolValue ? '참' : '거짓') + '입니다.';
// 입력은 문자열 1줄이지만 출력은 여러줄로 할 경우 이스케이프 문자를 사용
var multiLine = '문자열 1\n문자열 2';

console.log(greeting);
console.log(message);
console.log(operator1);
console.log(operator2);
console.log(multiLine);


console.log('\n----- ES6 에서의 문자열 사용 -----\n');

var string1 = '안녕하세요';
var string2 = '반갑습니다.';
// '', "" 대신 `` (백틱) 안에 문자열을 입력 (템플릿 문자열이라고 함)
// ${변수명}, ${연산식} 입력 시 문자열 연결 연산자 없이 사용 가능
var greeting = `${string1} ${string2}`;
var product = {name: '도서', price: '8,500원'};
var message = `제품 ${product.name}의 가격은 ${product.price}입니다.`;
var value1 = 1;
var value2 = 2;
var boolValue = false;
// 연산식 사용 시에도 템플릿 문자열을 사용할 수 있음
var operator1 = `곱셈값은 ${value1 * value2} 입니다.`;
var operator2 = `불리언 값은 ${boolValue ? '참' : '거짓'} 입니다.`;
// 템플릿 문자열 사용 시 사용자가 입력한 형태대로 출력이 가능함
var multiLine = `문자열 1
문자열 2`;

console.log(greeting);
console.log(message);
console.log(operator1);
console.log(operator2);
console.log(multiLine);




