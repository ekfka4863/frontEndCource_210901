// test_10.js


// for문 활용 

// e.g.  
// 문제 1: 위 배열에 들어가는 값중 가장 작은수를 구하는 방법 2가지 이상을 찾아내시오. (최소값 3)
// 문제 2: 위 배열에 들어가는 값중 가장 큰수를 구하는 방법 2가지 이상을 찾아내시오. (최대값 450)
// 문제 3: 위 배열에 들어가는 값 대신 정수형의 1~3 자리까지의 랜덤 숫자 10개를 담아 문제 1번의 값처럼 도출. (cf. Math.random();)


// 문제 1: 위 배열에 들어가는 값중 가장 작은수를 구하는 방법을 찾아내시오. (최소값 3)
// 비교를 한다 
// var arrNumber = [90, 5, 30, 60, 450, 250, 3, 60, 8];
// var minNum = arrNumber[0]; // 90

// var whatIsMinNum = function(arrNumber) {
//   for (var a = 0; a < arrNumber.length; a++) {
//     // 비교 
//     if (arrNumber[a] < minNum) {  
//       minNum = arrNumber[a]; 
//     }
//   }
//   return minNum;
// };

// whatIsMinNum(arrNumber);


// ---------------------------------------
// e.g. 
// 구구단 
// for (var i = 2; i < 10; i++) {
//   console.log();
//   console.log(i + '로 시작하는 구구단 =================');
//   for (var j = 1; j < 10; j++) {
//     console.log(i + ' x ' + j + ' = ' + (i*j));
//   }
// }



// ---------------------------------------
// e.g. 
// 문제: 500 -> 250까지 출력. 단, 0.1초마다 1씩 빠지는 숫자를 출력하라.

// step1: 500부터 250까지 -1하는 코드를 가장 짧게 구성하려면 어떻게 해야할까? -> 조건문 
// step2: 0.1초"마다" 출력하는 기능을 수행하려면 어떻게 해야할까? -> setInterval + clearInterval 
//        + clearInterval(함수명); -> setInterval을 함수로 묶고, 또 그것을 변수에 담아주자.


// var startNum = 500;
// var endNum = 250;
// var currentNum = startNum;

// var printFn = setInterval(function () {
//   if (currentNum >= endNum) {
//     console.log(currentNum);
//     currentNum--;
//   } else {
//     clearInterval(printFn);
//   }
// }, 100);
// printFn();


// step2: 
// DOM
// var btn = document.querySelector('.btn');
// var pSpan = document.querySelector('p > span');


// // btn 클릭시 printFn 함수가 실행이 되고, 
// // printFn 함수가 실행될 때, pSpan 안에 text 형식으로 숫자가 들어가게 만든다. 
// var startNum = 500;
// var endNum = 250;
// var currentNum = startNum;


// btn.addEventListener('click', function(e) {
//   e.preventDefault();

//   setInterval(function () {
//     if (currentNum >= endNum) {
//       pSpan.innerText = currentNum;
//       currentNum--;
//     } else {
//       pSpan.innerText = "끝!!!!";
//       clearInterval(printFn);
//     }
//   }, 10)
// });




// step3: 
// var btn = document.querySelector('.btn');
// var pSpan = document.querySelector('p > span');


// // btn 클릭시 printFn 함수가 실행이 되고, 
// // printFn 함수가 실행될 때, pSpan 안에 text 형식으로 숫자가 들어가게 만든다. 
// var startNum = 500;
// var endNum = 250;
// var currentNum = startNum;
// var startPossible = true;    // timer가 끝나고도 재시작 할 수 있게하는 조건.


// var countFn = function(currentNum) {
  
//   if (startPossible) {
//     startPossible = false;
  
//     var intervalFn = setInterval(function () {
//       if (currentNum >= endNum) {
//         pSpan.innerText = currentNum;
//         currentNum--;
//       } else {
//         pSpan.innerText = "끝!!!!";
//         clearInterval(intervalFn);
//         startPossible = true;
//       }
//     }, 10)

//   }
// };


// btn.addEventListener('click', function(e) {
//   e.preventDefault();
//   countFn(startNum);
// });


// console.clear();
// // ============================================
// // ============================================
// // jQuery 
// (function($) {
//   var subBoxBtn = $('.sub_box_btn');
//   var closeBtn = subBoxBtn.children('.close');
//   var openBtn = subBoxBtn.children('.open');
//   var open2Btn = subBoxBtn.children('.open2');
//   var contentArea = $('.content_area');

//   // slideUp
//   closeBtn.on('click', function(e) {
//     e.preventDefault();
//     contentArea.slideUp();
//   });

//   // slideDown
//   openBtn.on('click', function(e) {
//     e.preventDefault();
//     contentArea.slideDown();
//   });

//   // slideToggle
//   open2Btn.on('click', function(e) {
//     e.preventDefault();
//     contentArea.stop().slideToggle();
//   }); 
// })(jQuery);


console.clear();
// ============================================
// ============================================
// vanilla javascript

// DOM
var subBoxBtn = document.querySelector('.sub_box_btn');
var closeBtn = subBoxBtn.querySelector('.close');
var openBtn = subBoxBtn.querySelector('.open');
var open2Btn = subBoxBtn.querySelector('.open2');
var contentArea = document.querySelector('.content_area');
// -----------
// var heightStrInCss = getComputedStyle(contentArea).height;  // '160px'
// var heightNumInCss = parseInt(heightStrInCss);              // 160
var heightNumInCss = contentArea.clientHeight;                // 160
var currentHeight = contentArea.style.height;    
var duration = 5;   // 지연시간
// -----------

// 기능 구현 
// slideUp
var slideUp = function(heightNumInCss) {
  currentHeight = heightNumInCss;

  var intervalFn = setInterval(function() {
    currentHeight--;

    if (currentHeight > 0) {
      contentArea.style.height = currentHeight + 'px';
    } else {
      clearInterval(intervalFn);
      contentArea.style.display = 'none';
    }
  }, duration)
};



// slideDown
var slideDown = function(currentHeight) {

  var intervalFn = setInterval(function() {
    currentHeight++;

    if (currentHeight < heightNumInCss) {  // ___ < 160
      contentArea.style.display = 'block';
      contentArea.style.height = currentHeight + 'px';
    } else {
      clearInterval(intervalFn);
    }
  }, duration)
};


// slideToggle
// var slideToggle = function() {};
// var slideToggle = function(currentHeight) {
//   var intervalFn = setInterval(function() {
//     if (currentHeight < heightNumInCss) {  // ___ < 160
//       slideDown(currentHeight);
//     } else {
//       slideUp(currentHeight);
//     }
//   }, duration)
// };



// ------------
// event
// slideUp
closeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  slideUp(heightNumInCss);
});

// slideDown
openBtn.addEventListener('click', function(e) {
  e.preventDefault();
  slideDown(currentHeight);
});

// slideToggle
open2Btn.addEventListener('click', function(e) {
  e.preventDefault();
  // slideToggle();
});


