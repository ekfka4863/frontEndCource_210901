// b_03_operation.js

// 사칙연산 ===============================================
var n = 10;
// 함수를 만들어서 기본 n의 값과, 적용할 변수의 값을 비교하는 함수를 만듬 -> nFn
var nFn = function(data) {
  console.log(n, data);
};
nFn();


var plus = n + 10;
nFn(plus);

var minus = n - 5;
nFn(minus);

var divide = parseInt(n / 3);
nFn(divide);

var multi = n * 6;
nFn(multi);

var remainder = n % 3;
nFn(remainder);

var nReset = n = n + 10;
// n + 10 (기존 10에 10을 더해서) -> 변수 n에 재할당 -> nReset에 값을 담곘다 
nFn(nReset);




// 할당 ===================================================
// 할당연산자: 자신의 값을 이용하여 대입처리하고자 할 때 사용한다 

// n;           // 20
n = n + 20;     // 40  
n = n + 100;    // 140  
nFn();          // 140 undefined 

// 하지만 개발자는 고로 중복된 코드를 싫어하는 법!!! 
// 그래서 ... "자신에게 값을 할당/연산하겠다 라는 의미로..." -> 할당 연산자
n += 60;       // n - n + 60;
nFn();         // 200 undefined 

n -= 10;       // n = n - 10;
nFn();         // 190 undefined 

n *= 2;       // n = n * 2;
nFn();         // 380 undefined 

n /= 9;       // n = n / 9;
nFn();         // 42.222222222222 undefined 

n = parseInt(n);      // 위의 소수점 정리해주기~

n %= 5;       // n = n % 5;   
nFn();         // 2 undefined 



// 증감연산자 =============================================
console.clear();
nFn();

n += 1;
nFn();

n++;     // 후치(=나중에 치환하겠다)/위: 결과 도출 후 1 더하기 
nFn();
nFn(n++);
nFn(n++);
nFn(n++);

++n;    // 전치/위: 1더하기 후 결과 도출
nFn();
nFn(++n);
nFn(++n);
nFn(++n);
nFn(++n);

//---------------------
console.clear();
var i = 5;
console.log(i);     // 5
i = i + 1;
console.log(i);     // 6
i += 1;
console.log(i);     // 7
++i;
console.log(i);     // 8
i++;
console.log(i);     // 9 

console.log(i++);     // 9 -> 변수 i의 값을 먼저 도출한 후 연산 1을 더한다 
console.log(i++);     // 10 
console.log(i);       // 11

console.log(++i);     // 12 -> 변수 i의 값을 먼저 연산한 후에 도출한다 
console.log(++i);     // 13
console.log(i);       // 13

// 다만, 위 전치/후치의 계산 차이는 실무에서는 큰 차이는 없다!
// (왜??) 실무작업에서는 정확한 값을 도출 후 작업을 진행하는 것을 권장하기에 ...
// 하지만 우리의 일상과 비교한다면, it's like ... 한국식 나이계산과 미국식 나이계산의 차이와 같은 격이다! 
//---------------------

n = n + 1;
n += 1;
n++;
++n;
nFn('-------------------------');

n = n -1;
n -= 1;
nFn();
n--;
// nFn(n--);
--n;
// nFn(--n);
// nFn();

// 비교연산자 =============================================
n = 20; 
nFn( i );    // 20  13

var compare = n === i;    // compare에 n === i; 가 참인지 거짓인지를 비교해서 compare에 할당해준다
console.log(compare);
compare = n !== i;        
console.log(compare);     // !== 같지 않은가? -> true

compare = n < i;          // 20 < 13 -> false
console.log(compare);     // false
compare = n <= i;          // 20 <= 13 -> false
console.log(compare);     // false

compare = n > i;          // 20 > 13 -> true
console.log(compare);     // false
compare = n >= i;          // 20 >= 13 -> true
console.log(compare);     // false


//  or(||),  and(&&)
// || 둘 중 하나이상 참이면 true
var compare2 = true || true; 
console.log(compare2);          // true
var compare2 = true || false; 
console.log(compare2);          // true
var compare2 = false || true; 
console.log(compare2);          // true
var compare2 = false || false; 
console.log(compare2);          // false


// && 둘 중 하나라도 거짓이면 false
var compare2 = true && true; 
console.log(compare2);          // true
var compare2 = true && false; 
console.log(compare2);          // false
var compare2 = false && true; 
console.log(compare2);          // false
var compare2 = false && false; 
console.log(compare2);          // false

