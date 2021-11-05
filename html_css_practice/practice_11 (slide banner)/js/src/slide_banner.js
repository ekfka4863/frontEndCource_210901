// slide_banner.js
// vanilla js ver.

var next = document.querySelector('.next');
var slideCon = document.querySelector('.slide_con_wrap');
var slideDiv = document.querySelectorAll('div');
var i = 0;

// next 버튼을 클릭시 기능 수행 (function)
next.addEventListener('click', function(e) {
  // next에 들어있는 기본 기능을 수행하지 않도록 처리
  e.preventDefault();

  // 주어진 변수 i에 1을 더해라
  i += 1;

  // i의 값이 5보다 크거나 같으면 수행
  if (i >= 5) {
    i = 0;        // 초기화
  }

  // 0부터 4까지 반복(5번 반복수행)
  for (var j = 0; j < 5; j++) {
    // div의 j번째에 들어있는 class의 이름 'active'를 제거하라
    if (j !== i) {
      slideDiv[i].classList.remove('active');
    }
  }
  // div의 i번째에 class 이름 'active'를 추가하라
  slideDiv[i].classList.add('active');
});