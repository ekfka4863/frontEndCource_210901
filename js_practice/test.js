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



 



