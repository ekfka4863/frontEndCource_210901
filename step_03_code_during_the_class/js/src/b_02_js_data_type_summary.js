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
// 사칙연산 - 함수 
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

