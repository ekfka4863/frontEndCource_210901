---
date: 2021-11-08-Monday
---

# TIL
- 📝 오늘 배운 내용 ✏️ : 
  - [x] JS `사칙연산` 복습 
  - [x] `연산자 (operator)` 
    - **할당 연산자**: 
    - **증감 연산자**:
    - **비교 연산자**: 
    - **삼항 연산자**: 

<br />
<br />

### 자바스크립트 데이터 타입 (총 7가지)
<br />
<!-- <img src="./images/js_data_types.png" alt="JS 7개의 데이터 타입" width="500px" style="padding-left: 20px;" /> -->
<br />
<br />

### 사칙연산 (함수로 구현)
<br />

> 함수 선언 
- 기본 문법 

  ```js
  // 함수 선언식 (cf. 기명함수) 
    function testFn() {
      // code
    }

  // 함수 표현식 (cf. 익명함수) 
    var testFn = function() {
      // code
    };
  ``` 
- 사칙연산 함수로 구현 
  ```js 
    // 사칙연산
    var sum = function (a, b) {
      var result = a + b;
      return a + ' + ' + b + ' = ' + result;
    };
    var minus = function (a, b) {
      var result = a - b;
      return a + ' - ' + b + ' = ' + result;
    };
    var mul = function (a, b) {
      var result = a * b;
      return a + ' * ' + b + ' = '  + result;
    };
    var divide = function (a, b) {
      var result = parseInt(a / b);
      return a + ' / ' + b + ' = ' + result;
    };
    var avg = function (a, b) {
      var result = a + b / 2;
      return a + ' + ' + b + ' / 2 = ' + result;
    };
    var remainder = function (a, b) {
      var result = a % b;
      return a + ' % ' + b + ' = ' + result;
    };

    var a = 10;
    var b = 5;

    sum(a, b);          // 덧셈: 'a + b = ' 값
    minus(a, b);        // 뺄셈: 'a - b = ' 값
    mul(a, b);          // 곱셈: 'a * b = ' 값
    divide(a, b);       // 나눗셈: 'a / b = ' 값   -> 정수값만 도출 
    avg(a, b);          // 평균: 'a * b / 2 = ' 값
    remainder(a, b);    // 나머지: 'a % b = ' 값

    // ------------------------------------------------------------
    // 응용 ver.
    a = parseInt(Math.random() * 100) + 1;    // 1 ~ 100 사이의 수 중 랜덤 
    b = parseInt(Math.random() * 100) + 1;    // 1 ~ 100 사이의 수 중 랜덤

    sum(a, b);          // 덧셈: 'a + b = ' 값
    minus(a, b);        // 뺄셈: 'a - b = ' 값
    mul(a, b);          // 곱셈: 'a * b = ' 값
    divide(a, b);       // 나눗셈: 'a / b = ' 값   -> 정수값만 도출 
    avg(a, b);          // 평균: 'a * b / 2 = ' 값
    remainder(a, b);    // 나머지: 'a % b = ' 값
  ```

<br />
<br />

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - ✨ Only 선생님's 강의 ✨
  - https://choseongho93.tistory.com/99
  - https://im-developer.tistory.com/57
  - https://velog.io/@nathan29849/JAVA-%EC%A6%9D%EA%B0%90-%EC%97%B0%EC%82%B0%EC%9E%90-%EC%A0%84%EC%B9%98-%ED%9B%84%EC%B9%98
  - https://velog.io/@iamhayoung/JavaScript-%EC%A6%9D%EA%B0%90-%EC%97%B0%EC%82%B0%EC%9E%90-Feat.-%EC%A0%84%EC%9C%84-%EC%97%B0%EC%82%B0%EC%9E%90-%ED%9B%84%EC%9C%84-%EC%97%B0%EC%82%B0%EC%9E%90

</detials>   

