// // c_10_dom_tab_menu_2-1.js

// // 방법 1: 아예 한줄로 만들기 - 진짜 json으로 데이터를 불러올 떄... 
// var innerCode = '<a href="#" data-id><h4 class="event_title"></h4><p class="event_narration"></p><dl class="date"><dt class="blind">기간</dt><dd></dd></dl><dl class="event_check success"><dt></dt><dd></dd></dl></a>';

// // 방법 2: 역슬러쉬 쓰고 띄어쓰기 일정 하지 말기 (단, 들여쓰기 가능!) - 지금 연습용으로 사용할 것. 원래 json으로 데이터 받아올라면 태그 사이에 텍스트는 없어야 할 부분은 다 없애줘야함!
// var innerCode2 = '\
// <a href="#" data-id>\
//   <h4 class="event_title">summer flavor</h4>\
//   <p class="event_narration">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla quas! Laudantium fuga nesciunt accusamus sunt harum odio aliquid! Necessitatibus ullam enim adipisci provident delectus distinctio blanditiis laudantium qui alias?</p>\
//   <dl class="date">\
//     <dt class="blind">기간</dt>\
//     <dd></dd>\
//   </dl>\
//   <dl class="event_check success">\
//     <dt>이벤트 진행 상태</dt>\
//     <dd>이벤트 종료</dd>\
//   </dl>\
// </a>';


// // cf. 리액트 문법 -> js에서는 에러! 
// // var innerCode3Fn = function () {
// //   return ( // jsx
// //     <button type="button" data-import="../event/y20042_data.json" data-id="event_21042">
// //       <h4 class="event_title">summer flavor</h4>
// //       <p class="event_narration">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla quas! Laudantium fuga nesciunt accusamus sunt harum odio aliquid! Necessitatibus ullam enim adipisci provident delectus distinctio blanditiis laudantium qui alias?</p>
// //       <dl class="date">
// //         <dt class="blind">기간</dt>
// //         <dd>2022. 01. 05 - 2022. 02. 15</dd>
// //       </dl>
// //       <dl class="event_check success">
// //         <dt>이벤트 진행 상태</dt>
// //         <dd>이벤트 종료</dd>
// //       </dl>
// //     </button>
// //   );
// // } 


// // ---------------------------------------------------
// // 탭메뉴 내용에 필요한 코드 형식 삽입하기 

// // var testWrap = document.querySelector("#test_wrap");
// // var testList = testWrap.querySelectorAll("li");
// // // console.log(testList);

// // testList[0].innerHTML = innerCode;
// // testList[1].innerHTML = innerCode2;
// // // testList[2].innerHTML = innerCode3Fn();  // 리액트 문법이라 에러~


// // -----------
// var li1 = document.querySelector(".event_particle li");
// li1.innerHTML = innerCode;


// // ---------------------------------------------------
// // e.g. 
// /* 시나리오 
// 1. html 요소를 생성, 지정된 위치에 삽입 -> innerHTML, append, createElement 
// 2. 함번에 생성/삽입을 반복할 수 없기에 생성 + 첨부를 하나의 세트로 인식하여 반복 수행 
// 3. 별도의 data 내용을 기반으로 해당하는 자료에 맞게 각각 첨부 
// */ 

// // 변수 
// var data = [    // li 요소에 삽입할 객체 리스트
//   { id:'event_21042', 
//   modalPath:'../event/y21042_data.json', 
//   title: 'summer flaver', 
//   narr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eaque?',
//   date:'2022. 01. 05 - 2022. 02. 15',
//   eventStatus:'ready' // true/false/'ready'
// }
// ];


// var contentInner = document.querySelector(".content_inner");
// var yearPart = contentInner.querySelectorAll(".year_part");
// var latestYear = yearPart[0];

// // console.log(latestYear);
// // latestYear.innerHTML = "<ul></ul>";   // 원래 있던 부분도 덮어 써버림!

// // latestYear.append("<ul></ul>");  // cf. append는 지정된 선택자 내부에 필요한 요소(내용)을 기존 내용에 추가로 덧붙이는 기능 
// // latestYear.appendChild("<ul></ul>");  // 문자는 appendChild에 의해 추가될 수 없다 
//                                          // cf. https://yelee.tistory.com/14

