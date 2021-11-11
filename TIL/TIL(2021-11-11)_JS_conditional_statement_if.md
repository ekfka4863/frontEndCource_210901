---
date: 2021-11-11-Tursday
---

# TIL
- 📝 오늘 배운 내용 ✏️ : 
  - [x] `if 조건문` 
    - 기본 문법       
    ```js
      if (조건1) {
        // 조건1이 참일 때 수행하는 명령문
      } else if (조건2) {
        // 조건2이 참일 때 수행하는 명령문
      } else {
        // 위의 조건1, 2가 거짓일 때 수행하는 명령문
      }
    ``` 
    - 1 ~ 100 사이의 숫자를 항상 3자리의 숫자로 출력하기       
    ```js
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
    ``` 
  - [X] 숫자를 문자열로 만드는 4가지 방법 
    - [참고 사이트 바로가기 클릭!](https://hianna.tistory.com/491)
  - [X] 클로저 예시 
    <img src="./images/closure_code.png" alt="즉시실행함수로 클로저 구현. 클로저를 통해 외부에 정보 노출을 방지할 수 있고, 클로저는 바로 값만 계산하여 (메모리 할당 없이) 값만을 리턴하기 때문에 속도가 일반 함수보다 빠르다고 한다." width="px" height="px" style="padding-left: px;" /> 
  - [x] 맥북에서 여러개의 파일 이름 한번에 변경하는 방법 
    - [참고 사이트 바로가기 클릭!](https://archivers.tistory.com/55)

<br />
<br />

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - ✨ Only 선생님's 강의 ✨
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else
  - https://hianna.tistory.com/4
  - https://www.daleseo.com/js-key-events/ 

</detials>   

