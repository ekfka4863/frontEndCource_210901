// b_14_js_json_1.js

// random json
// cf.  https://www.mockaroo.com/


// person_data_2.json
// var person에다가 붙여넣기
var originData = [{
    "id": 1,
    "title": "Account Executive",
    "link": "http://soup.io"
  },
  {
    "id": 2,
    "title": "Safety Technician I",
    "link": "https://unicef.org"
  },
  {
    "id": 3,
    "title": "Web Developer III",
    "link": "https://examiner.com"
  },
  {
    "id": 4,
    "title": "VP Marketing",
    "link": "https://flavors.me"
  },
  {
    "id": 5,
    "title": "Database Administrator IV",
    "link": "https://alexa.com"
  },
  {
    "id": 6,
    "title": "Staff Scientist",
    "link": "http://examiner.com"
  },
  {
    "id": 7,
    "title": "Programmer Analyst II",
    "link": "http://businessweek.com"
  },
  {
    "id": 8,
    "title": "Financial Advisor",
    "link": "http://opensource.org"
  },
  {
    "id": 9,
    "title": "Chemical Engineer",
    "link": "https://jugem.jp"
  },
  {
    "id": 10,
    "title": "Associate Professor",
    "link": "https://google.es"
  }
]


// 원본 데이터를 훼손 시키지 않게, 깊은 복사 
// 방법 1: 
// var dataList = {};
// for (var key in originData) {
//   dataList[key] = originData[key];
// }
// console.log(dataList);

// 방법 2: 깊은 복사 쉬운 방법 - originData copy
var textData = JSON.stringify(originData);
var dataList = JSON.parse(textData);


// e.g. 
// 중요!!!!
// .navigation을 선택 
// ul을 생성하여 담기 
// document.getElementsByClassName('navigation')[0];
var navi = document.querySelector('.navigation');
// navi.style.width = '100%';
// navi.style.height = '50px';
// navi.style.backgroundColor = '#dcd';
navi.style = "width> 100%; height: 50px; background-color: #dcd;"

// li 생성! -> document.createElement('ul');
// 방법1
var makeUl = document.createElement('ul');   // innerHTML 방식이 아니라 내부에 추가로 삽입할 때 요소를 삽입 처리 
// 방법2
// var makeUl2 = '<ul class="list"></ul>';    // innerHTML을 사용시 직접 내용을 작성 
makeUl.classList.add('list');
navi.append(makeUl);


// 정리 !! 
// ul.list선택 -> querySelector('.list')
// 내부에 담을 li 생성 -> createElement('li')
// li내부에 유일요소인 a 생성 -> createElement('a') -> '<a></a>'
// li를 .list에 담기 -> (.list).append(li)
// a에 href 속성 처리, text 글자 삽입 with originaData json 

var ulList = document.querySelector('.list');
var makeLi = document.createElement('li');
var makeA = '<a class="link" href="#" target="_blank" title="link data"></a>'
makeLi.innerHTML = makeA;
ulList.append(makeLi);   // append는 요소로 만든 아이만 들어갈 수 있음! 

// originData deep copy 
var textData = JSON.stringify(originData);
var dataList = JSON.parse(textData);

console.log(dataList[0].title, dataList[0].link);
var title = dataList[0].title;
var link = dataList[0].link;
var makeA = '<a class="link" href=""' + link + '">' + title + '</a>';
makeLi.innerHTML = makeA;
ulList.append(makeLi);


// ------ 
// 여기 부분 놓침~
// for문으로 돌리기 
// ------ 

// step3: forEach() - for문과 forEach문은 차이가 있다! 
// dataList.forEach(function(data, index){
dataList.forEach(function(data){
  // console.log(data.title, data.link, index);
  var makeLi = document.createElement('li');
  var makeA = '<a class="link" href=""' + link + '">' + title + '</a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  var title = data.title;
  var link = data.link;
  findA.href = link;
  findA.innerText = title;
  ulList.append(makeLi);
});


