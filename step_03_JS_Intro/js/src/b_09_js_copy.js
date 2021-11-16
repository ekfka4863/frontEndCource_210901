// b_09_js_copy.js


// ========================================================================================
// 문제 1: 
var favoriteColor = ['emerald green', 'coral', 'hot pink', 'city blue', 'brown gray'];

var copyColor = favoriteColor;    // 같은 주소지를 공유
favoriteColor.push('yellow');
console.log(favoriteColor === copyColor);


// ------------------------------------------
// 방법 1
var cloneColor = [];

for (var i = 0; i < favoriteColor.length; i++) {
  cloneColor.push(favoriteColor[i]);
}
favoriteColor.push('sky');
console.log(favoriteColor);      // ['emerald green', 'coral', 'hot pink', 'city blue', 'brown gray', 'sky'];

cloneColor.push('deep orange');
console.log(cloneColor);        // ['emerald green', 'coral', 'hot pink', 'city blue', 'brown gray', 'deep orange'];



// ------------------------------------------
// 방법 2
let cloneColor = [...favoriteColor];

favoriteColor.push('sky');
console.log(favoriteColor); 

cloneColor.push('deep orange');
console.log(cloneColor);    



// ------------------------------------------
// 방법 3
let cloneColor = [];
cloneColor = favoriteColor.filter(color => true);    // 해석: 결과가 true이면 가져와라 

favoriteColor.push('sky');
console.log(favoriteColor); 

cloneColor.push('deep orange');
console.log(cloneColor);    


// ------------------------------------------
// https://ecofreenavigator.tistory.com/22
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter



// ------------------------------------------
// 선생님's solution

// var i = 0;
// var len = favoriteColor.length;

// for (; i < len; i+=1) {
//   cloneColor.push(favoriteColor[i])
// }

// favoriteColor.push('sky');
// cloneColor.push('deep orange');


// 응용: 반복문 안에서 전부 다 해치워버리기!
for (var i = 0; i <= favoriteColor.length; i+=1) {

  if(i !== len) {
    cloneColor.push(favoriteColor[i])
  } else {
    favoriteColor.push('sky');
    cloneColor.push('deep orange');
  }

}



// 선생님's solution 2

// 나 
let cloneColor = [];

favoriteColor.forEach(color => {
  cloneColor.push(color);
});

favoriteColor.push('sky');
cloneColor.push('deep orange');

console.log(favoriteColor === cloneColor);   // false


// 쌤 
let cloneColor = []; 

favoriteColor.forEach(function(data, index){
  cloneColor[index] = data;
});

favoriteColor.push('sky');
cloneColor.push('deep orange');

console.log(favoriteColor, cloneColor);

// ========================================================================================
// ========================================================================================

// 문제 2: 
var pc = {
  'dell' : '프리시전',
  'hp' : 'z시리즈',
  'apple' : 'mac book',
  'samsung' : 'galaxy book'
};

var clonePc = {};

pc.lg = 'gear';
clonePc.lg = 'gear';
console.log(pc, clonePc); 
// { dell: '프리시전', hp: 'z시리즈', apple: 'mac book', samsung: 'galaxy book', lg: 'gear' }
// { dell: '프리시전', hp: 'z시리즈', apple: 'mac book', samsung: 'galaxy book', lg: 'gear' }


// 방법 1
for (var key in pc) {
  clonePc[key] = pc[key];
}
pc.asus = 'gen book';
clonePc.lenovo = 'think pad';

console.log(pc, clonePc);
console.log(pc === clonePc);




// 방법 2
let clonePc = {...pc};

pc.asus = 'gen book';
pc.lenovo = 'think pad';

console.log(pc, clonePc);
console.log(pc === clonePc);



// ========================================================================================

// ========================================================================================
// 숙제 

// 문제 1: 깊은 복사를 한 뒤, 원하는 제품 하나를 추가하세요.
var cookie = ['초코칩', '칙촉', '빼빼로', '호빵', '촉촉한초코칩', '칸초', '홈런볼', '엄마손'];
var snack= {'농심': '새우깡', '해태': '맛동산', '오리온': '고래밥', '크라운': '산도'};
var ice = [{'롯데': ['폴라포', '수박바']}, {'해태': '브라보'}, {'허쉬': '민트초코'}, {'빙그레': '투게더'}];


// cookie -----------------------------------------
var cloneCookie = [];

