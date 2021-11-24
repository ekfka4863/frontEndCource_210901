// c_02_continuing_dom_make_nav_01.js



// --------------------------------------------
// 변수 영역 ----------------------------------
var naviArea = document.querySelector('.nav_area');
var naviBtnWrapper = document.querySelector('.navi_btn');
var naviBtn = naviBtnWrapper.querySelector('button');
var navOn = 'on';


// 이벤트 영역 --------------------------------
// 메뉴를 클릭하면, navigation 영역이 나타나게/나타나 있으면 사라지게 하라 

// 1. 오리지널 버전 
// naviBtn.addEventListener('click', function(e) {
//   e.preventDefault();

//   var checkClassName = naviArea.classList.contains(navOn);

//   if (!checkClassName) {
//     naviArea.classList.add(navOn);
//   } else {
//     naviArea.classList.remove(navOn);
//   }
// });

// 2. 응용 - 삼항 연산자 
naviBtn.addEventListener('click', function(e) {
  e.preventDefault();

  var checkClassName = naviArea.classList.contains(navOn);

  (!checkClassName) ? naviArea.classList.add(navOn) :  naviArea.classList.remove(navOn);
});


// 3. 응용 -> BUT! 어쩔 때는 오류가 나기도... 조작이 잘 안되기도.. 그래서 가급적이면 지양!
// naviBtn.addEventListener('click', function(e) {
//   e.preventDefault();
//   naviArea.classList.toggle(navOn);
// });
// --------------------------------------------





