var dicList = [];
// dicList내부에 계산한 값을 히스토리처럼 저장!!

/*
dicList.push('a');
dicList.push('b');
dicList.push('c');
dicList.push('d');
dicList.push('e');
console.log(dicList);
*/

var fn1 = function (data) {
  dicList.push(data);    // 배열에 담는 역할
  return data;           // fn1이란 함수를 통해 실제로 만들어진 값(을 반환)
};

fn1 = function (a, b) {
  var c = a + b;
  var result = a + ' + ' + b + ' = ' + c;

  dicList.push(result);    // 배열에 담는 역할
  return c;                // fn1이란 함수를 통해 실제로 만들어진 값 -> 함수 실행시 결과값 반환
};

fn1('button');
fn1('link');
fn1('anker');
fn1('div');
fn1('section');
console.log(dicList);






