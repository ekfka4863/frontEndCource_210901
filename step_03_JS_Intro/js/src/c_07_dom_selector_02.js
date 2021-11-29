// c_07_dom_selector_02.js

// ------------------------------------------
// article id="best_area"
var bestBox = document.getElementById("bestBox");
var bestArea = bestBox.getElementsByClassName("best_area")[0];
var bestUl = bestArea.getElementsByTagName("ul")[0];
var bestLi = bestUl.children;  // HTMLCollection(4) [li, li, li, li]

var liLen = bestLi.length;
// console.log(liLen);   // 4

// 가장 고전적인 방법 
// var liArr = [];
// for (var i = 0; i < liLen; i++) {
//   liArr.push(bestLi[i]);
// }
// console.log(liArr);   // (4) [li, li, li, li]

// var liArr = Array.prototype.slice.call(bestLi);
var liArr = [].slice.call(bestLi);
// console.log(liArr);   // (4) [li, li, li, li]
var setI = 0;

// 응용 
var colorList = ["#caa", "#adf", "#fdd", "#eee"];

liArr.forEach(function(selector, index) {
  var linkEl = selector.children[0];
  linkEl.addEventListener("click", function(event) {
    event.preventDefault();
    // setI = index;
    // selector.classList.add("on");  // remove는 지금 구현 안함! 예시로 해본 것!
    // console.log(this, index);
    bestUl.style.backgroundColor = colorList[index];
  });
});