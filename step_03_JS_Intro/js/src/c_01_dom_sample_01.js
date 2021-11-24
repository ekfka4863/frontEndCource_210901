// c_01_dom_sample_01.js


// step 1: 버튼을 클릭한다 -> 메뉴가 나타나라!
//    1-1: 버튼 -> var navToggleBtn = document.querySelector('.navibar-toggler');
//    1-2: 클릭 ->  선택자 클릭 (addEventListener) -> navToggleBtn.addEventListener('click', fucntion(event) {});
//    1-3: 메뉴 -> id="navbarSupportedContent"  -> getElementById('navbarSupportedContent'); 또는 document.querySelector('#navbarSupportedContent');
//    1-4: 나타나기(how?) -> ___.classList.add ="action" : class 이름 추가(?) + (none -> block)
//    1-5: 기능을 수행하기 전 체크 : 해당 버튼의 고유 기능 해제, action의 유무 체크 
// step 2: 버튼을 클릭한다 -> 메뉴를 사라지게 !

var navToggleBtn = document.querySelector('.navbar-toggler');
var navbarSupportedContent = document.getElementById('navbarSupportedContent');

navToggleBtn.addEventListener('click', function(event){
  // 1-5: 사전기능 처리 
  //      기존 고유 기능 해제 -> event.preventDefault();
  event.preventDefault();
  
  var checkClassName = 'on';
  // 1-4: action이라는 class 명을 포함하고 있는지의 유무에 따라 추가/삭제
  //      classList.contains("action");
  var isAction = navbarSupportedContent.classList.contains(checkClassName);
  // console.log(isAction);

  if (!isAction) {
    navbarSupportedContent.classList.add(checkClassName);
  } else {
    navbarSupportedContent.classList.remove(checkClassName);
  }
  
});

// -----------------
// jQuery 로 위에 부분 구현 
// e.g. 
// var navToggleBtn = $('.navbar-toggler');
// var navbarSupportedContent = $('navbarSupportedContent');

// navToggleBtn.on('click', function(event){
//   event.preventDefault();
  
//   var chechClassName = 'on';
//   var isAction = navbarSupportedContent.hasClass(chechClassName);

//   if (!isAction) {
//     navbarSupportedContent.addClass(chechClassName);
//   } else {
//     navbarSupportedContent.removeClass(chechClassName);
//   }
  
// });


// -----------------
// e.g. preventDefault 이해하기 -> 기존에 있던 고유 기능을 사전에 방지, defauli 처리된 고유한 기능을 없얘버리는 것을 의미 
var box = document.querySelector('.box');
var boxBtn = box.querySelector('a');

boxBtn.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e);
});
// -----------------








