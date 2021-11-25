// b_16_js_remind_02.js

// e.g.  
// 문제 1: 위 배열에 들어가는 값중 가장 작은수를 구하는 방법 2가지 이상을 찾아내시오. (최소값 3)
// 문제 2: 위 배열에 들어가는 값중 가장 큰수를 구하는 방법 2가지 이상을 찾아내시오. (최대값 450)
// 문제 3: 위 배열에 들어가는 값 대신 정수형의 1~3 자리까지의 랜덤 숫자 10개를 담아 문제 1번의 값처럼 도출. (cf. Math.random();)


// 문제 1:
// 문제 1 - solution 1: 함수로 만들어 버리기 (for문 비교)
var arrNumber = [90, 5, 30, 60, 450, 250, 3, 60, 8];

var minNum = arrNumber[0];

var whatIsMinNum = function(arrNumber) {
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < minNum) { 
      minNum = arrNumber[i];
    } 
  }
  return minNum;
};
whatIsMinNum(arrNumber);

// 문제 1 - solution 1 - 응용: forEach문 + 삼항연산자 
var minNum = arrNumber[0];

arrNumber.forEach(num => {
  (num < minNum) ? (minNum = num) : minNum;
});
console.log(minNum);   // 3

// 문제 1 - solution 2: 기존의 내장함수 Math.min() 사용 + 스프레드 문법 사용  
var minNum = Math.min(...arrNumber);   // 3


//-------------
// 문제 2:
// 문제 2 - solution 1: 함수로 만들어 버리기 (for문 비교)
var maxNum = arrNumber[0];

var whatIsMaxNum = function(arrNumber) {
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > maxNum) { 
      maxNum = arrNumber[i];
    } 
  }
  return maxNum;
};
whatIsMaxNum(arrNumber);     // 450 


// 문제 2 - solution 1 - 응용: forEach문 + 삼항연산자 
var maxNum = arrNumber[0];

arrNumber.forEach(num => {
  (num > maxNum) ? (maxNum = num) : maxNum;
});
console.log(maxNum);   // 450


// 문제 2 - solution 2: 기존의 내장함수 Math.max() 사용 + 스프레드 문법 사용  
var maxNum = Math.max(...arrNumber);   // 450



//-------------
// 문제 3 - solution 
// step 1: 배열 var arrNumber = []; 에 정수형의 1~3자리까지의 랜덤 숫자 10개를 담는다 
//         -> Math.random() + 반복문 + .push() 메서드 
var arrNumber = []; 
// var randomNum = Math.floor(Math.random() * 1000) + 1;
var randomNum;

for (var i = 0; i < 10; i++) {
  randomNum = Math.floor(Math.random() * 1000) + 1;
  arrNumber.push(randomNum);
}


// step 2: 배열 arrNumber에 랜덤으로 담긴 숫자 중 가장 큰 숫자를 도출
var minNum = arrNumber[0];

var whatIsMinNum = function(arrNumber) {
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < minNum) { 
      minNum = arrNumber[i];
    } 
  }
  return minNum;
};
whatIsMinNum(arrNumber);

console.log(minNum);



// ====================================
// teacher's solution 

//-------------
// 풀이: 문제 1 - 최소값 구하기 
// 풀이 1-1: Math.min();
// cf. Array.prototype.call(?, 1,2,3,4)
// cf. Array.prototype.apply(?, [1,2,3,4])
var arrNumber = [90, 5, 30, 60, 450, 250, 3, 60, 8];

// var minResult = Math.min.apply('', arrNumber);   // 3
var minResult = Math.min.apply(null, arrNumber);   // 3
// console.log(minResult);     // 3



// 풀이 1-2:  
// var arrR2 = [1, 4, 6, 2, 99, 10, 456, 98765].sort(function(a, b){
//   return a - b;
// });
// console.log(arrR2);
var sortMin = arrNumber.sort(function(a, b) {
  return a - b;
});
console.log(sortMin[0]);         // 3
var last = sortMin.length - 1;
console.log(sortMin[last]);      // 450



// 풀이 1-3:
var arrNumber = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var i = 0;
var arrLength = arrNumber.length;
var minNumber = arrNumber[0];

for (; i < arrLength; i++) {
  if (minNumber > arrNumber[i]) {
    minNumber = arrNumber[i];
  }
}
console.log(minNumber);   // 3


//-------------
// 풀이: 문제 2 - 최대값 구하기 
// 풀이 2-1: Math.max();
// cf. Array.prototype.call(?, 1,2,3,4)
// cf. Array.prototype.apply(?, [1,2,3,4])
var arrNumber = [90, 5, 30, 60, 450, 250, 3, 60, 8];

// var maxResult = Math.max.apply('', arrNumber);   // 450
var maxResult = Math.max.apply(null, arrNumber);   // 450
console.log(maxResult);     // 450


