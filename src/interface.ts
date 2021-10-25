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