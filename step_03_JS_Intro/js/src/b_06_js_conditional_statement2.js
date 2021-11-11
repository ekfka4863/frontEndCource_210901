// b_05_js_conditional_statement2.js

// 기능 설명 
// input에 글자를 입력할 때 어떠한 글자를 입력했는지 체크


// 변수 
var inputBox = document.querySelector('#inputBox');
var par = document.querySelector('p');
var narr;

// 함수 설정
var keyFn = function(data) {
  switch(data) {
    case '1':
      narr = '숫자 1을 입력했습니다.';
      console.log('숫자를 입력했습니다.');
      break;
      case ' ':
      narr = '스페이스를 입력했습니다.';
      console.log('스페이스를 입력했습니다.');
      break;
    default:
      narr = '다른 글자를 입력';
      console.log('다른 글자를 입력');
  }
};// keyFn();


// 이벤트 
// inputBox에 이벤트 발생 (글입력하면, 다음을 수행) 
inputBox.addEventListener('keyup', function(event) {
  // console.log(event);
  // console.log(event.key);
  keyFn(event.key);
  par.innerText = narr;
});

// cf. 
// 기본 사용 문법 
// 선택자.이벤트발생('이벤트조건', 다음을수행(발생이벤트){})
// - 마우스(click, dbclick, mousedown, mouseup),
// - 키보드(keypress, keydown, keyup),
// - 스크롤(mousewheel, DOMMouseScroll),
// - 사이즈변경(resize),
// - 터치(touchstart, touchmove, touchend), ...



// cf.
// https://www.daleseo.com/js-key-events/
// https://hianna.tistory.com/480


// -----------------------------------------------
// e.g. 

// 변수
var selectFood = document.querySelector('#selectFood');
// cf. 예전부터 사용 -> document.getElementById('selectFood');
var btn1 = document.querySelector('.btn1');
// cf. 예전부터 사용 -> document.getElementsByClassName('btn1'); 
var food = document.querySelector('.food');


// 함수 
var switchTest2 = function(food) {
  var selectFood;

  switch (food) {
    case 'noodle': 
      selectFood = '면류를 좋아하시는군요. 냉면을 추천드려요!';
      break;
    case 'meat': 
      selectFood = '고기는 역시 소고기!';
      break;
    case 'rice': 
      selectFood = '한국 쌀이 맛이 좋아요!';
      break;
    default:
      selectFood = '그냥 입에 들어가면 다 맛있죠!';
  }

  return selectFood;
}
switchTest2('noodle');        // '면류를 좋아하시는군요. 냉면을 추천드려요!'
switchTest2();                // '그냥 입에 들어가면 다 맛있죠!'


// 이벤트 
// btn1을 클릭시 이벤트발생('클릭', 수행 => selectFood의 값을 가져와서 결과를 food에 도출)
btn1.addEventListener('click', function(e) {
  e.preventDefault();        // 본래/기본 기능 삭제 

  // console.log(selectFood.value);
  var rel = selectFood.value;     // 인풋 태그에 적은 텍스트, input태그의 value="" 안에 들어간 값 
  var returnValue = switchTest2(rel);
  food.innerText = returnValue;
});
