// // c_10_dom_tab_menu_2.js

// /*  시나리오1: 
// 이벤트 페이지에서 해당하는 연도를 클릭할 때, 그에 맞는 연도의 data 목록이 나타나게 만들기 
// - 변수 선택: 연도 선택을 할 수 있게 (".title_inner li button")에 접근한다 
// -            해당 순번의 내용 (".content_inner", ".year_part")
// - class 추가/제거: .title_inner안에 있는 li와 .content_inner 내부에 있는 .year_part에 각각 ".on"을 추가/제거 해준다 
// - 선택자 사용법: querySelector
// - 순서를 선택/할당하는 방식: forEach 
// - ".on"을 할당하는 방법: 이전 변수 위치를 제거하는 방법 + 전체를 제거하는 방법 + 선택 순번 외 제거하는 방법 -> 이렇게 3가지 ! 
// 우리는 오늘 3. 선택 순번 외 제거로 해볼 것! 
// */ 


// // ==============================================
// // 변수  ----------------------------------------
// var eventBox = document.querySelector("#eventBox");
// var titleInner = eventBox.querySelector(".title_inner");
// var titleUl = titleInner.children[0];
// var titleList = titleUl.children;           // HTMLCollection(4) [li.on, li, li, li]
// var titleLiEl = [].slice.call(titleList);   // (4) [li.on, li, li, li]
// // button 선택자는 추후 진행 

// var contentInner = eventBox.querySelector(".content_inner");
// // var contentYear = contentInner.children;   // HTMLCollection(4) [div.year_part, div.year_part, div.year_part, div.year_part]
// var contentYear = contentInner.querySelectorAll(".year_part");  // NodeList(4) [div.year_part, div.year_part, div.year_part, div.year_part]
// // 언제 children? 언제 querySelectorAll? -> querySelectorAll로 반환되는게 NodeList라서 forEach를 사용할 수 있어도, 결국 배열로 만들 필요성이 있어서 ... 둘 중 아무거나 사용한 뒤에
// // children은 바로 아래에 있는 자식요소들만 접근, querySelectorAll은 아래의 아래의 아래까지 모두 접근. 그래서 children으로 하면 바로 위의 부모에게 접근할 수 있는 parent
// // nodelist를 반환하는 querySelector(All)는 비교적 나중에 생긴 개념이다. 그래서 원래 있던 html collection을 반환하는 children과 parentElements, 나중에 생겨난 childNode와 parentNode가 있다...
// // 근데, 위와 같은 경우에서는 옛날부터 사용되는 children을 사용하여 html collection을 반환하는 것이 node보다 좋은 이유는 ... node는 공백, 텍스트, 등 모두 반환하기 때문에 ... 
// // 그래서 filter 로 다시 걸러줘야 하는 방법이기 때문이다! 


// var optionIndex = 0;
// var OPTION_NAME = "on";


// // 기능  ----------------------------------------
// // optionIndex 순번에 맞는 탭메뉴 구성 
// // titleLiEl[optionIndex].classList.add("on");
// // contentYear[optionIndex].classList.add("on");
// // 위의 내용을 아래와 같이 develop 해보자 ... 

// // 목표: 우선... 만약... 각각에 들어있는 ".on" 클래스 네임을 제거하려면... 
// // step1:
// // titleLiEl에서 전체 순회 후 on 제거 
// // titleLiEl.forEach(function(data) {
// //   data.classList.remove("on");
// // });

// // step2:
// // titleLiEl.forEach(function(data, idx) {
//   // if (idx === optionIndex) {   // 현재의 데이터의 인덱스와 클릭된 요소의 인덱스를 의미하는 optionIndex와 동일하다면 continue -> 그냥 넘어가고 ... 
//   //   continue;
//   // } else {
//   //   data.classList.remove("on");
//   // }
// // });

// // step3:
// // titleLiEl.forEach(function(data, idx) {
// //   // step 2의 조건을 뒤집어서 ... 
// //   if (idx !== optionIndex) {   // 현재의 데이터의 인덱스와 클릭된 요소의 인덱스를 의미하는 optionIndex와 동일하지 않다면 -> data[idx] 즉 현재 순번째의 값에 on 을 제거 ...  
// //     data.classList.remove(OPTION_NAME);
// //   } else {
// //     // 대신 지금의 인덱스의 Li에 on 클래스를 넣어준다 
// //     data.classList.add(OPTION_NAME);
// //   }
// // });


