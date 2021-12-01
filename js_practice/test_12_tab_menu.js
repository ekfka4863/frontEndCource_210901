// test_12_tab_menu.js  


// DOM 
var cardTitleUl = document.querySelector(".card_title ul");
var cardTitleLi = cardTitleUl.children;     // HTMLCollection(3) [li, li, li]
var cardTitleLiArr = Array.prototype.slice.call(cardTitleLi);  // (3) [li, li, li]
var cardTitleBtn = document.querySelectorAll(".card_title li button");  // NodeList(3) [button, button, button]
// var cardTitleBtnArr = Array.prototype.slice.call(cardTitleBtn);   // (3) [button, button, button]

// var card = document.querySelector(".card");
var cardALink = document.querySelector(".card a");




// event 
cardTitleBtn.forEach(function(elem) {
  // console.log(elem);   // 결과: button 세번 출력됨.

  elem.addEventListener("click", function(data, index) {
    data.preventDefault();
    console.log(data, index);    // 클릭 잘 됨! 
    // 클릭하면 체크한다  
    // cardTitleLiArr.forEach ->  if class "on"이 있으면,  display: block + opacity: ++해서 1로 만들기 
    // else -> 반대로~ 
  
    
  });
}
);



