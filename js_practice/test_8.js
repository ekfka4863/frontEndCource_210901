// // test_8.js

// var str = 'abcabcabc'; 

// var theLongestStr = function(str) {

//   // step 1 
//   var strSplit = str.split('');   // [ 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c']

//   var words = []; 
//   var longestStr ='';

//   // step 2
//   for (var i = 0; i < strSplit.length; i++) {
//     var word = '';
    
//     if (strSplit[i] !== strSplit[i+1]) {
//       word = word + strSplit[i]; 
//     } else {
//       words.push(word);
//       word = '';
//       word =  word + strSplit[i]; 
//     }
//     return word;
//   }

//   words.forEach(word => {
//     var wordLength = word.length;
//     var minLength = Number.MIN_SAFE_INTEGER; 

//     if (wordLength < minLength) {
//       minLength = wordLength;
//       longestStr = word;
//     } 
//   });

//   return longestStr;
// };

// theLongestStr(str);


// // step 1 
// var strSplit = str.split('');   // [ 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c']
// var words; 

// // step 2
// for (var i = 0; i < strSplit.length; i++) {
//   var word = '';
//   words = [];
  
//   if (strSplit[i] !== strSplit[i+1]) {
//     word = word + strSplit[i]; 
//   } else {
//     words.push(word);
//     word = '';
//     word =  word + strSplit[i]; 
//   }
// }

// words.forEach(word => {
//   var wordLength = word.length;
//   var minLength = Number.MIN_SAFE_INTEGER; 
//   var longestStr;

//   if (wordLength < minLength) {
//     minLength = wordLength;
//     longestStr = word;
//   } 

// });




// ---------------------------------- 오늘의 스터디 
// 2021-11-17-수

// 내장 함수
// ======================================
/*
- 정의: js에 이미 내장 되어있는 함수 
- e.g. 
  alert(); 
  .parseInt();


*/

alert('에러 메세지!!!! 에러가 발생했습니다!');

var age = prompt('나이를 입력하시오!');  
// 어떤 값을 사용자에게로부터 입력받을 수있고, 
// 그 값을 담은 변수를 통해 조건문 등과 같은 제어문으로 후처리를 할 수 있게 한다 

if (age < 20) {
  location = 'https://naver.com';   
} 


var trueOrFalse = confirm('this is test for confirm');  // true/false를 반환한다 -> 후처리 가능 



// 삼항연산자 
var age = prompt('나이를 입력하시오!');  
// 어떤 값을 사용자에게로부터 입력받을 수있고, 
// 그 값을 담은 변수를 통해 조건문 등과 같은 제어문으로 후처리를 할 수 있게 한다 

if (age < 20) {
  location = 'https://naver.com';   
} else {
  location = 'https://google.com';
}

// 삼항연산자 -> (조건) ? __조건이 참일 떄 실행되는 코드__ : __조건이 거짓일 때 실행되는 코드__ ;
(age < 20) ? location = 'https://naver.com' : location = 'https://google.com';



// ----------------
// e.g. console.___(); 시리즈 -> 내장함수 
var arr = ['a', 'b', 'c', 'd', 'e'];
// 언제 시작 


// 언제 끝나는지 

// console.table();




// 생성자 함수
// ======================================





// 원시 함수
// ======================================



















