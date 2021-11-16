// b_10_js_remind_01-01.js

var i = 0;

// 작업 중간, 연산 과정상 필요한 결과물을 확인 
console.log('결과물은 개발자 모드에서만 확인가능');

// 내용을 작업하고 나서 끝에는 ;을 붙여라.
// ;을 붙이는 정확한 위치 
// 1. 변수 선언/ 수정 끝
// 2. 해당하는 함수를 호출할 때 
// 3. 식의 종료 (e.g. 삼항연산자) -> () ? : ;

var aFn = function() {};   // 이거는 사실 변수명에 붙이는 세미콜론
aFn();


// --------------------------------------------------
// 형타입 
// 1. 숫자 
// 2. 문자 
// 3. boolean 
// 4. undefined 
// 5. null 
// (6. symbol)
// 7. 객체 ([], {}, 함수)

var a = typeof [];
var b = typeof {};
console.log(a.constructor);    // a.constructor -> a가 만들어 졌는데 뭘로 만들어졌니? 

// 함수 표현식 
var funFn = function() {
  return 1;
};


// -----------------------------
// 연산 
var a = 10;
console.log(a + 5);   // 15
console.log(a + '5');   // '105'
console.log(a + 'a');   // '10a'
console.log(parseInt(a + 'a'));   // 10

var b = a + '';
var c = a.toString();
console.log(b, c);


// 삼항연산자 -> (조건) ? (true일 때 실행 코드) : (false일 때 실행 코드);


// ----------------------------
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var obj = {'a': 1, 'b': 2, 'c': 3};

// ----------------------------
var fn = function(a) {
  return a + b;
};
var fnCon = fn(arr[3]);   // 이때 fn(arr[3])라는 함수는 수행된다. 만약 안됐음 undefined였을 것
console.log(fnCon);

// ----------------------------
// ----------------------------
// if() {} else {} 
// 채워넣기! 

var switchN = 1;
var data;
switch (switchN) {
  case 1:
    data = '마우스 왼버튼을 클릭하였습니다';
    break;
  case 2:
    data = '마우스 오른버튼을 클릭하였슴니다 ';
    break;
  case 3:
    data = '마우스 휠버튼을 클릭하였습니다';
    break;
  case 4:
    data = '마우스 측면버튼을 클릭하였습니다';
    break;
  default:
    data = '마우스 기타다른 버튼을 클릭하였습니다';
    break;
}

console.log(data);   // 마우스 왼버튼을 클릭하였습니다



// 반복문 
// if(){}else{}
// switch(){}
// for(){}  , for(in){} , [].forEach()
// function(){}

var launch = '돈까스';
if(launch === '짜장면'){
  console.log('짜장면먹으러 갑시다!');
}else if(launch === '볶음밥'){
  console.log('볶음밥먹으러 갑시다!');
}else if(launch === '삼겹살'){
  console.log('삼겹살먹으러 갑시다!');
}else{
  console.log(launch+' 먹겠습니다.');
}

var switchN = 5;
var data;
switch(switchN){
  case 1:
    data = '마우스 왼버튼을 클릭하였습니다.';
    break;
  case 2:
    data = '마우스 오른버튼을 클릭하였습니다.';
    break;
  case 3:
    data = '마우스 휠버튼을 클릭하였습니다.';
    break;
  case 4:
    data = '마우스 측면버튼을 클릭하였습니다.';
    break;
  default:
    data = '마우스 기타 다른버튼을 클릭하였습니다.';
    break;
}
console.log( data );

var arr2 = [1,2,4,3,5,6,8,3,5,9,10,20,50,26];
// for(최초; 비교; 증감){}
for(var j=0; j<10; j++){ // 10번 반복 수행
  console.log( 'j:', j, '-', arr2[j] );
}

// [].forEach(function(각요소하나씩, 순서){})
arr2.forEach(function(arg, idx){
  console.log(idx,':', arg, arr2[idx] );
});

// for(임의변수 in 객체){}
console.log( obj );
for(var k in obj){
  console.log( obj[k] );
}
// -----------------------------------

var an = [1,3,4];
var na = [1,3,4];
console.log( an === na ); // false
var n = 5;
var u = 5;
console.log( n === u ,'-------------------'); // true

for(var l=0; l<3; l+=1){
  console.log( an[l] === na[l] );
}

var nna = na;
console.log( nna === na );
// 주소를 참조하면 얕은 복사
// 값자체를 복사하면 깊은복사




// ----------------------------

// var buyMilk = function () {
//   var milk = 0;
//   var egg = true;
//   if(egg) {
//     milk+=6;
//   } 
//   return milk;
// };
// buyMilk();