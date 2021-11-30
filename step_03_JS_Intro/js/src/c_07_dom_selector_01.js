// c_07_dom_selector_01.js

var wrap = document.getElementById("wrap");
// wrap.style.width = "90%";
// wrap.style.margin = "auto";
// wrap.style.backgroundColor = "#eee";
wrap.style = "width: 90%; margin: auto; background-color: #fda; padding: 0.5rem;"

var headBox = document.querySelector("#headBox");
headBox.style = "width: 100%; height: auto; background-color: #adf;";


// h1
var h1 = wrap.getElementsByTagName("h1");
// var h1 = wrap.querySelector("h1");
// console.log(h1.length);  // 1
var idx = h1.length - 1;
// HTML collection은 배열의 형식으로 나오기 떄문에 인덱스로 몇번쨰의 요소에 style을 적용할 것인지 알아야 한다! 
h1[idx].style = "width: 100px; height: 30px; background-color: #dfd;";

// h1
var headH1 = headBox.querySelector("h1");
// headH1.style = "border-radius: 5px; font-size: 1.2rem;"
// 근데 위에꺼로 하면 아까 h1[idx].style부분에서 적용한 스타일링이 덮어쓰이니까 ... 아래와 같이 따로 값을 추가해줄 것! 
headH1.style.borderRadius = "5px";
headH1.style.fontSize = "1.2rem";

// -----------------------------------
// cf. 
// HTML collection : 옛날방식의 선택자 
//    - document.getElementById();

// NodeList : 선택자는 아직 전부 사용하기엔 조금 무리가 있다 
//    - document.querySelector();
// -----------------------------------

// 자식 선택자 
var h1 = wrap.getElementsByTagName("h1")[0];  
// getElement"s"ByTagName 처럼 element가 아닌 elements를 구하는 선택자에게는 반드시 몇번째의 요소인지를 명시. 
// 요소가 하나만 있어도 인덱스를 꼭 명시해줘야 한다!!
h1.style = "width: 100px; height: 30px; background-color: #dfd;";

var h1Link = h1.children;           // HTMLCollection [a, span]
// var h1Link = h1.children[0];     // <a href="./a_content.html">js - <abbr title="document object model">DOM</abbr></a>
h1Link[0].style = "padding: 0.5rem; color: #05f;";
h1Link[1].classList.add("blind");
// console.log(h1Link);             // HTMLCollection(2) [a, span.blind]

// cf. 이때, children과 childNodes의 차이점 비교
var h1Insert = h1.childNodes;
// console.log(h1Insert);           // NodeList(5) [text, a, text, span.blind, text]



// nav 파트
var navArea = wrap.getElementsByClassName("nav_area");
// navArea.style = "width: 100%";
// 이때도 복수를 의미하는 배열 형식으로 반환되는 HTML collection이니까 인덱스 명시 필수! 
navArea[0].style = "width: 100%";
// 이때, getElementsByClassName는 IE에서 지원 안함. 그래서 ... 이때는 ... 
// var navArea2 = wrap.getElementsByTagName('nav')[0].className === "nav_area";  // true 
// https://bytenota.com/javascript-how-to-use-getelementsbyclassname-in-ie8-or-below/

var navArea2 = headBox.querySelector(".nav_area");
navArea2.style.height = "30px;";
navArea2.style.backgroundColor = "#eee";

var navUl = navArea2.children;
console.log(navUl);       // HTMLCollection [ul]
navUl[0].style = "display: flex; justify-content: space-between;";
var navLiTags = navUl[0].children;
console.log(navLiTags);   // HTMLCollection(4) [li, li, li, li]

// navLiTags[0].style = "width: 200px; border: 1px solid #333; padding: 2px 5px;";
// navLiTags[1].style = "width: 200px; border: 1px solid #333; padding: 2px 5px;";
// navLiTags[2].style = "width: 200px; border: 1px solid #333; padding: 2px 5px;";
// navLiTags[3].style = "width: 200px; border: 1px solid #333; padding: 2px 5px;";

// for (var i = 0; i < navLiTags.length; i++ ) {
//   navLiTags[i].style = "width: 200px; border: 1px solid #333; padding: 2px 5px;";
// }

navLiTags = Array.prototype.slice.call(navLiTags);
// console.log(navLiTags);   // [li, li, li, li]
navLiTags.forEach(function(elem) {
  elem.style = "width: 200px; border: 1px solid #333; padding: 2px 5px;";
});

// ----------------------------------
// article id="conBox"
var conBox = document.querySelector("#conBox");
var conNav = conBox.querySelector(".con_nav");
var conChildLi = conNav.children;  // HTMLCollection(4) [li, li, li, li]
// var conChildLi = conBox.querySelectorAll("a");  // NodeList(7) [a, a, a, a, a, a, a]
// better one..? 아마도 children..? querySelectorAll로 하면 sub_link까지 전부 포함이니까 ..? 

// HTML collection 처리된 요소는 배열처럼 보이지만 실제로는 배열이 아닌 유사배열객체다. 
// 따라서 그 내부로의 접근이 불가능하다. 
// 그래서 해당하는 요소를 모두 배열형식으로 변경하여야, 해당 요소의 내부에 접근이 가능해진다. 
// 강제로 유사배열객체를 배열로 만들고 싶을 떄는 ... 

// 방법 1 -> Array.prototype.slice.call(배열로만들고싶은유사배열객체이름);
// var conChildLiArr = Array.prototype.slice.call(conChildLi);
// console.log(conChildLiArr);

// 방법 1 - 응용  (클릭한 요소 인덱스 알아내는 방법!!!! 중요!!!! )
var conLiSam = [].slice.apply(conChildLi);  // 배열에 apply 처리를 해서 conChildLi안에 있는 값을 새로운 배열로 복사하기
var conLiLink = [];   
conLiSam.forEach(function(selector, index) {
  // console.log(selector.children[0]);
  conLiLink.push(selector.children[0]);  // li안에 있는 a태그에 접근 
  selector.children[0].addEventListener("click", function(e) {
    e.preventDefault();
    console.log(this, index);   // 클릭한 요소 인덱스 알아내는 방법  
  });
});
// console.log(conLiLink);  // (4) [a, a, a, a]



// 방법 2 
var filterCheck = Array.prototype.filter.call(conChildLi, function(data) {
  return data;
});
// console.log(filterCheck);    // (4) [li, li, li, li]

var aLinksInArr = [];
filterCheck.forEach(li => {
  // console.log(li);   
  
  aLinksInArr.push(li.children[0]);
});
// console.log(aLinksInArr);   // (4) [a, a, a, a]


