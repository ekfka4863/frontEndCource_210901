---
date: 2021-11-10-Wednesday
---

# TIL
- 📝 오늘 배운 내용 ✏️ : 
  - [x] `switch 조건문` 
    - `재귀 함수(recursive function)`: 함수 내에서 자기 자심의 함수를 호출하는 것
  <!-- - [x] `if 조건문`  -->
  - [x] `얕은 복사` vs `깊은 복사` 
  <!-- - [x] `SCSS` 기초 문법 
    - `@mixin`, `@include`
    - `@`
    - `@` -->

<br />

### 조건문 

<br />

> switch 조건문 (다항 조건문)

- `switch 조건문` 기본 문법:      
```js
  // switch 조건문 기본 형태 
    
  switch (매개변수) {
    case 조건값1: 
      조건값과 매개변수가 일치하면 수행하는 statement 1;
      break;
    case 조건값2: 
      조건값과 매개변수가 일치하면 수행하는 statement 2;
      break;
    case 조건값3: 
      조건값과 매개변수가 일치하면 수행하는 statement 3;
      break;
      ...
    default: 
      위 조건들이 일치하지 않으면 수행하는 statement;
  }
```     
- e.g.        
```js      
  // e.g.
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


  // e.g. - 응용 
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
```       
- 유의 사항:         
  - `break;`문이 없다면 ...       
  ```js
    // default 문이 없는 경우 
    var testFn = function(value) {
    var answer = ""; 

    switch(value) {
      case 1:
        answer = "a";
        break;
      case 2:
        answer = "b";
        break;
      case 3:
        answer = "c";
        break;
      case 4:
        answer = "d";
        break;
      }
      
      return answer;
    };

    testFn(5);      // ""


    // -----------------------
    // default 문이 있는 경우 
    var testFn = function(value) {
    var answer = ""; 

    switch(value) {
      case 1:
        answer = "a";
        break;
      case 2:
        answer = "b";
        break;
      case 3:
        answer = "c";
        break;
      case 4:
        answer = "d";
        break;
      default:
        answer = "no answer exists!"
    }
    
      return answer;
    };

    testFn(5);      // "no answer exists!"
  ```       
  - 여러 개의 조건이 같은 값을 공유하는 경우 
  ```js
    var testFn = function(value) {
    var answer = ""; 

    switch(value) {
      case 1:
      case 2:
      case 3:
        answer = "1 or 2 or 3";
        break;
      case 4:
      case 5:
      case 6:
        answer = "4 or 5 or 6";
        break;
      case 7:
      case 8:
      case 9:      
        answer = "7 or 8 or 9";
        break;
      default:
        answer = "no answer exists!"
    }
    
      return answer;
    };

    testFn(5);      // "4 or 5 or 6"

    // 📍 TIP!
    // 옵션이 많은 경우, if/else if문 보다 switch문을 사용하는 것이 더 간편할 수 있다.
  ```       
