// b_15_js_import_data.js

// 네트워크 (웹)을 통한 자료 요청 기술 
var xhr = new XMLHttpRequest();        // 제이쿼리의 $.ajax(); 와 비슷 

// form: <form action="어디로보낼까" method="보안"></form>
// method : GET(단순히 자료를 요청하여 가져오는 기술), POST(생성)
var method = 'GET';
var url = '../data/sample.txt';
var async = true;     // 비동기 승인 (비동기처리를 할것인가)


// 자료를 요청 (cf. 더 정확히는 요청하기 위한 준비)
// xhr.open(method방식, 처리할파일경로, 비동기승인여부);     
xhr.open(method, url, async);     
// <- 응답처리 내용(보류)

// 자료 요청을 위해 전송 / xhr을 전송하겠다 
xhr.send();

// 내용이 잘 로드됐는지 확인 - 단, 외부 파일이 불러와지는 시간이 필요해서 setTimeout 사용 
setTimeout(function() {
  console.log(xhr.responseText);
}, 10)



// 응용 / 원래(실제사용)는 이렇게...
// 이때는 "로드가 되었다"라는 의미라서 필요한 데이터가 다 받아졌을 때라는 의미! 
// 그래서 setT
window.addEventListener('load', function() {
  xhr.open(method, url, async);

  console.log(xhr.responseText);
  
  xhr.send();
});



// cf. 네트워크 상태 표시 
// 1xx(정보) : 요청을 받았으며 프로세스를 계속 진행합니다.
// 2xx(성공) : 요청을 성공적으로 받았으며 인식했고 수용하였습니다.
// 3xx(리다이렉션) : 요청 완료를 위해 추가 작업 조치가 필요합니다.
// 4xx(클라이언트 오류) : 요청의 문법이 잘못되었거나 요청을 처리할 수 없습니다.
// 5xx(서버 오류) : 서버가 명백히 유효한 요청에 대한 충족을 실패했습니다.

