// b_12_js_built_in_function.js


// ----------------
// 내장함수: js에서 미리 만들어진 함수 
// e.g. alert();
var message = "별도의 메세지창을 띄워확인";
// alert(message);   // 우리는 alert() 라는 함수를 만든 적이 없다는 사실! 하지만 사용할 수있다는 사실!

// ----------------
// e.g. prompt();
// var userAge = "나이를 입력하세요";
// var promptResult; // = prompt(userAge);   // 이거 비활성화 시켜놈!

// 조건식
// if (promptResult < 20) {
//   location = "https://naver.com";
// } else {
//   document.write("어서오세요");
// }

// 응용: 삼항연산자
// (promptResult < 20) ? location = "https://naver.com" : document.write("어서오세요");


// ----------------
// e.g. confirm();
// var adultCheck = "당신은 성인이신가요?";
// var confirmResult = confirm(adultCheck);
// (confirmResult) ? document.write("성인이시군요!") : document.write("미성년자임을 확인했습니다.");


// ----------------
// e.g. console.___(); 시리즈 -> 내장함수 
// 이때, console은 객체다.  
/*
console.log();
console.warn();
console.error();
console.info();
console.dir();
console.table();
console.time();
console.timeEnd();
console.group();
console.groupEnd();
... 등등 많다 ... 
그리고 이것들은 모두 console이란 객체에 사용하는 
내장 함수(e.g. log(); warn(); error(); ... -> e.g. log: function() { return arguments } 의 형태라고 상상...100% 이렇게 생기진 않았겠지만...)들이다... 
*/

var arr = ['one', 'two', 'three', 'four', 'five'];
var obj = {'a': 'one', 'b': 'two', 'c': 'three'}

// console.log(arr);
console.table(arr);
console.table(obj);

// 아래 세가지 한번에 같이 사용. 
// 스톱워치처럼 생각하면 된다. 
// 시작시간과 console.log(arr); 되는 시간, 끝나는 시간을 콘솔에 출력하기 
console.time();
console.log(arr);
console.timeEnd();

console.clear();


// ----------------
// e.g. 
var random = Math.ceil(Math.random() * 10);   // 1 ~ 10 사이의 난수 
console.log(random);

// cf. parseInt(), parseFloat()


// ----------------
// e.g. 단위 

var num = 20.456789;
var num2 = '50.9876543vw';
var unit = '30px';

console.log(num);
console.log(parseInt(num));      // 20
console.log(parseFloat(num2));  // 50.9876543
console.log(parseInt(unit));    // 30



console.clear();

// ----------------
// e.g. 
// 정의: 강제로 문자형식을 숫자로 치환하여 임의계산까지 완수하는 함수 
// 유의: 하지만 typescript가 나온 현시점에서는 타입의 체크에 대한 중요성이 높아졌기 때문에 쓰기에 다소 문제가 있어보인다
// 다시, eval()은 문자열을 코드로 인식하게 하는 함수이다. 
var sum = eval('5' + '5');         // 55 -> 숫자 타입 -> 즉, 문자열로 인자를 받았어도, '문자열 + 문자열'로 처리한 뒤 숫자형으로 강제 타입 변환 
var sum = eval('5 + 5');          // 10 -> 숫자 타입 -> 즉, 문자열로 인자를 받았어도, '문자열'들을 강제로 숫자형으로 타입변환 후 계산 
var sum = eval('문자열' + '5');   // 에러발생 -> 특징2: eval() 함수는 인자로 숫자만 올 수 있음.
// cf. eval(new String("2 + 2")); // "2 + 2"를 포함한 String 객체를 반환
//     https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval
console.log(sum);



var n = '7' / 7;    // 1 -> 암묵적 타입변환
// var n = '7' / 4;    // 1.75  -> 암묵적 타입변환
// var n = '7' * 4;    // 28  -> 암묵적 타입변환
// var n = '7' - 4;    // 3 -> 암묵적 타입변환
var n = '7' + 4;      // 74  -> 이건 문자열 이어주기~

console.log(n);


var n1 = 7;
var n2 = '5';
var n = n2 - n1;         // -2
// var nRel = isNaN(n);    // false 
// console.log(n, nRel);  // -2  false 