// ------ 
// 다시...
// for문과 forEach의 차이는 전체를 순환한다는 의미/각각 처리한다는 의미에서 다름 
// for문은 전체의 해당 순서만 파악해서 해당 순서의 어떤 데이터를 출력해주는 개념이라면 
// forEach 문은 해당 순서 요소에 대해 어떠한 처리, 값에대한 처리/연산을 한다. 
// cf.  https://m.blog.naver.com/wideeyed/221877912230


// 응용 
// 함수로 기능을 묶어서 처리 
// forEach로 
var loopFn1 = function(content) {
  var makeLi = document.createElement('li');
  var makeA = '<a class="link" href=""' + link + '">' + title + '</a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  var title = data.title;
  var link = data.link;
  findA.href = link;
  findA.innerText = title;
  ulList.append(makeLi);
};


dataList.forEach(function(data){ loopFn1 });


// ---------------\
// for문을 함수화 처리 
var i = 0;
var len = dataList.length; // 10

var loopFn2 = function () {
  var makeLi, makeA, findA, title, link;
  makeLi = document.createElement('li');
  makeA = '<a class="link">sample text</a>';
  makeLi.innerHTML = makeA;
  findA = makeLi.querySelector('a');
  title = dataList[i].title;
  link = dataList[i].link;
  findA.href = link;
  findA.innerText = title;
  ulList.append(makeLi);    // ulList.내부의 뒤에 삽입 (생성된 li)
};

for (; i < len; i+=1) {
  loopFn2(i)    
}
console.clear();


// 위의 방법을 조금 더 쉽게? 가능? 
// 비교를 해보자! 
// vanilla javascript로 순수하게 처리하는 것은 -> 모든 것을 수동으로 처리 한다 
// jQuery로 처리하는 것: 반자동 처리와 같음! 어느 정도는 스스로 알아서 해주는 기능이 있다. 

// 그렇다면 jQuery는 어케 사용? 몇가지 조건/세팅이 충족되어야 한다. 
// 조건 1. 제이쿼리를 불러와야 한다 (feat. cdn 방식)
// cf.  https://code.jquery.com/    -> minified
//      https://mjmjmj98.tistory.com/25
// 단, 이 아이의 치명적인 단점은 네트워크 상에서만 동작하기 때문에, 만약 인터넷 연결이 끊길 경우 더 이상 사용 할 수 없게된다. 

(function($){
  // console.log($.fn);     // 제이쿼리가 잘 연결되었는지 확인하는 용도!
  // var ul = document.querySelector('.list');
  var ul = $('.list');
  // li생성/삽입 
  // ul.append('<li><a class="link"></a></li>');   // 순수 자바스크립트에서도 append가 있는데, 순수 js에서는 append 이미 생성되거나 존재하는 아이를 넣어주는 기능밖에 하지 못하지만, jQuery에서는 복합적인 기능 가능! 
  // jQuery에서는 if, for, forEach 등등 문법 그대로 활용이 가능하다. 
  // 하지만 forEach 대신에 수행가능한 메소드는 jQuery에 별도로 첨부되어 있다.  -> each() 
  dataList.forEach(function)(content, index){
    // 약간은 무식한 방법 
    // ul.append('<li><a class="link" href="' + content.link + '">' + content.title +'</a></li>');    
    // 약간은 간편한 방법 
    // cf.  https://webzz.tistory.com/90
    ul.append('<li><a class="link" href=""></a></li>');   // eq(); -> 선택한 요소의 인덱스 번호에 해당하는 요소를 찾는다
    var list = ul.children('li').eq(index).children('a');
    list.text(content.title);        // 선택자.innerText = '값'; 이랑 동일한 내용 
    list.attr('href', content.link); // 선택자.setAttribute('속성명', '값'); 이랑 동일한 내용 
  };
})(jQuery);


var box = document.querySelector('#box');  // js
var box2 = $('#box2');                     // jQuery 
var li = document.querySelectorAll('li');  // js
var li = $('li');                          // jQuery 

