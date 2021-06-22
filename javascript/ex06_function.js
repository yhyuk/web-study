/* 
    ex06_function.js

    [ 자바스크립트 함수 ]
    - 함수를 객체(데이터)처럼 취급할 수 있다.
        -> 함수는 1급 객체(First Class Object)이다.
    
    1급 객체?
    1. 함수를 변수나 데이터 구조에 담을 수 있다.
    2. 함수를 매개변수로 전달할 수 있다. 
    3. 함수를 반환값으로 사용할 수 있다.

*/

console.log('1. 함수를 변수에 담기 예제')
var n1;
function f1() {
    console.log('반환값입니당~~');
}

n1 = f1(); //함수의 반환값을 n1에 대입
console.log(n1); //undefined

n1 = f1; //함수 자체를 변수 n1에 대입(=함수 포인터)
console.log(n1);

n1(); // *******

var n2 = n1;
n2();

n2 = 100;
console.log(n2);
console.log();

console.log('2. 함수를 매개변수로 전달 예제')
function f3() {
    console.log('f3');
}

function f4(temp) {
    console.log(temp);
}

f4(100);
var n3 = f3;
f4(n3);
f4(f3);
f4(f3()); // undefined -> 쓰지말것

console.log();
console.log('2. 함수를 매개변수로 전달 예제')
function f5() {
    console.log('f5');
}

function f6(temp) {
    temp(); // == f5()
}

f6(f5);

console.log();
console.log('3. 함수를 반환값으로 사용 예제');

function f7() {
    console.log('f7');
}

function f8() {
    return f7;
}

f8()();
console.log();
console.log('-------------------------------');
/*
    자바스크립트의 함수 선언
    1. 명시적 선언(실명)
    2. 암시적 선언(= 익명 함수, 함수 리터럴)
    3. 즉시 호출
*/

//1. 명시적 선언(실명)
function hello() {
    console.log('hello');
}

hello();

//2. 암시적 선언(= 익명 함수(******), 함수 리터럴)
var m1 = function () {
    console.log('hi');
};

m1();

//3. 즉시 호출
(function() {
    console.log('good이에요 good! good!! good!!!');
})();

console.log('-------------------------------');

//연산자 + 자료형
// - 자바 스크립트는 오라클과 비슷하게 자동 형변환이 잦다.

// == 연산자
// ===, !== 
//- 자료형도 비교하고, 값도 비교한다.
//- 엄격한 (strict) 값을 비교
console.log(100 == 100);
console.long(100 == '100') //false
console.long(1== ture); //false
console.long(null == undefined); //false