console.clear();


// ----------------
// e.g. 
var space = ' ';
var encodeS = encodeURI(space);  
console.log(space, encodeS);
// cf. 인코딩 = 코드화, 암호화를 의미한다.
// 먼저, Encode란 데이터를 다른 포맷(형식)으로 변환하는 것이다. URL의 Encode는 URL에 있어 사용 불가능한 문자의 변환을 실시하는 프로세스를 일컫는다.
// https://engineer-mole.tistory.com/120

// cf. uri = 인터넷 식별자 (현재 웹표준 인코딩 방식인 UTF-8형식으로) 
//         -> 인터넷에서 식별가능한 형태로 변환하는 함수 
//         -> 단, 변환불가능한 텍스트: A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
//           다시, encodeURI는 URI에 있어서 특별한 의미를 가진 예약 문자 '/' ':' '&' '+' '=' 등에 관해서는 Encode가 되지 않도록 되어 있다


var char = 'ㅁ';
var encodeS = encodeURI(char);  
console.log(char, encodeS);    // ㅁ %E3%85%81


// cf. uri = 인터넷 식별자 (현재 웹표준 인코딩 방식인 UTF-8형식으로) 
//         -> 인터넷에서 식별가능한 형태로 변환하는 함수 
//         -> 단, 변환불가능한 텍스트: A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
var url = 'http://naver.com';
var encode = encodeURI(url);      // http://naver.com
var encode = encodeURIComponent(url);   
console.log(encode);    // http%3A%2F%2Fnaver.com


// cf. decodeURI(), decodeURIComponent()
var korea = 'https://대한민국.kr';
var encode = encodeURI(korea);
console.log(korea, encode);   // https://대한민국.kr https://%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD.kr

var decode = decodeURI(encode);   
var decode = decodeURIComponent(encode);   

console.log(decode);         // https://대한민국.kr



console.clear();

// ----------------
// e.g. 
// setInterval: 일정시간마다 수행 
// clearInterval: setInterval을 강제 삭제 
// setTimeout: 시간을 지정하고 지정된 시간에 함수를 실행하게 만든다.
// clearTimeout: 위에서 실행한 그 함수를 취소할 때 사용한다.
// http://lab.naminsik.com/1862

// setTimeout
// console.log('글자 등장!!!');
// setTimeout(function() {
//   // console.time();
//   console.log('1초 뒤에 등장~!');
//   // console.timeEnd();
// }, 1000);

// // setInterval - 슬라이더 배너에 활용 가능
// var i = 0;
// var setI = setInterval(function() {
//   // console.log('i: ',i);
//   console.table(i);

//   // if(i >= 20) {
//   //   i = 0;
//   // } else {
//   //   i++;
//   // }

//   // cf. 슬라이더 배너에 활용 가능
//   // (i >= 5) ? i = 0 : i++;
//   // i++;

//   i++;
//   if (i > 20) {
//     clearInterval(setI);
//   } 
// }, 500);


// cf. window.requestAnimationFrame() vs setInterval 
// setInterval은 브라우저를 바꿔도 브라우저 자체가 꺼지지 않는 이상 계속 돌아간다 
// 하지만 같은 기능의 window.requestAnimationFrame()는 브라우저 화면을 바꾸면 수행을 멈춘다 
// https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame



console.clear();

// ----------------
// e.g. 생성자 함수, instance 
// 생성자 함수 - 객체의 생성 시에만 호출되어 메모리 생성과 동시에 객체의 데이터를 초기화하는 역할 
// instance - 추상화 개념 또는 클래스 객체, 컴퓨터 프로세스 등과 같은 템플릿이 실제 구현된 것

