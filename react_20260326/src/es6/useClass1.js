console.log('\n----- 자바스크립트의 클래스 -----\n');

console.log('----- ES5 의 클래스 -----\n');

// ES5 까지는 클래스가 없었음
// prototype 을 사용하여 유사 클래스를 만들어서 사용함

function Shape(x, y) {
  this.name = 'shape';
  this.move(x, y);
}

Shape.create = function(x, y) {
  return new Shape(x, y);
}

Shape.prototype.move = function(x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.area = function() {
  return this.x * this.y;
}

var s = Shape.create(10, 20);
console.log(s.name);
console.log(s.area());







