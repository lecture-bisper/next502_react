// 자바스크립트에서 코드를 별도의 파일로 나누어 사용할 수 있음
// html 파일에서 자바스크립트의 파일을 호출하여 사용함
// 자바스크립트 파일도 서로 호출하여 사용하는 것이 가능
// require 키워드를 사용하여 자바스크립트 파일에서 다른 자바스크립트 파일을 불러와서 사용함

// ES6 에서 import / export 키워드가 추가 됨
// import/export 키워드를 통해서 조금 더 쉽게 자바스크립트 모듈을 사용할 수 있음
// 기본 자바스크립트 파일을 ES5 문법을 동작하기 때문에 import/export 를 바로 사용할 수 없음
// html 파일에서 import/export 를 바로 사용하려면 <script type='module' src='파일경로'> 형태로 사용
// 확장자가 'mjs' 인 자바스크립트 파일은 import/export 를 바로 사용 가능함
// 리액트는 자바스크립트 버전이 ES6로 지정되어 있기 때문에 import/export 를 바로 사용 가능함


// as : import/export 사용 시 변수, 함수, 클래스의 이름에 별칭을 설정 시 사용


// import : 다른 자바스크립트 모듈에서 제공하는 변수, 함수, 클래스를 가져옴
//  사용법 :
//    1. 다른 자바스크립트 모듈에서 export 로 제공하는 변수, 함수, 클래스를 가져옴
//    - 지정한 것만 가져와서 사용함
//    - 현재 모듈의 멤버인 것처럼 사용이 가능(변수, 함수, 클래스 바로 사용)
//    - import { 변수명, 함수명, 클래스명 } from "모듈경로";

//    2. 다른 자바스크립트의 모듈에서 export 로 제공하는 모든 것을 한번에 가져옴
//    - 가져온 모듈을 사용 시 '별칭명.변수', '별칭명.함수', '별칭명.클래스' 형식으로 사용
//    - import * as 별칭 from "모듈경로";

//    3. import 시 as 로 별칭을 설정하여 사용 가능
//    - 여러개의 모듈을 import 시 중복되는 모듈이 있을 경우 별칭을 사용하여 이름을 바꿔서 사용
//    - import { 원본명 as 별칭 } from "모듈경로";

// default import : default export 로 설정된 변수, 함수, 클래스를 가져옴
// - 사용할 모듈명에 {} 가 없음
// - import 모듈명 from "모듈경로";


// export : 현재 자바스크립트 모듈에서 특정 변수, 함수, 클래스를 다른 자바스크립트 모듈에서 사용할 수 있도록 제공
//  named export : 자바스크립트 모듈에서 일반적으로 사용되는 export, 여러개 사용 가능
//    사용법 :
//    1. 외부에 제공할 변수에 직접 export 사용
//    - export const 변수명;

//    2. 외부에 제공할 함수에 직접 export 사용
//    - export function 함수명() {
//        실행할 소스코드 ... ;
//    }

//    3. 외부에 제공할 클래스에 직접 export 사용
//    - export class 클래스명 {
//        필드명;
//        메소드명() {
//          실행할 소스코드;
//        }
//    }

//    4. 외부에 제공할 변수, 함수, 클래스를 해당 모듈의 마지막 부분에서 한번에 등록
//    - 여러개의 변수, 함수, 클래스를 등록할 수 있음
//    - export { 변수명, 함수명, 클래스명 };


//  export default : 해당 모듈 안에서 단 1개만 사용할 수 있는 export, 이름을 지정할 필요가 없음(모듈명이 해당 변수, 함수, 클래스의 이름으로 대신 사용됨)
//    - export 시 {} 가 없음, default 키워드만 사용
//    - export default 모듈명;


// person1.mjs 모듈에서 export 로 제공하는 변수를 import 함
import { name, age, email, phone, addr } from "./person1.mjs";

console.log(`name : ${name}`);
console.log(`age : ${age}`);
console.log(`email : ${email}`);
console.log(`phone : ${phone}`);
console.log(`addr : ${addr}`);

console.log();

// 지정한 모듈에서 export 한 함수 가져오기
import { sum, sub, multi, div } from "./person1.mjs";

sum(10, 20);
sub(20, 10);
let result = multi(10);
console.log(`두 수의 곱셈은 ${result} 입니다.`);
result = div(10, 3);
console.log(`두 수의 나눗셈은 ${result} 입니다.`);

console.log();

// 지정한 모듈에서 export 한 클래스 가져오기
import { Circle } from "./person1.mjs";

const circle = new Circle(5);
result = circle.area(10);
console.log(`클래스 사용하기 : ${result}`);

console.log("\n----- * 로 모든 내용 가져오기 -----\n");
// * 기호를 사용하여 지정한 모듈에서 제공하는 내용을 모두 가져옴
// * 를 사용하면 어떤 것을 가지고 오는지 모르므로 as 로 별칭을 설정
import * as p2 from "./person2.mjs";

// 별칭명.모듈명으로 사용
console.log(`person2 에서 가져온 name2 : ${p2.name2}`);
console.log(`person2 에서 자겨온 email2 : ${p2.email2}`);
p2.sum2(10, 20);
p2.sub(20, 10);

const circle2 = new p2.Circle2(10);
result = circle2.area(10);
console.log(`클래스 사용하기 2 : ${result}`);


console.log("\n----- import 시 as 사용 -----\n");

// 다른 모듈에서 먼저 동일한 이름으로 함수를 가져오고 있기 때문에 as 를 사용하여 별칭을 사용
import { sub as sub2 } from "./person2.mjs";

sub(10, 20);
sub2(10, 20);

console.log("\n----- default export 로 지정된 모듈 가져오기 -----\n");

// export default 로 지정된 변수, 함수, 클래스를 가져오기
// export default 로 지정된 모듈은 {} 없이 import 함
import multi2 from "./person2.mjs";

result = multi2(10);
console.log(`default import 로 가져온 모듈 : ${result}`);











