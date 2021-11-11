// b_05_js_conditional_statement.js

// -----------------------------------------
// switch 조건문 기본 형태 
/*
switch (매개변수) {
  case 조건값1: 
    조건값과 매개변수가 일치하면 수행하는 statement 1;
  break;
  case 조건값2: 
    조건값과 매개변수가 일치하면 수행하는 statement 2;
  break;
  default: 
    위 조건들이 일치하지 않으면 수행하는 statement;
}
*/


// -----------------------------------------
// e.g. 1
var rel = true; 
var d = [];

switch (rel) {
  case true:
    d.push('true 1');
    break;       // break;는 더이상 해당 조건 조건을 수행하지 않고, 빠져나간다
  case false:
    d.push('false 1');
    break;
  default:
    d.push('end');
}

console.log(d);


// -----------------------------------------
// e.g. 2
var num = 0;
var data = [];

switch(num) {
  case 1:
    data.push('현금 입금');
    break;
  case 2:
    data.push('현금 확인');
    break;
  case 3:
    data.push('타계좌 송금');
    break;
  case 4:
    data.push('통장 삭제');
    break;
  default:
    data.push('대출(연 60%)');
}
console.log(data);


// -----------------------------------------
// e.g. 2 - 응용 
var num = 0;
var data = [];

var atmFn = function(num) {
  switch(num) {
    case 1:
      data.push('현금 입금');
      atmFn(2);    // cf. 자신을 다시 호출하는 함수 -> 재귀함수 (작성한 함수를 다시 재호출하는 형태)
      break;
    case 2:
      data.push('현금 확인');
      break;
    case 3:
      data.push('타계좌 송금');
      break;
    case 4:
      data.push('통장 삭제');
      break;
    default:
      data.push('대출(연 60%)');
  }
};

atmFn(1);
console.log(data);    // [ '현금 입금', '현금 확인' ] -> 굳이 같이 한 큐에 하고 싶어서 ...


console.clear();
// -----------------------------------------
// e.g. 3 - 재귀 함수 이해하기 

// case a: 편의점에서 물건을 살 경우 
// 1. 물건을 고른다
// 2. 카드를 낸다
// 3. 카드 결재를 한다 
// 4. 물건과, 카드를 돌려받는다 
// 5. 내역을 확인한다

// case b: 편의점에서 공병을 팔 경우 
// 1. 물건을 낸다
// 2. 카드를 낸다
// 3. 카드 입금을 받는다 
// 4. 카드를 돌려받는다 
// 5. 내역을 확인한다


// case c: 편의점에서 물건을 환불  
// 1. 물건을 건넨다
// 2. 카드를 낸다
// 3. 카드 입금을 받는다 (취소)
// 4. 카드를 돌려받는다 
// 5. 내역을 확인한다


// case d: 편의점에서 결재가 안될 때  
// 1. 물건을 고른다
// 2. 카드를 낸다
// 3. 결제 에러발생
// 4. 카드를 돌려받는다 
// 5. 내역을 확인한다

// 설명 -> 4번 5번은 한번에 실행하면 좋은 아이들 ... 그래서..
// 내가 이미 처리하고 있는 기능/함수 안에서 다시 그 기능이 필요해서 호출하는 함수의 형태가 바로 재귀함수!

// 아래와 같이 ... 
// 내가 혼자 한 풀이
// var case_char = 'a';
var data = [];

var convenientStore = function(case_char) {
  switch(case_char) {
    case 'a':
      convenientStore('start');
      data.push('카드 결제를 한다'); 
      convenientStore('end_2');
      console.log(`Data of A is -> ${data}`);   // 다만, 보간법은 es6이후 문법! 지금은 var를 썼으니까 이거는 고쳐주기...!
      data = [];
      break;
    case 'b':
      convenientStore('start');
      data.push('카드 입금을 받는다');
      convenientStore('end');
      console.log(`Data of B is -> ${data}`);
      data = [];
      break;
    case 'c':
      convenientStore('start');
      data.push('카드를 돌려받는다');
      convenientStore('end');
      console.log(`Data of C is -> ${data}`);
      data = [];
      break;
    case 'd':
      convenientStore('start');
      data.push('결제 에러발생!');
      convenientStore('end');
      console.log(`Data of D is -> ${data}`);
      data = [];
      break;
    case 'start':
      data.push('물건을 (골라서) 건넨다');
      data.push('카드를 낸다');
      break;
    case 'end':
      data.push('카드를 돌려받는다');
      data.push('내역을 확인한다');
      break;
    case 'end_2':
      data.push('물건과, 카드를 돌려받는다');
      data.push('내역을 확인한다');
      break;
    default:
      data.push('편의점에서 퇴장!');
  }
};

convenientStore('a');
convenientStore('b');
convenientStore('c');
convenientStore('d');
// console.log(data);  




