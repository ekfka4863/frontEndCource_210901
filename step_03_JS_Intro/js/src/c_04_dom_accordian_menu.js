// // c_04_dom_accordian_menu.js

// // console.log($.fn);


// /*
// // jQuery 식 버튼 클릭시 슬라이딩으로 display 처리 
// (function($) {
//   // .btn 내부에 있는 버튼을 클릭하여, .content_area 내용이 사라지거나 나타나게 만들기 

//   // -----------
//   // DOM
//   var btn = $('.btn');
//   var closeBtn = btn.children('.close');
//   var openBtn = btn.children('.open');
//   var open2Btn = btn.children('.open2');
//   var contentArea = $('.content_area');
//   // -----------

//   closeBtn.on('click', function(event) {
//     event.preventDefault();
//     contentArea.slideUp();
//   });

//   openBtn.on('click', function(event) {
//     event.preventDefault();
//     contentArea.slideDown();
//   });

//   // 토글 
//   // open2Btn.on('click', function(event) {
//   //   event.preventDefault();
//   //   // contentArea.slideToggle();
//   //   contentArea.stop().slideToggle();
//   // });

// })(jQuery);
// */ 


// console.clear();
// // -------------------------------
// // -------------------------------
// // 이제 javascript를 이용하여, 버튼 클릭시 높이값이 0이 되도록 처리해보자 
// //  - 높이값을 먼저 파악한 뒤, 최종 값이 0일 수 있게 한다 
// //  - 클릭시 기능 수행 (단, 기본/디폴트 기능 우선 삭제)
// // 높이가 0이면 display: none; 처리하기 
// //  - if()을 이용하여 높이값이 0으로 처리되었는지 체크하자 
// //  - display: none;일 경우, 차후의 처리를 위해 style 기능을 제거할지 파악한다 

// // 풀이 
// // -----------
// // DOM
// var btn = document.querySelector('.btn');
// var closeBtn = btn.querySelector('.close')
// var openBtn = btn.querySelector('.open');
// var open2Btn = btn.querySelector('.open2');
// var contentArea = document.querySelector('.content_area');
// // -----------
// var conHeight = getComputedStyle(contentArea).height;
// var conHeightNum = parseInt(conHeight);
// // var conHeight = contentArea.clientHeight;
// // var heightNow = contentArea.style.height;
// var duration = 500;
// var slideHeight;
// var clickPermission = true;
// // -----------

// // 기능 
// // slideUp - 닫기 기능 
// var slideUp = function(height) {
//   if(clickPermission) {
//     clickPermission = false; 

//     var setHeight = height;

//     slideHeight = setInterval(function() {
//       setHeight -= 1;

//       if (setHeight >= 0) {
//         contentArea.style.height = setHeight + 'px';
//       } else {
//         clearInterval(slideHeight);
//         contentArea.style = null;
//         contentArea.style.display = 'none';
//         clickPermission = true;     
//       }

//   }, duration / 250)
//   }
// };

// // slideDown - 열기 기능 
// // var slideDown = function () {};

// // 함수 샘플: setIntercal/setTimeout 슬라이드 기능으로 나타나는 기능 테스트  
// var countFn = function(n) {

//   var setRandomColorFn = setInterval(function() {
//     // 일정 시간마다 수행해야 하니까 기본적으로 여기서는 setInterval을 사용 + setInterval사용하면 clearInterval 사용해서 해당 함수 제거하는 조건을 걸어주기!! 
//     // 랜덤컬러 hex 코드로 바꿔주기 -> 랜덤 컬러 집어넣는 연습하기!
//     var arr = [2, 4, 7, 10, 20, 30, 50, 90, 432, 654, 777, 963]
//     // var randomColor;
//     var red, green, blue;

//     red = Math.floor(Math.random() * 256).toString(16);
//     green = Math.floor(Math.random() * 256).toString(16);
//     blue = Math.floor(Math.random() * 256).toString(16);
//     // console.log(red+green+blue);   

//     // 문제점 발생! 만약 첫자리가 0이면/나오는 숫자가 2자리 수가 아닌 1자리수면..., 같이 출력되지 않아, hex코드가 6자리가 아니고 5자리로 출력된다. 
//     // 그래서 .... 조건문을 추가한다. 
//     if (red.length !== 2) {
//       red = 0 + red;
//     } 
//     if (green.length !== 2) {
//       green = 0 + green;
//     }    
//     if (blue.length !== 2) {
//       blue = 0 + blue;
//     } 
//     console.log(red+green+blue);     // 이러면 문제 해결!! 
//     var randomColor = '#'+ (red+green+blue);

//     // contentArea에 색상 랜덤으로 바꿔주기!! 
//     contentArea.style.backgroundColor = randomColor;

//     // transition 추가 (with css file)
//     // css의 .content_area 부분에 가서 ... 
//     // transition: all 500ms ease; 코드 추가해주기!! 단, 시간은 setInterval과 동일하게 할 것인지 고민해보기~ 

//   }, 500);

// };
// // countFn();


// // slideToggle - 토글 기능 
// // var slideToggle = function () {};


// // 클릭 이벤트  
// // close 버튼 
// closeBtn.addEventListener('click', function(e) {
//   e.preventDefault();

//   slideUp(conHeightNum);
// });


// // open 버튼 
// openBtn.addEventListener('click', function(e) {
//   e.preventDefault();
//   // slideDown(conHeightNum);
//   // countFn(0);
// });


// // toggle 버튼 
// open2Btn.addEventListener('click', function(e) {
//   e.preventDefault();
//   // slideD__(conHeightNum);
// });



// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// 위의 내가 작성한 내용 전부 주석처리 
// 아래는 쌤이 작성 한 것 