// // 기능 
// // 1. ul 생성 / li 생성   
//   var makeUl = document.createElement("ul");  // 생성 
// // 2. 클래스명 추가 
// makeUl.setAttribute("class", "event-particle");  
// // 3. 요소 추가   
//   latestYear.append(makeUl);      
  
// // 4. 요소에 접근 
//   // var makeLi = document.createElement("li"); // 접근 
//   var yearUl = latestYear.querySelector("ul"); // 접근 
//   // yearUl.append(makeLi);                       // 추가 
  

// // 5. li 5개 생성하여 첨부 
// var makeLiLen = [1, 2, 3, 't', 'a'].length;   // 실제 생성할 배열의 갯수만큼 처리 
// var makeLi;                                  // document.createElement("li"); 

//   for (var i = 0; i < makeLiLen; i++) {
//     makeLi = document.createElement("li");
//     makeLi.innerHTML = innerCode;
//     // makeLi.append(innerCode);  // 글짜로 삽입 
//     // makeLi.appendChild(makeLi);   // 에러 -> 애초에 innerCode가 글자라서 ... 
//     yearUl.append(makeLi);
//   }
  
//   // 생성한 내용 기준 li에 내용 첨부 
//   var selectI = 0;

//   var eventList = yearUl.querySelectorAll("li");   
//   var selectorLi = eventList[selectI];
//   var selectorLink = selectorLi.querySelector("h4");
//   var selectorH4 = selectorLi.querySelector("h4");
//   selectorH4 = data[selectI].title;
  



// // ---------------------------------------------------
// // 다시 정리 ... 
// /* 정리
// - innerHTML은 기존에 있던 코드도 덮어쓴다 
// - append는 지정된 선택자 내부에 필요한 요소(내용)을 기존 내용에 추가로 덧붙이는 기능  -> 텍스트도 포함해서 넣어준다 
// - appendChild는 (오직) 'Node'형식(/html 태그 형식 - createElement등으로 만든...) 으로 구성된 내용만 담을 수 있다 
//   cf. https://webruden.tistory.com/634
// - createElement는 요소를 생성하는 기능 - 생성만 가능하며 1회용, 추가로 덧붙이기 위해서는 append, appendChild... 를 사용해줘야만 한다 
// */

// // 클래스 이름을 추가하는 3가지 방법 
// /*
// - Element.classList.add('클래스명')
// - Element.className = '클래스명';
// - Element.setAttribute('속성이름', '속성값');

// e.g. 
//   makeUl.className = "two";      // 기존 내용 지우는 아이니까 젤 위로~ 
//   makeUl.classList.add("one");   // 기존에 추가해주는 아이니까 className 뒤로~ 
//   makeUl.setAttribute("class", "three");  // 아예 대체 ~ + 속성 자체에 변경이 가능 
//   makeUl.setAttribute("data-id", "three");  // 아예 대체 ~ + 속성 자체에 변경이 가능 
  
// */


//=======================
//=======================
//=======================

// c_10_dom_tab_menj_2-1.js

// * li요소에 삽입할 객체 리스트
var data = [
  { id:'event_21042', 
    modalPath:'../event/y21042_data.json', 
    title: 'summer flaver', 
    narr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eaque?',
    date:'2022. 01. 05 - 2022. 02. 15',
    eventStatus:'ready' // true/false/'ready'
  }
];

// ----------------------------------------------------------
// 1. html요소를 생성, 지정된 위치에 삽입 - innerHTML, append, createElement
// 2. 한번에 생성+첨부이 반복할 수 없기에 생성+첨부를 하나의 세트로 인식하여 반복수행
// 3. 별도의 data내용을 기반으로 해당하는 자료에 맞게 각각 첨부
// ----------------------------------------------------------

// 선택변수
var contentInner = document.querySelector('.content_inner');
var yearPart = contentInner.querySelectorAll('.year_part');
var latestYear = yearPart[0];
// console.log( latestYear )