console.clear();

//---------------------------------------------------
// 쌤꺼 풀이 - 기본 (무식한 방법)
var storeList = [];
var i = 0;

var storeFn = function(user, selector) {
  var userCheck = {};       // e.g. {name: '사용자', content:[]};
  var userSequence = [];   // 지역 변수

  // 조건문 -----------------------
  switch(selector) {
    case 'a':               // 경우
      userSequence.push('물건을 고른다');
      userSequence.push('카드를 낸다');
      userSequence.push('카드 결재를 한다 ');
      userSequence.push('물건과, 카드를 돌려받는다 ');
      userSequence.push('내역을 확인한다');
      break;
    case 'b':               // 경우
      userSequence.push('물건을 낸다');
      userSequence.push('카드를 낸다');
      userSequence.push('카드 입금을 받는다 ');
      userSequence.push('카드를 돌려받는다 ');
      userSequence.push('내역을 확인한다');
      break;
    case 'c':               // 경우
      userSequence.push('물건을 건넨다');
      userSequence.push('카드를 낸다');
      userSequence.push('카드 입금을 받는다 (취소)');
      userSequence.push('카드를 돌려받는다 ');
      userSequence.push('내역을 확인한다');
      break;
    case 'd':               // 경우
      userSequence.push('물건을 고른다');
      userSequence.push('카드를 낸다');
      userSequence.push('결제 에러발생');
      userSequence.push('카드를 돌려받는다 ');
      userSequence.push('내역을 확인한다');
      break;
    default:
      userSequence.push('...');
  }
  // -----------------------------

  i += 1;

  // user마다 사용자 이름과 history/내역을 객체로 만들어서 사용자마다 데이터를 만들어 버리기... 
  // userCheck.user = user;
  userCheck.user = user || 'noNameUser_' + i;
  userCheck.content = userSequence;

  storeList.push(userCheck);

  return userSequence;
};// storeFn();

console.log(storeFn('user1')); 
console.log(storeFn('user2')); 
console.log(storeFn('user3')); 
console.log(storeFn('user4')); 

console.log(storeFn('user1')); 
// console.log(storeFn()); 
console.log(storeFn('user2')); 
console.log(storeFn('user3')); 
// console.log(storeFn()); 
console.log(storeFn('user4')); 
console.log(storeList); 







console.clear();

//---------------------------------------------------
// 쌤꺼 풀이 - 응용 (재귀 함수 X - 함수 내 다른 함수)
var storeList = [];
var i = 0;

var storeSelectFn = function(selector) {
  var userSequence = [];

  // 조건문 -----------------------
  switch(selector) {
    case 'a':               // 물건을 살경우
      userSequence.push('물건을 고른다');
      userSequence.push('카드를 낸다');
      userSequence.push('카드 결재를 한다 ');
      userSequence.push('물건과, 카드를 돌려받는다 ');
      userSequence.push('내역을 확인한다');
      break;
    case 'b':               // 공병을 팔경우
      userSequence.push('물건을 낸다');
      userSequence.push('카드를 낸다');
      userSequence.push('카드 입금을 받는다 ');
      userSequence.push('카드를 돌려받는다 ');
      userSequence.push('내역을 확인한다');
      break;
    case 'c':               // 환불
      userSequence.push('물건을 건넨다');
      userSequence.push('카드를 낸다');
      userSequence.push('카드 입금을 받는다 (취소)');
      userSequence.push('카드를 돌려받는다 ');
      userSequence.push('내역을 확인한다');
      break;
    case 'd':               // 결재가 안될 때
      userSequence.push('물건을 고른다');
      userSequence.push('카드를 낸다');
      userSequence.push('결제 에러발생');
      userSequence.push('카드를 돌려받는다 ');
      userSequence.push('내역을 확인한다');
      break;
    default:
      userSequence.push('...');
  }
  // -----------------------------

  return userSequence;
};
// storeSelectFn(selector);


