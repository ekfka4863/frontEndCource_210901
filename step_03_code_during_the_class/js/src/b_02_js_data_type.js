// b_02_js_data_type.js

// cf. 형태입을 파악하는 기능 -> typeof 값이나 변수명 / typeof(literal) 
// cf. 숫자로 보이는 문자 ('1')을 강제로 숫자형 타입으로 변환하는 함수들이 있다. 
//      -> parseInt(변수), parseFloat(변수), Number(변수) 

'use strict';      // 엄격한 모드


// 데이터 타입: 숫자(number)
var num = 7;
var num2 = num;
    num = 10;
    // num2 = num;

console.log(num, typeof(num));
console.log(num2, typeof(num2));



// 데이터 타입: 문자(string)
var str = '';
    str = '123';
var str2 = str;
    str = '문자';

console.log(str, typeof(str));
console.log(str2, typeof(str2));

var str3 = str2 + 567;  // 문자 + 숫자 -> 문자의 나열 -> '123' + 567 -> '123567'
console.log(str3, typeof(str2));

var str4 = parseInt(str2) + 567;
console.log(str4, typeof(str4));

var str5 = Number(str2) + 567;
console.log(str5, typeof(str5));
// 단, Number(100px) => NaN;  BUT!!  parseInt(100px) => 100; 
// 즉, parseInt();는 첫글자부터 시작해서 정수 숫자로 변환가능한 것까지만 숫자화 처리 (나머지는 버림)
// parseFloat();는 첫글자부터 시작해서 실수 숫자모두 숫자로 변환가능한 부분까지 숫자로 처리 (나머지는 버림)
// Number();는 문자든 숫자든 관계없이 모두 숫자로 변환처리 

console.log(typeof('50.4%'));        // string
console.log(parseInt('50.4%'));      // 50
console.log(parseFloat('50.7%'));    // 50.7
console.log(Number('50.7%'));        // NaN = Not a Number 가 값임. 하지만 
console.log(parseInt('auto 50.4%'));      // NaN -> 첫글자부터 숫자로 못바꾸니까 타입은 비록 강제로 number로 바꿀지언정, 그 값은 NaN
console.log(parseFloat('auto 50.7%'));    // NaN
console.log(Number('auto 50.7%'));        // NaN

var nan = NaN;
console.log(nan, typeof(nan));       // NaN 'number' -> 왜 근데 타입은 숫자형? 왜냐면 일단 강제로 숫자를 만들었으니까 숫자는 맞다고 해줄게.. 근데 그게 뭔지는 몰라!


// Math 함수 
var n = 5.54;
console.log('올림처리', Math.ceil(n));
console.log('내림처리', Math.floor(n));
console.log('반올림처리', Math.round(n));
console.log('0~1까지의 난수', Math.random(n));
console.log('0~1까지의 난수', Math.random(n) * 10);
console.log('0~1까지의 난수', Math.random(n) * 100);
// 랜덤으로 로또기기 만들때...
console.log('0~1까지의 난수', parseInt(Math.random(n) * 64));
console.log('절대값', Math.abs(n));
// cf. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math



// 데이터 타입: 논리(boolean)
// 논리형은 결과를 true/false로 확인하여 처리하지만, 그 결과를 확인하는 검증이 매우 많다.
// ! -> 반대, === -> 형타입까지 일치하는지 비교/판단

var bool = false;
    bool = !false;                 // true
console.log(bool, typeof(bool));   // true 'boolean'

console.log('비교', 1 == '1');     // 데이터 타입 고려 X
console.log('비교', 1 === '1');    // 데이터 타입도 고려 O

console.log(n);     // 존재하는 값에 !를 붙이면 값이 없다는 의미로 -> false가 되지만, 하지만 실제로 이렇게 사용하는 경우는 "값이 있느냐 없느냐를 판단할 때"이다. 
                    // 그래서 ... 이렇데 "판단용"으로 쓰면 !을 한번 더... 
console.log(!!n);   // true -> 값이 있다 
console.log(!!0);    // false -> 값이 없다  
console.log(!!-7);   // true -> 값이 있다 


// 데이터 타입: undefined
var und;
console.log(und, typeof(und));    // undefined 'undefined'

und = 'undefined';               
console.log(und, typeof(und));    // undefined string

und = undefined;
console.log(und, typeof(und));    // undefined 'undefined'

und = undefined + 'result!';
console.log(und, typeof(und));    // undefinedresult! string -> 미정의된 값인 undefined와 문자를 합치면 string이 된다 .



