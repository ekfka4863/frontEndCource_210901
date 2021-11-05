// slide_banner_from_JQ.js

// jquery를 시작하기 위한 기본 세팅 
// (function($) {

// })(jQuery);

(function($) {
  // jQuery 버전 출력 
  console.log($.fn);

  // rule - 1 ) 선택자를 무조건 $('')안에 감싼다. 변수에 넣어줄 수 있다. 
  // S('선택자')    VS    document.querySelector('선택자')  
  var nt = $('.next');

  // rule - 2 ) 
  var slideWrap = $('.slide_con_wrap');
  var div = slideWrap.children('div');    // slideWrap의 자식들인 div들을 변수에 넣겠다는 얘기 
var i=0;
  // 버튼을 클릭할 때마다 div의 i번째에 내용이 나타나게!! 
  // nt.on('click');
  console.log( div );
  nt.on('click', function() {
    i += 1;               // 1씩 i에 더하겠다

    // i가 5보다 크거나 같으면 i를 0으로 다시 설정 (초기화)
    if (i >= 5) { i = 0; }  

    // div.hide();            // div들을 모두 숨겨라 
    div.eq(i).siblings().removeClass('active');

    // div.eq(i).show();     // eq()는 순서를 정해주는 역할이고, show()는 말그대로 보여주라는 말! 
    div.eq(i).addClass('active');

  });

})(jQuery);