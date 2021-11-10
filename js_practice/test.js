function getDay(a, b, c) {
  if(a) {
    return "a 있다";
  }
  console.log("함수 아직 돌아가는 중!");
  if(b) {
    console.log("b 있다 - ");   // b 있다 - 
    return "b 있다";            // "b 있다"
  }
  if(c) {
    return "c 있다";
  }
}

getDay(1, 12,);     // b 있다 


// var resultGlobal;




// var a = 1;
// var b = 2;

function add(a, b) {
  var result = a + b;

  return result;
}

// add(a, b);
add(5, 10);   // 15
add(29, 14);   // 43



function getElement() {
  let arr = [3, [4, ["array", 9], 2+3], [0]];

  let result = arr[1][1][0];

  return result;
}


function getElement() {
  let arr = [3, [4, ["array", 9], 2+3], [0]];
  let result = arr[1][1][0];
  return result;
}

getElement();


// --------------------------------
// for study
const person = {
  name: 'Lee',
  gender: 'female',
  age: 30,
  address: 'Seoul'
};

console.log(person);



const circle = {
  radius: 5,    // 반지름 

  // 원의 지름: 2πr 
  getDiameter() {
    return 2 * this.radius;
  },

  // 원의 둘레: 2r
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  // 원의 넓이: πrr
  getArea() {
    return Math.PI * this.radius ** 2;
  }
};

console.log(circle);      //  {radius: 5, getDiameter: f, getPerimeter: f, getArea: f}
console.log(circle.getDiameter());       // 10
console.log(circle.getPerimeter());      // 31.41592653589793
console.log(circle.getArea());           // 78.53981633974483






// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

// 반지름이 1인 인스턴스 생성 
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성 
const circle2 = new Circle(2);

/* 이때, 문제점 발생!!
Circle 생성자 함수는 인스턴스를 생성할 때마다 
동일한 동작을 하는 getArea 메서드를 중복 생성하고,
Circle 생성자 함수에 의해 생성되는 모든 인스턴스가 getArea 메서드를 중복 소유한다.
따라서... 결론!!
getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다!! 
*/

console.log(circle1.getArea === circle2.getArea);    // false -> 같은 getArea를 소유하지 않고 있단 의미!
console.log(circle1.getArea());      // 3.141592653589793
console.log(circle2.getArea());      // 12.566370614359172





// 생성자 함수
function Circle(radius) {
  this.radius = radius;
}

/* 
Circle 생성자 함수가 생성한 모든 인스턴스가
getArea 메서드를 공유해서 사용할 수 있도록 프로토타입에 추가한다.
프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
*/ 
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 반지름이 1인 인스턴스 생성 
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성 
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea);    // true -> 같은 getArea 메서드를 공유하고 있단 의미!
console.log(circle1.getArea());      // 3.141592653589793
console.log(circle2.getArea());      // 12.566370614359172






const obj = {};
const parent = { x : 1 };

// getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;

// setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x);




// obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 없다.
const obj = Object.create(null);

// obj는 Object.__proto__를 상속받을 수 없다.
console.log(obj.__proto__);        // undefined

// 따라서 __proto__보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다.
console.log(Object.getPrototypeOf(obj));    // null





const obj = {};
const parent = { x : 1 };

// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj);            // obj.__proto__;
// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent);    // obj.__proto__ = parent;

console.log(obj.x);                    // 1






// 화살표함수는 non-constructor 함수라서, 
// 화살표함수로 정의한 메서드는 prototype 프로퍼티를 소유하지 않으며,
// 프로토타입도 생성하지 않는다 
const Person = name => {
  this.name = name;
};

// non-constructor 함수는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty('prototype'));    // false 

// non-constructor 함수는 prototype 프로퍼티를 생성하지 않는다.
console.log(Person.prototype);    // undefined


// ES6의 메서드 축약 표현으로 정의한 메서드는  non-constructor 함수이다.
const obj = {
  testFn() {}
};

// non-constructor 함수는 prototype 프로퍼티를 소유하지 않는다.
console.log(obj.testFn.hasOwnProperty('prototype'));    // false 

// non-constructor 함수는 prototype 프로퍼티를 생성하지 않는다.
console.log(obj.testFn.prototype);    // undefined






let arr = [2, 100, 4, 291, 1, 6, 3];

function findSmallestElement(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let min = arr[0];
    // console.log(min);   // 2

    for (i = 1; i < arr.length; i++) {  
      if (min > arr[i]) {    // e.g. min이 2일때, 100, 4, 291보다는 2가 작은데 크다고 하면 모두 false 처리되고, 2 > 1이 될때 아래의 조건문 코드가 실행돼요 
        min = arr[i];   
      }                       
      // 여기에 리턴문을 하면 안되는 이유: if문이 끝나면 for문이 다시 반복돼요 
    }
    return min;     // 그래서 위의 if {} else {} 구간인 여기다가 return 문을 적어요
  }
}

findSmallestElement(arr);   // 호출시 매개변수 자리에 인자를 넣어줘야해요 





// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
var storeHistory = [];
// var i = 0;

// var storeVisitors = function() {};


// step - 1: 조건문 
switch(visitor) {
  case 'a':
    storeHistory.push('');
    storeHistory.push('');
    storeHistory.push('');
    storeHistory.push('');
    storeHistory.push('');
    break;
  case 'b':
    storeHistory.push('');
    storeHistory.push('');
    storeHistory.push('');
    storeHistory.push('');
    storeHistory.push('');
    break;
  case 'c':
    storeHistory.push('');
    storeHistory.push('');
    storeHistory.push('');
    storeHistory.push('');
    storeHistory.push('');
    break;
  case 'd':
    storeHistory.push('');
    storeHistory.push('');
    storeHistory.push('');
    storeHistory.push('');
    storeHistory.push('');
    break;
  default:
    storeHistory.push('사용기록 없음');
}

