// c_06_dom_sample_03.js

(function($){
  // console.log($.fn);
  // console.log($.fn.jquery);   // 3.6.0

  // tab 메뉴의 타이틀 중의 하나를 선택했을 경우 해당하는 순번의 내용 요소를 나타나게 만들기 
  // 제목과 내용 모두 .on 클래스 이름으로 처리했으므로 해당하는 내용에 따른 .on을 첨부/제거하는 기능이 필요 
  // 클릭한 요소의 순번이 몇번째 인가 체크해야하고 + 그에 따라 .on을 첨부/제거하는 기능을 몇번째 순번에서 처리해야하는지 확인해야 한다 


  // DOM ---------------------------------------------
  var conBox = $('#contentBox');
  var conTitle = conBox.find('.tab_title_inner'); // 여기서 ... $('.클래스명')해도 되지만 추후에 같은 변수명이 다른데에 추가될까바... 안전하게!
  // 이때, find()는 자손선택자고 children()은 자식선택자 
  // ---------
  // cf. js에서는 ... 
  // var conB = document.querySelector('#contentBox');   
  // var conT = conB.querySelector('.tab_title_inner');    // 자손선택자 
  // var conUl = conT.children;    // 자식선택, () 없음. (cf. childNodes)
  // ---------
  var conTitleUl = conTitle.children('ul'); 
  var conTitleLi = conTitleUl.children('li'); 
  var conTitleBtn = conTitleLi.children('button'); 
  var conContent = conBox.find('.tab_content_inner'); 
  var conContentList = conContent.children('div');
  var index;


  // Event ---------------------------------------------
  conTitleBtn.on('click', function(event){  
    event.preventDefault();
    // jquery에서는 이벤트가 처리된 주체를 그냥 this가 아닌 $(this)라고 한다. 
    // 하지만 우리가 클릭한 요소는 버튼이고, 이 버튼은 모든 li요소안에 유일한 버튼이기에 무조건 인덱스가 첫번째 요소/0이다.
    // 그래서 우리가 확인해야 할 인덱스는 자신인 버튼이 아닌 그 부모의 순서값을 확인해야 한다. 
    // $(this).parent();    
    // $(this).parent().index();    
    // console.log($(this).parent().index());  // 인덱스를 반환 
    index = $(this).parent('li').index();      // parent(): 부모선택자, () 안에 문자열의 형태로 (요소/클래스명)이름 따로 적을 필요는 없음.


    // // solution - 1
    // // 전체에 class .on 제거 후 선택순서에 .on 첨부하기 
    // conTitleLi.removeClass('on');          // 해석: conTitleLi에 있는 .on을 모두 제거해라
    // conTitleLi.eq(index).addClass('on');   // 해석: conTitleLi 중 index번째 (cf. eq(인덱스번째에 있는 값)을 반환하는 메서드)에 .on을 첨부  + es6의 at()과 같은 역할/ arr[index]의 값을 반환하는 역할을 하는 메서드 
    // conContentList.removeClass('on');      
    // conContentList.eq(index).addClass('on'); 


    // solution - 2
    conTitleLi.eq(index).addClass('on'); 
    conContentList.eq(index).addClass('on'); 

    // cf. siblings : 형제를 의미하며, 선택한 요소 (eq)를 제외한 다른 형제를 선택하는 선택자 
    conTitleLi.eq(index).siblings().removeClass('on');   
    conContentList.eq(index).siblings().removeClass('on');   

  });
  // 이때!! 
  // jquery는 여러개의 선택자가 존재할 때 이를 묶어서 한번에 클릭이 가능한데, 이때 그 순서를 파악하는 것은 클릭시 index로 처리 
  // 반면, javascript는 여러개의 선택자가 존재할 때 여러개를 클릭시에 그 클릭 대상들을 반복 수행해서 처리해야한다. (for/forEach)

  // --------------------------------------------------




















})(jQuery)