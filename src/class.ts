class Person {
  // 생성자
  constructor(name: string) {
    this.name = name;
  }

  // 프로토타입 메소드
  sayHi() {
    console.log(`Hi My name is ${this.name}`);
  }

  // 정적 메소드
  static sayHello() {
    console.log('Hello');
  }
}
// 인스턴스 생성
const me = new Person('Lee');

console.log(me.name); // Lee

me.sayHi(); // Hi My name is Lee
Person.sayHello(); // Hello
