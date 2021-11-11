// b_07_js_conditional_statement3.js


// ------------------------------------
// e.g. 
// var rel = true;
var rel = false;

if (rel) {
  // 조건이 참인 경우에 수행 
  console.log('값은 참입니다.');
} else {
  // 조건이 거짓인 경우에 수행 
  console.log('정답은 거짓입니다.');
}

console.clear();


// ------------------------------------
// e.g. 2
var count = 10;

if (count <= 5) {
  console.log('숫자는 5이하 입니다.');
} else if (count > 10) {
  console.log('숫자는 10보다 큽니다.');
} else {
  console.log('숫자는 5보다 크고 10보다 작거나 같은 수입니다.');
}


console.clear();

// ------------------------------------
// e.g. 2 - 한줄일때는 생략가능!
var count = 10;

if (count <= 5) console.log('숫자는 5이하 입니다.');
else if (count > 10) console.log('숫자는 10보다 큽니다.');
else console.log('숫자는 5보다 크고 10보다 작거나 같은 수입니다.');


console.clear();

// ------------------------------------
// e.g. 3
// var count2 = '?';
var count2 = 30;

if (count2 >= 10) {
  console.log('10보다 큰수');     // 참이 되는 조건을 찾으면 해당 조건문 자체를 빠져나간다 
} else if (count2 > 20) {
  console.log('20보다 큰수');
} else {
  console.log('다른수');
}


console.clear();

// ------------------------------------
// e.g. 4
// 문제: 100이하의 숫자를 입력하면, 결과는 001 ~ 100의 결과를 나오게 하시오. 

// 내꺼 - 정답 컨펌받음 
var num = Math.floor(Math.random() * 100) + 1;   // 1 ~ 100 사이의 수

// if (num >= 10 && num < 100) {   // 10 ~ 99
//   console.log('0' + num);
// } else {
//   console.log('00' + num);
// }

if(num < 10) {
  console.log('00' + num);   
} else if (num >= 10 && num < 99) {
  console.log('0' + num);   
} else {    // num = 100;
  console.log(num);
}

console.clear(); 


// 쌤꺼 
var n = Math.floor(Math.random() * 100) + 1;
// var n = 10;  
// var n = -10;
// var n = -1;
var num; 

if (n > 0) {         // 만약 음수일수도 있으니까 다른 if 문으로 양수일 경우와 음수일 경우를 나누자!

  if (n < 10) {
    n = '00' + n;
    console.log(n);
  } else if (n < 100) {
    n = '0' + n;
    console.log(n);
  } else {
    num = n;
    console.log(num);
  }

} else {
  num = '양수로 작성하세요.';
  console.log(n + '  --->  ' + num);
}

console.clear(); 


// ----------------------------------------
// 쌤꺼 - 2
var n = Math.floor(Math.random() * 100) + 1;
console.log(n);      // 68
var nn = '0000000000' + n;
console.log(nn);    // 000000000068
var cut = nn.slice(-3);
var num2 = cut;
console.log(num2);    // 068


console.clear(); 

// ----------------------------------------
// 쌤꺼 - 3
var n = Math.floor(Math.random() * 100) + 1;   
var parS = n.toString();
// cf. 숫자를 문자열로 만드는 4가지 방법 ->  https://hianna.tistory.com/491
var nn = parS.padStart(10, '0');
var cut = nn.slice(-3);
var num2 = cut;
console.log(num2);       // 043


console.clear(); 

// ----------------------------------------
// e.g. 5

// 중첩함수 
// 원하는 값 -> n * n / 2
var a = function(n) {       // 4가 들어오면 ... 
  var b = function(i) {     
    var c = function(j) {
      var result = j * j / 2;

      return result;
    };// c

    var result2 = c(i);
    return result2;

    c(i);
  };// b

  var result3 = b(n);
  return result3;

  b(n);      // b는 바깥 함수인 a에게 n을 받고 ... 
};

a(4);   // n에 자리로 4가 들어가고 ... 


