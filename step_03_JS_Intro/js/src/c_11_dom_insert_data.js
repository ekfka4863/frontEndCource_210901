// c_11_dom_insert_data.js

/* 시나리오: 
- .card 내부에 li 요소 삽입 
- 별도의 data 객체를 만들어 해당하는 내용이 li에 첨부되게 진행 

*/

// --------------------------------------------------------------
// 별도 자료 
// step4: li에 들어갈 별도자료 작성 
var data = [
  {
    title:'title', 
    contents:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link:'http://naver.com', 
    bgImg:'../multi/img/bottle.jpg',
    bgNarr:'병이미지에 대한 간략한 설명'
  }, 

  {
    title:'spring', 
    contents:'Dolores laborum expedita eum maxime dolore porro ipsam.' ,
    link:'http://csswinner.com' ,
    bgImg:'../multi/img/cookie.jpg',
    bgNarr:'cookie 이미지에 설명 작성'
  },

  {
    title:'javascript' , 
    contents:'Quod, impedit?' ,
    link:'http://gdweb.co.kr' 
  },

  {
    title:'winter', 
    contents:'Rem enim tempore maxime voluptas facilis id ad commodi quis.' ,
    link:'http://naver.net',
    bgImg:'../multi/img/bottle.jpg',
    bgNarr:'병이미지에 대한 간략한 설명'
  },
  
  {
    title:'summer', 
    contents:'Lorem, ipsum dolor.' ,
    link:'http://google.com',
    bgImg:'../multi/img/juice.jpg',
    bgNarr:'juice image 설명'
  }, 

  {
    title:'banana', 
    contents:'Lorem ipsum dolor sit amet.' 
  },
  
  {
    title:'group', 
    contents:'Lorem ipsum dolor sit amet consectetur adipisicing elit.' ,
    bgImg:'../multi/img/juice.jpg',
    bgNarr:'juice 이미지에 대한 간략한 설명'
  }
];

// DOM 

// step1: .card에 접근
var conBox = document.querySelector("#conBox");
var cardUl = conBox.querySelector(".card");
// var cardList = cardUl.querySelectorAll("li");

//  step2: li를 생성 -> 배열을 만든다 (cf. for문 )
// var i = 0;
// var len = 10;   // li의 갯수
var len = data.length;   
var makeLi;

//  step3:  안에 넣어줄 별도 자료 data를 상단으로 올라가서 작성한다 
// for(var i = 0; i < len; i++) {
//   makeLi = document.createElement("li");
//   // makeLi.innerText = data[i].title + " " + (i+1);   // "text "자리에는 나중에 data가 올 것
//   makeLi.innerHTML = '<div class="bg_img" style="background-image:url(' + data[i].bgImg + ')"><span class="blind">' + data[i].bgNarr + '</span></div><dl><dt>' + data[i].title + '</dt><dd><span>' + data[i].contents + '</span><br /><a href=\"' + data[i].link + '\" target=\"_blank\">자세히 보기</a></dd></dl>';
//   // cardUl.append(makeLi);   // cf. innerHTML 써도 되지만 덮어쓸 것~ 
//   cardUl.appendChild(makeLi);    // cf. https://velog.io/@minjae-mj/Javascript-append-vs-appendChild
// }

// step5: 코드 클린하게 만들기 
// 단... 너무 가독성이 떨어진다!! 그러니까 해결책: 우선 기본 코드를 모두 담은 후에 필요한 부분만 색출해서 수정/첨부/삭제
var baseCode = '<div class="bg_img"><span class="blind"></span></div>\
                <dl>\
                  <dt></dt>\
                  <dd>\
                    <span></span>\
                    <br />\
                    <a target="_blank">자세히 보기</a>\
                  </dd>\
                </dl>';

for (var i = 0; i < len; i++) {
  makeLi = document.createElement("li");
  makeLi.innerHTML = baseCode;
  cardUl.appendChild(makeLi); 
}

// step6: 내용 중 1번쨰 내용만 우선 정리한 뒤 삽입 -> 배열 안에 {} 형태로
//        {title: 제목,
//        contents: 내용,
//        link: ink 주소 ,
//        bgImg: background-image,
//        bgNarr: 이미지 설명}

/* 시나리오 
1. li 요소 첫번쨰 선택  
2. 공통 n번째를 가르키는 변수를 생성 -> step7: 함수화
*/

// step7: 함수화 
// var cardSetting = function(n) {
var setCardFn = function(n) {
  var idx = n;
  var li = cardUl.querySelectorAll("li"); 
  // li[idx];         // e.g. li[0]; -> li 중 첫번째 요소에게 접근 
  var dt = li[idx].querySelector("dt");
  var narr = li[idx].querySelector("dd > span");
  var link = li[idx].querySelector("dd a");
  var bgImg = li[idx].querySelector(".bg_img");
  var bgNarr = bgImg.querySelector("span");
  
  dt.innerText = data[idx].title;
  narr.innerText = data[idx].contents;
  link.href = data[idx].link;   // html상에 존재하는 Property에 값을 처리 
  // link.setAttribute("href", data[idx].link);   // 어떠한 속성도 처리 가능, 사용자지정인 data-속성도 설정 가능  
  bgImg.style.backgroundImage = 'url(' + data[idx].bgImg + ')';
  bgNarr.innerText = data[idx].bgNarr;
};// setCardFn();

// step9: 조건 걸기 - 사용 이미지가 없거나 링크 주소가 없거나 (!!undefined)이면 해당 요소를 삭제 - Element.remove();
var setCardFn = function(n) {
  var idx = n;
  var li = cardUl.querySelectorAll("li"); 
  // li[idx];         // e.g. li[0]; -> li 중 첫번째 요소에게 접근 
  var dt = li[idx].querySelector("dt");
  var narr = li[idx].querySelector("dd > span");
  var link = li[idx].querySelector("dd a");
  var bgImg = li[idx].querySelector(".bg_img");
  var bgNarr = bgImg.querySelector("span");
  
  dt.innerText = data[idx].title;
  narr.innerText = data[idx].contents;

  // 사용 이미지나 링크가 없으면 ...  
  (!!data[idx].link) ?  link.href = data[idx].link : link.remove();
  if (data[idx].bgImg !== undefined) {
   bgImg.style.backgroundImage = 'url(' + data[idx].bgImg + ')';
   bgNarr.innerText = data[idx].bgNarr;
  } else {
    bgImg.remove();
  }
};// setCardFn();

// step9 테스트용 
// setCardFn(0);
// setCardFn(1);
// setCardFn(2);
// setCardFn(3);
// setCardFn(4);
// setCardFn(5);
// setCardFn(6);

// step8: 그냥 for문으로 돌릴 때 
// for (var i = 0; i < len; i++) {
//   setCardFn(i);
// }

// step8: forEach  -> index 추출 및 cardSetting 함수에 매개변수로 넘기기 (cf. for문 말고 forEach로도 돌리기~)
data.forEach(function(data, index) {
  setCardFn(index);   // data를 forEach를 돌려서 Index를 알아내고, 그 인덱스를 cardSetting이라는 함수의 매개변수로 넣어서 inx에 할당... 
});

// cf. <a data-href="추후 무언가 어떠한 기능을 하기 위해 임의로 담아놓은 값"></a>




