// c_01_dom_sample_01.js




// step 1: 버튼을 클릭한다 -> 메뉴가 나타나라!
//    1-1: 버튼 -> var navToggleBtn = document.querySelector('.navibar-toggler');
//    1-2: 클릭 ->  선택자 클릭 (addEventListener) -> navToggleBtn.addEventListener('click', fucntion(event) {});
//    1-3: 메뉴 -> id="navbarSupportedContent"  -> getElementById('navbarSupportedContent'); 또는 document.querySelector('#navbarSupportedContent');
// step 2: 버튼을 클릭한다 -> 메뉴를 사라지게 !

var navToggleBtn = document.querySelector('.navibar-toggler');
navToggleBtn.addEventListener('click', function(event){});

var displayMenu = function() {
  // var menuBg = document.querySelector('#navbarSupportedContent');
  var menuBg = document.getElementById('navbarSupportedContent');

  // if (menuBg.style.display === 'none') {
  //   menuBg.style.display = 'block';
  // } else {
  //   menuBg.style.display = 'none';
  // }

  if (!menuBg.classList.contains('action')) {
    menuBg.classList.add('action');
  } else {
    menuBg.classList.remove('action');
  }
  // https://velog.io/@ssumniee/JS-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%AA%85-%EC%B6%94%EA%B0%80-%EC%82%AD%EC%A0%9C

};

