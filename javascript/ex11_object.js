/* 
    ex11_object.js   << 초반 JS 배울때 중요하다!!!

    JavaScript 전체 구성
    1. Core(ECMScript, 언어 기본)
    2. BOM(브라우저 조작)
    3. DOM(브라우저 조작)

    JavaScript Object
    1. 내장 객체
        - Array, Date, Math, RegExp 등..

    2. BOM 객체
        - window, documenet, location, form..

    3. DOM 객체
        - element, attribute, text..

    4. 사용자 정의 객체
        - 개발자가 직접 정의한 객체

*/
/*
    사용자 정의 객체 만들기
        - 자바스크립트는 클래스가 없다.
    1. Object 생성자 함수 사용하기
    2. 객체 리터럴 표기법({}) 사용하기
*/

//요구사항] User 클래스 정의(멤버 구성) -> 홍길동 객체 생성하기
/*
[ Java로 만들기 ]
class User {
    private String name;
    private int age;
    private String address;
}

User hong = new User();
hong.name = "홍길동";
hong.age = 20;
hong.address = "서울시";

*/

// 1. Object 생성자 함수 사용 방법
//[ JavaScript로 만들기 ]
var hong = new Object(); //아무것도 없는 객체, 없을 무!!!

/*
    객체 프로퍼티(Property)
    - 추가: 객체에 마음대로 지정해서 추가ㅋㅋ;;
    즉, 객체에 자바처럼 프로퍼티를 선언하지 않아도 되며, 실제로 아무것도 없어도 직접 필요한것만 그때그때마다 마음대로 지정해서 값을 넣으면 된다.
*/
hong.name = "홍길동";
hong.age = 20;
hong.address = "서울시";

console.log(hong.name);
console.log(hong.age);
console.log(hong.address);
console.log(hong);

/*
    방법은 쉽지만 단점이있다.
    만약 추가 요구사항으로 홍길동과 똑같은 조건(name, age, address)으로 아무개를 만든다면?
*/

var aaa = new Object();

aaa.name = '아무개';
aaa.aqa = 25; //오타가 발생해도 값은 추가된다. aqa
aaa.address = '부산시';

console.log(aaa);
//객체의 틀(규칙)이 없기 때문에 아무렇게나 만들게되면 문제가 발생한다. 



//2. 객체 리터럴 사용 방법
hong = {}; //new Object()

hong.name = 'hong';
hong.age = 22;
hong.address = 'seoul';

console.log(hong);

hong = { name: '홍길동', age: 20, address: '서울시'};
hong = { 
    name: '홍길동',  //프로퍼티
    age: 20, 
    address: '서울시'
}; //가독성 때문에 한줄쓰기보다 들여쓰기를 보편적으로 한다.

console.log(hong);

/*
    프로퍼티 접근 방법
    1. 멤버 접근 연산자
    2. key 접근
*/
console.log('1. 멤버 접근 연산자: ', hong.name);
console.log('2. key 접근: ', hong['name']);

var prop = 'name';
console.log(hong[prop]);

// hong.phone-number = "010";
hong['phone-number'] = '010';
console.log(hong);

//프로퍼티 삭제
delete hong.age;
console.log(hong);

/*
    객체 탐색(= 프로퍼티 탐색) 
    - 해당 객체가 어떤 프로퍼티를 가지고 있는지 순차적으로 탐색
    - for in
 */
for (var prop in hong) {
    console.log(prop, hong[prop]);
}

/*
    객체의 멤버
    1. 변수
    2. 메소드
*/
hong = new Object();

hong.name = '홍길동';
hong.age = 20;

hong.hello = function() {
    console.log('hello');
};

console.log(hong);
hong.hello();

hong.info = function () {
    // console.log('저는 %s입니다. 나이는 %d세입니다.', name, age); //name, age가 어떤건지 정의가 안되어 있어서 Error
    console.log('저는 %s입니다. 나이는 %d세입니다.', this.name, this.age);
};
hong.info(); 

// JS에서 많이 보이는 형태 (익숙해져야함) 중요 ****
hong = {
    name: '홍길동',
    age: 20,
    // address: '서울시 강남구 역삼동 20번지',
    address: {
        sido: '서울시',
        gugun: '강남구',
        dong: '역삼동',
        bunji: '20번지'
    },
    info: function () {
        console.log(this.name, this.age);
    }
};

console.log(hong.name);
console.log(hong.age);
console.log(hong.address);

console.log(typeof hong.name);
console.log(typeof hong.age);
console.log(typeof hong.address); // JS의 객체 자료형은 Object로 통일된다!!

//주소에서 동을 알고싶다.
console.log(hong.address.dong);
console.log(hong.address['dong']);
console.log(hong['address']['dong']);


