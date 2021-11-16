// 슬아언니가 준 문제 (2021-11-14-일)

//  =============================================================================================
// 문제 1: 반복문을 이용해서 아래와 같은 배열이
//    var 동물들 = ["고양이", "강아지", "도마뱀", "원숭이"];

//    아래와 같은 결과물이 되도록 코드를 작성해보세요.
//    ["귀여운 고양이", "귀여운 강아지", "귀여운 도마뱀", "귀여운 원숭이"];


let animals = ["고양이", "강아지", "도마뱀", "원숭이"];

var makeCute = (animals) => {
  let cuteAnimals = [];
  let cute = "귀여운";

  animals.forEach(animal => {
    cuteAnimals.push(`${cute} ${animal}`);
  });

  return cuteAnimals;
};

makeCute(animals);


//  =============================================================================================
// 문제 2: 반복문을 사용해서 다음 텍스트를 h4ck3R sp34k처럼 바꾸는 함수를 만들어 보세요. 
// (`A`를 `4`, `I`대신 `1`, `O`대신 `0`사용)
//    var 입력 = "javascript is awesome";


// ----------- my solution ----------- 
// var sentence = "javascript is awesome";
// var sentenceArr = sentence.split('');

var newSentence = [];

var makeNewSentence = function(sentence) {
  sentence = sentence.split('');
  
  sentence.forEach(str => {
    if(str === 'a') {
      str = '4';
      newSentence.push(str);
    } else if (str === 'i') {
      str = '1';
      newSentence.push(str);
    } else if (str === 'o') {
      str = '0';
      newSentence.push(str);
    } else {
      newSentence.push(str);
    }
  });

  newSentence = newSentence.join('');

  return newSentence;
};

// makeNewSentence(sentence);
makeNewSentence("javascript is awesome");



// ----------- 슬아언니's solution ----------- 
var str = "javascript is awesome";

var awesomeFn = function(str) {
  var print = str.split('');

  for(var i = 0; i < print.length; i++) {
    if (print[i] === 'a') {
      print.splice(i, 1, '4');   // 배열에서 i번째부터 1개 삭제하고 그 위치에 새 요소 추가
    } else if (print === 'i') {
      print.splice(i, 1, '1');   
    } else if (print === '0') {
      print.splice(i, 1, '0');   
    } 
    // else {}
  }

  return print.join('');
};

awesomeFn(str);

//  =============================================================================================
//  =============================================================================================
// 2021-11-15-월
// 1. 얕은 복사 
// 2. 깊은 복사 

var favoriteColor = ['emerald green', 'coral', 'hot pink', 'city blue', 'brown gray'];

// var copyColor = favoriteColor;    // 얕은 복사 -> 메모리 주소만 공유하는 것. 그래서 서로 변화가 있을 때 서로에게 영향을 미친다.

// console.log(favoriteColor === copyColor);  

// 깊은복사? -> 힌트: 얕은 복사는 메모리 주소만 카피를 했다는 뜻, 깊은 복사는 favoriteColor 안에 있는 값 자체를 복사해야한다.

// var copyColor = [];
// copyColor[0] = favoriteColor[0];
// copyColor[1] = favoriteColor[1];
// copyColor[2] = favoriteColor[2];
// copyColor[3] = favoriteColor[3];
// copyColor[4] = favoriteColor[4];




var copyColor = [];


// for 반복문 -> 깊은복사
for(var i = 0; i < 5; i++) {    
  copyColor[i] = favoriteColor[i];    
}

// console.log(favoriteColor === copyColor);    // false 


favoriteColor.push('yellow');
copyColor.push('yellow');


favoriteColor.push('sky');
copyColor.push('deep orange');





// 객체에 프로퍼트를 어떻게 추가하는지 아는가? 
// -> 2가지 방법 (마침표 표기법 / 대괄호 표기법)
// var obj = {};
obj.name = "daye";
// obj['age'] = 26;




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

// 값자체에 접근하기 
for (var key in pc) {
  clonePc[key] = pc[key];   // 깊은 복사 
}

console.log(pc, clonePc);
// console.log(pc === clonePc);


pc.asus = 'gen book';
clonePc.lenovo = 'think pad';

// 대괄호 표기법
pc['asus'] = 'gen book';
clonePc.lenovo = 'think pad';



// ========================================================================================
// 숙제 

// 문제 1: 깊은 복사를 한 뒤, 원하는 제품 하나를 추가하세요.
var cookie = ['초코칩', '칙촉', '빼빼로', '호빵', '촉촉한초코칩', '칸초', '홈런볼', '엄마손'];
var cloneCookie = [];

// 깊은 복사 
for (var i = 0; i < cookie.length; i++) {
  cloneCookie[i] = cookie[i];
}

cookie.push('양파링');
// [ '초코칩', '칙촉', '빼빼로', '호빵', '촉촉한초코칩', '칸초', '홈런볼', '엄마손', '양파링' ]
cloneCookie.push('오징어집');
// [ '초코칩', '칙촉', '빼빼로', '호빵', '촉촉한초코칩', '칸초', '홈런볼', '엄마손', '오징어집' ]




// ---------------------
var snack= {'농심': '새우깡', '해태': '맛동산', '오리온': '고래밥', '크라운': '산도'};
var cloneSnack = {};

// 깊은복사 
for (var key in snack) {
  cloneSnack[key] = snack[key];
}

snack.롯데 = '빈츠';
cloneSnack['삼우식품'] = '찰떡파이';

// console.log(snack);
// { '농심': '새우깡', '해태': '맛동산', '오리온': '고래밥', '크라운': '산도', '롯데': '빈츠' }
// console.log(cloneSnack);
// { '농심': '새우깡', '해태': '맛동산', '오리온': '고래밥', '크라운': '산도', '삼우식품': '찰떡파이' }







// 정아
var ice = [{'롯데': ['폴라포', '수박바']}, {'해태': '브라보'}, {'허쉬': '민트초코'}, {'빙그레': '투게더'}];
var ice2 = [];

// var icelen = ice.length;
var iceCon = {};

// if( e < ice.length ){
  for(e = 0 ; e < ice.length ; e++){
    ice2[e]=ice[e];       // 배열에다가만 하는 거 ... 
  }

// }else{
  ice['ice22Add'] = 'ice2에 넣는 값';




