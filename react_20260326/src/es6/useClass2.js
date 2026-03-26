console.log('\n ----- ES6 에서 클래스 사용 -----\n');

// ES6 에서 class 키워드가 추가 됨
// ES6 의 클래스는 자바의 클래스와 비슷하게 사용

// class 키워드를 사용하여 Shape 클래스 선언
class Shape {

  // 정적 멤버 선언, 객체 생성없이 해당 멤버 사용 가능
  static create(x, y) {
    return new Shape(x, y);
  }

  static print() {
    console.log('static 으로 정적 멤버 호출!!');
  }

  // 클래스의 필드 선언, var/let/const 키워드 생략
  name = 'shape';

  // 자바스크립트 클래스의 생성자
  // 자바스크립트 클래스는 생성자를 단 1개만 제공
  // 자바스크립트 클래스의 생성자 이름은 constructor 로 고정
  constructor(x, y) {
    this.move(x, y);
  }

  // 클래스의 메소드 선언
  move(x, y) {
    // 메소드 안에서 this.변수명 사용 시 클래스의 필드로 인식
    // 자바스크립트의 클래스 필드는 클래스 필드로 따로 선언하지 않고, 메소드에서 this.변수명 을 사용 시 바로 클래스의 필드로 지정됨
    this.x = x;
    this.y = y;
  }

  // 클래스의 메소드 선언
  area() {
    return this.x * this.y;
  }
}

// 자바스크립트 클래스의 객체 생성 시 반드시 new 키워드 사용
// new 키워드로 호출하는 것은 해당 클래스의 생성자
var s = new Shape(10, 20);
// 생성된 객체를 사용하는 방식은 자바와 동일함
console.log(`Shape 클래스 타입의 객체 s 의 필드 name : ${s.name}`);
console.log(`Shape 클래스 타입의 객체 s 의 필드 x : ${s.x}, y : ${s.y}`);
console.log(`객체 s 의 메소드 area() : ${s.area()}`);
s.move(100,200);
console.log(`객체 s 의 필드 값 수정 후 x : ${s.x}, y : ${s.y}`);
console.log(`객체 s 의 필드 값 수정 후 메소드 area() : ${s.area()}`);

var s1 = Shape.create(10, 20);
console.log(`정적 멤버 사용 : name - ${s1.name}, x - ${s1.x}, y - ${s1.y}`);
Shape.print();


console.log('\n----- ES6 의 클래스 상속 -----\n');

// 자바와 동일하게 extends 키워드를 사용하여 클래스 상속을 구현

// Shape 클래스를 상속받는 Circle 자식 클래스 선언
class Circle extends Shape {

  constructor(x, y, radius) {
    // 부모 클래스의 생성자를 호출하는 super() 도 자바와 동일하게 존재함
    // 자바와 동일하게 자식 클래스의 생성자는 부모 클래스의 생성자를 가장 먼저 호출해야 함
    super(x, y);
    // Circle 클래스의 필드 선언
    this.radius = radius;
  }

  // 부모 클래스의 멤버 메소드를 수정하는 오버라이딩을 지원
  // 자바나 dart 와 같은 어노테이션은 지원되지 않음
  area() {
    if (this.radius === 0) {
      // super.멤버명 도 동일하게 지원됨
      return super.area();
    }
    return this.radius * this.radius;
  }
}

// Circle 클래스 타입의 객체 생성
var c = new Circle(10,20,100);
console.log(`Shape 를 상속받은 자식 클래스 Circle 의 객체 c 의 메소드 area() : ${c.area()}`);








