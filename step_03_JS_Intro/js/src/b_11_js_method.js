// b_11_js_method.js


// 배열 메소드는 배열 형식을 이용하여 처리하는 다양한 기능을 가진 함수
// 일부는 배열 메소드가 아닌 것도 존재(property, 다른 곳에서도 사용가능한 범용)

// 

var array = ['maker', 'remote', 'pen'];

console.log(array.length);  // 3 -> .length 뒤에 () 가 없으니까 메소드는 아님 

var text = 'javascript';
console.log(text.length);   // 10 


var obj = {
  'maker': 'dog', 
  'dogdog': 'duck'
};
// console.log(obj.length);  // 문제 -> 이건 안됨!!
// 객체 길이 알아내는 방법 - 1
var n = 0;
for (var i in obj) {
  n++;
}
console.log(n);

// 객체 길이 알아내는 방법 - 2
// console.log(Object.keys(obj));   // [ 'maker', 'dogdog' ]
console.log(Object.keys(obj).length);


console.clear();
// ---------------------------------
var array = ['maker', 'remote', 'pen'];


array.push('mouse');
array.unshift('monitor');  // [ 'monitor', 'maker', 'remote', 'pen', 'mouse' ]
console.log(array);

array.shift();
array.pop();
console.log(array);   // [ 'maker', 'remote', 'pen' ]

// var joinText = array.join('');
// var joinText = array.join(' ');
var joinText = array.join('-');
console.log(joinText);   // maker-remote-pen

var splitText = joinText.split('-');
console.log(splitText);   // [ 'maker', 'remote', 'pen' ]

array.forEach(function(data, idx) {
  console.log(data);
});

splitText.reverse();   // 배열의 목록을 뒤집기 
console.log(splitText);

splitText.sort();     // 배열의 목록을 순서대로 재배치
console.log(splitText);


// --------------
// indexOf 내부에 값을 입력하여, 동일한 값이 존재하면, 그 중 첫번쨰가 위치한 것을 
// 파악하여 위치 인덱스를 반환한다 
var array = ['maker', 'remote', 'pen'];
var indexCk = array.indexOf('pen');
// 만약 해당 요소가 없다면 -1을 반환. 그 값이 배열 내에 없다는 뜻. 

console.log(array);
console.log(indexCk);


var replaceArr = array.splice(1, 0, 'cam', 'mug', 'chaerger');
// 해석: 첫 번째 매개변수 - 의 인덱스부터 시작
//       두 번째 매개변수 - 만큼 삭제하고 
//       뒤에 오는 매개변수들을 배열의 값으로 넣어준다 
console.log(array);   // [ 'maker', 'cam', 'mug', 'chaerger', 'remote', 'pen' ]


// 정리
/* 배열의 .. 
앞에 값 추가 - unshift(추가할 값);
중간에 값 추가 - splice(시작인덱스, 삭제할만큼의 값의 갯수, 추가할 값(들));
뒤에 값 추가 - push(추가할 값);

앞에 값 삭제 -shift();
중간에 값 삭제 - splice(시작인덱스, 삭제할만큼의 값의 갯수);
뒤에 값 삭제 - pop();
*/

// ----------------
// array와 array2의 값을 각각 하나의 배열로 합쳐서 처리
var array = ['maker', 'remote', 'pen'];
var array2 = ['desktop', 'tablet', 'smartphone'];
var conArray = array.concat(array2);  
console.log(conArray);


// 응용:
array.splice(0, 0, array2);
array.flat();
// ----------------


var arrayN = [10, 5, 2, 50, 80, 90, 200];

// 방법 1
var sum = 0;
arrayN.forEach(function(d) {
  sum += d;
});
console.log(sum);

// 방법 2 - reduce (배열을 순환하면서 연산도 같이 진행해 줄 때 사용하는 메서드)
var sum = arrayN.reduce(function(a, b) {
  console.log(a, b);   // cf. (a, b) = (이미 코드대로 수행/계산된) 현재의 값, 다음에 더할 값
  return a + b;
});
console.log(sum);

// 방법 2 - 응용
var sum = arrayN.reduce((a, b) => a + b);
console.log(sum);



console.clear();
// ---------------------------------

// filter
// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
// [].filter(function(){ return ;}) -> 반환된 값을 저장하여 값을 처리하는 형태 ... 

var nList = [1, 2, 3, 4, 5, 6, 7];
var filterList = [];

// 방법 1
nList.forEach(function(d, i) {
  if (d > 4) {
    filterList.push(d);
  }
});
console.log('filterList: ', filterList);  // filterList:  [ 5, 6, 7 ]


// 방법 2 - filter 
var filterList = nList.filter(function(d, i, k) {
  // console.log(d, i, k);   // data, index, array 순서
  if (d > 4) {
    return d;
  }
});
console.log(filterList);           // [ 5, 6, 7 ]


// 방법 2 - 응용
var filterList = nList.filter((num) => num > 4);
console.log(filterList);           // [ 5, 6, 7 ]

// 방법 2 - 응용: 중복된 이름을 강제로 삭제할 떄 사용 




// cf. https://7942yongdae.tistory.com/48