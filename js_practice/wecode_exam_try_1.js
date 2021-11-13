// 날짜: 2021-11-12-금


// ================================================
// 문제 1번:  짝수인지 판별하는 함수 `isEven`을 작성해주세요
var isEven = function(num) {
  if(num % 2 === 0) {
    console.log("짝수 입니다.");
  } else {
    console.log("짝수가 아닙니다.");
  }
};

console.log(isEven(10));
console.log(isEven(11));


// ================================================
// 문제 2번:  
/*
`calculateTotal` 함수를 작성하세요.

팁과 세금을 제외한 식사값이 주어졌을때, 
`calculateTotal` 함수는 팁과 세금이 포함된 총 식사값을 반환합니다.

Notes:
- 세금은 9.5% 팁은 15% 로 계산하세요.
- 팁을 계산할때 세금을 포함하여 계산하지 마세요.
*/



// var wrongValue = 20;
// var recalculatedPrice =  + tax + tip;
var recalculatedPrice;
var tax;
var tip;

var calculateTotal = function(wrongValue) {
  tax = wrongValue / 100 * 9.5;
  tip = wrongValue / 100 * 15;

  return recalculatedPrice = wrongValue + tax + tip;
};

console.log(calculateTotal(20));        // 24.9



// ================================================
// 문제 3번:  
/*
`getPrefix` 함수를 작성하세요.

문자열이 주어졌을때, `-`를 기준으로 앞에 있는 문자열을 반환하세요.
*/

var getPrefix = function(strJoinedWithBar) {
  var tmp;
  var tmpArr;

  tmpArr = strJoinedWithBar.split('-');
  tmp = tmpArr[0];

  return tmp;
};

console.log(getPrefix("BTC-KRW"));        // BTC


// ================================================
// 문제 4번:  
/*
`getFind` 함수를 작성하세요.

문자와 문자열이 주어졌을때,
`getFind` 함수는 주어진 문자열에서 주어진 문자가 나타나는 첫번째 위치를 반환합니다.

**Notes:**
문자열의 첫번째 문자는 인덱스 값 `0` 을 가집니다.
만약 문자열에 해당 문자가 여러번 나타나면, 첫번째로 나타나는 위치를 반환해야 합니다.
만약 문자가 문자열에 존재하지 않는다면, `-1` 을 반환해야 합니다.

**중요!!**
`indexOf` 함수를 사용하지 마세요.
*/

// 고전적인 방법 
var index; 
var getFind = function(word, sentence) {
  var sentenceArr = sentence.split(' ');

  var i = 0;

  sentenceArr.forEach( wordPerIndex => {
    if(wordPerIndex === word) {
      index = i;
    }
    i++;
  });

  return index;
};


const output = getFind("a", "I am a hacker");
console.log(output);      // 2



// ------------------------------
// 약간 쉽게 메서드를 사용한 방법 
var index; 
var getFind = function(word, sentence) {
  var sentenceArr = sentence.split(' ');

  return sentenceArr.findIndex(word);
};

const output = getFind("a", "I am a hacker");
console.log(output);      // 2



// ================================================
// 문제 5번: 
/*
`find_longest_word` 함수를 만들어 주세요.

주어진 리스트안에 있는 단어중 가장 긴 단어를 찾을수 있도록 함수를 완성해주세요.

```js
console.log(find_longest_word(["PHP", "Exercises", "Backend"]));
// --> "Exercises"
```
*/

let find_longest_word = function(array) {
  let maxLength = Number.MIN_SAFE_INTEGER;
  let index = -1;
  let arrLength = [];   

  array.forEach(word => {
    arrLength.push(word.length);
  });

  arrLength.forEach(length => {
    if (length > maxLength) {           // arrLength = [3, 9, 7]
      maxLength = length;
      index++; 
    }
  });

    return array[index];
};


console.log(find_longest_word(["PHP", "Exercises", "Backend"]));   // "Exercises"
