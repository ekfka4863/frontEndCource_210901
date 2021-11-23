// b_13_js_constructor_function.js
'use strict';


// 생성자 함수를 제작하려면, 함수의 이름이 PascalCase 기법으로 처리 
// var UserSetting = function () {};

// e.g. 
var user = {};

// user.name = 'xido';
// user.age = 20;
// user.email = 'ido@naver.com';
// console.log(user);  // { name: 'xido', age: 20, email: 'ido@naver.com' }

var UserSetting = function (userName, userAge, userEmail) {
  this.name = userName;
  this.age = userAge;
  this.email = userEmail;
};

console.log(this);   
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
window.console.log('console.log()는 사실 window 객체 내에서 작동하는 것이다')
console.log(this.location);
console.log(window.location);
console.log(this.location === window.location);  // true


console.clear();
// e.g. 
// 생성자 함수 사용 방법 with new operator
// 인스턴스 처리: 기존에 만든 함수의 기능을 복제 - 객체로 변환 (new 연산자)
var user1 = new UserSetting('saram', 45, 'saram@gmail.com');
console.log(user1.email);

var user2 = new UserSetting('puppy', 10);
console.log(user2);
console.log(user2.email);
user2.email = 'puppy1004@naver.com'
console.log(user2.email);


// e.g. 
// 하나의 생성자 함수로 생성된 인스턴스들을 하나의 데이터 형식으로 묶으면 좋겠다는 생각을 하게됨! 
console.log(user1.groupName);  // undefined
// groupName을 인스턴스에 만들어주기 - 프로토타입을 사용해서 
UserSetting.prototype.groupName = '그룹 명단 체크';
console.log(user1);  
//  UserSetting {name: 'saram', age: 45, email: 'saram@gmail.com'}
//  [[Prototype]]: Object
//  groupName: "그룹 명단 체크"
//  constructor: ƒ (userName, userAge, userEmail)
console.log(user1.groupName);  // 그룹 명단 체크


// 다시, 프로포타입이란? 
// prototype: 생성자에 담길 내용에 대한 별도의 처리되는 기본 객체 



// e.g. 
// UserSetting = function (userName, userAge, userEmail) {
//   this.name = userName;
//   this.age = userAge;
//   this.email = userEmail;
//   this.group2 = '별도의 세팅값';
// };

// console.log(user1.group2);  // undefined
// console.log(user2.group2);  // undefined
// var user3 = new UserSetting();  
// console.log(user3.group2);  // 별도의 세팅값



// e.g. 
UserSetting.prototype.trueCheck = function () {
  return this.age / 2;
};
console.log(user1.trueCheck());


console.clear();
// this : window 
console.log(this);

// this: 생성자 함수로 생성될 예정의 객체 
var ObjFn = function(a) {
  this.alpha = a;
};
var alpha = new ObjFn('abcd');
console.log(alpha.alpha);   // abcd


console.clear();
// --------------------------------------
// e.g. 
var SetMenu = function(brand, type, narr, link) {
  this.brand = brand;
  this.type = type;
  this.narr = narr;
  this.link = link;
};

var coffeeList = [];

SetMenu.title = '겨울에 어울리는 음료';  // 생성자 함수 자체에 데이터를 바로 추가할 수 없음!! 

var drink1 = new SetMenu('nespresso', 'coffee', '겨울에 따듯하게 마실 수 있는 커피', 'http://nespresso.com');
// coffeeList.push(drink1);
// console.log(drink1);
// console.log(coffeeList);

SetMenu.prototype.title = '겨울에 어울리는 음료';
// console.log(drink1.title);

coffeeList.push(drink1);
console.log(coffeeList[0].title);  // 겨울에 어울리는 음료


console.clear();
// --------------------------------------
// e.g. 
var ul = document.querySelector('ul');  
var list = ul.children;
console.log(list);   
// HTMLCollection(5) [li, li, li, li, li]


// HTMLCollection -> forEach 사용 불가 
// cf.  https://www.zerocho.com/category/JavaScript/post/5af6f9e707d77a001bb579d2
// list.forEach(function(data, index) {
//   data.style.border = '1px solid #3df';
// });