// BUT...
// ||, && 비교연산자는 좌변과 우변을 비교하여, true/false를 찾아내는 기법 
// 한쪽이 완전한 충족을 하면 다른 쪽은 비교하지 않는다!
// 단, 하나의 비교연산자(|, &) 사용시 결과는 0, 1로 도출 
// 📍 TIP!!!!!! 조금이라도 빠른 연산을 위해... 
//    - ||은 true가 나오기 쉽거나 우선시되는 내용을 좌변에 배치 
//    - &&는 false가 나오기 쉽거나 우선이 되는 내용을 좌변에 배치
var compare3 = true | false; 
console.log(compare3);          // 1
var compare3 = true & false; 
console.log(compare3);          // 0
var compare3 = true & true; 
console.log('|, & 하나짜리로 비교', compare3);          // -> 하나짜리 논리연산자는 쓰이기는 간혹 쓰여도 느리다! 그래서 잘 안쓰임... (cf. switch문이랑 사용될 수 있음! 간편하고 빠르게 2개의 단순한 값을 도출해야 할 경우... 사용가능!)

// cf. 
// !의 의미는 부정(반대)
console.log('체크 1:', !!true, !true);
console.log('체크 2:', 2, !!1, !1, !!0, !0);
console.log('체크 3:', !!-1);

//----------------------------
var checkFn = function(data) {
  // var d = data | 'no Data!';     // 해석: 앞에 있는 data 값이 없으면 뒤에있는 값을 넣어라!
  var d = data || 'no Data!';     // 해석: 앞에 있는 data 값이 없으면 뒤에있는 값을 넣어라!
  return console.log(d);
};

// 최신 문법 
// var checkFn = function(data = '??') {
//   return console.log(data);
// };

// checkFn(10);    // 0 -> 위에서 var d = data | 'no Data!'; 일 때...
checkFn(10);       // no Data!
checkFn();         // undefined


console.clear();

// 삼항연산자 =============================================
// 참/거짓에 수행하는 내용은 무조건 1줄에 3항으로 이루어져 있어야 한다. 그래서 세미콜론 ; 은 맨 마지막에 붙인다.
// 구조->  (첫 번쨰 항) : 두 번째 항 : 세 번째 항;
// (조건) ? 조건결과가 참이면 실행 : 결과가 거짓이s면 실행;
// e.g. 
(true) ? console.log('결과 참!!') : console.log('결과 거짓!!');
// (!true) ? console.log('결과 참!!') : console.log('결과 거짓!!');
// (!!true) ? console.log('결과 참!!') : console.log('결과 거짓!!');


// e.g.2 
var list = []; 
var trueFn = function() {
  list = ['note', 'laptop', 'mouse', 'git'];
  return list;
};

var falseFn = function() {
  list = ['wallet', 'glasses', 'smartphone'];
  return list;
};

// 백팩을 들고 다닌다면 ? : ;
// (1true) ? console.log(trueFn()): console.log(falseFn());
(!true) ? trueFn(): falseFn();
console.log(list);

console.clear();

// --------------------------------
// e.g.3
// 당신이 개발자라면 프론트와 백엔드 분야중 어느쪽인가요? 
// 프론트엔드 분야에서 익혀야하는 언어 []; 안에
// 백엔드 분야에서 익혀야하는 언어/기술 []; 안에 넣는 ... 3항 연산자로 도출해라 

var prLang = [];

var frontEndFn = function() {
  prLang = ['html', 'css', 'javascript', 'jquery', 'react', 'git', 'typescript'];
  // console.log(prLang);
  return prLang;
};
var backEndFn = function() {
  prLang = ['html', 'sql', 'c#', '.net', 'java', 'spring', 'python', 'django', 'javascript', 'node.js', 'git'];
  // console.log(prLang);
  return prLang;
};



// 함수 programmer
var programmer = function(field) {
  var data = field === 'front';     // filed자리에 e.g.'front', 'back', 'design', 등을 넣으면 ... === 연산자를 통해 true/false를 data에 할당해준다.
  var data2 = field === 'back'; 

  // cf.
  // 조건?
  //   (참) : // 참에 관련된 내용 작성 
  //   (조건 ? 참 : 거짓);  // 거짓에 관련된 내용에서 다시 조건 비교

  (data)?       // 위의 data에서 field값에 뭐가 오냐에 따라 true/false가 이 자리에 올 것. 이에 따라 삼항 연산자 실행...
    frontEndFn() : 
    (data2) ? backEndFn(): prLang = [];    // 초깃화
};

programmer('front');
// programmer('back');
// programmer('design');
// programmer('000');

console.log(prLang);     // 출력을 해야지 ... 눈에 보이는 것!