// // 마찬가지로 여기서도 ... 
// // step 1:
// // contentYear에서 전체 순회 후 on 제거 
// // contentYear.forEach(function(data) {
// //   data.classList.remove("on");
// // });

// // step 2: on 부분 OPTION_NAME이란 변수에 담아서 치환하기~ 
// // contentYear.forEach(function(data, idx) {
// //   if (idx !== optionIndex) {
// //     data.classList.remove(OPTION_NAME);
// //   } else {
// //     data.classList.add(OPTION_NAME);
// //   }
// // });


// // 근데 ...!!
// // 여기서 잠깐 ... 위의 step들은 결국 하는 일이 같다. 하나의 기능으로/함수로 묶어주자!

// // 함수  ----------------------------------------
// var classSwitchFn = function(element) {
//   // contentYear.forEach(function(data, idx) {   // 여기서 contentYear/titleLiEl중 뭐가 올지 모르니까 매개변수 자리에 element로 바꿔치기~  
//   element.forEach(function(data, idx) {
//     if (idx !== optionIndex) {
//       data.classList.remove(OPTION_NAME);
//     } else {
//       data.classList.add(OPTION_NAME);
//     }
//   });
// };

// // 함수 사전 수행 / 호출 --------------------------
// // classSwitchFn(contentYear);
// // classSwitchFn(titleLiEl);


// // 이벤트  --------------------------------------
// titleLiEl.forEach(function(element, index) {   // titleLiEl에는 여러개가 들어있으니까 forEach로 돌리면서 그 각각의 값에 접근! 
//   var liBtn = element.children[0];
//   // console.log(liBtn); 

//   liBtn.addEventListener("click", function(event) {   // 정확히 클릭 이벤트가 일어나는 것은 li가 아닌 버튼태그니까~ 
//     event.preventDefault();

//     // console.log(index);
//     optionIndex = index;                              // 위에서 var optionIndex = 0; 라고 이미 선언함.
    

//     // 클래스 on을 추가/제거 해주는 함수 
//     classSwitchFn(contentYear);
//     classSwitchFn(titleLiEl);
//   });
  
// });


// ==============================================
// ==============================================
// ==============================================
// ㅆㅐㅁ
// c_10_dom_tab_menu2.js

// 시나리오 1: 이벤트페이지에서 해당하는 연도를 클릭시, 그에 맞는 연도의 data목록이 나타나게 만들기
// 변수 선택 : 연도선택 ( .title_inner, li, button ), 해당 순번의 내용( .content_inner , .year_part )
// class 추가/제거 : .title_inner 내부의 li와 .content_inner>.year_part에 각각 '.on'을 추가/제거
// 선택자 사용법 : querySelector
// 순서를 선택/할당하는방식 : forEach
// .on을 할당하는 방법 : 선택순번 외 제거

// ===========================
// 변수++++++++++++++++++++++
var eventBox = document.querySelector('#eventBox');
var titleInner = eventBox.querySelector('.title_inner');
var titleUl = titleInner.children[0];
var titleList = titleUl.children;
var titleLiEl = [].slice.call(titleList); // button선택자는 추후 진행

var contentInner = eventBox.querySelector('.content_inner');
var contentYear = contentInner.querySelectorAll('.year_part');
var optionIndex = 0;
var optionName = 'on';

// 기능++++++++++++++++++++++
// 함수 classSwitchFn(선택자); 기능으로 처음 요소에 'on' 첨부

// 함수++++++++++++++++++++++
var classSwitchFn = function(element){
  element.forEach(function(data, idx){ 
    if(idx !== optionIndex){
      data.classList.remove(optionName); 
    }else{
      data.classList.add(optionName); 
    }
  });
};

// 함수 사전 수행 +++++++++++++
classSwitchFn(titleLiEl);
classSwitchFn(contentYear);

// 이벤트++++++++++++++++++++++
  // li의 요소 각각을 클릭시 수행하는 기능
  titleLiEl.forEach(function(element, index){
    var liBtn = element.children[0];
    liBtn.addEventListener('click', function(event){
      event.preventDefault();
      optionIndex = index;
      classSwitchFn(titleLiEl);
      classSwitchFn(contentYear);
    });
  });

// ===========================
