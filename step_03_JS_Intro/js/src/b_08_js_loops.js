// b_08_js_loops.js

// 1. while(){} ------------------------------------
// e.g. 
var i = 0;          // 필수요소 1 - 초깃값

while(i < 10) {    // 필수요소 2 - 비교

  console.log(i);  // - 수행 
  i+=1;           // 필수요소 3 - 변수 증강 
}

// 결과 0 1 2 3 4 5 6 7 8 9




console.clear();

// 2.do {} while() ------------------------------------
// e.g. 
var j = 0;
do {
  console.log(j);
  j+=1;
} while (j < 5);

// 결과: 0 1 2 3 4 

// e.g.2 
var j = 0;
do {
  j+=1;
  console.log(j);
} while (j < 5);

// 결과: 1 2 3 4 5



console.clear();

// 3. for() {} ------------------------------------
// e.g. 
// var y = 0;                   // 초깃값
for (var y = 0; y < 20; y+=2) {            // 초깃값; 수행; 변수 연산;
  console.log('y: ', y);    // 수행 
  // y+=2;                     // 변수 연산 
}

for (var y = 0; y < 20; y+=2) {      // 초깃값; 수행; 변수 연산;
  console.log('y: ', y);            // 수행 
}
console.log(y);    // 20
// while문보다 빠르다. 단, var를 썼기때문에 지역변수임에도 불구하고 외부에서도 접근가능해진다 (cf. 변수 호이스팅 현상)

// cf. 
for (let y = 0; y < 20; y+=2) {      // 초깃값; 수행; 변수 연산;
  console.log('y: ', y);            // 수행 
}
console.log(y);    // error!!


// cf. 
var y = 0;                   // 초깃값 -> 해석의 차이! 
for (; y < 20; y+=2) {      // ; 수행; 변수 연산;
  console.log('y: ', y);            // 수행 
}
console.log(y);    // 20 



console.clear();


// e.g. 
// 문제: 2021년을 기준으로 과거 50년을 모두 도출하시오.

var year = 2021;
for (; year > 1971; year--) {
  console.log('year: ', year);
}

console.log(year);    // 1971

// cf. 
// 2021년 기준으로 과거 10년을 모두 도출하려면 ... 
// 조건은 ->    year > 2011    -> 가 되야한다... 왜냐면 그래야만 아래와 같이... 
// 2021 2020 2019 2018 2017 2016 2015 2014 2013 2012   -> 총 10개의 년도가 출력될것이고 ... 
// 그러면 그 원리대로 ... 
// 2021 ~ 1971 사이의 년도를 출력하고 싶으면 ... 
// // 조건은 ->    year > 1971    -> 가 되야한다...
// 그래야 2021 2020 2019 ... 1972 까지 출력해서 -> 1971년 직전, 총 50개의 년도가 출력될 것이다 


// teacher's solution
var yy = 2021;
var text = '년';
var targetY = 2021-50;

for (; yy >= targetY; yy -= 1) {
  console.log(yy + text );
}


// ------------------------------------------------
// 생성자를 사용하는 방법 
// 1. 첫글자가 대문자 
// 2. 생성자 그대로 사용하는 것이 아닌 해당하는 함수를 "new" 연산자를 붙여 복제하여 사용한다 
// 3. (생성자) 함수 중에 기존에 존재하는 함수를 내장함수라고 불리우며, 생성자 함수도 내장되어 있는 기능이 있다. 
// cf. https://doitnow-man.tistory.com/132

// e.g. 날짜와 관련된 함수
// var date = Date();        
// console.log(date);        // 'Fri Nov 12 2021 11:45:36 GMT+0900 (대한민국 표준시)' -> 그냥 함수를 변수에 넣어 호출
var date = new Date();    // 2021-11-12T02:45:42.414Z -> 복제한다 + 객체로 사용한다  
console.log(date);        // 2021-11-12T02:45:42.414Z

// console.log(date.getFullYear());   // 2021


var yy = date.getFullYear();
var text = '년';
var targetY = yy - 50;
var li;
var ul = document.querySelector('.test');

for (; yy >= targetY; yy -= 1) {
  // console.log(yy + text );
  // document.write(yy + text );

  li = document.createElement('li');
  li.innerText = yy + text;
  ul.append(li);   // append(); -> __요소의 내부의 뒤에 담겠다 ... 
}

// cf. 
// 요소를 생성하는 방법 
// 1. document.createElement(요소이름);
// 2. 생성된 요소에 기능 첨부 
// 3. 생성된 요소를 선택된 요소에 담기: append();



// "복제"하는 방법 

