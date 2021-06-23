//ex08_string.js

//문자열 함수

var txt = "hello!! hong!!";

/* 
    문자열 길이(문자 수)
    - '메소드'가 아닌, '프로퍼티' 라고 부른다.
*/
console.log(txt.length);

/*
    검색
    - indexOf()
    - lastIndexOf()
    - zero-based index
*/
console.log(txt.indexOf('o'));
console.log(txt.indexOf('o', 5));
console.log(txt.lastIndexOf('o'));
console.log(txt.indexOf('a'));

//대소문자 변환
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());

/*
    치환 
    - replace
    - 주의점이 자바와 달리 1번만 치환한다.
    - 모든 대상을 치환하려면 정규 표현식을 사용해야 한다.
*/
console.log(txt.replace('hong', 'lee'));
console.log(txt.replace('!', '?'));
console.log(txt.replace(/!/gi, '?'));

/* 
    추출
    - substring()
    - substr()
*/
txt = 'abcdefghijk';

console.log(txt.substring(2, 5)); //2번째부터 5번째까지 가져와
console.log(txt.substring(2)); 
console.log(txt.substr(2, 5)); //2번째부터 5글자 가져와
console.log(txt.substr(2));
console.log(txt.charAt(2));
console.log(txt.charCodeAt(2));

//문자 코드 비교 지원
console.log('A' > 'B');
console.log('홍길동' > '아무개');

//공백 제거
txt = '     하나   둘 셋   ';
console.log(txt.trim()); //시작, 끝 공백제거
console.log(txt.trimStart()); //시작 공백 제거
console.log(txt.trimEnd()); //끝 공백 제거
console.log(txt.trimLeft());
console.log(txt.trimRight());

//패턴 검색
txt = 'hyuk@';
console.log(txt.startsWith('h'));
console.log(txt.endsWith('@'));

//분할
txt = '홍길동, 아무개, 하하하, 호호호';
var temp = txt.split(',');
console.log(temp);
console.log(temp[0]);

// --> 치환 raplace, 추출 substr, substring 두개 있으니 헷갈리지말것, 나머지는 Java와 동일하다.