/*
다시...
- 생성자 함수 - 유사한 객체를 만들어낼때 효율적으로 중복되는 코드 없이, 여러개의 객체들을  만들어 내기 위해 필요한 함수 -> like) 붕어빵 틀
- 인스턴스 - 생성자 함수로 생성된 객체들 - like) 슈크림이 들어간, 팥이 들어간 … 붕어빵들
1. 생성자 함수는 대문자로 시작한다
2. 생성자함수로 객체를 만들때는.. 즉, 인스턴스를 생성할 떄는 new 연산자를 사용해야 한다
*/
var date = new Date();   // new가 붙으면, 생성자 함수로 하나의 객체를 생성하겠다는 의미. 그리고 생성자 함수에 의해 생긴 객체를 인스턴스라고 한다.  
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(year, month, day); // 단, js에서 1월은 0으로 표기된다. 그래서 위에서 month + 1을 해준 것!

// cf. 원시 함수 - 생성자 함수이자 내장함수. (단, 원시함수는 내장함수라고 하기에는 있는 그대로 바로 사용할 수 없다는 점이 다름!) 
// js를 구성하는 함수, js의 형타입을 (근본적으로) 구성하게 하는 최소한의/이미되어져 있는 세팅 
// e.g. Number(), String(), Boolean(), Date(), Function(), Object(), Array(), ...

// 다시!!!!! 
// 그럼 쌤 생성자함수는 붕어빵틀, 
// 인스턴스는 붕어빵틀로 만든 슈크림이 들어간, 팥이 들어간 붕어빵 들… 이라고 하고, 
// 원시함수는 붕어빵틀을 만들기 위한 도안? 설계도? 그 근본적인 source 라고 생각하기! 
// 그래서 원시함수는 내장함수처럼 있는 그대로 사용할 수 없다! 그 근간이 되는 아이니까 ~ 

// 쌤이 다시!! 
// 원시함수: 애초에 언어가 만들어진 기본 개념을 담은 함수, 첫 글자가 대문자이다 
// 내장함수: 기본형태로 사용할 수 있도록 만들어진 함수 
// 생성자 함수: 원함수를 그대로 사용하는게 아닌 이를 객체로 변환하여 사용하는 함수. 첫글자가 대문자. 
// instance: 함수를 객체로 변환 처리. new연산자와 함께 생성자 함수를 사용하여 만들어진 객체 자체를 의미.
// 위의 4가지 중 우리가 변경/생성 할 수 있는 함수는 -> 생성자함수 
// 처음부터 생성된 함수는 변경이 불가능 -> 원시함수나 내장함수들은 변경이 불가능. 

// 그리고... 
// 생성자 함수랑 일반함수랑 다른 점
// 일단 일반 함수랑 다른점은 -> 1. (통상적으로) 대문자로 시작 2. new 연산자와 같이 사용 3. this 키워드를 사용 
// e.g. 
var Fn = function(a, b) {  // 1. 대문자로 시작하는 일반함수지만 생성자 함수로 사용될 함수 
  this.name = a;           // 3. this와 같이 사용 
  this.age = b;
  console.log(this);      // 여기서 this는 browser/window/전역객체 
};

// 2. new 연산자로 afn이란 객체를 생성. 안에 매개변수로 'xido'와 10을 넣어서 새로운 객체 Fn { name: 'xido', age: 10 } 가 생성된다 
var afn = new Fn('xido', 10);   // 이때 this가 가리키는 것은 새로 생성된 객체
console.log(afn.name);
console.log(afn.age);



console.clear();

// ----------------
// e.g. 
var ul = document.querySelector('ul');
var li = document.querySelector('li');
var li2 = ul.children;
console.log(li);
console.log(li2);

// li2.forEach(function(d){
//   console.log('li: ', d);
// });

// 유사배열객체를 프로토타입에서 아래의 함수를 사용하여 배열로 만들수있다.
// Array.prototype.join().call(li2);
// Array.prototype.join().apply(li2);
// Array.prototype.join().bind(li2);
// https://velog.io/@josworks27/%ED%95%A8%EC%88%98%ED%98%B8%EC%B6%9C-call-apply-bind-%EC%B0%A8%EC%9D%B4
// https://wooooooak.github.io/javascript/2018/12/08/call,apply,bind/

// Difference between HTMLCollection, NodeLists, and arrays
// https://stackoverflow.com/questions/15763358/difference-between-htmlcollection-nodelists-and-arrays-of-objects
// https://devsoyoung.github.io/posts/js-htmlcollection-nodelist
// https://stackoverflow.com/questions/29707568/javascript-difference-between-array-and-array-like-object


