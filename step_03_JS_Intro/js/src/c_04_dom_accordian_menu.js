// c_04_dom_accordian_menu.js

// console.log($.fn);


/*
// jQuery 식 버튼 클릭시 슬라이딩으로 display 처리 
(function($) {
  // .btn 내부에 있는 버튼을 클릭하여, .content_area 내용이 사라지거나 나타나게 만들기 

  // -----------
  // DOM
  var btn = $('.btn');
  var closeBtn = btn.children('.close');
  var openBtn = btn.children('.open');
  var open2Btn = btn.children('.open2');
  var contentArea = $('.content_area');
  // -----------

  closeBtn.on('click', function(event) {
    event.preventDefault();
    contentArea.slideUp();
  });

  openBtn.on('click', function(event) {
    event.preventDefault();
    contentArea.slideDown();
  });

  // 토글 
  // open2Btn.on('click', function(event) {
  //   event.preventDefault();
  //   // contentArea.slideToggle();
  //   contentArea.stop().slideToggle();
  // });

})(jQuery);
*/ 


console.clear();
// -------------------------------
// -------------------------------
// 이제 javascript를 이용하여, 버튼 클릭시 높이값이 0이 되도록 처리해보자 
//  - 높이값을 먼저 파악한 뒤, 최종 값이 0일 수 있게 한다 
//  - 클릭시 기능 수행 (단, 기본/디폴트 기능 우선 삭제)
// 높이가 0이면 display: none; 처리하기 
//  - if()을 이용하여 높이값이 0으로 처리되었는지 체크하자 
//  - display: none;일 경우, 차후의 처리를 위해 style 기능을 제거할지 파악한다 

// 풀이 
// -----------
// DOM
var btn = document.querySelector('.btn');
var closeBtn = btn.querySelector('.close')
var openBtn = btn.querySelector('.open');
var open2Btn = btn.querySelector('.open2');
var contentArea = document.querySelector('.content_area');
// -----------
var conHeight = getComputedStyle(contentArea).height;
var conHeightNum = parseInt(conHeight);
// var conHeight = contentArea.clientHeight;
// var heightNow = contentArea.style.height;
var duration = 500;
var slideHeight;
// -----------

// 기능 
var slideUp = function(height) {
  var setHeight = height;

  slideHeight = setInterval(function() {
    setHeight -= 1;

    if (setHeight > 0) {
      contentArea.style.height = setHeight + 'px';
    } else {
      clearInterval(slideHeight);
      contentArea.style.display = 'none';
    }

  }, duration / 100)
};

// var slideDown = function () {};
// var slideToggle = function () {};


// 클릭 이벤트  
// open 버튼 
openBtn.addEventListener('click', function(e) {
  e.preventDefault();

  // slideDown(conHeightNum);
});


// close 버튼 
closeBtn.addEventListener('click', function(e) {
  e.preventDefault();

  slideUp(conHeightNum);
});

// open2 버튼 
var duration = 500;
open2Btn.addEventListener('click', function(e) {
  e.preventDefault();
  
  if (getComputedStyle(contentArea).display === 'none' || contentArea.style.display === 'none') {
    contentArea.classList.add('show');
    // contentArea.style.height = 'auto';

    // var height = contentArea.clientHeight + 'px';

    setTimeout(function() {
      contentArea.style.height = getComputedStyle(contentArea).display;
    }, 350);

  } else {
    contentArea.classList.remove('show');
    contentArea.style.height = '0px';
  }
});





// HW
// 힌트: 
// 접히면 display: none; 펼치면  display: block;
// + .subMenu의 높이값을 조정하면 된다!


// HW
// 힌트: 
// 접히면 display: none; 펼치면  display: block;
// + .subMenu의 높이값을 조정하면 된다!
// .main_menu > li:nth-child(3).show {
//   height: 188px;

// }



// // event -> 2가지 
// // sliceDown -> 
// 선택자.style.display = 'block';
// // 원래의 height 188px을 변수에 할당한 후 
// 선택자.style.height = 원래하이트변수;


// // sliceUp   -> 
// 선택자.style.display = 'none';
// 선택자.style.height = '0';

// // + setTimeout
// // + transition은 css로 .sub_menu.show { 트랜지션 관련 ... }


// // cf. 선택자.querySelector('.main_menu > li:nth-child(3)');
// // cf. 선택자.querySelectorAll('.main_menu > li')[2];