// 데이터 타입: null
var nul;
console.log(nul, typeof(nul));    // undefined 'undefined'

nul = null;
console.log(nul, typeof(nul));    // null 'object' -> 버그!! 

// null과 undefined는... null은 값이 없다는 의미로, undefined는 값이 아직 미정의 되었다는 의미로 특수한 형타입으로 분류되던 자료구조였으나, 
// 현재는 단순히 값을 (의도적으로) 누락시킨다라는 의미로만 존재 한다

console.clear();

// -------------------------------------------------------
// object/function 형타입은 단순 한가지의 개념을 가지고 있는 것이 아니고, 여러 형타입을 담은 복합성의 특징이다
// 그렇기에, object/function 형타입으로 사용할 변수처리는 참조변수 개념으로 처리 
// 일반 변수 = 단순 값을 가지는 변수 // 참조 변수 = 값을 가지는 변수가 아니라 어느 공간 (주소)를 공유하는 변수 

// e.g. 
// 일반변수 - 사과 (값)     -> 1일 1개인 경우는 내가 직접 들고있으면 되지만, 
// 참조변수 - 사과 창고 (값을 담는 공간) -> 양이 늘어나면 별도의 공간에 담아야 하는 것과 같이, 해당 공간을 공유한다. 

// + js는 순서를 첫번째가 0부터 처리한다 -> cf. 배열의 인덱스는 첫번째가 [0]으로 시작한다 

// 데이터 타입: object
// 1. array -----------------------------------------------
var arr = ['키보드', '마우스',  '모니터', '노트북', '웹캠'];
console.log(arr.constructor === Array);     // true
console.log(arr, typeof(arr));
console.log(arr[3]);
arr[5] = '마이크';
console.log(arr[5], arr);
console.log(arr[5], arr[9]);   // 마이크 undefined

arr[9] = '웹캠';
console.log(arr[5], arr[6]);  
console.log(arr[9], arr);   

// var arr2 = arr;
// console.log(arr2);            // ['키보드', '마우스', '모니터', '노트북', '웹캠', '마이크', 비어 있음 × 3, '웹캠']
// arr[9] = '빼빼로'; 
// console.log(arr);             // ['키보드', '마우스', '모니터', '노트북', '웹캠', '마이크', 비어 있음 × 3, '빼빼로']
// // 참조 공유
// console.log(arr2);             // ['키보드', '마우스', '모니터', '노트북', '웹캠', '마이크', 비어 있음 × 3, '뺴뺴로']

console.clear();

// var arT = Array();
var arT = new Array();         // 가방이 필요하면 기본 형태가 있는 원본 가방을 하나더 만들어 진걸 구매하여 가방을 하나 얻은 것. 단, new를 안사용하면 원본 그대로를 가져온 격이 되는 것.
console.log(arT);             // []
arT[0] = '물';
arT[2] = '약';
console.log(arT);
// new Array() 사용하여 배열을 생성하는 방식은 권장하지 않는다 -> 바로 [] 작성 후 바로 수행 

var arA = [];
arA[0] = '물';
arA[1] = '약';
console.log(arA);

arA.push('커피');
arA.push('쥬스');
arA.push('밥');
console.log(arA);

arA.unshift(5);
arA.unshift(0);
console.log(arA);

arA.pop();
console.log(arA);
arA.pop();
console.log(arA);
arA.shift();
arA.shift();
console.log(arA);
// cf. http://blog.302chanwoo.com/2017/08/javascript-array-method/

console.clear();

// 데이터 타입: object
// 2. object -----------------------------------------------
var obj = {};
// var objT = new Object();

console.log(obj, typeof(obj));
console.log(obj.constructor === Object);    // .constructor -> ?? -> cf. https://luvstudy.tistory.com/20

obj.apple = 'iphone';
obj.samsung = 'galaxy';
obj.google = 'pixel';
console.log(obj);
console.log(obj.google);
// obj.농심 = '너구리';
obj['농심'] = '너구리';
// obj.오뚜기 = '진라면';
obj['오뚜기'] = '진라면';
obj['한국야쿠르트'] = '건국우유';     // 유효하지 않은 프로퍼티 키나, 네이밍 컨벤션에 부합하지 않는 방식으로 프로퍼티 키를 작성할 경우 대괄호 [] 와 따옴표 ''로 감싸서 프로퍼티 키를 적어준다.
// cf. 왜 그럼 이렇게 .표기법과 [] 표기법, 2 가지가 있나요? 여기서 배열도 객체, 객체도 객체라고 하는 이유가 있음!
// e.g. 
var obj2 = {};
obj2[0] = '마이크';
obj2[1] = 'pen';
obj2[2] = '텀블러';
console.log(obj2);
// 배열과 굉장히 유사! 


