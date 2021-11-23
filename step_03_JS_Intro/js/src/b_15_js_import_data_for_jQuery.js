// b_15_js_import_data_for_jQuery.js


// console.log($.fn);   // 확인용
$.ready(function(){});  // 해석: 문서 내용이 준비가 되면 바로 수행해라. 과거에는 ...
// $(document).ready(function(){}); // 과거에는 이렇게 썼지만 같은 의미~ 
// cf.  https://ratseno.tistory.com/68


// 즉시실행 함수 (= 익명함수/IIFE,  Immediately Invoked Function Expression)
// 위의 $.ready(function(){}); 와 $(document).ready(function(){}); 는 둘 다 외부에 노출된다는 점! 
// 그래서 즉시실행 함수로 처리~\

// 원래는 $라는 (매개)변수를 받아서 실행하는 함수의 기본 실행/호출 방법은 아래와 같다. 
var fn = function($){};    
fn(jQuery);

// 이를 즉시실행함수로 바꾸면 아래와 같이... 
(function($){})(jQuery);   
// 위의 $.ready(function(){}); 방식은 과거의 것. 또한 앞에 $는 다른 라이브러리랑 사용했을 때, 충돌이 일어남으로 -> 즉시실행함수로 사용할 것. 
/* okky
일반적으로 jquery를 사용할떄 $('#target') 같은식으로 $을 앞에 붙이게 되는데
jquery 와 다른 라이브러리를 같이 사용하다보면 $때문에 충돌이 발생하기도 합니다
그래서 function($){}(jQuery)와 같이 선언해놓고 사용을 하면
{ } 사이에서는 $가 다른 라이브러리와 충돌하는 일 없이  jQuery를 사용할수있습니다.
cf.  https://okky.kr/article/279353
    https://captainyellow.tistory.com/125
    https://velog.io/@tlatjdgh3778/%EC%A6%89%EC%8B%9C-%EC%8B%A4%ED%96%89-%ED%95%A8%EC%88%98IIFE%EC%97%90-%EB%8C%80%ED%95%9C-%EC%A0%95%EB%A6%AC
*/


(function($){
  // jQuery특징
  // 1. $() : 선택자 - 이후에 들어가는 요소들 대부분이 메소드
  //         해석하려면 용어 그대로 읽으면 됨.
  // 2. $.메소드() : 유틸리티메소드 - 어떠한 기능처리 - 이후도 메소드 
  //                 해석하려면 메소드 기준으로 읽으면 됨.

  var path = '../data/sample.txt';
  var dataFile; 

  // Ajax란 Asynchronous JavaScript and XML : 실시간(비동기)으로 자료 체크 할 수 있는 기능 (cf. 요즘은 XML말고 Json으로~) 
  // $.ajax().done(function(){});
  $.ajax({
    // js는 기본 경로가 html을 기준
    // url: '../data/sample.txt',
    // text: 'text',
    // async: true,
    // etc.
    url: path
  }).done(function(data){
    // console.log(data);     // 간단한 내용을 담아 전송 확인을 해보자! 
    var importData = data;
    var arr = importData.split(',');
    console.log(arr);        // ['xido', ' designer', ' earlyadter', ' dad']
    dataFile = arr;
  });

  // console.log(dataFile);     // 이거는 안나옴!
  // 하지만... 
  setTimeout(function(){
    console.log(dataFile);
  }, 10);                      // 이것은 작동! 왜? 외부에서 데이터를 불러오는 시간이 필요해서 그렇다~ 모든 비동식은 이런식! 기억! 

  // -------------------------------
  // 다시 ... 
  // var jsonPath = '../data/person_card.json'; 
  // $.ajax({
  //   url: jsonPath
  // }).done(function(data) {
  //   var dataList = data;
  //   console.log(dataList);
  // });

})(jQuery);






