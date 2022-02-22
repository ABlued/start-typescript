'use strict';
var Person = /** @class */ (function () {
  // 생성자
  function Person(name) {
    this.name = name;
  }
  // 프로토타입 메소드
  Person.prototype.sayHi = function () {
    console.log('Hi My name is ' + this.name);
  };
  // 정적 메소드
  Person.sayHello = function () {
    console.log('Hello');
  };
  return Person;
})();
// 인스턴스 생성
var me = new Person('Lee');
console.log(me.name); // Lee
me.sayHi(); // Hi My name is Lee
Person.sayHello(); // Hello