console.clear();

// 데이터 타입: object
// 3. function -----------------------------------------------
var fn = function(a) {
  // a는 매개변수(parameter), 인수/인자(argument)  
  // return 문은 마지막에 작성하는 것으로, 어쨋든 간에 최종 결론은? 
  return 1 + a;
};

console.log(fn);           // ƒ (a) {return 1 + a;}
console.log(fn(5));        // 6

var fn2 = function(a, b) {
  var c = a + b;
  // return false;         
  return c;                
}

console.log(fn2(1, 6)); // 7     

// 함수의 사용 이유: 반복되는 코드, 기능을 들어가는 값만 바꿔서 재사용 하기 위해 ...

console.log(fn2(4, 50));   // 54
console.log(fn2(4, 80));   // 84
console.log(fn2(44, 80));  // 124
console.log(fn2(41, 4));   // 45



// 함수의 기본형태 : function() {}  
// 이름을 갖고있는 함수 -> 기명함수 -> 기명함수로 함수를 선언하는 방법 -> "함수 선언식" -> 기본형태: function 이름() {}
// 이름을 부여하지 않은 함수 -> 익명함수 -> 익명함수로 함수를 선언하는 방법 -> "함수 표현식" -> 이름이 없기에 대신 이름을 할당할 수 있는 무언가를 선언(변수선언): var 변수명 = function() {}
// 근데 왜 이렇게 2가지의 방법? -> 함수 호이스팅 때문에! 

// e.g.

// 함수 선언식 -> 미리 처리됨
console.log(fn3());       // test

function fn3() {
  return 'test';
}
console.log(fn3());       // test


// 함수 표현식 -> 권장! 함수 호이스팅으로 인해, 함수선언식처럼 미리 함수가 호출 되기도 전에, 기능이 구현 되기도 전에 값으로 평가되어 지는 것을 방지... -> 차라리 함수 선언식보다는 함수 표현식을 써라! 
// console.log(fn4());         // Uncaught TypeError: fn4 is not a function
console.log(fn4);         // undefined

var fn4 = function () {
  return 'test2';
}

console.log(fn4());       // test

console.clear();

// ------------------------------------------------------------------
var x = 'hero';                 // 광범위한 범위를 가지고 있다 -> 전역 변수 

function ckFn() {
  var y = 'xido';               // y의 사용 범위는 function ckFn() {} 내부에서만 동작 가능하기에 -> 지역 변수
  console.log(x, y);
  return y;
}

// 1. console.log(x);      // 콘솔의 결과: hero
// 2. ckFn();              // 콘솔의 결과: hero xido, 반환(return)된값: xido
// 3. console.log(y);      // 콘솔의 결과: Uncaught ReferenceError: y is not defined

// 4.
var rel = ckFn();
console.log(rel);       // xido


// e.g. 
function ckFn2() {
  var x = 'who?';
  // x = 'who?';  // who?   -> 함수 내부에서 var 선언을 하면 새로운 지역변수가 생성되어 위의 전역변수 x와는 다른 변수가 생성된 것. 하지만 var 없이 x를 적고 그에 새로운 값을 주면, 재할당 하곘단 의미! 

  return x;       // x에 대한 값을 내보낸거지 변수 자체를 내보낸 것이 아니기 때문에, 변수를 밖에서 console.log(x); 해도 출력 X!!! 
}

console.log(x);   // hero
ckFn2();
console.log(x);   // hero


// --------------------------------------------------------------------------
// (function(){})()    // 즉시실행함수: 익명함수의 기다림없이 바로 실행 
// (function(){}())    // 즉시실행함수: 익명함수의 기다림없이 바로 실행 

// e.g.
var body = document.querySelector('body');
  (function(int) {
    var wrap = document.createElement('div');
    wrap.setAttribute('id', 'wrap');
    int.append(wrap);
  })(body);

// --------------------------------------------------------------------------
// 정리