// 유사배열이 존재하는 이유: 
// li들의 요소를 단순 나열하여 배열로 처리하는 것인지, 객체로 모은 형식인지에 따른 차이점 

var arr = ['a', 'b', 'c'];
var arr2 = {0: 'a', 1: 'b', 2: 'c'};     // 유사배열객체 -> 객체! 





















// 혼란!!!!!!!!!!!!!!!
// 혼란!!!!!!!!!!!!!!!
// 혼란!!!!!!!!!!!!!!!
// 혼란!!!!!!!!!!!!!!!
// 혼란!!!!!!!!!!!!!!!
// 혼란!!!!!!!!!!!!!!!
// --------------------------------------------
// <extra information>

// 생성자함수 이해하기  - JS는 객체를 만드는 다양한 방법을 제공한다 
var obj = {};   // 1. 빈객체 생성 - 객체 리터럴

var person = new Object(); // 2. 빈객체 생성 - Object() 생성자함수 (cf. 내장함수/빌트인객체/원시함수)


function Person(name, age) {     // 3. 생성자 함수 (cf. 객체의 추상화 - 붕어빵틀과 붕어빵들)   
  this.name = name; 
  this.age = age; 
  // console.log(this);
}

var daye = new Person('daye', 26);  // {name: 'daye', age : 26} -> 인스턴스 
var youngsun = new Person('youngsun', 28);

// 생성자 함수 vs 내장함수 (feat. 인스턴스)
생성자 함수는 내장함수일수도 있고 아닐 수도 있다.
만약 생성자 함수이면서 내장함수라면 -> Math.random, console.log() 요론 아이들 -- 우리가 만든적은 없지만, 이미 js에 
내장이 되어 있는 -- 다른 말로 하면 빌트인 함수들의 의미한다.
하지만 생성자 함수는 개발자가 직접 정의 할 수도 있다. 
e.g. 
function Person(name, age) {     // 3. 생성자 함수 (cf. 객체의 추상화 - 붕어빵틀과 붕어빵들)   
  this.name = name; 
  this.age = age; 
}
이런 "생성자"함수는 왜 생성자 함수일까? 
무언가를 생성해서 이다. 그게 뭐냐면 새로운 "객체"이다.
생성자 함수에 의해 생성된 객체를 우리는 "인스턴스" 라고 칭한다. 아래와 같이 ... 

var daye = new Person('daye', 26);  // {name: 'daye', age : 26} -> 인스턴스 
var youngsun = new Person('youngsun', 28);


// 원시 함수(그대로 가져다 쓸 수 없다) vs 내장함수(그대로 가져다 쓸 수 있다) 
우선 우리가 그동안 이런 형태의 함수같지만 직접적으로 메서드/내장함수처럼 사용할 수는 없는 아래와 같은 형태들을 종종 보았을 것이다. 
e.g. Number, String, Boolean, Date, Function, Object, Array, ... -> 원시 객체 (?? 질문 -> 이 아이는 콘솔창에 찍어보면 f가 뜬다. 그러면 이것은 원시 객체인가? 
  아니면 ... 원시 함수인가? 그리고 만약 Number -> 이런 형태가 원시 객체/원시 함수라면 Number와 Number();의 차이점은 무엇인가? )


e.g. Number(), String(), Boolean(), Date(), Function(), Object(), Array(), ...
Number.MAX_SAFE_INTEGER -> 속성 
Number.isNaN() -> 메서드 
Date - 원시 객체 
Date(); -> 직접 사용 불가 
그럼 어떻게 사용? 
Date.getFullYear(); -> 괄호는 Date라는 원시 객체의 속성값으로 들어있는 getFullYear라는 함수 즉 메서드를 호출하는 것이기 때문에 일반 함수를 호출하듯이 ()를 열고 닫아준다. 

var arr = [];
Array.length;     // 속성 ( 값 ) -> 상태를 나타낸다/ 값을 가지고 있다 
Array.isArray();  // 질문: 메서드 (함수 ) = 내장함수? 
arr.isArray();  // 질문: 메서드 (함수 ) = 내장함수? 

