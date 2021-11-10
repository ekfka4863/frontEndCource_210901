// switch (매개변수) {
//   case 값1:
//     조건값과 매개변수가 일치하면 수행하는 statement1;
//     break;
//   case 값2:
//     조건값과 매개변수가 일치하면 수행하는 statement2;
//     break;
//   case 값3:
//     조건값과 매개변수가 일치하면 수행하는 statement3;
//     break;
//   case 값4:
//     조건값과 매개변수가 일치하면 수행하는 statement4;
//     break;
//   default:
//     위에서 매개변수로 들어온 값이 case의 조건값 중 어느것도 일치하지 않을 경우 수행되는 statement;
// } 


// -----------------------------------------
// e.g. 1 - 재귀함수, 얕은 복사/깊은 복사

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

var i = 0;
var storeHistoryPerVisitor = [];             // 외부용 - 외부에서 사용자의 기록을 확인하기 위해 필요한 배열

// storeHistoryPerVisitor = 
// [
//   {
//     user: '',
//     history: [, , , ]
//   },
//   {
//     user: '',
//     history: [, , , ]
//   },
//   {
//     user: '',
//     history: [, , , ]
//   },
//   {
//     user: '',
//     history: [, , , ]
//   }
// ];


var recordStoreHistoryConcealed = function(visitor) {
  // 정보의 안전을 위해 - 수정할 수 없게! 전역함수 말고 지역함수로 넣는 이유! 
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

  // console.log(storeHistory)
  return storeHistory;
};// recordStoreHistoryConcealed(visitor);

recordStoreHistoryConcealed('a');



// 또 다른 기능을 위한 함수 
var storeFn = function(visitor, user) {    // 매개변수의 첫번째로 무조건 들어올 값을 넣고, 그 뒤에 안들어올 수도 있는 값을 넣는다 
  var userCheck = {};                      // e.g. {name: '사용자', content:[]};
  var userSequence = [];                   // 이 아이는 사실상 위의 함수에서 생성된 storeHistory의 값만 저장하는 용도

  // 조건문 -----------------------
  userSequence = recordStoreHistoryConcealed(visitor);
  // storeHistoryPerVisitor = recordStoreHistoryConcealed(visitor);   // 이거 노노노노논!!!
  // ------------------------------

  i++;

  userCheck.user = user || 'noNameUser_' + i;
  userCheck.content =  userSequence;
  // e.g. {name: '사용자', content:[]};

  storeHistoryPerVisitor.push(userCheck);

  return userCheck;                        // 리턴해줘도 되지만, 사실 storeFn 함수의 기능은 storeHistoryPerVisitor.push(userCheck); 그래서 필요 없음!
};



console.log(storeFn('a')); 
// console.log(storeFn()); 
console.log(storeFn('b', 'user2')); 
console.log(storeFn('user3')); 
// console.log(storeFn()); 
console.log(storeFn('d')); 
console.log(storeHistoryPerVisitor); 













// with 선생님

// step - 1 & 2:  
var i = 0;
var storeHistoryPerVisitor = [];    

//storeHistoryPerVisitor
// [
//   {
//     user: 'a',
//     content: [1, 2, 3, 4, 5]
//   },
//   {
//     user: 'b',
//     content: [1, 2, 3, 4, 5]
//   },
//   {
//     user: 'noNameUser_3',
//     content: [1, 2, 3, 4, 5]
//   },
//   {
//     user: '',
//     content: [1, 2, 3, 4, 5]
//   }
// ];


// step - 1: 
var recordStoreHistoryConcealed = function(visitor) {
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
  
  };// recordStoreHistory(visitor);

  recordStoreHistory(visitor);            // 호출을 꼭 하자!! 

  return storeHistory;

};// recordStoreHistoryConcealed(visitor);


// recordStoreHistoryConcealed('a');          
// [
//   '1. 물건을 고른다',
//   '2. 카드를 낸다',
//   '3. 카드 결재를 한다 ',
//   '4. 카드를 돌려받는다',
//   '5. 내역을 확인한다'
// ]





// step - 2: 
// 새로운 기능을 위한 함수를 새로 생성 

var storeFn = function(visitor, user) {     // 값이 missing일 수도 있고, 아닐수도 있는 불안한 값인 user를 매개변수 visitor 보다 뒤에 배치시킨다
  var userCheck = {};                      // e.g. {name: '사용자', content:[]};
  var userSequence = [];                   // 이 아이는 사실상 위의 함수에서 생성된 storeHistory의 값만 저장하는 용도

  userSequence = recordStoreHistoryConcealed(visitor);  

  i += 1;   // i = i + 1;
  userCheck.user = user || 'noNameUser_' + i;
  userCheck.content = userSequence;

  storeHistoryPerVisitor.push(userCheck);

  return userCheck;                        // 옵션! 
};// storeFn(visitor, user);




console.log(storeFn('a'));
console.log(storeFn('b', 'user2'));
console.log(storeFn('c'));
console.log(storeFn('d', 'user4'));
console.log(storeHistoryPerVisitor);





