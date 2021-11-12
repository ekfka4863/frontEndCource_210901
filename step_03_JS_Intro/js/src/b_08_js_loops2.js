// b_08_js_loops2.js

// for( in ) {} ----------------------------------
// 기본 형태 
// for (임의 변수 in 객체) {}

// for in 문은 객체랑 같이 사용한다 
// 잘못된 e.g. 
var arr = ['딸기', '바나나', '키위', '수박', '포도'];
for (var sam in arr) {
  console.log(sam);
}

// 결과: 0 1 2 3 4



// 잘된 e.g. 
var obj = {
  '딸기' : 'red',   // 프로퍼티 <- 프로퍼티 키 + 프로퍼티 값 
  '바나나' : 'yellow', 
  '키위' : 'brown', 
  '수박' : 'green', 
  '포도' : 'purple'
};

// var i = 0;
// var len = 5;
// // var len = Object.keys(obj).length;  // 5
// cf.  https://hianna.tistory.com/452
// for (; i < len; i++) {
//   console.log(obj__???); 
// }

for (var sample in obj) {
  // console.log(sample);          // 딸기 바나나 키위 수박 포도 
  // console.log(obj[sample]);        // red yellow brown green purple
  console.log(sample + ' : ' + obj[sample]);  
}


//외부에서 접근 가능 
console.log(sample);         // 포도
console.log(obj[sample]);    // purple

// 그래서 .. 
// for 는 범용으로 사용하는 반복문 (단, 객체는 불가능) 
// for in은 객체를 순환하기 위해 사용하는 반복문 문법 



// -----------------------------------------------
// forEach ----------------------------------
// 기본 형태 
// 배열.forEach()
/*
var arr = ['딸기', '바나나', '키위', '수박', '포도'];
var i = 0;
var arrLen = arr.length;  

for(; i < arrLen; i+=1) {
  console.log(arr[i]);        // 딸기 바나나 키위 수박 포도 
}
*/

// arr.forEach(function(index, data) {     // e.g. 딸기 0   바나나 1   키위 2   수박 3   포도 4
arr.forEach(function(data, index) {     // forEach는 들어오는 인자의 첫번째는 배열의 값, 두번째는 순서를 가르킨다 
  console.log(index, data);
});

// var li = document.querySelectorAll('li');     // 유사배열객체 

// var ul = document.querySelector('ul');          
// var li = ul.children;                           // 유사배열객체  

console.log(arr);
console.log(li);

/* Q & A: 

선생님 아까
var li = document.querySelectorAll('li');
이것도

var ul = document.querySelector('ul');          
var li = ul.children;
이것도 둘다

유사배열객체란 말씀이시죠?

근데 그걸 알려주신 이유가 그럼 나중에 배울거긴 하지만
이 유사배열객체에도 지금 배우는 forEach를 사용할 수 있어서 인가요?

-> 네! 맞아요! (라고 하심...)
*/


// for는 기본 문법, 하지만 forEach()는 사실 메서드다!
// 즉, 범용적으로 돌릴 때 for, 대신에 순서만 나와서 나중에 값이 나오는 식을 처리해줘야 함 -> 정아왈...! 
// -----------------------------------------------





// -----------------------------------------------
// 반복문 제어문 연습 문제 
// https://velog.io/@kim-jaemin420/%EC%A0%9C%EC%96%B4%EB%AC%B8%EC%A1%B0%EA%B1%B4%EB%AC%B8-%EB%B0%98%EB%B3%B5%EB%AC%B8-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C

// e.g. 1. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// e.g. 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.   -> '02468'
// for (var i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

var even = '';
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    even = even + i; 
  }
} 

console.log(even);


// e.g. 3. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 작은 수부터 출력하시오.
for (var i = 0; i < 10; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}


// e.g. 4. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
var i = 0;
while (i < 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++; 
}

// 기타...
// https://velog.io/@kim-jaemin420/%EC%A0%9C%EC%96%B4%EB%AC%B8%EC%A1%B0%EA%B1%B4%EB%AC%B8-%EB%B0%98%EB%B3%B5%EB%AC%B8-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C