// 그래서 ... 
// prototype은 재설정, 추가 옵션을 주는 개념 - 근본에 들어있는 기능들을 가지고 써먹기 위해 조치하는 것/ 그 조치에 사용되는 개념이 바로 프로토타입 
// console.log(list.__proto__);

// 해결 방법 -> 유사 배열을 배열로 만들어준다 
var ul = document.querySelector('ul');  
var list = ul.children;
console.log(list);   
// HTMLCollection(5) [li, li, li, li, li]

var arr = Array.prototype.slice.apply(list);
console.log(arr);   // [li, li, li, li, li]
console.log(Array.isArray(arr));  // true

// 이제 아래와 같이 배열 메서드 사용 가능!! 
// arr.forEach(function(element) {
//   console.log(element);
// });


// --------------------------------------
// prototype은 하나의 기능을 사용할 수 있는 환경을 구축하는 처리형태 
// 사용하는 변수 값 자체에 있는 기능은 아니고, 본연의 타입 형태에 담겨 처리할 수 있게 만드는 것 

// --------------------------------------
// 배열 형식을 가졌지만 실제로는 배열이 아닌 형태의 데이터를 유사배열이라고 한다. 
// 유사배열객체는 배열이 아니기 때문에 배열의 고유 기능/메서드를 사용하여 데이터를 처리할 수 없다. 
// 그렇기 떄문에 강제로 배열로 바꿔주고 난 후, 배열의 고유 기능을 사용할 수 있기 떄문에 우리는 위에서 유사배열객체를 배열로 바꿔준 것이다.
// 그리고 이런 것이 가능하기 위해 필요한 개념이 prototype이다. (근본적인 개념을 건드려서 강제로 형태를 유사배열 객체에서 배열로 변환한다)
// 이처럼 본래 가지고 있지 않는 성질을 강제로 변경하기 위해서는 어떤 "설정"을 바꿔 줘야하는데, 이런 변화는 prototype이라는 개념을 통해 처리한다. 


var n = 0;
var addFn = function() {
  this.n = 50;
  n++;
};

console.log(n);  // 0 
console.log(window.n);  // 0


// --------------------------------------
// --------------------------------------
/* this
1. this: window
2. this: 생성자 함수로 만들어진 객체 
3. this: 일반 함수 - window 이지만, 엄격한 모드 ('use strict')로 전환시 undefined
4. this: 메서드  
5. this: 이벤트 핸들러 - 이벤트의 주체가 되는 선택자
*/

// var n = 0;
// var addFn = funciton() {
//   n = 50;
//   n++; 
// };
// addFn(); 

// console.log(n);
// console.log(window.n);

// --------------------------------------
// e.g. 
var lastName = 'kim';
var firstName = 'xixixixi';

var useFile = {
  name: 'xido',
  lastName: 'lee',
  job: 'designer',
  subJob: 'developer',
  fullName: function() {
    return lastName + ' ' + firstName;
  }
};

console.log(useFile.fullName());

// --------------------------------------
// --------------------------------------
// call, apply, bind

// new Array() === []
var ar1 = [1, 2];
ar1.push('바나나', '키위');

Array.prototype.push.call(ar1, '오렌지', '수박');
console.log(ar1);
console.log(ar1.__proto__);
ar1 = [];
// console.log();


// e.g. 
var obj = {
  string: 'xido',
  reName: function() {
    console.log('name: ', this.string);
  }
};
obj.reName();   // name:  xido

var obj2 = {
  string: 'sub name'
};
obj.reName.call(obj2);   // name:  sub name
// 즉, call이라는 메서드는 this를 바꿔주는 메서드다. 


// Object.prototype.
// Object.prototype.rename
// Object.prototype.rename.call()
// Object.prototype.rename.call(obj2);  // 에러! 왜? 기본적으로 Object에는 reName이라는 메서드가 존재하지 않으니까! 


// e.g. 
var listFn = function() {
  console.log(arguments);
};
var makeList = listFn('test', 'file', 1, 2, 5, 7, 10);
console.log(makeList);
// Arguments(7) ['test', 'file', 1, 2, 5, 7, 10, callee: (...), Symbol(Symbol.iterator): ƒ] -> 유사배열 

