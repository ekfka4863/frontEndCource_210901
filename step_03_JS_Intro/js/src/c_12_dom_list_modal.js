// c_12_dom_list_modal.js

// +++++++++++++++++++++++++++++++++++++++
/* 시나리오
1. li 가져와서 여러개 생성 
2. 

*/  
// +++++++++++++++++++++++++++++++++++++++

// =============================================
// data 
var data = [
  {title: "title_01", content: "lorem text _ 01", dataLink: "data_01.json"},
  {title: "title_02", content: "lorem text _ 02", dataLink: "data_02.json"},
  {title: "title_03", content: "lorem text _ 03", dataLink: "data_03.json"},
  {title: "title_04", content: "lorem text _ 04", dataLink: "data_04.json"},
  {title: "title_05", content: "lorem text _ 05", dataLink: "data_05.json"},
  {title: "title_06", content: "lorem text _ 06", dataLink: "data_06.json"},
  {title: "title_07", content: "lorem text _ 07", dataLink: "data_07.json"},
  {title: "title_08", content: "lorem text _ 08", dataLink: "data_08.json"},
  {title: "title_09", content: "lorem text _ 09", dataLink: "data_09.json"},
  {title: "title_10", content: "lorem text _ 10", dataLink: "data_10.json"},
  {title: "title_11", content: "lorem text _ 11", dataLink: "data_11.json"},
  {title: "title_12", content: "lorem text _ 12", dataLink: "data_12.json"},
  {title: "title_13", content: "lorem text _ 13", dataLink: "data_13.json"},
  {title: "title_14", content: "lorem text _ 14", dataLink: "data_14.json"},
  {title: "title_15", content: "lorem text _ 15", dataLink: "data_15.json"}
];


// 변수 =============================================
var elConBox = document.querySelector("#contentBox");
var elCardPart = elConBox.querySelector(".card_part");

var dataLen = data.length;



// 기능 =============================================
// // 원본 data 복제해서 사용하기 
var elLiOrigin = elCardPart.children[0];
elLiOrigin.remove();     // 기존값은 삭제

// // var cloneEl = elLiOrigin.cloneNode(elLiOrigin);
// // elCardPart.append(cloneEl);
// // var cloneEl = elLiOrigin.cloneNode(elLiOrigin);   // 기존 data/노드를 클론하는 메서드 .cloneNode();
// // elCardPart.append(cloneEl);                       
// // var cloneEl = elLiOrigin.cloneNode(elLiOrigin);
// // elCardPart.append(cloneEl);
// // var cloneEl = elLiOrigin.cloneNode(elLiOrigin);
// // elCardPart.append(cloneEl);

// 위의 기능을 함수로 변환 ~ 
var fnMakeCard = function(idx) { 
  var cloneEl = elLiOrigin.cloneNode(elLiOrigin);   // 기존 data/노드를 클론하는 메서드 .cloneNode();
  cloneEl.children[0].innerText = data[idx].content;
  cloneEl.children[0].title = data[idx].title;
  cloneEl.children[0].setAttribute("data-link", data[idx].dataLink);   // e.g. <a href="#" title="title_01" data-link="data_01.json">lorem text _ 01</a>
  elCardPart.append(cloneEl);            
};
// fnMakeCard();
// fnMakeCard();
// fnMakeCard();
// fnMakeCard();

// // 또는 아래와 같이 기존에 요소를 하나 만들어서 append 하던 것처럼 li를 생성 후 추가해줘도 무방!
// var mkLi = document.createElement("li");
// mkLi.innerHTML = '<a href="#">결국 위에꺼는 원본 li 내용을 복사해서 사용하는 것. 하지만 지금 하는 것과 결과적으로는 다르지 않다.</a>'
// elCardPart.append(mkLi);


// =============================================
// for문으로 li 생성 함수 fnMakeCard() dataLen만큼 반복 수행 
for(var i = 0; i < dataLen; i++) {
  fnMakeCard(i);
}

// =============================================
// modal

// 모달 요소 기본 가져오고 기존값 제거 
var elModal = elConBox.querySelector(".card_modal");
elModal.remove();

// 추가 변수 
var elLi = elCardPart.querySelectorAll("li > a");
// console.log(elLi);    // 복수 -> forEach 돌린 후 addEventListener 적용 


// elLi.forEach();


// 이벤트 
elLi.forEach(function(element) {
  element.addEventListener("click", function(e) {
    e.preventDefault();
    // console.log(this["data-link"]);  // 원래 부터있던 속성이 아니라서 이렇게는 가져올 수 없음.
    console.log(this.getAttribute("data-link"));

    // ==============
    /* 여기서 부터 할일 ... 
    클릭시 수행하는 기능 구현하기! 
      1. .card_modal 을 생성 
      2. .card_modal 영역이 나타나게 (.on)
      3. .card_modal 내부의 닫기 버튼을 클릭시 사라지게/삭제
      4. 함수로 묶어버리기 
    */
    // ==============
    elConBox.append(elModal); 
    var elCardModal = elConBox.querySelector(".card_modal");
    var elCloseBtn = elCardModal.querySelector("button");
    
    
    // 3.
    elCardModal.classList.add("on");
    elCloseBtn.addEventListener("click", function(e) {
      e.preventDefault();
      elCardModal.remove();
    });
    // ==============
  });

    // ==============
    // ==============

    // // 4. 
    // var fnRemoveModal = function() {
    //   elCardModal.classList.add("on");
    //   elCloseBtn.addEventListener("click", function(e) {
    //     e.preventDefault();
    //     elCardModal.remove();
    //   });
    // };
    
    // var fnClickLi = function(e) {
    //   e.preventDefault();
    
    //   elConBox.append(elModal);
    //   var elCloseBtn = elCardModal.querySelector("button");
    //   elCardModal.classList.add("on");
    //   elCloseBtn.addEventListener("click", fnRemoveModal);
    // };

});
