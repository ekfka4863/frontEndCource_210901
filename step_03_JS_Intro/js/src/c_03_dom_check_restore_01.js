// c_03_dom_check_restore_01.js

// window (객체) > document (객체) > element (text형식)
// window -> 브라우저의 전역 객체/브라우저의 요소들과 자바스크립트 엔진, 그리고 모든 변수를 담고 있는 객체
// nodejs에서는 window가 아니고 global -> 더 유연, 확장된 개념 

// document -> window.document: 우리가 실제로 사용하는 웹 사이트 화면이 나오는 페이지(만을 의미)
// document는 객체(object)
// http://tcpschool.com/javascript/js_dom_document

// ---------------------------------------------------------------------
// document.querySelector('li');           // 찾아서 확인 
// document.getElementsByTagName('li');    // 찾아서 가져올 것 


var conBox = document.querySelector('#contentBox');
// conBox.style.width = "500px";
var conStyle = getComputedStyle(conBox).width;
console.log(conStyle);            // 기존값 
console.log(conBox.style.width);  // 기존값 X
// console.log(!!conBox.style.width);  // false
// console.log(conBox.style.width === '');   // true
var conArea = conBox.querySelector('.content_area');


// toggle 
var btn = conBox.querySelector('button');
// console.log(btn);

btn.addEventListener('click', function(e) {
  e.preventDefault();
  btn.classList.toggle('on');
  // this.classList.toggle('on');
  // this의 의미: 이벤트 주체, property, window 

  conArea.classList.toggle('on');
});


console.clear();
// -------------------------------------------------------------------

