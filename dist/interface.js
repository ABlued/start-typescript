"use strict";
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var ablue = {
    name: 'ablue',
    age: 20
};
var frontEnd = {
    name: "ablue",
    skills: ['js', 'react']
};
var extednsABlue = {
    name: 'ablue',
    age: 20,
    skills: ['js', 'react']
};
var typePersonABlue = {
    name: 'ablue'
};
var expert = {
    name: '김개발',
    skills: ['js', 'react']
};
var people = [typePersonABlue, expert];
var typeColor = 'red';
var colors = ['red', 'orange']; // 이런시긍로 사용할 수 있다.
