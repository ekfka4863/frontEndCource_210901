// c_02_continuing_dom_make_nav_02.js


// --------------------------------------------
// 변수 영역 ----------------------------------
var dropBtnWrapper = document.querySelector('.drop_btn');
var dropBtn = dropBtnWrapper.querySelector('button');
var subMenu = document.querySelector('.sub_menu');

var subMenuOn = 'on';

var displayStateFn = function(selector) {
  // 해석: 선택자의 display 상태값을 가져오는데 기본 html 문서에서 값을 가져오되 없다면, css 기본값에서 가져오게 한다
  return selector.style.display || getComputedStyle(selector).display;   // 앞에꺼 없으면 뒤에꺼~
  /*
  var displayState;
    if(!!selector.style.display) {
      displayState = selector.style.display;
    } else {
      displayState = getComputedStyle(selector).display;
    }
  */
};

// 이벤트 영역 --------------------------------
// 메뉴가 열렸을 때, dropdown을 누르면 또 하나의 서브 메뉴가 보이게/사라지게 하라 
// step 1: 버튼 클릭 -> 하위 메뉴가 나타나거나 사라지게 만들기 
// step 2: 나타나거나 사라지는 요소 -> .sub_menu 나타나거나 사라지게 (style에 직접 display: none/block;) -> none/block ?? 
// step 3: 옵션 -> event.preventDefault();
dropBtn.addEventListener('click', function(e) {
  e.preventDefault();
  
  // var displayValue = getComputedStyle(subMenu).display;   // window 생략 가능하긴 함!
  var displayValue = window.getComputedStyle(subMenu).display;

  // 방법 1. 삼항연산자로 조건걸기 
  // (displayValue === 'none') ? subMenu.style.display = 'block' : subMenu.style.display = 'none';
  // 이때, typeof displayValue는 'string', 그리고 직접적으로 displayValue = 'block';을 해도 효과 없음을 유의! 


  // 방법 2. 응용 - 함수 displayStateFn(); 활용하여 display에 관한 값을 얻어온다.
  // var state = displayStateFn(subMenu);
  // console.log(state);
  (displayValue === 'none') ? subMenu.style.display = 'block' : subMenu.style.display = 'none';

});



// -----------------------------
// 이때, js로 html에 적용된 css를 가져오는 2가지의 방법 
// 1. 인라인으로 html 요소에 css 코드가 들어갔을 때 해당 css 코드를 가져오는 방법 
//    -> console.log(subMenu.style.display); 이라고 직접적으로 언급해서 출력후 확인 가능! 
// 2. Window.getComputedStyle(); 메서드 사용 
// console.log(window.getComputedStyle(subMenu));
console.log(window.getComputedStyle(subMenu).display);

// 정리:
// 확인 방법 1. css에 들어있는 속성의 값을 파악하는 것: getComputedStyle(선택자)[속성명]; 
// 확인 방법 2. html 문서에 들어있는 속성의 값을 파악하는 것: 선택자.속성명(.속성명...); 
// 기타 방법: 상황에 따라 둘중 하나의 값을 가져와야 하는데 한쪽이 없거나 대신처리 해야하는 상황이 올 수도 있다.
//            e.g. var a = i || 10;  -> 위의 displayStateFn(); 함수 

// cf. https://leestrument.tistory.com/entry/%EC%9A%94%EC%86%8C%EC%9D%98-style-%EA%B0%92%EC%9D%84-JS-%EC%97%90%EC%84%9C-%EB%B0%9B%EC%95%84%EB%82%B4%EA%B8%B0-getComputedStyle
// cf. https://developer.mozilla.org/ko/docs/Web/API/Window/getComputedStyle
// --------------------------------------------












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