for(var i = 0; i < cookie.length; i++) {
  cloneCookie.push(cookie[i]);
}
console.log(cookie === cloneCookie);
cloneCookie.push('고래밥');
console.log(cookie, cloneCookie);
// [ '초코칩', '칙촉', '빼빼로', '호빵', '촉촉한초코칩', '칸초', '홈런볼', '엄마손' ]
// [ '초코칩', '칙촉', '빼빼로', '호빵', '촉촉한초코칩', '칸초', '홈런볼', '엄마손', '고래밥' ]



// snack -----------------------------------------
var cloneSnack = {};

for (var key in snack) {
  cloneSnack[key] = snack[key];
}

console.log(snack === cloneSnack);
cloneSnack['롯데'] = '마가렛트';
console.log(snack, cloneSnack);
// { '농심': '새우깡', '해태': '맛동산', '오리온': '고래밥', '크라운': '산도' } 
// { '농심': '새우깡', '해태': '맛동산', '오리온': '고래밥', '크라운': '산도', '롯데': '마가렛트' }




// ice -----------------------------------------
var ice = [{'롯데': ['폴라포', '수박바']}, {'해태': '브라보'}, {'허쉬': '민트초코'}, {'빙그레': '투게더'}];
// {'롯데': ['폴라포', '수박바']}, {'해태': '브라보'}, {'허쉬': '민트초코'}, {'빙그레': '투게더'}

var cloneIce = [];
var cloneIceInnerObj;

for(var i = 0; i < ice.length; i++) {  
  cloneIceInnerObj = [];
  for (var key in ice[i]) {
    cloneIceInnerObj[key] = ice[i][key];
    cloneIce.push(cloneIceInnerObj);
  }
}

// cloneIce[3]['빙그레'] = '메로나';
cloneIce[0]['롯데'].push('돼지바');


console.log(ice === cloneIce);     // false 
console.log(ice, cloneIce);

// [
//   { '롯데': [ '폴라포', '수박바', '돼지바' ] },
//   { '해태': '브라보' },
//   { '허쉬': '민트초코' },
//   { '빙그레': '투게더' }
// ] 

// [
//   { '롯데': [ '폴라포', '수박바', '돼지바' ] },
//   { '해태': '브라보' },
//   { '허쉬': '민트초코' },
//   { '빙그레': '투게더' }
// ]


var ice = [{'롯데': ['폴라포', '수박바']}, {'해태': '브라보'}, {'허쉬': '민트초코'}, {'빙그레': '투게더'}];

var cloneIce = [];
var cloneIceInnerObj;
var cloneIceInnerArr;

for(var i = 0; i < ice.length; i++) {  
  cloneIceInnerObj = [];
  for (var key in ice[i]) {
    cloneIceInnerObj[key] = ice[i][key];
    cloneIce.push(cloneIceInnerObj);
  }
}



// 시도 1
// ???? 
for(var i = 0; i < ice.length; i++) {  
  cloneIceInnerObj = [];

  if(ice[i][key] === 'object') {
    cloneIceInnerArr = [];
    for (var j = 0; j < ice[i][key].length; j++) {
      cloneIceInnerArr[j] = ice[i][key][j];
      cloneIce[i].push(cloneIceInnerArr[j]);
    } 
  } else {
    for (var key in ice[i]) {
      cloneIceInnerObj[key] = ice[i][key];
      cloneIce.push(cloneIceInnerObj);
    }
  }
}




// 시도 2 - 최신문법 
let ice = [{'롯데': ['폴라포', '수박바']}, {'해태': '브라보'}, {'허쉬': '민트초코'}, {'빙그레': '투게더'}];

let cloneIce = [];
// let cloneIce1 = [];
// let cloneIce2 = [];
let cloneIceInnerObj = {};
let cloneIceInnerArr = [];


ice.forEach(obj => {
  cloneIce1.push(obj);
});

cloneIce1
for (const [key, value] of Object.entries(obj))

ice.forEach(obj => {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      cloneIceInnerObj[`{${key}`] = `${value}`; 
      cloneIce.push(cloneIceInnerObj);
    } else {
      cloneIceInnerObj[`{${key}`] = `${value}`; 
      cloneIce.push(cloneIceInnerObj);
    }
  }
});





for(var i = 0; i < ice.length; i++) {  
  cloneIceInnerObj = [];
  for (var key in ice[i]) {
    cloneIceInnerObj[key] = ice[i][key];
    cloneIce.push(cloneIceInnerObj);
  }
}
