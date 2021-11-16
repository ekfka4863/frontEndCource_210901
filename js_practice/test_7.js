// test_7.js

var array = ['maker', 'remote', 'pen'];
console.log(array.length);  // 3 -> .length 뒤에 () 가 없으니까 메소드는 아님 

var text = 'javascript';
console.log(text.length);   // 10 



var obj = {
  'maker': 'dog', 
  'dog1': 'duck1',
  'dog2': 'duck2',
  'dog3': 'duck3'
};


// 고전적인 방법 - 1
var count = 0;

// 목표: 객체의 길이를 알고싶다. 
// 그러면 객체의 프로퍼티의 수 만큼 순회를 하기 위해 .. for in문을 사용.
// 근데, 객체의 길이를 표기할 변수가 필요하다. 그래서 count를 생성을 하고 
// 초깃값으로 0을 할당을 한 것. 
for (var key in obj) {
  count++;
}

console.log(count);  // 4



// 방법 - 2
console.log(Object.keys(obj).length);   // 4
// Object.values(obj);







var array = ['maker', 'remote', 'pen'];

var array2 =  array.join('');
var array2 =  array2.split('');

console.log(array2);
// [
//   'm', 'a', 'k', 'e',
//   'r', 'r', 'e', 'm',
//   'o', 't', 'e', 'p',
//   'e', 'n'
// ]


array2.sort();       // 알파벳 순으로 배열 내부 요소를 나열시켜주는 메서드 
array2.reverse();   // 원본 배열의 순서를 뒤집는 메서드 

array2.sort().reverse();     // 알파벳 역순으로 ...
// [
//   't', 'r', 'r', 'p',
//   'o', 'n', 'm', 'm',
//   'k', 'e', 'e', 'e',
//   'e', 'a'
// ]








var arrayN = [10, 5, 2, 50, 80, 90, 200];

var sum = arrayN.reduce(function (a, b) {
  return a + b;
});
console.log(sum);




var arrayN = [10, 5, 2, 50, 80, 90, 200];
var sum = arrayN.reduce((a, b) => a + b);
console.log(sum);





// 배열.filter(function() {return ;});
var nList = [1, 2, 3, 4, 5, 6, 7];
var filterList = nList.filter(function(data) {

  // 만약에 data가 4보다 크면 
  if(data > 4) {
    // data를 filter 메서드의 리턴값으로 반환해라 
    return data;
  } 
});




var filterList = nList.filter((data) => data > 4 );
console.log(filterList);