// 기능
  // 0. 삽입할 요소
  var innerCode = '<a href="#" data-id><h4 class="event_title">제목</h4><p class="event_narration">설명</p><dl class="date"><dt class="blind">기간</dt><dd>날짜</dd></dl><dl class="event_check success"><dt>이벤트 상황</dt><dd>진행예정</dd></dl></a>';

  // 1. ul생성
    var makeUl = document.createElement('ul');
    makeUl.setAttribute('class', 'event_particle');
    latestYear.append( makeUl );

    var yearUl = latestYear.querySelector('ul');
    // var makeLi = document.createElement('li');
    // yearUl.append(makeLi);

  // 2. li 5개 생성하여, 첨부
  var i=0;
  var makeLiLen = data.length; // 실제 생성할 배열의 갯수만큼 처리
  var makeLi;//  = document.createElement('li');
/*
  for(; i < makeLiLen; i+=1){
    makeLi = document.createElement('li');
    makeLi.innerHTML = innerCode;
    yearUl.append(makeLi);
  }
  // 생성한 내용기준 li에 내용 첨부
  var selectI = 0; // 공통 순번을 가진 변수
  var eventList = yearUl.querySelectorAll('li'); // 생성된 li를 선택
  var selectorLi = eventList[selectI]; // li의 순번
  var dataSelect = data[selectI]; // 첨부할 순번의 data위치
    // 각 내용을 담을 선택자
  var selectorLink =selectorLi.querySelector('a'); 
  var selectorH4 = selectorLi.querySelector('.event_title');
  var selectorP  = selectorLi.querySelector('.event_narration');
  var selectorDate  = selectorLi.querySelector('.date > dd');
  var selectorStatus  = selectorLi.querySelector('.event_check');
  
    // 각 선택자에 맞는 내용 첨부
  selectorLink.setAttribute('data-id', dataSelect.id );
  selectorLink.setAttribute('href', dataSelect.modalPath );
  selectorH4.innerText = dataSelect.title;
  selectorP.innerText  = dataSelect.narr;
  selectorDate.innerText = dataSelect.date;
  selectorStatus.classList.add(dataSelect.eventStatus);
*/

// 위 내용이 길어서 조금 줄이면...
/* // 샘플 테스트 ( 문자 " 와 변수의 결합 )
var insert = ' more ';
var insert2 = ' more2 ';
var d = 'd' + insert + 'a' + insert2 + 't' + insert + 'a'; // d more a more2 t more a
var d2 = 'd\"' + insert +'\"' + insert2 + 'a';  // d" more " more2 a
console.log( d2 );
*/

var innerCode, dataSelect, selectorStatus;
for(; i < makeLiLen; i+=1){

    makeLi = document.createElement('li');
    dataSelect = data[i];

    innerCode = '<a href="'+ dataSelect.modalPath +'" data-id="'+ dataSelect.id +'"><h4 class="event_title">'+ dataSelect.title +'</h4><p class="event_narration">'+ dataSelect.narr +'</p><dl class="date"><dt class="blind">기간</dt><dd>'+ dataSelect.date +'</dd></dl><dl class="event_check"><dt>이벤트 상황</dt><dd>진행</dd></dl></a>';

    makeLi.innerHTML = innerCode;
    yearUl.append(makeLi);
    selectorStatus  = makeLi.querySelector('.event_check');
    selectorStatus.classList.add(dataSelect.eventStatus);
}

// ------------------------------------------------------------------------------------
// append 는 지정된 선택자 내부에 필요한 요소(내용)을 기존 내용에 추가로 덧붙이는 기능
// appendChild 는 'Node'형식으로 구성된 내용만 담을수 있다(element).
// createElement는 요소를 생성하는 기능 - 생성만 가능하며 1회용, 추가로 덧붙이기 위해서는 append, appendChild ..을 사용
// 요소에 class속성을 추가하는 방법 
  // 1. 선택자.classList.add('이름'), 
  // 2. 선택자.className = '이름', 
  // 3. 선택자.setAttribute('속성명','이름');
  //  makeUl.className = 'two'; // 기존내용지우고 대체
  //  makeUl.classList.add('one');// 기존에 추가
  //  makeUl.setAttribute('data-id','three'); // 대체, 속성 변경가능