// 풀이 2-2: [].sort()
var sortMax = arrNumber.sort(function(a, b) {
  return b - a;
});
console.log(sortMax[0]);         // 450


var sortMax = arrNumber.sort((a, b) => b - a);
console.log(sortMax[0]);         // 450


//-------------
// 문제 3번을 풀기 위한 random 숫자 만들기 
var arrRan = [];
var random;
var i = 0;
for (; i < 10; i++) {
  random = Math.floor(Math.random() * 1000);
  arrRan.push(random);
}

// ====================================
// ====================================
// e.g. 구구단 만들기 (2단부터 9단까지)

var multiplyFn = function () {

  for (var a = 2; a < 10; a++) {
    console.log();
    console.log(a + '로 시작하는 구구단: ' + '===========================');
    for (var b = 1; b < 10; b++) {
      console.log(a + ' * ' + b + ' = ' + (a*b));
    }
  }

};
// multiplyFn(); 



console.clear();
// ====================================
// ====================================
// e.g. 
// var a = 500;
// 500 -> 250까지 출력. 단, 0.1초마다 1씩 빠지는 숫자를 출력하라.

// my answer 
// cf. setInterval
// var a = 500;

// var printFn = setInterval(function () {  
//   if (a >= 250) {
//     console.log(a);
//     a--;
//   } else {
//     clearInterval(printFn);
//   }
// }, 100);

// printFn();
//cf.  https://lktprogrammer.tistory.com/125


// teacher's solution
// var startNum = 500;
// var timed = 100;
// var endNum = 250;

// var intervalFn = setInterval(function() {
//   console.log(startNum);
//   startNum--;

//   if(startNum <= endNum) {
//     console.log(endNum + '까지 출력 완료!');
//     clearInterval(intervalFn);
//   } 
// }, timed);




// teacher's solution - 응용 
// var startNum = 500;
// var timed = 10;
// var endNum = 250;
// var intervalFn;

// var countFn = function(start) {
//   intervalFn = setInterval(function(){
//     console.log(start);
//     start--;

//     if(start <= endNum) {
//       console.log(endNum + '까지 출력 완료!');
//       clearInterval(intervalFn);
//     } 
//   }, timed);
// };
// countFn(startNum);


console.clear();
// teacher's solution - 응용 2
/* html의 구조 

<!-- layout -->
  <div id="wrap">
    <h1><a href="">웹기초</a></h1>
    <article id="contentBox">
      <button type="button" class="btn">start</button>
      <p>count: <span></span></p>
    </article>
  </div>
*/
var startNum = 500;
var timed = 100;
var endNum = 250;
var intervalFn;

// ----------
// DOM
var btn = document.querySelector('.btn');
var pSpan = document.querySelector('p > span');
pSpan.innerText = 'text 작성';
// ----------

var goCheck = true;

var countFn = function(start) {
  var start = start;  

  if (goCheck) {
    goCheck = false;

    intervalFn = setInterval(function(){
      pSpan.innerText = start;
      start--;
  
      if(start <= endNum) {
        pSpan.innerText = endNum + '까지 출력 완료!';
        clearInterval(intervalFn);
        goCheck = true;
      } 
    }, timed);
  }
};


// event 
btn.addEventListener('click', function(e) {
  e.preventDefault();
  countFn(startNum);
});






console.clear();
// ====================================
// ====================================
// e.g. 
/* html의 구조 

<!-- layout -->
  <div id="wrap">
    <h1><a href="">웹기초</a></h1>
    <article id="contentBox">
      <button type="button" class="btn">start</button>
      <p>count: <span></span></p>
    </article>
  </div>
*/
var startNum = 500;
var timed = 10;
var endNum = 250;
var intervalFn;

var goCheck = true;

// ----------
// DOM
var btn = document.querySelector('.btn');
var pSpan = document.querySelector('p > span');
pSpan.innerText = 'text 작성';
// ----------

var intervalCount = function (startNum) {
  var countNum = startNum;
  
  setTimeout(function() {
    pSpan.innerText = countNum;
    countNum--;
    if (countNum > endNum) {
      intervalCount(countNum);
    } else {
      pSpan.innerText = countNum + '숫자 달성!!!';
    }
  }, timed)
};


btn.addEventListener('click', function(e) {
  e.preventDefault();
  intervalCount(startNum);
});

// cf. 
// 선택자.innerHTML = ''; : 선택자 내부에 요소 (태그) 삽입 
// 선택자.innerText = ''; : 선택자 내부에 글자를 삽입 

pSpan.innerHTML = 'text';
pSpan.innerText = 'text';
// 는 똑같이 텍스트가 들어간다! 하지만 ..
pSpan.innerHTML = '<text></text>';
// 는 요소가 들어가는 것



// ====================================
// ====================================
// e.g. 숙제 jQuery로 풀이 해주심