listFn = function() {
  console.log(arguments);
  return Array.prototype.join.call(arguments).split(',');
  // return Array.prototype.slice.call(arguments);
};
var makeList = listFn('test', 'file', 1, 2, 5, 7, 10);
// 배열로 만들어 버리기
console.log(makeList, Array.isArray(makeList));  // (7) ['test', 'file', 1, 2, 5, 7, 10]  true

console.log(obj2.string);   // sub name 
obj.reName.call(obj2);      // name:  sub name

var obj3 = {
  string: [1, 3, 4, 5]
};
obj.reName.call(obj2);      // name:  sub name
obj.reName.apply(obj3);    // name:  (4) [1, 3, 4, 5]\
// call과 apply의 차이점은 ...
// 근본적인 차이점은 call() 은 함수에 전달될 인수 리스트를 받는데 비해, apply() 는 인수들의 단일 배열을 받는다는 점


console.clear();
// -------------------------------
// 이벤트 발생시 this 바인딩 
var btn = document.querySelector('#btn'); 
// btn.addEventListener(이벤트내용, function(){}); 
btn.addEventListener('click', function(e) {
  console.log(this);
}); 

// 이벤트 발생시 콘솔에 -> <button id="btn">버튼클릭</button>


console.clear();
// -------------------------------
// e.g. 
var objBox = {
  penname: 'board maker',
  rename: function() {
    console.log(this.penname);
  }
};

console.log(objBox.penname);   // board maker'
console.log(objBox.rename());  // undefined

var obj1 = {penname: 'sharp'};
objBox.rename.call(obj1);     // { penname: [ 'sharp', 'magic' ] } -> 함수에 전달된 인수 리스트를 받는다 -> call(null, (여러 arguments))
obj1 = {penname: ['sharp', 'magic']};
objBox.rename.apply(obj1);     // [ 'sharp', 'magic' ] -> 인수들의 단일 배열을 받는다 -> apply(null, [list])



console.clear();
// -------------------------------
// e.g. 
var Phone = function (brand, product) {
  this.brand = brand;
  this.product = product;
  this.set = function() {
    return this.brand + ' ' + this.product;
  }
};

// var setFn = function(brand, product) {
//   return this.brand + this.product;
// }
// phone1.setFn();



// var br1 = new Phone('samsung', 'gallaxy');
// // console.log(br1);
// br1.set();    // 'samsung gallaxy'


// prototype에서 근본적인 기능을 조작 
Phone.prototype.set = function(series, year) {
  console.log(this.name, this.product, series, year);
};

var br1 = new Phone('samsung', 'gallaxy');
// console.log(br1);
console.log(br1.set('s21', 2021));              // samsung gallaxy s21 2021  
// 위의 줄이랑 바로 아래 줄이랑 다른거는 없다. 하지만, 문법이 다르다. 앞에 처음에 br1을 적어줘야 한다. 
console.log(br1.set.call(br1, 's21', 2021));     // call이란 apply는 기능면에서는 같다. 차이점이라면 ... argument를 그냥 집어넣을 것인지 
console.log(br1.set.apply(br1, ['s21', 2021]));  // argument를 배열화 해서 집어넣을 것인지의 차이. 그래서 call과 똑같이 사용. 단 인자만 배열 안에 묶어서 전달하면 된다. 

// 그렇다면 bind는? 다른점? 
// 기본적으로 call, apply, bind는 기능은 같다. 단 문법이 다르다.
// bind는 함수로 처리. 호출이 필요한 메서드.
var brand = 'apple';
var product = 'iPhone';

br1.set('s21', 2021);
br1.set.call(this, 's21', 2021);   // call은 value담기 
br1.set.apply(this, ['s21', 2021]); // apply는 array담기 
// var reset = be1.set.bind(br1, 's21', 2021);   // bind -> 함수로 사용 
var reset = br1.set.bind(this, 's21', 2021);   // this를 사용하면 값이 달라진다! 체크!! 
reset();         // apple iPhone s21 2021

