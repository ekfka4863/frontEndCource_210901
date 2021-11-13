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
