// -----------------------------------------
// 어떤 사용자가 편의점에 간다고 가정. 가서 한 행동을 일련의 기록으로 저장하는 프로그램을 만들어라. 

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



// 재귀함수 - 함수가 있는데, 그 자기 자신 함수 내에서 자기 자신을 호출하는 함수 (recursive function)


// -----------------------------------------
// switch 조건문 기본 형태 
// switch(매개변수) {
//   case 비교값1:
//     // switch 조건문에 매개변수로 들어온 값이 비교값1과 동일할 때, 실행되는 문 (statement1)
//     break;
//   case 비교값2:
//     // switch 조건문에 매개변수로 들어온 값이 비교값2과 동일할 때, 실행되는 문 (statement2)
//     break;
//   case 비교값3:
//     // switch 조건문에 매개변수로 들어온 값이 비교값3과 동일할 때, 실행되는 문 (statement3)
//     break;
//   case 비교값4:
//     // switch 조건문에 매개변수로 들어온 값이 비교값4과 동일할 때, 실행되는 문 (statement4)
//     break;
//   default:
//     // switch 조건문에 매개변수로 들어온 값이 위에 비교값으로 존재하는 모든 값과 일치하지 않을 때 실행하는 문
// }


// 빈 배열 생성 
var storeHistory = []; 


// step 1 - 조건 먼저 만든다 
switch(visitor) {
  case 'a':
    storeHistory.push('1.');
    storeHistory.push('2.');
    storeHistory.push('3.');
    storeHistory.push('4.');
    storeHistory.push('5.');
    break;
  case 'b':
    storeHistory.push('1.');
    storeHistory.push('2.');
    storeHistory.push('3.');
    storeHistory.push('4.');
    storeHistory.push('5.');
    break;
  case 'c':
    storeHistory.push('1.');
    storeHistory.push('2.');
    storeHistory.push('3.');
    storeHistory.push('4.');
    storeHistory.push('5.');
    break;
  case 'd':
    storeHistory.push('1.');
    storeHistory.push('2.');
    storeHistory.push('3.');
    storeHistory.push('4.');
    storeHistory.push('5.');
    break;
  default:
    storeHistory.push('사용기록없음.');
}



// ====================================================================================


var storeHistory = []; 


// step 2 - 조건내에서 중복되는 코드를 제거하기 위해 재귀함수를 활용한다. + 함수로 감싸므로 호출을 할 수 있게 한다.

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

  return storeHistory;    

}; 

recordStoreHistory('a');






// ====================================================================================
// step 3 - 함수 내부 로직에 외부에서 접근하여 내부 로직을 조작하거나 개인 정보를 빼내갈 위험을 줄이기 위해 함수를 또 다른 함수로 감싼다 -> 클로져 

var recordStoreHistoryConcealed = function(visitor) {    // 기억할 점 1: 매개변수로 함수들과 조건문 이어주기 
  var storeHistory = [];                                 // 기억할 점 2: 왜 전역변수에서 recordStoreHistoryConcealed 함수 내 지역변수로 들어올까? -> 보안상! 

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
  
  recordStoreHistory(visitor);         // 기억할 점 3: 이때 오는 아이는 매개변수, 실질적인 값을 적지 말자!
  
  return storeHistory;     

};// recordStoreHistoryConcealed(visitor);




recordStoreHistoryConcealed('a');   





// ====================================================================================
// step 5 - 또 다른 기능을 수행하기 위해 다른 함수를 만들어준다 

// 전역 변수 
var storeHistoryPerVisitor = [];                         // 외부에서 사용자 기록을 열람할 수 있게 외부에도 노출되는 전역 변수에 기록을 담자 
var i = 0;


var recordStoreHistoryConcealed = function(visitor) {    // 기억할 점 1: 매개변수로 함수들과 조건문 이어주기 
  var storeHistory = [];                                 // 기억할 점 2: 왜 전역변수에서 recordStoreHistoryConcealed 함수 내 지역변수로 들어올까? -> 보안상! 

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
  
  recordStoreHistory(visitor);         // 기억할 점 3: 이때 오는 아이는 매개변수, 실질적인 값을 적지 말자!
  
  return storeHistory;     

};// recordStoreHistoryConcealed(visitor);



recordStoreHistoryConcealed('a');      // [ '1. 물건을 고른다', '2. 카드를 낸다', '3. 카드 결재를 한다 ', '4. 카드를 돌려받는다', '5. 내역을 확인한다']



// 다른 함수 
// 기능: 전역 변수이자 빈배열인 storeHistoryPerVisitor 안에 객체의 형태로 "어떤 사용자가", "어떤 사용 기록을 갖고 있는지"를 출력할 수 있는 "영수증"같은 것을 만들기 위한 함수 
var storeFn = function(visitor, user) {
  var userCheck = {};        // 빈객체 생성 
  var userSequence = [];     // 빈배열 생성
  
  userSequence = recordStoreHistoryConcealed(visitor);  
  i++; 

  userCheck.user = user || 'noNameUser_' + i;      // e.g. {user: 'a'}
  userCheck.content = userSequence;                // e.g. {user: 'a', content: [~~~~~~~]}

  console.log(userCheck);
  storeHistoryPerVisitor.push(userCheck);

  return userCheck;    // 옵션! 
};



console.log(storeFn('a', 'user1'));
console.log(storeFn('b'));
console.log(storeFn('c', 'user3'));
console.log(storeFn('d'));
console.log(storeHistoryPerVisitor);