var storeFn = function(user, selector) {
  var userCheck = {};       // e.g. {name: '사용자', content:[]};
  var userSequence = [];   // 지역 변수

  // 조건문 -----------------------
  // switch(selector) {
  //   case 'a':               // 물건을 살경우
  //     userSequence.push('물건을 고른다');
  //     userSequence.push('카드를 낸다');
  //     userSequence.push('카드 결재를 한다 ');
  //     userSequence.push('물건과, 카드를 돌려받는다 ');
  //     userSequence.push('내역을 확인한다');
  //     break;
  //   case 'b':               // 공병을 팔경우
  //     userSequence.push('물건을 낸다');
  //     userSequence.push('카드를 낸다');
  //     userSequence.push('카드 입금을 받는다 ');
  //     userSequence.push('카드를 돌려받는다 ');
  //     userSequence.push('내역을 확인한다');
  //     break;
  //   case 'c':               // 환불
  //     userSequence.push('물건을 건넨다');
  //     userSequence.push('카드를 낸다');
  //     userSequence.push('카드 입금을 받는다 (취소)');
  //     userSequence.push('카드를 돌려받는다 ');
  //     userSequence.push('내역을 확인한다');
  //     break;
  //   case 'd':               // 결재가 안될 때
  //     userSequence.push('물건을 고른다');
  //     userSequence.push('카드를 낸다');
  //     userSequence.push('결제 에러발생');
  //     userSequence.push('카드를 돌려받는다 ');
  //     userSequence.push('내역을 확인한다');
  //     break;
  //   default:
  //     userSequence.push('...');
  // }
  userSequence = storeSelectFn(selector);
  // -----------------------------

  i += 1;

  // user마다 사용자 이름과 history/내역을 객체로 만들어서 사용자마다 데이터를 만들어 버리기... 
  // userCheck.user = user;
  userCheck.user = user || 'noNameUser_' + i;
  userCheck.content = userSequence;

  storeList.push(userCheck);

  return userSequence;
};// storeFn();


console.log(storeFn('user1')); 
// console.log(storeFn()); 
console.log(storeFn('user2')); 
console.log(storeFn('user3')); 
// console.log(storeFn()); 
console.log(storeFn('user4')); 
console.log(storeList); 



console.clear();

//---------------------------------------------------
// 쌤꺼 풀이 - 응용 2 ( 방법)
var storeList = [];
var i = 0;

var setFn = function(selector) {
  var userSequence = [];

  // 함수를 한 번 더 감싸서 내부 로직이 외부에 노출되지 않게 한다 -> 클로저
  var storeSelectFn = function(selector) {
    // 조건문 -----------------------
    switch(selector) {
      case 'a':               // 물건을 살경우
        storeSelectFn('handOver');    // 1. 함수 수행 -> cf. 실제 수행 순서는 1. 2. 3. -> 하지만 속도는 1.3.2.
        userSequence.push('3. 카드 결재를 한다 ');   // 2. 기능 수행 
        storeSelectFn('return');     // 3. 함수 수행 
        break;
      case 'b':               // 공병을 팔경우
        storeSelectFn('handOver');
        userSequence.push('3. 카드 입금을 받는다 ');
        storeSelectFn('return');

        break;
      case 'c':               // 환불
        storeSelectFn('handOver');
        userSequence.push('3. 카드 입금을 받는다(취소처리).');
        storeSelectFn('return');
        break;
      case 'd':               // 결재가 안될 때
        storeSelectFn('handOver');
        userSequence.push('3. 결제 에러발생');
        storeSelectFn('return');
        break;
      case 'handOver':           
        // userSequence.push('1. 물건을 건넨다.');
        // userSequence.push('2. 카드를 낸다.');
        userSequence.push('1. 물건을 건넨다.', '2. 카드를 낸다.');
        break;
      case 'return':           
        // userSequence.push('4. 카드를 (물건이 있다면 물건과 함께) 돌려받는다.');
        // userSequence.push('5. 내역을 확인한다.');
        userSequence.push('4. 카드를 (물건이 있다면 물건과 함께) 돌려받는다.', '5. 내역을 확인한다.');
        break;
      default:
        userSequence.push('사용기록 없음.');
    }
    // -----------------------------

    return userSequence;
  };
  
  storeSelectFn(selector);
  // console.log(userSequence);
  return userSequence;


  // 이때..!!!!
  // 함수 setFn으로 감싸므로서 storeSelectFn 함수는 외부에서는 노출되지 않는 함수가 되어버린다! 
  // 이런 함수를 보고 클로져라고 한다. 
  // 그럼 외부의 접근을 왜 막을까? 
  // 이유: 개인정보 보호를 위해... 또는 내가 쓴 로직/기능을 보호하기 위해서! 
  // e.g. 
  userSequence.forEach(function(data) {
    document.write(data + '<br />');
  });
  // 위의 식을 확인하면 ... 얼마나 개인 정보를 쉽게 조작할 수 있는지를 알 수 있다... 
  // 그래서 ... 안에 들어있는 로직 자체는 외부에서 쓸수 없게/접근할 수 없게 아예 막는 것이다.
  // (cf. JS 정보의 은닉)


};// setFn();
setFn('a');  


var storeFn = function(selector, user) {
  var userCheck = {};       // e.g. {name: '사용자', content:[]};
  var userSequence = [];   // 지역 변수

  // 조건문 -----------------------
  userSequence = setFn(selector);
  // ------------------------------

  i += 1;

  // user마다 사용자 이름과 history/내역을 객체로 만들어서 사용자마다 데이터를 만들어 버리기... 
  // userCheck.user = user;
  userCheck.user = user || 'noNameUser_' + i;  
  userCheck.content = userSequence;

  storeList.push(userCheck);

  return userCheck;
};// storeFn();



