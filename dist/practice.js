"use strict";
var message = 'hello world';
console.log(message);
// 기본형 타입
var age = 10;
var isCheck = false;
// 참조형 타입
var numbers = [1, 2, 3];
var messages = ['hi', 'myName', "is", "ablue"];
// messages.push(1);    // string[]에 number를 할당해 줄 수 없다.
// 유니온 타입 : 여러 가지 타입을 할당해줄 수 있다.
var mightBeUndefined = undefined;
// 유니온 타입을 사용해 특정 문자열을 한정지을 수도 있다.
var color = 'red';
// color = 'green'; // 다른 문자열은 에러가 일어난다.
