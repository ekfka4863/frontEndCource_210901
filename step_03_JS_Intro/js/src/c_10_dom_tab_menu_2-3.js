// c_10_dom_tab_menu_2-3.js

// ++++++++++++++++++++++++++++
// 시나리오:
// * li카드를 선택시 모달창이 나타나게 만들기
// 1. 카드 클릭시 모달창을 띄울 요소를 생성
// 2. 모달창이 서서히 나타나게 하고(fade) // 일단 class로 대체
// 3. 모달창이 나타나면, 해당하는 모달창의 닫기 버튼에 자동으로 focus 처리
// 4. 모달창의 닫기버튼을 클릭하면, 기존에 있던 li카드의 위치로 돌아가서 해당 카드에 focus 처리
// ++++++++++++++++++++++++++++

// ============================
// 변수

var elEventBox = document.querySelector("#eventBox");
var elEventArea = elEventBox.querySelector(".event_area");
var elContentInner = elEventArea.querySelector(".content_inner");
var elYearPart = elContentInner.querySelector(".year_part.on");
var elEventParticle = elYearPart.querySelector(".event_particle");
// 자식 요소 선택
// ver.1.
// var elEventLi = elEventParticle.querySelectorAll("li");
// ver.2.
var elEventLi = elEventParticle.children;
var elEventLiArr = Array.prototype.slice.call(elEventLi);
// ver.3.
// var elEventLi = elEventParticle.childNodes;     // NodeList -> 단, 코멘트 텍스트 등 모두 포함
// var elEventLiArr = Array.prototype.slice.call(elEventLi);


// event Modal - 생성시 클릭 가능하도록 ...
var eleEventModal; // = elEventBox.querySelector(".event_modal");
var eleModalClose; // = eleEventModal.querySelector(".modal_close button");


// 추가 적용할 변수
var OPTION_TEXT = "on";
var OPTION_INDEX = 0;
var MODAL_CODE = '<div class="event_modal">\
                    <div class="modal_part">\
                      <h4>modal title</h4>\
                      <div class="modal_particle">\
                        <div class="inner_sample">sample</div>\
                      </div>\
                      <div class="modal_close"><button type="button">닫기</button></div>\
                    </div>\
                    <div class="modal_bg"></div>\
                  </div>';

// ============================
// 기능




// ============================
// 함수
var fnToArray = function(data) {
  return Array.prototype.slice.call(data);
};
// var arr = fnToArray(elEventLi);

// 닫기 버튼 클릭 활성화 하는 함수 
var fnCLoseBtnAction = function() {
  // (elEventModal이 생성되어 있지 않으면 존재하지 않으)
  eleModalClose.addEventListener("click", function(e) {
    e.preventDefault();
    // eleEventModal.classList.remove(OPTION_TEXT);
    // elEventLiArr[OPTION_INDEX].children[0].focus();
  });
};

// elEventModal HTML 코드를 생성 
var fnMakeModal = function() {
  var mkModal =document.createElement("div");
  elEventModal.setAttribute("class", "event_modal");
  // elEventModal.setAttribute("class", "event_modal on");    // test
  // elEventModal.className = "event_modal";
  elEventModal.innerHTML = MODAL_CODE;

  // 생성된 요소를 삽입 
  elContentInner.after(elEventModal);

  // 내용이 배치되었으므로, 선택자에 관련된 변수를 설정 (cf. 전역변수로 설정해 논 변수를 여기서 아래와 같이 설정...)
  eleEventModal = elEventBox.querySelector(".event_modal");
  eleModalClose = eleEventModal.querySelector(".modal_close button");

  // .on을 첨부하여 나타나도록 처리 및 focus 
  eleEventModal.classList.add(OPTION_TEXT);
  eleModalClose.focus();

  // 버튼이 인지된 시점에서 닫기 버튼을 사용할 수 있게 활성화 시켜주는 fnCLoseBtnAction 함수를 호출한다
  fnCLoseBtnAction();
};




// ============================
// 이벤트 

// content li 클릭 
elEventLiArr.forEach(
  function(element, index) {
    // console.log(element);
    // var elLink = element.children[0];
    // console.log(elLink);
    var elLink = element.children[0];
    elLink.addEventLister("click", function(e) {
      e.preventDefault();
      OPTION_INDEX = index;
      fnMakeModal(); 

      // elEventModal 내용을 생성하고, 처리 (.content_inner 뒤에 생성 : 선택자.after())
      // eleEventModal.classList.add(OPTION_TEXT);
      // eleModalClose.focus();
    });
  }  
); 


// // 닫기 버튼 클릭 (단, elEventModal이 생성되어 있지 않으면 존재하지 않으므로 에러가 발생 -> 즉, 모달 생성시 동작하게 처리해야한다.)
// eleModalClose.addEventListener("click", function(e) {
//   e.preventDefault();
//   eleEventModal.classList.remove(OPTION_TEXT);
//   elEventLiArr[OPTION_INDEX].children[0].focus();
// })



// ============================
// ++++++++++++++++++++++++++++
// footer 
var footInner = document.querySelector(".footer_inner");
var footInnerLi = footInner.childNodes;     // NodeList -> 단, 코멘트 텍스트 등 모두 포함
// console.log(footInnerLi);
// 그래서 ... childNodes에서 진짜 (필요한)요소들만 뽑고 싶으면 ... 
// 1. nodeType을 체크한다 
// console.log(footInnerLi[0].nodeType);
// console.log(footInnerLi[1].nodeType);
// 2. nodeType이 상수 1을 리턴하면 element임을 의미. nodeType을 확인한 후 ... 
// cf.  https://hianna.tistory.com/412
// 3. NodeList에 filter를 사용할 수 있게 배열로 변환 +
// 4. nodeType이 상수 1을 리턴하는 아이들만 배열로 반환하게끔 filter를 사용한다 
var footTypeArr = Array.prototype.slice.call(footInnerLi).filter(function(element) {
  return element.nodeType === 1
});
console.log(footTypeArr);   // (5) [li, li, li, li, li]
// ++++++++++++++++++++++++++++


