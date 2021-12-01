// c_10_dom_tab_menu_2-1.js

// 방법 1: 아예 한줄로 만들기 
var innerCode = '<a href="#" data-id><h4 class="event_title">summer flavor</h4><p class="event_narration">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla quas! Laudantium fuga nesciunt accusamus sunt harum odio aliquid! Necessitatibus ullam enim adipisci provident delectus distinctio blanditiis laudantium qui alias?</p><dl class="date"><dt class="blind">기간</dt><dd></dd></dl><dl class="event_check success"><dt>이벤트 진행 상태</dt><dd>이벤트 종료</dd></dl></a>';


// 방법 2: 역슬러쉬 쓰고 띄어쓰기 일정 하지 말기 (단, 들여쓰기 가능!)
var innerCode2 = '\
<a href="#" data-id>\
  <h4 class="event_title">summer flavor</h4>\
  <p class="event_narration">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla quas! Laudantium fuga nesciunt accusamus sunt harum odio aliquid! Necessitatibus ullam enim adipisci provident delectus distinctio blanditiis laudantium qui alias?</p>\
  <dl class="date">\
    <dt class="blind">기간</dt>\
    <dd></dd>\
  </dl>\
  <dl class="event_check success">\
    <dt>이벤트 진행 상태</dt>\
    <dd>이벤트 종료</dd>\
  </dl>\
</a>';


// cf. 리액트 문법 -> js에서는 에러! 
// var innerCode3Fn = function () {
//   return ( // jsx
//     <button type="button" data-import="../event/y20042_data.json" data-id="event_21042">
//       <h4 class="event_title">summer flavor</h4>
//       <p class="event_narration">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla quas! Laudantium fuga nesciunt accusamus sunt harum odio aliquid! Necessitatibus ullam enim adipisci provident delectus distinctio blanditiis laudantium qui alias?</p>
//       <dl class="date">
//         <dt class="blind">기간</dt>
//         <dd>2022. 01. 05 - 2022. 02. 15</dd>
//       </dl>
//       <dl class="event_check success">
//         <dt>이벤트 진행 상태</dt>
//         <dd>이벤트 종료</dd>
//       </dl>
//     </button>
//   );
// } 


// ---------------------------------------------------
// 탭메뉴 내용에 필요한 코드 형식 삽입하기 

var testWrap = document.querySelector("#test_wrap");
var testList = testWrap.querySelectorAll("li");
// console.log(testList);

testList[0].innerHTML = innerCode;
testList[1].innerHTML = innerCode2;
// testList[2].innerHTML = innerCode3Fn();  // 리액트 문법이라 에러~











