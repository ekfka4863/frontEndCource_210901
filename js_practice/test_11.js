// test_11.js

// ------------------------------------------------------
// 주말 숙제 guidelines
// 샘플 사이트: fancybox -> http://fancybox.net/
// 샘플 사이트 2: https://webpublisher-jquery-sample.vercel.app/html/ex_03_modal.html
// hint: 
// cpacity: 100%; -> opacity: 0; display: none;
// display: block; -> opacity: 100%;
// 이런 구조로 만들기 !!
// ------------------------------------------------------


// DOM 
var imgCardWrapper = document.querySelector('.img_card_wrapper');
var imgCards = imgCardWrapper.querySelectorAll('.img_card');   // NodeList 

var modalBg = document.querySelector('.modal_bg');
var modalConZoomed = modalBg.querySelector('.modal_con_zoomed');
var closeBtnWrapper = document.querySelector('.close_btn_wrapper');
var closeBtn = closeBtnWrapper.querySelector('button');



// event

// event 1: img_card 클릭시 모달창 display: block; opacity: 100%; -> js로 클릭 이벤트 발생시 
// nodelist인 imgCards의 접근하기 위해 ... 
imgCards = Array.prototype.slice.call(imgCards);  // 배열로 만들기 
imgCards.forEach(elem => {

  var buttonElem = elem.querySelector('button');
  var textValue = buttonElem.querySelector('span').textContent;
  // console.log(textValue, typeof textValue);    // img_1  img_2  img_3 -> string

  // event 1 구현
  buttonElem.addEventListener('click', function(e) {
    e.preventDefault();

    modalBg.style.display = 'block';

    // tabIndex
    // closeBtn.tabIndex = 0;   // -> not workind...
    // focus를 강제로 줄 것? class로?!
    // console.dir(closeBtn);

    // opacity
    var currentOp = Number(modalBg.style.opacity);  // 0
    modalBg.style.opacity = '1';
    currentOp = modalBg.style.opacity;


    // ---------------------------------
    // ---------------------------------


    // event 3: 이미지 삽입 이벤트 -> 변수 선언? scss 리스트화? 
    
    var imageUrls = [
      "https://images.unsplash.com/photo-1625758600922-4085dd859395?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aWNlY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1623686088099-d74b7a1d6754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hyaXNtYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1637988936322-016302f3226d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    ];
    

    // console.log(textValue);
    // textValue로 이미지가 들어갈 자리를 파악 -> url을 각 카드마다 따로 지정!
    switch (textValue) {
      case 'img_1':
        modalConZoomed.style.backgroundImage = `url(${imageUrls[0]})`;
        break;
      case 'img_2':
        modalConZoomed.style.backgroundImage = `url(${imageUrls[1]})`;
        break;
      case 'img_3':
        modalConZoomed.style.backgroundImage = `url(${imageUrls[2]})`;
        break;
      default:
        modalConZoomed.style.backgroundColor = '#fe2';
        break;
    }// switch문

  });

});



// event 2: 모달창 내 버튼 x 클릭시 display: none; opacity: 0; -> js로 클릭 이벤트 발생시 
closeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  
  // opacity
  var currentOp = Number(modalBg.style.opacity);  // 0

  var removeOpacity = setInterval(function() {
    if (currentOp === 0) {   // ''거나 0, false면 ...
      modalBg.style.opacity = '1';
      currentOp = modalBg.style.opacity;
    } 
    
    if (currentOp > 0) {
      modalBg.style.opacity -= 0.1;
      currentOp = modalBg.style.opacity;
    } else {
      clearInterval(removeOpacity);
      modalBg.style.display = 'none';
      modalBg.style.opacity = '0';
      currentOp = modalBg.style.opacity;
    }
  }, 50);
});




