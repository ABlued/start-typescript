interface Shape{
    getArea():number;   //  Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape{

    radius:number;  // 멤버 변수 radius 값을 설정합니다.

    constructor(radius: number){
        this.radius = radius;
    }

    getArea(){      // Shape를 상속받았으니 number 타입 값을 반환해주는 getArea()을 구현해줘야 한다.
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape{
    width:number;
    height:number;

    constructor(width:number, height: number){
        this.width = width;
        this.height = height;
    }

    getArea(){      // Shape를 상속받았으니 number 타입 값을 반환해주는 getArea()을 구현해줘야 한다.
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})

// 일반 객체를 interface로 타입 설정하기

interface Person {
    name: string;
    age?: number;   // ?는 옵셔널 체이닝 오퍼레이터(optional chaining operator)이다. age를 선언하지 않거나 undefined가 아니라면 number가 된다는 뜻이다.
}

interface Developer {
    name: string;       // Person과 중복되는 속성이 있다. 이러한 경우 extends 기능을 이용하자
    age?: NumberConstructor;
    skills: string[];
}

const ablue:Person = {
    name:'ablue',
    age:20
}
const frontEnd:Developer = {
    name:"ablue",
    skills:['js','react']
}

interface extendsDeveloper extends Person {
    skills: string[];
}

const extednsABlue : extendsDeveloper = {
    name:'ablue',
    age:20,
    skills:['js','react']
}