/*
Assignment:
  index.js에 있는 가위 바위 보 게임 함수를 아래 조건에 맞게 구현해주세요.
  rockPaperScissors 함수를 구현해서 가위 바위 보 게임을 구현해주세요.
    - 요구사항 1: 가능하면 || 와 && 연산자 둘다 사용해주세요.   (cf. 단축평가?!)
    - 요구사항 2: player1과 player2 중 이긴 사람이 누군지 리턴해주세요. (cf. 변수 2개 -> player1, player2)
      - 예를 들어, player1이 이겼으면 "player1" 이 리턴(cf. return문) 되고, 
      - 그 반대의 경우라면 "player2"가 리턴이 되어야 합니다.
      - 만일 비기는 경우에는 무조건 "player1"이 리턴 되어야 합니다.
  힌트: player1 과 player2 의 값은 다음 셋 중 하나 입니다.
    -> "가위", "바위", "보"   (cf. 배열)
    -> 예를 들어, player1은 "가위" 이고 player2는 "보" 이면 "player1" 이 리턴 되어야 합니다.
*/

// anti-pattern/실수! 
// var player1 = '';
// var player2 = '';
// var options = ["가위", "바위", "보"]; 

// var randomNum = Math.floor(Math.random() * 3);  // 0 ~ 2 까지의 수중 랜덤  
// console.log(options[randomNum], options[randomNum], options[randomNum]);   // 가위 가위 가위 


var player1;
var player2;

// 가위바위보 함수 구현
var rockPaperScissors = function (player1, player2) {
  var winner = ''; 
  
  var options = ["가위", "바위", "보"]; 
  var randomNum1 = Math.floor(Math.random() * 3);  // 0 ~ 2 까지의 수중 랜덤  
  var randomNum2 = Math.floor(Math.random() * 3);  // 0 ~ 2 까지의 수중 랜덤  
  
  player1 = options[randomNum1];
  player2 = options[randomNum2];
  
  // console.log(player1, player2);

  /*
  경우의 수: player1이 이기려면... palyer2가 ... 
  player1이... 가위 일때 -> player2가 보
  player1이... 바위 일때 -> player2가 가위
  player1이... 보 일때 -> player2가 바위 여야한다...
  */  

  if ( (player1 === "가위" && player2 === "보") 
    || (player1 === "바위" && player2 === "가위") 
    || (player1 === "보" && player2 === "바위") ) {
    winner = player1 + '를 낸 player1이 이겼습니다!!';
  } else if (player1 === player2) {
    // 무승부
    winner = `player1은 ${player1}을, player2는 ${player2}를 내어 무승부로 처리됩니다!`;
  } else {
    winner = player2 + '를 낸 player1이 이겼습니다!!';
  };


  return winner;
};

rockPaperScissors(player1, player2);



// -----------------------------------------------------------
// 응용 ver.
var player1;
var player2;

var rockPaperScissors = function (player1, player2) {
  var winner = ''; 
  
  // 가위바위보 함수 구현
  var options = ["✌🏻", "👊🏻", "✋🏻"]; 
  var randomNum1 = Math.floor(Math.random() * 3);  // 0 ~ 2 까지의 수중 랜덤  
  var randomNum2 = Math.floor(Math.random() * 3);  // 0 ~ 2 까지의 수중 랜덤  
  
  player1 = options[randomNum1];
  player2 = options[randomNum2];
  
  // console.log(player1, player2);

  /*
  경우의 수: player1이 이기려면... palyer2가 ... 
  player1이... 가위 일때 -> player2가 보
  player1이... 바위 일때 -> player2가 가위
  player1이... 보 일때 -> player2가 바위 여야한다...
  */  

  if ( (player1 === "✌🏻" && player2 === "✋🏻") 
    || (player1 === "👊🏻" && player2 === "✌🏻") 
    || (player1 === "✋🏻" && player2 === "👊🏻") ) {
    winner = `player1: ${player1}, player2: ${player2} ➡️➡️➡️➡️➡️ player1 승!!`;
  } else if (player1 === player2) {
    // 무승부
    winner = `player1: ${player1}, player2: ${player2} ➡️➡️➡️➡️➡️ 무승부!!`;
  } else {
    winner = `player1: ${player1}, player2: ${player2} ➡️➡️➡️➡️➡️ player2 승!!`;
  };


  return winner;
};

rockPaperScissors(player1, player2);


// -----------------------------------------------------------
// 응용 ver.2.

var player1, player2;

var rockPaperScissors = ((player1, player2) => {
  var winner = ''; 
  
  // 가위바위보 함수 구현
  var options = ["✌🏻", "👊🏻", "✋🏻"]; 
  var randomNum1 = Math.floor(Math.random() * 3);  // 0 ~ 2 까지의 수중 랜덤  
  var randomNum2 = Math.floor(Math.random() * 3);  // 0 ~ 2 까지의 수중 랜덤  
  
  player1 = options[randomNum1];
  player2 = options[randomNum2];

  if ( (player1 === "✌🏻" && player2 === "✋🏻") 
      || (player1 === "👊🏻" && player2 === "✌🏻") 
      || (player1 === "✋🏻" && player2 === "👊🏻") ) {
    winner = `player1: ${player1}, player2: ${player2} ➡️➡️➡️➡️➡️ player1 승!!`;
  } else if (player1 === player2) {
    // 무승부
    winner = `player1: ${player1}, player2: ${player2} ➡️➡️➡️➡️➡️ 무승부!!`;
  } else {
    winner = `player1: ${player1}, player2: ${player2} ➡️➡️➡️➡️➡️ player2 승!!`;
  };

  return winner;
}); 

rockPaperScissors(player1, player2);


function func(player1, player2) {       // 매개변수
  let result; 

  if (조건) {
    // result = ;
    // 결과를 도출하는 식
  } else if (조건2) {
    // result = ;
    // 결과를 도출하는 식 2
  } else {
    // result = ;
    // 위의 조건1, 2가 모두 false일 때 실행
  }

  return result;        // 값을 리턴
}

func(player1, player2);                 // 함수 호출시 인자를 넘긴다





// -----------------------------------------------------------
/* 
Assignment 1: 함수 halfNumber를 선언하고 구현하세요.
  1. 숫자로 된 인자 하나를 받습니다.
  2. 받은 값을 2로 나눈 결과를 리턴합니다.
  3. 매개변수 이름은 마음대로 정해서 사용합니다.
*/

function halfNumber(divisionNumber) {
  return divisionNumber / 2;
}




/* 
Assignment 2: 함수 halfAndAddNumber를 선언하고 구현하세요.
  1. 숫자로 된 인자 하나를 받습니다.
  2. 1번 문제에서 만들었던 halfNumber를 호출하면서, 인자로 받았던 값을
    다시 halfNumber 함수에 전달해줍니다.
  3. halfNumber의 리턴결과를 함수 안쪽에서 변수명 result에 정의합니다.
  4. result에 1을 더한 값을 리턴합니다.
*/

// 임의의 숫자 지정
let num = 10;

const halfAndAddNumber = function(num) {
  let result = halfNumber(num) + 1;

  return result;
};

halfAndAddNumber(num);      

// -----------------------------------------------------------
// test! 함수 내에 함수 넣는 가장 깔금한 방법! (feat. 마이 뇌피셜!ㅎㅎ)
let a = 1;
let b = 2;

function addFn(a, b) {
  let result;
  
  // 내부 로직
  result = a + b + addInnerFn(a);
  
  return result;
}

function addInnerFn(a) {
  // 내부로직
  result2 = a + 10; 
  
  return result2;
}

addFn(a, b);

// -----------------------------------------------------------