// 형타입
// 1. 숫자 -> 값을 더하면 계산이 된다
// 2. 문자 -> 값을 더하면 연결되어 처리된다. 또는 내가 작성할 때 ' ' 안에 내용을 작성한다.
// 3. 논리 -> 내용을 비교(===, !==, ...)하여 맞으면 true, 아니면 false 를 도출
// 4. undefined -> 존재는 하는 녀석인데 값은 없음
// 5. null -> 언제쓰임? ... 패스...!
// 6. 객체 -> 배열/객체 -> 모르겠고 그냥 배열과/객체로 분리해서 일단 기억한다 
// 6-1. 배열 -> 상세내용 없이 오로지 대괄호 [] 안에 목록만 나열 
// 6-2. 객체 -> 무엇에는 무엇이 있다 (속성명: 값)으로 존재하는 정의된 내용을 중괄호 {} 내부에 나열 (cf. CSS 속성명이랑 값 작성하는 것처럼...)
// 7. 함수 -> 선언식 vs 표현식 vs 즉시실행 ... 일단 function() {} 이렇게 생겼고, 이를 호출하기 위해 이름이 필요 
// 7-1. 함수에 이름을 다는 방법 (함수 선언식)이 있지만, 함수 표현식 (cf. 변수명 = function() {})으로 처리하는 것을 권장
// 7-2. 함수에 return이라는게 있는데 최종 결론 도출해주는 반환문
// 8. 스코프(범위): 변수가 사용할 수 있는 범위 - 전역/지역

console.clear();

// -----------------------------------------------------------------
// 연습 문제 1 

var a = '2021년';
var b = '11월';
var c = '04일';
var dot = '. ';

// solution 1)
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

var date;
date = a + dot + b + dot + + '0' + c;  // '2021. 11. 04'


// solution 2)
var intFn = function(i) {
  return parseInt(i);
};
// intFn(a);    
// intFn(b);    
// intFn(c);   
date = intFn(a) + dot + intFn(b) + dot + '0' + intFn(c);



// -----------------------------------------------------------------
// 연습 문제 2 - 랜덤 문자열 뽑아내기
// cf. Math.random(); -> 0~1 미만의 난수
//     Math.random() * 10; -> 0~10 미만의 난수
//     Math.random() * 5; -> 0~5 미만의 난수
//     Math.random() * 3; -> 0~3 미만의 난수
// 응용-1: Math.floor(Math.random() * 3); -> 0~2 사이의 난수 
// 응용-1: Math.floor(Math.random() * 3) + 1; -> 1~3 사이의 난수 
// 응용-2: parseInt(Math.random() * 7); -> 0~6 사이의 난수 
// 응용-2: parseInt(Math.random() * 7) + 1; -> 1~7 사이의 난수 

var random_sentence = [];
random_sentence[0] = '오늘도 고생하셨어요!';
random_sentence.push('힘내세요.');
random_sentence.unshift('내일도 또 다시!!!');
// console.log(random_sentence);

var user = function(user) {

  var random_num = Math.floor(Math.random() * random_sentence.length);

  return user + ' ' + random_sentence[random_num];;
};

var userRel = user('xx');
console.log(userRel);      // 1. xx님 오늘도 고생하셨어요!  // 2. xx님 힘내세요.  // 3. xx님 내일도 또 다시!!!


// ------------------------------------------------------------------------------------
// 2021-11-05-금
// js에서 id명을 선택하는 방법 2가지 
// 1. document.getElementById('아이디명');
// 2. document.querySelector('#아이디명');    // querySelector는 나중에 추가된 속성. 아직 지원하지 않는 브라우저도 있다. 그리고 ''안에는 아이디 명 뿐만 아니라 css와 동일한 선택자 모두 들어갈 수 있다. e.g. 클래스명 

// 요소 생성하는 방법 (2가지) 
// 방법 1. document.createElement('요소명');    // 요소를 (그저) 만들겠다는 것 -> e.g. document.createElement('div'); 
// 방법 2. 선택자.innerHTML = '요소';           // 태그를 (이미 있는 HTML) 요소에 집어넣겠다는 것 -> e.g. 선택자.innerHTML = '<div></div>'; -> 선택자.innerHTML = document.createElement('div'); 
// 다른점: 1.은 생성해서 어딘가에 넣을 "준비"를 하는 것이고, 2.는 기존 선택자 내부에 존재하는 것을 삭제
// cf. 선택자.append(요소);   // 선택자 내부 뒤에 요소를 삽입 (단, text 형태는 글자로 삽입) -> e.g. 
// 응용: 
var wrap = document.getElementById('wrap');
var p = document.createElement('p');
p.innerText = userRel;        // text 넣는 방법 
wrap.append(p);               // cf. https://developer.mozilla.org/en-US/docs/Web/API/Element/append


// ------------------------------------------------------------------------------------
// 변수는 데이터를 담는 그릇. 
// 사용 방법: var 변수명 = 담고싶은 값;

