// b_10_js_remind_01-02.js

// console.log(i);   // 파일들이 서로 변수를 공유하기 때문에 -> 지금 이 파일에는 변수 i가 없지만 출력가능! 


console.clear();
// --------------------------------------------------

var ar1 = ['딸기','포도','바나나','오렌지'];
var cAr = [];

var arFn = function(arr){
  var arEx = [];
  arr.forEach(function(data, index){
    arEx[index] = data;
  });
  return arEx;
};

cAr = arFn(ar1);

ar1.push('melon');
console.log( ar1 );
console.log( cAr );


var car = ['pony','bmw','granger','audi'];
var car2 = arFn(car);
console.log( car2 );


console.clear();
// --------------------------------------------------

var ob1 = {
  'fruits': ['딸기','포도','바나나','오렌지']
};
var cOb1 = {};



// 원래 객체를 깊은 복사 할 때 for in 
var obt = {'a': 1, 'b': 2};
var cObt = {};

for(var prop in obt) {
  cObt[prop] = obt[prop];
}
console.log(cObt === obt);   // false 

// --------------

// 단순한 객체가 아닌데 깊은 복사를 할 때 
var ob1 = {
  'fruits': ['딸기','포도','바나나','오렌지'],
  'drink' : 'coffee'
};
var cOb1 = {};

for(var prop in ob1) {
  cOb1[prop] = ob1[prop];
}
console.log(cOb1 === ob1);   // false 

console.log(cOb1);           // { fruits: [ '딸기', '포도', '바나나', '오렌지' ], drink: 'coffee' }
// ob1['car'] = 'niro';        

console.log(cOb1);        // { fruits: [ '딸기', '포도', '바나나', '오렌지' ], drink: 'coffee' }
console.log(ob1);         // { fruits: [ '딸기', '포도', '바나나', '오렌지' ], drink: 'coffee' }

ob1.fruits.push('melon');  


// 문제 발생! 깊은 복사 됐다며!!! 그거는 { fruits: [ '딸기', '포도', '바나나', '오렌지', 'melon' ] }이거는 이거대로 ... [ '딸기', '포도', '바나나', '오렌지', 'melon' ] 이거는 이거대로 따로 참조값을 갖고있기때문...
console.log(cOb1);        // { fruits: [ '딸기', '포도', '바나나', '오렌지', 'melon' ], drink: 'coffee' }
console.log(ob1);         // { fruits: [ '딸기', '포도', '바나나', '오렌지', 'melon' ], drink: 'coffee' }


// for(var prop in ob1) {   // 객체 순회 
//   cOb1[prop] = ob1[prop];     // ob1에 대한 객체를 체크하여 copy

//   // ob1의 프로퍼티에 들어있는 배열을 확인하여 copy
//   cOb1[prop].forEach(function(data, index) {  
//     console.log('data :', data);
//   })
// }



for(var prop in ob1) {
  // cOb1[prop] = ob1[prop];     // ob1에 대한 객체를 체크하여 copy
  
  // ob1의 프로퍼티에 들어있는 배열을 확인하여 copy
  //   ob1이 배열인지 확인하는 방법 1
    // if (typeof ob1[prop] === 'object') {}
  //   배열인지 확인하는 방법 2
    if (Array.isArray(ob1[prop])) {}    // true나 false 반환 
  //   배열인지 확인하는 방법 3
    // ob1[prop].constructor === Array

  if (ob1[prop].constructor === Array) {
    // 진짜 딥 카피를 위해 ...   // -> 이거가 맞는데 너무 복잡해지니까 ... 그니까 arFn() 함수로 뺀것!
    var tmpArr = [];   
    //  수정 필요 ..
    
    // ob1의 프로퍼티에 들어있는 배열을 확인하여 copy
    cOb1[prop].forEach(function(data, index) {  
      tmpArr = tmpArr.push(data); 
      cOb1[prop][index] = tmpArr;
      //  수정 필요 ..
    });
  } else {
    cOb1[prop] = ob1[prop];     // ob1에 대한 객체를 체크하여 copy
  }
}

// ob1.fruits.push('watermelon');  
ob1.fruits.push("oh no.... this doesn't work");  

console.log(cOb1);        // { fruits: [ '딸기', '포도', '바나나', '오렌지' ], drink: 'coffee' }
console.log(ob1);         // { fruits: [ '딸기', '포도', '바나나', '오렌지' ], drink: 'coffee' }



// -----------------------
// 응용: 함수로 만들어서 함수를 호출 ... 
var arFn = function(arr){
  var arEx = [];
  arr.forEach(function(data, index){
    arEx[index] = data;
  });
  return arEx;
};

for(var prop in ob1) {
  if (ob1[prop].constructor === Array) {
    cOb1[prop] = arFn(ob1[prop]);
  } else {
    cOb1[prop] = ob1[prop];    
  }
}
// -----------------------


console.clear();
// --------------------------------------------------
// 객체 내 배열... 이런식으로 딥카피가 까다로운 경우 ... 아래와 같이 진행! 
// 두줄이면 끝! 

var originArr = {    // 이런 객체가 있는데 ... 
  fruits: [ '딸기', '포도', '바나나', '오렌지' ], 
  drink: 'coffee',
  'ade': {'ice': '레몬에이드', 'hot': 'nothing'} 
}; 

// 중요 ! 먼저 json 형식으로 바꿔버리기 !
var textAr = JSON.stringify(originArr);

// var copyArr = originArr;
// console.log(textAr);
// document.write(textAr);

// 하지만 json 형식의 문자를 실제로 사용할 수 없으니 다시 객체화 시킨다 
// 중요 ! 객체회 시킬 때는 JSON.parse(); 사용! 
var copyArr = JSON.parse(textAr);

originArr.more = '추가객체 삽입';
originArr.fruits.push('감');

console.log(originArr);
console.log(copyArr);


// ---------------- 다시 정리 ---------------------
// 객체 내 배열... 이런식으로 딥카피가 까다로운 경우 ... 아래와 같이 진행! 
// 두줄이면 끝! 

var originArr = {    // 이런 객체가 있는데 ... 
  fruits: [ '딸기', '포도', '바나나', '오렌지' ], 
  drink: 'coffee',
  'ade': {'ice': '레몬에이드', 'hot': 'nothing'} 
}; 

// 중요 ! 먼저 json 형식으로 바꿔버리기 !
var textAr = JSON.stringify(originArr);

// 하지만 json 형식의 문자를 실제로 사용할 수 없으니 다시 객체화 시킨다 
// 중요 ! 객체회 시킬 때는 JSON.parse(); 사용! 
var copyArr = JSON.parse(textAr);

originArr.more = '추가객체 삽입';
originArr.fruits.push('감');

console.log(originArr);
// {
//   fruits: [ '딸기', '포도', '바나나', '오렌지', '감' ],
//   drink: 'coffee',
//   ade: { ice: '레몬에이드', hot: 'nothing' },
//   more: '추가객체 삽입'
// }
console.log(copyArr);
// {
//   fruits: [ '딸기', '포도', '바나나', '오렌지' ],
//   drink: 'coffee',
//   ade: { ice: '레몬에이드', hot: 'nothing' }
// }


// ------------------------------------
// JSON(JavaScript Object Notation) 형식의 기초 
// 1. property, value 모두 쌍따옴표로 처리 (별도저장시)
// 2. 주석은 사용 X
// 3. 객체와 배열들의 집합 