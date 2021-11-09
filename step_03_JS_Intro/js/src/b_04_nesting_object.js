// b_04_nesting_object.js

// --------------------------------
// 배열 
var arr = [];     // 참조 변수 - 원본의 데이터는 따로 두고 그 값을 공유하여 체크
var ck = arr.constructor === Array ? 'array' : 'other';
// console.log(typeof arr, arr.constructor);
console.log(typeof arr, ck);


// 권장하지 않는 방법 - 과거의 방법 (cf. [[prototype]] - 부모에게 내가 없는 것(기능)을 빌려오는 것 -> 상속받는것)
// var arr2 = new Array();
// console.log(arr2);

arr = ['과일', '고기', '깐풍기', '회', '냉면'];
console.log(arr[2]);    // 1 & 3

var arr2 = ['포도', '사과', '배', '감', '귤', '자몽'];

// var arrList = [arr, arr2];  
// [
//   [ '과일', '고기', '깐풍기', '회', '냉면' ],
//   [ '포도', '사과', '배', '감', '귤', '자몽' ]
// ]

var arr3 = ['냉면', '라면', '우동', '회냉면', '쫄면', '밀면', '야끼우동', '국수'];
var arrList = [arr, arr2, '회', arr3];
// [
//   [ '과일', '고기', '깐풍기', '회', '냉면' ],
//   [ '포도', '사과', '배', '감', '귤', '자몽' ],
//   '회',
//   [
//     '냉면',     '라면',
//     '우동',     '회냉면',
//     '쫄면',     '밀면',
//     '야끼우동', '국수'
//   ]
// ]

console.log(arrList[2], arrList[0][3]);   // 회 찾기
console.log(arrList[0][4], arrList[3][0]);   // 냉면 찾기


var phone = '010-5548-7896';
var addr = '서울시 영등포구 여의도동 kbs홀 본관 402호';

var myArr = phone.split('-');
var myAddr = addr.split(' ');

console.log(myArr);                   // [ '010', '5548', '7896' ]
console.log(myAddr);                 // [ '서울시', '영등포구', '여의도동', 'kbs홀', '본관', '402호' ]
console.log(myArr.join('. '));      // 010. 5548. 7896
console.log(myArr.join(' / '));    // 010 / 5548 / 7896

console.clear();

// --------------------------------
// 객체 

var obj = {};     // 중괄호 
// var objCk = (obj.constructor === Object) ? '객체' : 'other';
// console.log(typeof obj, objCk);    // object 객체

// 객체 생성 - 비추/권장 X
// var objOrigin = new Object();    // new: 원형의 형태를 복제한다는 의미 
// console.log(objOrigin);
// console.log(objOrigin.constructor);

// 기본 객체 
obj = {meat: '채끝살', fruit: '머루포도', noodle: '쫄면', 'mobile phone': 'samsung'};
// 차후 json을 고려하면 
// obj = {"meat": "채끝살", "fruit": "머루포도", "noodle": "쫄면", "mobile phone": "samsung"};


var obj2 = {"web": "frontEnd", "myObj": obj};     
// {
//   web: 'frontEnd',
//   myObj: {
//     meat: '채끝살',
//     fruit: '머루포도',
//     noodle: '쫄면',
//     'mobile phone': 'samsung'
//   }
// }


console.clear();

// -----------------------------
// 객체와 배열의 혼합

var drink = [
  {'coffee' : ['espresso', 'americano', 'latte', 'mocha', 'choco latte']},
  {'alcohol': ['맥주', '소주', '막걸리', '청주', '데낄라']},
  {'juice': ['오렌지', '포도', '자몽', '망고']},
  {'tea': ['breakfast', 'green', 'red', 'lemon', 'earl grey', 'peppermint']},
  {'ade': ['자몽', '키위', '레몬']}
];

// "peppermint" 값 불러오기 
console.log(drink[3].tea[5]);  // -> 이걸로 사용! 이게 더 빈번하게 사용 됨!
// drink[3]["tea"][5]

console.clear();

// ========================================================
// 연습 
var data = {};

// 데이터 관리 방법 
var mySet = {
  name: function(d) {
    return data.user = d;
  },
  old: function(d) {
    return data.old = d;
  },
  gender: function(d) {
    return data.gender = d;
  }
};

console.log(data);    // {}
mySet.name('xido');  
console.log(data);    // { user: 'xido' }
mySet.old(20);        
console.log(data);    // { user: 'xido', old: 20 }
mySet.gender('male');       
console.log(data);    // { user: 'xido', old: 20, gender: 'male' }


// extra information
// cf. for in 문 
// 기본 문법 -> 반복수행 (변수명 in 객체명)
// 해석: 객체(data) 내부에 있는 property를 임의변수(sam)에 담아서 반복 수행/열거해라 

// e.g. 
// data;  // { user: 'xido', old: 20, gender: 'male' }
for (var sam in data) {
  console.log(sam + ':' + data[sam]);
}

// for - in 문은 객체의 모든 열거가능한 프로퍼티를 순회한다 
// 매번 순회할 때 객체의 열거가능한 프로퍼티키를 sam에 대입 


// 
var js = 'javascript';
var jsArr = js.split('').reverse().join('');

console.log(jsArr);




