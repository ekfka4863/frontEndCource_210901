// test_9_this_ALO_prototype_DOM.js

// step - 1: 변수를 선언한다 + 함수를 생성한다. (이때, 생성자 함수를 생성하는 것임으로, PascalCase!)
var CreatePerson = function (name, age, gender, height, weight) {
  // this -> 생성자함수로 만들어질, 아직은 안만들어 졌지만, 미래에 만들어질 모든 객체의 자기 자신을 가리킨다
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
};

var person1 = new CreatePerson('daye', 26, 'female', 168, 'secret');
// step - 2: this를 왜 사용할까요? 
// 정아: 객체를 생성할 생성자 함수로 만들어질 객체가 정해지지 않았는데, 
// 그래도 그 객체를 위해 this라는 키워드로 여러가지 설정을 하고싶어서 사용 사용.
// 영선언니: 자기 자신 객체와 연결되지 않아서 this를 사용.



// -------------------------------------
// prototype 

// 프로토타입 - 상속 
var CreatePerson = function (name, age, gender, height, weight) {
  // this -> 생성자함수로 만들어질, 아직은 안만들어 졌지만, 미래에 만들어질 모든 객체의 자기 자신을 가리킨다
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
};

var person1 = new CreatePerson('daye', 26, 'female', 168, 'secret');

// 프로토타입 - 유전자 -> "사람은 걸을 수 있다는 값을 넣어보자"
CreatePerson.prototype.humanCanWalk = true; 

console.log(person1.humanCanWalk);


console.clear();
// -------------------------------------
// 유사배열객체를 배열로 만들어서 배열 메서드 사용하게 만들기 
var array = [1, 2, 3, 4, 5];
array[4];
// 배열을 순회할 때 -> for, forEach


var arrayLikeObj = {
  0: '1', 
  1: '2', 
  2: '3', 
  3: '4', 
  4: '5', 
};
arrayLikeObj[4];

// 유사배열객체도 length를 갖는다. 
// arrayLikeObj.forEach(function(data) {
//   console.log(data);    // typeError
// });



// just checking...
var ul = document.querySelector('ul');  
// var ul = document.getElementsByTagName('ul');  

// HTMLCollection 반환 
var list = ul.children;
// console.log(list.forEach(function(data) {console.log(data);}));       
// HTMLCollection(5) [li, li, li, li, li]   -> TypeError: forEach 사용 불가 

// NodeList 반환 
// var list = ul.childNodes;
// console.log(list.forEach(function(data) {console.log(data);}));       
// NodeList(11) [text, li, text, li, text, li, text, li, text, li, text]  -> forEach 사용 가능 
// 단, getElementsByTagName로 ul태그에 접근시 자식요소가 childNodes로 접근해서 NodeList여도 forEach 사용 불가!


// 그래서 ... 유사배열객체는 배열의 메소드를 온전히 사용하지 못한다는 단점이 있다. 
// 그래서 우리는 유사배열 객체를 배열로 강제 변환해줄 것이다. 
// 어떻게?    --->  Array.prototype.slice.apply();
var realArr = Array.prototype.slice.apply(list); 
console.log(realArr);
// realArr.forEach(function(data) {console.log(data);});   // 가능!

// 그러면 apply, call, bind는 Function.Prototype에서 물려받은 것! 
// this를 바꿔주는 아이.


// slice 란? 
// slice 사용 방법: 복사하고싶은배열이름.slice(시작점인덱스, 끝점인덱스+1); 
// 복사하고 싶은 배열에서 원하는 시작점부터 끝점 인덱스+1 바로 직전까지 복사를 한 새로운 배열이 생성됨
var arguments = [1, 2, 3];
var arr = arguments.slice(0, 3);   // [ 1, 2, 3 ]
var arr2 = arguments.slice(1, 2);  // [ 2 ]

// 그러면 ... 
// Array.prototype.slice(); 에서 메서드 apply/bind/call 이 뒤에 하나씩 더 추가된 문법 형태 
Array.prototype.slice.apply();
Array.prototype.slice.call();