- 심화 학습: 
    - 아래의 예시를 통해 배울 수 있는 개념: 
      - `재귀함수`
      - `클로저`

    - e.g.     
      <details>
        <summary>CLICK ME TO SEE REAAAAAALLY COMPLICATED EXAMPLE!</summary>
        
        ```js
          // step - 1 & 2: 전역 변수 한 곳에 모아두기 
          var i = 0;
          var storeHistoryPerVisitor = [];    

          // 우리가 원하는 값은 ...
          /* 
            storeHistoryPerVisitor = [ 
              { user: 'a', content: ['1', '2', '3', '4', '5'] },
              { user: 'b', content: ['1', '2', '3', '4', '5'] },
              { user: 'noNameUser_3', content: ['1', '2', '3', '4', '5'] },
              { user: 'd', content: ['1', '2', '3', '4', '5'] }
            ];
          */


          // step - 1: 
          var recordStoreHistoryConcealed = function(visitor) {         // 내부 함수 recordStoreHistory의 로직 또는 정보에 외부에서 접근해서 수정할 수 없게 또 다른 함수로 감싼단 -> 클로저
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

            recordStoreHistory(visitor);                 // 호출을 꼭 하자!! 

            return storeHistory;        

          };// recordStoreHistoryConcealed(visitor);


          // 중간 점검!
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

          var storeFn = function(visitor, user) {      // 값이 missing일 수도 있고, 아닐수도 있는 불안한 값인 user를 매개변수 visitor 보다 뒤에 배치시킨다
            var userCheck = {};                        // e.g. {name: '사용자', content:[]};
            var userSequence = [];                     // 이 아이는 사실상 위의 함수에서 생성된 storeHistory의 값만 저장하는 용도

            userSequence = recordStoreHistoryConcealed(visitor);      // userSequence 라는 빈 배열에 위에서 생성한 함수 recordStoreHistoryConcealed를 통해 얻어낸 storeHistory 값을 할당 

            i += 1;   // 전역변수 i에 + 1을 하여 함수 storeFn가 호출될 때마다 만약 매개 변수 user로 값이 존재하지 않을 경우 userCheck.user 의 프로퍼티 값으로 'noNameUser_' + i가 올수있게 해준다

            // userCheck 라는 빈 객체에 프로퍼티 생성  
            userCheck.user = user || 'noNameUser_' + i;
            userCheck.content = userSequence;

            storeHistoryPerVisitor.push(userCheck);                  // 전역변수 storeHistoryPerVisitor라는 빈 배열에 위에서 생성한 userCheck객체를 넣어 사용자마다 어떤 기록을 갖고있는지 외부에서도 접근할 수 있는 데이터를 만들어 준다

            return userCheck;                        // 옵션! 사실 storeFn의 기능은 객체를 생성하고 storeHistoryPerVisitor라는 기록이 담긴 배열에 값을 넣는 용도다. 그래서 return false; 를 해도 무방하지만, 값을 반환해도 무방하다. 어차피 안쓸 값이니까... 
          };// storeFn(visitor, user);



          // 마지막 확인 
          console.log(storeFn('a'));
          console.log(storeFn('b', 'user2'));
          console.log(storeFn('c'));
          console.log(storeFn('d', 'user4'));
          console.log(storeHistoryPerVisitor);
        
        ```

      </details>

<br />
<br />

### 얕은 복사 vs 깊은 복사 

<br />

> 얕은 복사 vs 깊은 복사 
- 예시로 이해하기:  
```js
var box2 = function() {
  var list = 'def';

  return list;     // 값을 반환
};

var box1 = function() {
  var list;               // 위의 box2()함수 내 지역함수 list와는 다른 아이... 
  // console.log(list);   // 값 -> undefined 
  list = box2();          // undefined라는 값을 갖는 list라는 box1() 지역 변수에... 함수 box2() 에서 반환되는 값을 할당한다 
  console.log(list);      
};

box1();                   // def 
 

// --------------------
// 얕은 복사 
var box2 = function() {
  var list = ['1', 4, 5];
  return list;  
};

var box1 = function() {
  var list;
  // console.log(list);   // undefined
  list = box2();          // 얕은 복사 -> 참조를 가져오는 것
  console.log(list);
};

box1();                  // [ '1', 4, 5 ]


// --------------------
// 깊은 복사
var box2 = function() {
  var list = ['1', 4, 5];
  return list;  
};

var box1 = function() {
  var list;
  // console.log(list);   // undefined
  list = box2();
  var sam = list;        // 깊은 복사 - 값 자체를 복사하는 것
  sam.push('789'); 
  console.log(list, sam);
};

box1();                 // [ '1', 4, 5, '789' ], [ '1', 4, 5, '789' ]
```

<br />
<br />

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - ✨ Only 선생님's 강의 ✨
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch
  - https://velog.io/@grinding_hannah/Switch-%EC%A1%B0%EA%B1%B4%EB%AC%B8-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
  - https://siyoon210.tistory.com/173

</detials>   