// javascript를 이용하여, 
// 버튼 클릭시 높이값이 0이 되도록처리
  // - 높이값을 먼저 파악, 최종 값이 0값
  // - 클릭시 기능 수행( 단, 기본기능 삭제 )
// 높이가 0이면, display:none;
  // - if()이용하여 0값으로 처리되었는지 체크
  // display:none 일 경우, 차후의 처리를 위해 style기능을 제거할지 파악

// ----------------------------------------
var jsBtn         = document.querySelector('.btn');
var jsCloseBtn    = jsBtn.querySelector('.close');
var jsOpenBtn     = jsBtn.querySelector('.open');
var jsOpenBtn2    = jsBtn.querySelector('.open2');
var jsToggleBtn = jsOpenBtn2;
var jsContentArea = document.querySelector('.content_area');
// -----------------------------------------------
var conH = getComputedStyle(jsContentArea).height;
var conHResult = parseInt(conH);
console.log('h:' , conH );
var timed = 500;
var slideH;
var permission = true;
// 처음부터 보이지 않게 하기 위한 처리(css에서 값을 가져오지 못하기에, js를 통해 값을 가져와서 파악후 display처리)
// jsContentArea.style.display = 'none'; 

// 함수1: 슬라이드기능으로 사라지는 기능 ---------------
var slideUpFn = function(height){
  var jsDisplayState = getComputedStyle(jsContentArea).display === 'block'; //상태체크
  if(permission && jsDisplayState){
    permission = false;
    var setH = height;
  // console.log( setH );
  slideH = setInterval(function(){
    setH -= 1;
    if(setH >= 0) {
      jsContentArea.style.height = setH + 'px';
    }else{
      clearInterval(slideH);
      jsContentArea.style = null;
      jsContentArea.style.display = 'none';
      permission = true;
    }
  }, timed/1000);
  }
};
// ------------------------------------------
// 함수 샘플:setInterval/setTimeout 슬라이드 기능으로 나타나는 기능 테스트 ---------------
var countFn = function(n){
  // setTimeout : 일정시간 뒤에 한번만 수행
  // setInterval : 일정시간 마다 수행 - clearInterval
  var arr = [2,4,7,10, 20, 30, 50, 90, 432, 654, 777, 963];
  
  var red, green, blue;
  setInterval( function(){
    red = (Math.floor(Math.random() * 256)).toString(16);
    green = (Math.floor(Math.random() * 256)).toString(16);
    blue = (Math.floor(Math.random() * 256)).toString(16);

    if( red.length   !== 2)  { red   = '0' + red;   }
    if( green.length !== 2)  { green = '0' + green; }
    if( blue.length  !== 2) { blue   = '0' + blue;  }
    console.log( red+green+blue );  
    var randomColor = '#'+red+green+blue;

    // var ram = Math.floor( Math.random()*12 )
    // console.log( arr[ram] );
    jsContentArea.style.backgroundColor = randomColor;
  },500);
};

// 함수2: open버튼 클릭시 사라진 내용을 나타나게 만들기 ----------------------------------
// jsContentArea 상태가 'none' 일때, 'block'으로 처리와 동시에, 
// 기본 높이값을 파악후( conH,conHResult 에서 이미 파악 ) -> 높이 0부터 기본 높이값까지 1씩 추가해서 변동되게 수행
// 필요한 높이만큼 수행되었다면, 더이상 처리할 내용이없으니, style 기능 제거 ( null )
// 단, 기능이 수행되는 중간에 다른 기능을 첨부하지 못하게 제어( permission )

var slideDownFn = function(baseHeight){
  var originH = baseHeight;
  var setH = 0;
  var jsDisplayState = getComputedStyle(jsContentArea).display === 'none'; //상태체크
  if(permission && jsDisplayState){
    permission = false;
    jsContentArea.style.display = 'block';
    jsContentArea.style.height = setH; 

    slideH = setInterval(function(){
      if(setH < originH){
        setH += 1;
        jsContentArea.style.height = setH + 'px'; 
        console.log('높이값변경중:', setH);
      }else{
        // jsContentArea.style = null;
        permission = true;
        console.log('높이값 처리 완료');
        clearInterval(slideH);        
      }
    }, timed/1000); 
  } 
}; // slideDownFn(baseHeight)



// 함수3: 
var slideToggleFn = function() {}; 






// --------------------------------------------
// jsCloseBtn 클릭 이벤트
jsCloseBtn.addEventListener('click', function(event){
  event.preventDefault();
  slideUpFn(conHResult);  
});

// jsOpenBtn 클릭 이벤트
jsOpenBtn.addEventListener('click', function(event){
  event.preventDefault();
  slideDownFn(conHResult);
});

// jsToggleBtn 클릭 이벤트
jsToggleBtn.addEventListener('click', function(event){
  event.preventDefault();

  /*
  var onState = jsContentArea.classList.contains('on'); 
  if(onState) {
    // console.log('현재 내용이 보이는 상태입니다.');
    slideUpFn(conHResult);  
    jsContentArea.classList.remove('on');
  } else {
    // console.log('현재 내용이 보이지 않습니다.');
    slideDownFn(conHResult);
    jsContentArea.classList.add('on');
  }

  */
  var viewState = getComputedStylet(jsContentArea).display === 'block';
  (viewState) ? slideUpFn(conHResult) : slideDownFn(conHResult);
});

// jsContentArea.classList.add('on');







// ------------------------------------------------------
// ------------------------------------------------------
// 주말 숙제 
// 샘플 사이트: fancybox -> http://fancybox.net/
// 샘플 사이트 2: https://webpublisher-jquery-sample.vercel.app/html/ex_03_modal.html
// hw
// cpacity: 100%; -> opacity: 0; display: none;
// display: block; -> opacity: 100%;
// 이런 구조로 만들기 