console.log(storeFn('a')); 
// console.log(storeFn()); 
console.log(storeFn('b', 'user2')); 
console.log(storeFn('user3')); 
// console.log(storeFn()); 
console.log(storeFn('d')); 
console.log(storeList); 




// 팁!
/*
- 기능 원하는 것을 먼저 작성
- 수행되는 순서대로, 큰 틀내용대로 작성
- 세부 내용이 어떻게 처리될지, 기능 위주로 들어가는 것은 별첨으로 따로 작성 

// 주요 목적 - 편의점에서 할 수 있는 일 (물건 구매/판매/환불시 수행되는 작용 처리)
하나의 조건기준 (다른 조건이 들어가면 그에 따른 첨부)
1. 큰수행순서
2. 큰수행순서
  2-1. 중간 작업 수행
  2-2. 중간 작업 수행      * 별도 함수 처리 (setFn()기능 별첨) 
  2-3. 중간 작업 수행
3. 큰수행순서
4. 큰수행순서
5. 큰수행순서
6. 큰수행순서

* 별첨 1 : setFn 기능
* 별첨 2 : setFn 기능
*/
//  근데 이게 몬소리인지 .. ;;



// 코드 작성하는 요령
// 1. 내용 로직
// 2. 변수 
// 3. 함수 (함수 호출시, 내부에서 다른 함수를 호출하기 위해서는 해당 함수가 먼저 작성되어야한다!)
//    var cFn = function() {};
//    var bFn = function() { cFn(); };
//    var aFn = function() { bFn(); };
// 4. 결과를 도출하는 행동



console.clear();
// -------------------------
// 중요!!! 
// 위의 예시에서 왜 userSequence가 각각 다른 아이인지 설명 ...
var box2 = function() {
  var list = 'def';
  return list;  
};

var box1 = function() {
  var list;
  // console.log(list);
  list = box2();
  console.log(list);
};

box1();



// --------------------


var box2 = function() {
  var list = ['1', 4, 5];
  return list;  
};

var box1 = function() {
  var list;
  // console.log(list);   // undefined
  list = box2();    // 얕은 복사 -> 참조를 가져오는 것
  console.log(list);
};

box1();


// --------------------

var box2 = function() {
  var list = ['1', 4, 5];
  return list;  
};

var box1 = function() {
  var list;
  // console.log(list);   // undefined
  list = box2();
  var sam = list;       // 값 자체를 복사하는 것은 - 깊은 복사
  sam.push('789'); 
  console.log(list, sam);
};

box1();

// --------------------
console.clear();







// --------------------
// 전역 변수 
var i = 0;
var storeHistoryPerVisitor = [];

// 함수 - 1: recodeStoreHistory을 감싼 또 다른 함수 
var recodeStoreHistoryConcealed = function(visitor) {
  var storeHistory = [];

  var recordStoreHistory = function(visitor) {   
    
    // 조건문 -----------------------
    switch(visitor) {
      case 'a':
        recordStoreHistory('start');
        storeHistory.push('3. 카드 결재를 한다 ');
        recordStoreHistory('end');
        break;
      case 'b':
        recordStoreHistory('start');
        storeHistory.push('3. 카드 입금을 받는다 ');
        recordStoreHistory('end');
        break;
      case 'c':
        recordStoreHistory('start');
        storeHistory.push('3. 카드 입금을 받는다 (취소)');
        recordStoreHistory('end');
        break;
      case 'd':
        recordStoreHistory('start');
        storeHistory.push('3. 결제 에러발생');
        recordStoreHistory('end');
        break;                      
      case 'start':
        storeHistory.push('1. 물건을 고른다');
        storeHistory.push('2. 카드를 낸다');
        break;                      
      case 'end':
        storeHistory.push('4. 카드를 돌려받는다');
        storeHistory.push('5. 내역을 확인한다');
        break;                      
      default:
        storeHistory.push('사용 기록 없음.');
    } 
    // -----------------------------
  
  };// recordStoreHistory(visitor);
  
  recordStoreHistory(visitor);

  return storeHistory;
};// recodeStoreHistoryConcealed(visitor);


// recodeStoreHistoryConcealed('a');  



// 함수 - 2
var storeFn = function(visitor, user) {
  var userCheck = {};
  var userSequence = [];

  userSequence = recodeStoreHistoryConcealed(visitor);

  i++;

  userCheck.user = user || 'noNameUser_' + i;
  userCheck.content = userSequence;

  storeHistoryPerVisitor.push(userCheck);

  // return ;
  return userCheck;
};


// 출력
console.log(storeFn('a'));
console.log(storeFn('b', 'user2'));
console.log(storeFn('c', 'user3'));
console.log(storeFn('d'));
console.log(storeHistoryPerVisitor);