// 그러면 ... 
// apply/call/bind 는 뭐하는 아이들? 
// 기본적으로 apply/call는 ...
// 함수를 호출하면서 this값을 인수를 전달할 수 있게 하는 메서드들이다. 
// call이나 apply나 첫번째 인자로 this를 넣어준다. 
// call은 보통 함수와 같이 "인자 individually/각각 따로" 넣어주고, 
// apply는 인자를 하나로 묶어 "배열"로 만들어 넣는다. 
// call도 apply도 this값을 첫인자로 넣어주는데, 이렇게 call과 apply 를 통해서 
// this값으로 들어갈 객체를 명시적으로 언급/바꿔줄 수 있을 뿐만 아니라, 다른 객체의 함수를 자기 것마냥 사용할 수 있게된다. 


// 1. 일반 함수로 호출하면 -> this는 Window
// 2. 메서드로 호출하면 -> this는 .앞에 있는, 메서드를 호출한 객체 
// 3. 생성자 함수로 호출하면 -> this는 생성자 함수가 미래에 생성할 인스턴스 
// 4. Function.prototype.apply/call/bind 메서드에 의한 간접호출 
//    -> this는 Function.prototype.apply/call/bind 메서드에 첫번째 인수로 전달한 객체 


// 예시를 통해 apply/call/bind 왜 사용하는지 이해해보기
// e.g. 
const cat = {
  name: 'Oreo',
  noise: 'meow',
  speak: function() {
    return `${this.name} says ${this.noise}!`; 
  }
};
const dog = {
  name: 'Bernard',
  noise: 'woof',
  speak: function() {
    return `${this.name} says ${this.noise}!`; 
  }
};
// 이때, speak 가 this값만 다를뿐 똑같은 코드가 중복되고 있음을 알수있다.
// 그래서 ... 아래와 같이 바꿔주기! 

const cat = {
  name: 'Oreo',
  noise: 'meow',
};
const dog = {
  name: 'Bernard',
  noise: 'woof',
};

function speak() {
  return `${this.name} says ${this.noise}!`; 
};

// this값으로 들어갈 객체를 지정해주는 메서드인 call을 사용.
// cf. call과 apply의 기능은 같지만, 전달하는 인수들이 각각 따로 들어가는지,
//     배열로 묶여서 들어가는지의 차이만 존재. 지금은 각각 따로 인수를 넣어주는 call 메서드를 사용한다.
speak.call(cat);   // 'Oreo says meow!'
speak.call(dog);   // 'Bernard says woof!'

// cf.  https://betterprogramming.pub/how-and-why-to-use-call-apply-and-bind-in-javascript-17d50d5a1eb0

// what about bind method? 
// bind는 call이나 apply와 비슷하지만, 
// 함수가 가리키는 this만 바꾸고 호출은 하지 않는다. 
// e.g. 
var obj = {
  string: 'zero',
  yell: function() {
    alert(this.string);
  }
};

var obj2 = {
  string: 'what?'
};

// var yell2 = obj.yell;
// var yell2 = obj.yell.bind();
var yell2 = obj.yell.bind(obj2);   
yell2();    // 'what?'

// cf. https://www.zerocho.com/category/JavaScript/post/57433645a48729787807c3fd

// -----------
// 응용! 
// e.g. 
// 생성자 함수를 정의한다 
// var Phone = function() {};
var Phone = function(brand, product) {
  this.brand = brand;
  this.product = product;
  // this.set = function() {
  //   return this.brand + ' ' + this.product;
  // };
};


// prototype에서 근본적인 기능을 조작 
// Phone.prototype.set = function () {};
Phone.prototype.set = function (series, year) {
  console.log(this.brand, this.product, series, year);
};


// 인스턴스 생성 
var phone1 = new Phone('samsung', 's21');
console.log(phone1);   // Phone { brand: 'samsung', product: 's21' }
console.log(phone1.set('gallaxy', 2021));   // samsung s21 gallaxy 2021

var phone2 = new Phone('apple', 'iPhone_mini');

console.log(phone1.set.call(phone1, 'gallaxy', 2021));   
// samsung s21 gallaxy 2021
console.log(phone1.set.apply(phone2, ['iPhone_series', 2021]));  
// apple iPhone_mini iPhone_series 2021 
// + 
// bind -> 함수로 사용 -> 호출 필수! 
var test = phone1.set.bind(phone1, 'gallaxy', 2021);
console.log(test());   // samsung s21 gallaxy 2021