console.log(storeHistory);



// step - 2: 호출해서 기능을 수행해야하니까 함수를 생성해서 조건문을 안에 넣어준다 
var recordStoreHistory = function(visitor) {
  switch(visitor) {
    case 'a':
      storeHistory.push('');
      storeHistory.push('');
      storeHistory.push('');
      storeHistory.push('');
      storeHistory.push('');
      break;
    case 'b':
      storeHistory.push('');
      storeHistory.push('');
      storeHistory.push('');
      storeHistory.push('');
      storeHistory.push('');
      break;
    case 'c':
      storeHistory.push('');
      storeHistory.push('');
      storeHistory.push('');
      storeHistory.push('');
      storeHistory.push('');
      break;
    case 'd':
      storeHistory.push('');
      storeHistory.push('');
      storeHistory.push('');
      storeHistory.push('');
      storeHistory.push('');
      break;
      default:
      storeHistory.push('사용기록 없음');
  }
};



// step - 3: 재귀함수를 이용하여 중복을 줄일 수 있는 코드는 없애버린다 
var recordStoreHistory = function(visitor) {
  switch(visitor) {
    case 'a':
      recordStoreHistory('start');
      storeHistory.push('');
      recordStoreHistory('end');
      break;
    case 'b':
      recordStoreHistory('start');
      storeHistory.push('');
      recordStoreHistory('end');
      break;
    case 'c':
      recordStoreHistory('start');
      storeHistory.push('');
      recordStoreHistory('end');
      break;
    case 'd':
      recordStoreHistory('start');
      storeHistory.push('');
      recordStoreHistory('end');
      break;
    case 'start':
      storeHistory.push('');
      storeHistory.push('');
      break;
    case 'end':
      storeHistory.push('');
      storeHistory.push('');
      break;
    default:
      storeHistory.push('사용기록 없음');
  }
};



// step - 4: 해당 함수의 로직이 외부에 노출되지 않게 또 다른 함수로 감싸서 은닉시켜준다 -> 클로져 / 람다식
var recordStoreHistoryConcealed = function() {

  var recordStoreHistory = function(visitor) {
    switch(visitor) {
      case 'a':
        recordStoreHistory('start');
        storeHistory.push('');
        recordStoreHistory('end');
        break;
      case 'b':
        recordStoreHistory('start');
        storeHistory.push('');
        recordStoreHistory('end');
        break;
      case 'c':
        recordStoreHistory('start');
        storeHistory.push('');
        recordStoreHistory('end');
        break;
      case 'd':
        recordStoreHistory('start');
        storeHistory.push('');
        recordStoreHistory('end');
        break;
      case 'start':
        storeHistory.push('');
        storeHistory.push('');
        break;
      case 'end':
        storeHistory.push('');
        storeHistory.push('');
        break;
      default:
        storeHistory.push('사용기록 없음');
    }
  };
};


// 여기부터 다시 ...!!!!

// step - 5: 사용자와 사용자가 아래의 조건에 맞을 때 진행하는 일련의 절차를 출력하는 "데이터"를 객체와 배열의 형태로 반환시켜보자  
var userHistoryPrinted = {};    // "데이터"가 담길 객체 {};
// var userSequence = [];          // 위의 데이터 중 "사용자가 편의점에 가서 하는 모든 행동을 일련의 절차로 담은 배열"
// // Q: userSequence왜 두번 선언되는가!? 
// // 일단은 이 아이는 후에 나올 아니랑은 다른 아이다! 
// // 하지만 반환을 하지만 ... 


// step - 6: 위에서 선언한 아이들을 함수 recordStoreHistoryConcealed 안에 넣어주기 ... 같이 내부에 로직인 은닉 되어야 하니까~ 
var recordStoreHistoryConcealed = function(visitor) {
  var userSequence = []; 
  
  var recordStoreHistory = function(visitor) {
    switch(visitor) {
      case 'a':
        recordStoreHistory('start');
        storeHistory.push('');
        recordStoreHistory('end');
        break;
      case 'b':
        recordStoreHistory('start');
        storeHistory.push('');
        recordStoreHistory('end');
        break;
      case 'c':
        recordStoreHistory('start');
        storeHistory.push('');
        recordStoreHistory('end');
        break;
      case 'd':
        recordStoreHistory('start');
        storeHistory.push('');
        recordStoreHistory('end');
        break;
      case 'start':
        storeHistory.push('');
        storeHistory.push('');
        break;
      case 'end':
        storeHistory.push('');
        storeHistory.push('');
        break;
      default:
        storeHistory.push('사용기록 없음');
    }
  };
  return userSequence;
};






// step - 7: 함수를 또 다른 함수로 감싸서 외부에서 접근하여 함수 내부의 로직이나 값을 수정하지 못하게 한다


var recordStoreHistoryConcealed = function(user, visitor) {
  // 정보의 안전을 위해 - 수정할 수 없게! 
  var userCheck = {};                      // e.g. {name: '사용자', content:[]};
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
  
    return storeHistory;        
  };// recordStoreHistory(visitor);
};// recordStoreHistoryConcealed(visitor);





// step - 8: 함수를 또 다른 함수로 감싸서 외부에서 접근하여 함수 내부의 로직이나 값을 수정하지 못하게 한다