console.clear(); 

// --------------------------------------
// 응용 
// 원하는 값 -> ((n + n) / 2) + 5
var a = function(n) {      
  var b = function(i) {     
    var c = function(j) {
      var result = j + j;    // 괄호 1 안 내용만 따로 -> e.g. 원청 업체

      return result;
    };// c

    var result2 = c(i) / 2;   // 괄호 2 안 내용만 따로 -> e.g. 하청 업체 
    return result2;

  };// b

  var result3 = b(n) + 5;     // + 5 만 따로  -> e.g. 하청의 하청 업체 
  return result3;
    
};

console.log(a(4));

/*
즉, 
함수 a호출 -> b호출 -> c호출 -> c해결 -> b해결 -> a해결 -> 결과도출 
함수를 작성하는 기법 
  1. 하나의 기능은 하나의 함수 
  2. 해당하는 함수가 내부처리 / 외부에서 별도로 호출하는 것과 구분하기 
- 여러개의 함수에서 하나의 기능을 자주 사용하면 : 외부함수 
- 하나의 함수에서 
- 
- 
*/

console.clear(); 

// --------------------------------------
// 응용 - 2
// 원하는 값 -> ((n + n) / 2) + 5
// 클로저 -> 아예 외부에서의 접근을 막아 버리는 형식으로 함수 작성 

var aFn = function(n) {       // 순서 1. 4가 함수 aFn의 매개변수 n자리로 들어옴

  return (function (i) {       // 순서 2. 매개변수 n자리로 왔던 4가 들어간다 

    return (function (j) {
      var result = j + j; 
      return result;          
    })(i) / 2;

  })(n) + 5;

};

console.log(aFn(4));    // 순서 0. 4가 함수 aFn의 매개변수 n자리로 들어간다 

// 왜 이렇게? 즉시실행함수로 클로저?? -> 이유??
// 이유: 1. 외부에서 접근 못하게 변수/메모리에 담지 않고 그냥 계산만 딱!
// 이유: 2. 이유 1의 이유떄문에 ... 속도가 빠르다!



// --------------------------------------
// 응용 - 3: 근데 즉시실행 함수 말고 걍 함수로도 리턴 가능! 
// 원하는 값 -> ((n + n) / 2) + 5
// 클로저 -> 아예 외부에서의 접근을 막아 버리는 형식으로 함수 작성 

var aFn = function(n) {         // n에 4가 들어가고 

  return function (i) {         // n에 들어간 4가 i에 들어가서 

    return function (j) {       // n에 들어갔다 i에 들어간 4가 j에 들간다 
      var result = j + j;       // 이때부터 계산 시작. result라는 변수를 선언한 뒤, 4 + 4 = 8;을 할당
      return result;            // 계산된 result를 함수 몸체 바깥으로 반환을 해줘야지 ... 값을 확인할 수 있다. 
    } / 2;                      // return해라 j값인 8 / 2인 값을  ... -> 4

  } + 5;                        // 가장 안쪽에 위치한 함수를 통해 리턴된 값이 4 니까 ... 거기다 + 5하면... -> 9

};

console.log(aFn(4));    //  답 : 9




console.clear();

// --------------------------------------
// 중요!!!!
// 나홀로 다시 연습 
// 원래 함수 - 3중 중첩 함수였음 

// step - 1: 일단 함수 3개 만들기 
var aFn = function(n) {};
var bFn = function(i) {};
var cFn = function(j) {};


// step - 2: 함수 3개 중첩 시키기 
var aFn = function(n) {

  var bFn = function(i) {

    var cFn = function(j) {

    };

  };

};


