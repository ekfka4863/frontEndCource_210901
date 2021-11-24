// b_15_js_import_data_stateCheck.js

/* XMLHttpRequest이란? 
- 서버와 상호작용을 하기 위해 사용되는 객체다 .
- XMLHttpRequest를 통해 전체 페이지를 새로고침 하지 않고도 데이터를 일부만 업데이트 할 수 있게한다.
(cf. 사용성 향상 -> less disrupting what the user is doing.)
- XMLHttpRequest은 비동기 처리 방식에서 많이 활용된다. 
- 생성자 함수처럼 사용하여 객체를 만들 수 있다. 
- cf. 
  - XMLHttpRequest.onreadystatechange -> readyState라는 서버로부터의 응답 상태 확인의 변화를 감지하는 이벤트 핸들러 
  - XMLHttpRequest.readyState -> 0 ~ 4까지의 value 값이 존재 
*/


// 외부 문서를 불러오기  -> XMLHttpRequest();
// 1. 생성자 함수 XMLHttpRequest라는 함수로 ...
// 2. 객체 생성/객체화  
// 3. 객체 내부의 메소드 사용하기 
// ------------------------------------
// 예외처리: try{} catch(){} finally {}
// 4. 상태메세지 처리 : 연결 상태가 어떠한 상태인지 체크 -> onreadystatechange와 readyState라는 프로퍼티를 사용
// ------------------------------------
// 5. 문서를 찾아서 열어주기 :  http.open(method처리방식, url, async 허용 여부 - 기본값은 true라서 생략가능);
// 6. 문서처리 :  http.send();
// ------------------------------------
var http = new XMLHttpRequest(); 
var stateMessage;

http.onreadystatechange = function() {
  // console.log(http.readyState);

  switch (http.readyState) {
    // case 0:
    case XMLHttpRequest.UNSENT:
      stateMessage = '서버와의 데이터 연결 끊어짐'
      break;
    case XMLHttpRequest.OPENED:
      stateMessage = '서버연결'
      break;
    case XMLHttpRequest.HEADERS_RECEIVED:
      stateMessage = '서버 접근중, 파일 검색중'
      break;
    case XMLHttpRequest.LOADING:
      stateMessage = '데이터 불러오는 중'
      break;
    case XMLHttpRequest.DONE:
      stateMessage = '서버와 연결 대기중'
      break;
      // default:
      //   stateMessage = '디폴트값'
      //   break;
  }

  // 조건문 활용 
  if (http.readyState === XMLHttpRequest.DONE) {
    // console.log('서버가 이상 없이 연결되었음');
    console.log(stateMessage);
  }

  console.log(http.status); 
};
  

// // 조건문 활용 
// http.onreadystatechange = function() {
  
//   // if (http.readyState === 4) {
//   if (http.readyState === XMLHttpRequest.DONE) {
//     // console.log('서버가 이상 없이 연결되었음');
//     console.log(stateMessage);
//   }
// };


// ----------------------------------
var method = method || 'GET';   // 앞에 자료가 undefined면 뒤의 값 대체
var url = url;
var async = async || true;
http.open(method, url, async);
http.send();

// ----------------------------------
var method = 'GET';
var url = '../data/person_card.json';
var async = true;


// ----------------------------------
// linkFn 함수 생성 
var linkFn = function(url, method, async) {
  var http = new XMLHttpRequest();
  var stateMessage;

  http.onreadystatechange = function() {
    // console.log(http.readyState);
    console.log(http.status);

    switch (http.readyState) {
      case XMLHttpRequest.UNSENT:
        stateMessage = '서버와의 데이터 연결 끊어짐'
        break;
      case XMLHttpRequest.OPENED:
        stateMessage = '서버연결'
        break;
      case XMLHttpRequest.HEADERS_RECEIVED:
        stateMessage = '서버 접근중, 파일 검색중'
        break;
      case XMLHttpRequest.LOADING:
        stateMessage = '데이터 불러오는 중'
        break;
      case XMLHttpRequest.DONE:
        stateMessage = '서버와 연결 대기중'
        break;
        // default:
        //   stateMessage = '디폴트값'
        //   break;
    }
  };

  if (http.readyState === XMLHttpRequest.DONE) {
    // console.log('서버가 이상 없이 연결되었음');
    console.log(stateMessage);
  }
};

linkFn(url, method, async);





http.open(method, url, async);
http.send();

// http.onreadystatechange();

setTimeout(function() {
  console.log(stateMessage);
  // console.log(http);
  // console.log(http.responseText);
  // console.log(XMLHttpRequest);
}, 100);  

console.log(XMLHttpRequest.DONE);   // 4





// ----------------------------------
// ----------------------------------
var xhr = new XMLHttpRequest();
console.log(xhr.onreadystatechange);  // 준비상태의 변화를 감지 -> 인지 - 인지하고 앞으로 어떤 것을 수행할지에 대한 함수가 등록된 부분
console.log(xhr.readyState);         // 준비 상태 -> 신호등 - 실제로 변화하는 것  

xhr.open('GET', '../data/person_card.json', true);   // 자료 찾아서 신청 
xhr.send();

setTimeout(function() {
  console.log(xhr.onreadystatechange);
}, 100);



// ----------------------------------
// ----------------------------------
fetch('../data/person_card.json').then(function(response) {
  // console.log(response);
  console.log(response.json());
});


console.clear();
// ----------------------------------
// ----------------------------------
var xhr = new XMLHttpRequest();
xhr.open('GET', '../data/person_card.json', true);   // 자료 찾아서 신청 
xhr.send();

// setTimeout -> 함수 호출 지연 정해진 ms만큼 
// 문법: setTimeout(지연된시간후실행될함수, 딜레이시간ms);
// setTimeout(function() {
// }, 10);

setTimeout(function() {
  var data = JSON.parse(xhr.responseText);
  var dataList = [];

  var SetFn = function(title, link) {
    this.title = title;
    this.link = link;
  };

  data.forEach(function(value) {
    var title = value.title;
    var url = value.link;
    var obj = new SetFn(title, url);    // [{title: "~~~", url: "http://~~~.com"}, {title: "~~~", url: "http://~~~.com"}, ...]
    dataList.push(obj);
  });
  
  console.log(dataList);          // [{title: "~~~", url: "http://~~~.com"}, {title: "~~~", url: "http://~~~.com"}, ...]
}, 10);














function Fn() {
  var data = JSON.parse(xhr.responseText);    // xhr.responseText를 json화 하겠다~ 
  var dataList = [];         
  
  var SetFn = function(title, link) {    // 너 뭐하는 얘야?
    // 생성자 함수 SetFn으로 매개변수 title, link를 받아와, 인스턴스를 생성할 수 있고, 
    // 아래의 생성자 함수 내의 this는 앞으로 생성될 인스턴스를 가리키고 있기때문에 매개변수로 받아온 각각의 값이 
    // 인스턴스의 프로퍼티로 간다. 
    this.title = title;
    this.link = link;
  };
  
  data.forEach(function(value) {
    var title = value.title;
    var url = value.link;
    var obj = new SetFn(title, url);    // [{title: "~~~", url: "http://~~~.com"}, {title: "~~~", url: "http://~~~.com"}, ...]

    dataList.push(obj);
  });

  console.log(dataList);          // [{title: "~~~", url: "http://~~~.com"}, {title: "~~~", url: "http://~~~.com"}, ...]
}