/*
    함수 -> 변수의 지역
    자바: 지역 변수(메소드, 제어문), 멤버 변수
    자바스크립트: 지역 변수(***), 전역 변수(****)

    지역 변수, Local Veriable
    - 함수만 인식한다. (제어문은 인식하지 못한다.)
    - 즉, 함수 내부 안에서는 지역 변수 개념이 없다.
    - 자바와 다르니, 헷갈리지말것 ***********

    전역 변수, Global Veriable
    - 어디에도 소속되지 않은 변수
    - 적용 범위: 현재 파일 전체
*/
var n1 = 10;

function m1() {
    //지역 변수, Local Veriable
    var n2 = 20;
    console.log(n2);

    if (true) {
        var n3 = 30;
        console.log(n3);
    }
    console.log(n3);
}

// console.log(n2); // 당연히 error
m1();


//자바스크립트의 var 키워드는 중복 선언이 가능하다.(이유가 있다... )
var num = 10;
var num = 20;
var num = 30; //변수가 중복 선언되도 error가 안난다.

console.log(num); 

//변수 선언 키워드('var') 없어도 변수 선언이 가능하다. (이유가 있다.. ) -> 전역 변수가 된다.
// ---> 사용 금지!!! (가독성 저하)
color = "노랑";
console.log(color);

function test() {
    var width = 100; //지역변수(test())
    height = 200; //전역변수 -> 지역변수(test())
}
//console.log(width);
// console.log(height);
// 위 두가지 이유는 나중에 더 배우면 알게 될 예정!!!!


/*
    선언 -> 호출 : 정상적인 방법
    호출 -> 선언 : JS에서는 이게 된다. ?? 이게 되네??
    
    Hoisting
    - 자바스크립트 엔진이 구문(문장)을 실행하기 전에 소스상의 모든 변수선언문과 함수 선언문을 소스의 최상단으로 이동시킨다. (끌어올린다.)
    - 함수 호이스팅
    - 변수 호이스팅 ( 사용 안함, 의미없음 )
*/
console.log(nick);
print();

var nick = '강아지';

function print() {
    console.log('고양이')
};


/*
    지역 함수
    - 함수 안에 또다른 함수 선언
    - 함수 안에 또다른 함수는 해당 함수 안에서만 호출이 가능하다.
    - 쓰는이유? 네임 충돌 발생 방지, 자원 관리가 편하다.
*/ 
function f1() {
    console.log('f1');

    function f2() {
        console.log('f2');
    }
    f2();
    console.log('f1');
}

f1();
// f2(); //error

/*
    익명 함수, 즉시 실행 함수
    - 페쇄적인 환경을 만들기 위해서...
    - 네임 충돌 발생 방지
    - 자원 관리가 편하다.
*/
(function () {
    //이곳에서 코딩하는 모습을 자주 볼 수 있다.
    var num = 100;

    function test() {
        console.log('test');
    }
})();

console.log(num);
test();


//클래스X -> 생성자 함수
//요구사항] 동일한 타입의 객체를 3개 생성
var n1 = {
    name: '홍길동',
    age: 20
};
var n2 = {
    name: '아무개',
    age: 25
};
var n3 = {
    name: '하하하',
    age: 27
};

/*
    생성자 함수
    - 이름이 파스칼 표기법
    - this: 나중에 생성될 객체
 */
function User() {
    this.name = '홍길동';
    this.age = 20;
    this.hello = function () {
        console.log(this.name, this.age);
    };
};

//생성자 함수는 단독 호출(X) -> 반드시 new 연산자와 함께 사용
var user = new User();
console.log(user);
user.hello();


function Member(name, age) {
    this.name = name;
    this.age = age;
}
var m1 = new Member('홍길동', 20);
var m2 = new Member('아무개', 22);
var m3 = new Member('하하하', 27);

console.log(m1);
console.log(typeof m1); //object
console.log(m1.constructor); //[Function: Member]

console.log(user);
console.log(typeof user); //object
console.log(user.constructor); //[Function: User]

/*
    모든 객체는 object 자료형 이기때문에 객체를 구분할 땐 typeof로는 확인을 못한다. 따라서, constructor로 확인한다.
*/
var list = [];
list = new Array(); //Array라는 이름의 생성자 함수
console.log(typeof list); //object
console.log(list.constructor); //[Function: Array]

var now = new Date(); //Date란 이름의 생성자 함수
console.log(now.constructor); //[Function: Date]

console.log(m1 == m2);
console.log(m1 == user);
console.log(m1.constructor == m2.constructor); //true
console.log(m1.constructor == user.constructor); //false