// 함수는 어떠한 값을 만드는 (처리)방법.
// 사용 방법: var 변수명 = function(){return ______;};
// 함수는 호출을 해야지만 값이 반환됨.
// 호출 방법: 함수를담은변수명();

// e.g.
// 변수는 '햄버거'라는 값을 담는 그릇
// 함수는 '햄버거'를 만드는 방법
var burger = '치즈버거';
var burgerFn = function() {
  return '치즈버거 만드는 방법 나 알아요. 기다려 봐요~ 치즈버거 줄게요~';
};

// e.g.2
var myBurger = '핫스파이스버거';
console.log(myBurger);

var selectBurger = function(재료) {
  var primary = 재료;
  var burgerDone = '빵 위에 ' + '양상추 ' + primary +  ' 기타등등 ' + '소스 ' + '빵 아래거';

  return burgerDone + '가 담긴 버거';
};
selectBurger('새우');
selectBurger('소고기');

// e.g. 3
var fnCall2 = function() {
  return 'this is game';
};
// function () {};
fnCall2();



console.clear();

// ------------------------------------------------------------------------------------
// 사칙연산
var sum = function (a, b) {
  var result = a + b;
  return a + ' + ' + b + ' = ' + result;
};
var minus = function (a, b) {
  var result = a - b;
  return a + ' - ' + b + ' = ' + result;
};
var mul = function (a, b) {
  var result = a * b;
  return a + ' * ' + b + ' = '  + result;
};
var divide = function (a, b) {
  var result = parseInt(a / b);
  return a + ' / ' + b + ' = ' + result;
};
var avg = function (a, b) {
  var result = a + b / 2;
  return a + ' + ' + b + ' / 2 = ' + result;
};
var remainder = function (a, b) {
  var result = a % b;
  return a + ' % ' + b + ' = ' + result;
};

var a = 10;
var b = 5;

sum(a, b);          // 덧셈: 'a + b = ' 값
minus(a, b);        // 뺄셈: 'a - b = ' 값
mul(a, b);          // 곱셈: 'a * b = ' 값
divide(a, b);       // 나눗셈: 'a / b = ' 값   -> 정수값만 도출 
avg(a, b);          // 평균: 'a * b / 2 = ' 값
remainder(a, b);    // 나머지: 'a % b = ' 값


// 더 응용해버리기
a = parseInt(Math.random() * 100) + 1;    // 1 ~ 100 사이의 수 중 랜덤 
b = parseInt(Math.random() * 100) + 1;    // 1 ~ 100 사이의 수 중 랜덤


// ------------------------------------------------------------------------------------
// e.g. 
// 가이드라인:
// 빈배열을 만들어서 함수를 수행할 때 마다 return값을 배열에 각각 다 담도록 처리하라!
// 계산 히스토리를 만들수 있게... 
// console.log(arr);

var arr = [];   


// 매개 변수로 들어갈 값 지정하기 
var a = 10;
var b = 5;

// 사칙연산
var sum = function (a, b) {
  var result = a + ' + ' + b + ' = ' + (a + b);
  arr.push(result);               // 배열에 값 추가 
  return result;                  // 값 반환 
  // return arr.push(result);     // 배열에 값 추가 -> 값은 반환 안하니까 이렇게는 비추!
};
var minus = function (a, b) {
  var result = a + ' - ' + b + ' = ' + (a - b);
  arr.push(result);               
  return result;  
};
var mul = function (a, b) {
  var result = a + ' * ' + b + ' = '  + (a * b);
  arr.push(result);               
  return result;  
};
var divide = function (a, b) {
  var result = a + ' / ' + b + ' = ' + (parseInt(a / b));
  arr.push(result);               
  return result;  
};
var avg = function (a, b) {
  var result = a + ' + ' + b + ' / 2 = ' + (a + b / 2);
  arr.push(result);               
  return result;  
};
var remainder = function (a, b) {
  var result = a + ' % ' + b + ' = ' + (a % b);
  arr.push(result);               
  return result;  
};


sum(a, b);          // 덧셈: 'a + b = ' 값
minus(a, b);        // 뺄셈: 'a - b = ' 값
mul(a, b);          // 곱셈: 'a * b = ' 값
divide(a, b);       // 나눗셈: 'a / b = ' 값   -> 정수값만 도출 
avg(a, b);          // 평균: 'a * b / 2 = ' 값
remainder(a, b);    // 나머지: 'a % b = ' 값