// step - 3: 우리가 원하는 값 -> ((n + n) / 2) + 5
// 조심! 가장 안쪽에 중첩되어 있는 함수부터 바깥 방향으로 순차적으로 계산이 진행된다는 점 유의! 
// 팁! 그래서 가장 먼저 해야하는 계산을 가장 안쪽에 배치 ...!
var aFn = function(n) {      // 순서2) 여기서 n의 자리로 온 4는 ... 
  var result3 = n + 5; 

  var bFn = function(i) {    // 순서3) i로 가고 ... 
    var result2 = i / 2;

    var cFn = function(j) {  // 순서4) n에 있다가 i로 갔다가 j로 온 숫자 4는 ... 함수 cFn으로 와서 j + j, 즉 4 + 4 = 8;을 계산하여 지역변수 result 에 할당
      var result = j + j;    

      return result;     // 순서5) 여기서 반환되는 result 값은 ... 8. 이 값은 aFn 바깥에 있는 함수 bFn의 매개변수 i자리로 들어간다  
    };
    
    return result2;     // 순서6) 여기서 반환되는 result2 값은 ... 아까 함수 aFn에서 받은 값 8 / 2한 값이다. 즉, result2 = 4;  이 값은 함수 bFn 바깥에 있는 함수인 cFn의 매개변수 n의 자리로 간다 ... 
  };

  return result3;      // 순서7) 여기서 반환되는 result3은 ... 아까 함수 bFn에서 반환된 result2의 값인 4가 함수 aFn의 매개변수 n의 자리로 가서 ... 
                       // 위의 var result3 = n + 5; 라는 식을 거쳐 4 + 5 = 9; 라는 값이 되어 반환된다   
};

console.log(aFn(4));   // 순서1) 여기서 매개변수 n 자리로 들어간 4는 함수 aFn의 n의 자리로 들어간다
                       // 순서8) 그래서 console.log(aFn(4)); 에서 나온 값은 순서 1 ~ 7) 을 거쳐 "가공된" 9 이다 




// step - 4: 응용 
// 함수를 부를 때 형식 -> 함수명(외부/부모로부터 받은 매개변수); 
var aFn = function(n) {      
  var bFn = function(i) {     
    var cFn = function(j) {
      var result = j + j;   

      return result;
    };// cFn

    var result2 = cFn(i) / 2;   // 함수를 부를 때 형식 -> 함수명(외부/부모로부터 받은 매개변수); -> 그래서 부모의 매개변수가 괄호 () 안에 들어간 것 
    return result2;

    // cFn(i);
  };// bFn

  var result3 = bFn(n) + 5;     // 함수를 부를 때 형식 -> 함수명(외부/부모로부터 받은 매개변수); -> 그래서 부모의 매개변수가 괄호 () 안에 들어간 것 
  return result3;

  // bFn(n);      
};

console.log(aFn(4));           // 답 : 9 




// step - 5: 위와 같은 함수의 중첩을 즉시실행함수로도 구현할 수 있다 
var aFn = function(n) {      

  // 바깥 쪽 즉시실행함수
  return (function(i) {     

    // 가장 안쪽 즉시실행함수
    return (function(j) {         // 다른점: 함수 표현식이었는데 변수가 없고, 또 리턴문으로 함수 자체를 리턴/반환한다 
      var result = j + j;    
      return result;              // 가장 내부에서 계산된 값인 result를 반환해줘야지 바깥에서도 값을 확인할 수 있다.
    })(i) / 2; // 8 / 2 = 4      // 다른점: 함수를 호출하는 것처럼 함수명(부모의매개변수); 를 생각! 그래서 즉시실행 함수의 (function(){} (여기서 i 가 온 것!))
                                 // return 따로, (function(j) {var result = j + j;})(i) 따로, / 2;를 따로 봐야한다. 그리고 중간의 (function(j) {var result = j + j;})(i) 부분은 함수를 호출했다는 의미! 그래서 그에 따른 값을 반환할 것이다

  })(n) + 5;   // 4 + 5 = 9

};

console.log(aFn(4));



// 다시 .... 
// 클로저 
var aFn = function(n) {      

  // 즉시 실행 함수 
  return (function(i) {     
    return (function(j) {
      var result = j + j;   
      return result;
    })(i) / 2;// cFn

  })(n) + 5;// bFn

};

console.log(aFn(4));           