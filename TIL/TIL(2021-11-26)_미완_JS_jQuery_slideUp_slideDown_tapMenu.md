---
date: 2021-11-26-Friday
---

# TIL
- 📝 오늘 배운 내용 ✏️ : 
  - [x] `tab menu` 구현하기 using jQuery        
  <details>
    <summary>CLICK ME TO SEE CODES!</summary>

    ```html
    ```
    <br />

    ```scss
    ```
    <br />

    ```css
    ```
    <br />

    ```js
    ```
    <br />

  </details>
  <br />
  - [x] jQuery 사용할 때 `(function($) {})(jQuery)`를 사용하는 이유/ 역할     
    - 일단, 원래 jQuery를 사용하기 위한 기본 문법이 있다       
    ```js
      $document.ready(function() {}); 
    ```
    - 원래 모든 jQuery는 위의 코딩으로부터 시작된다.       
    위의 표현은 순수 자바스크립트로 하자면 `document.onload()`와 같은 표현이라고 생각하고, 
    해석은 `html 문서가 로딩이 되면...`이라고 이해하면 된다. 
    - 하지만 위의 코드말고 우리는 jQuery 코드를 좀 더 줄여서 
      - `$(function(){})` 라고도 표현한다.       
      또한, 위의 shorthand를 즉시실행함수(cf. IIFE, Immediately Invoked Function Expression)
      로 바꿔서 
      - `(function(){})($)`    
      또는     
      - `(function($){})()` 처럼 사용 할 수도 있다.      
      이때, 즉시 호출함수로 jQuery 코딩의 시작을 알리는 코드를 작성하는 이유는 
      다른 프로그래밍 언어에서는 달러사인($)이 다른 의미로 사용되기도 하고 브라우저에서는 여러개의 자바스크립트 파일들에 있는 글로벌 변수들이 존재하는데, 이런 이유때문에 IIFE로 제이쿼리가 실행되는 범위(scope)를 분리(isolate)하여 안전하게 선택자를 혼돈하지 않고 변수 사용/코드를 컴파일할 수 있게 해주는 것이다.      



<br />
<br />

- 📝 오늘 복습할 내용 ✏️ : 
  - [x] `timer` 복습             

  <!-- https://okky.kr/article/279353 -->


  ```js      
  ```
  <img src="./images/" width="400px" height="" style="" />   

  <br />

  - [x] ``    
    - 연습문제 보기    
    <img src="./images/" width="400px" height="" style="" />   
    - 코드 보기         

      <details>
        <summary>CLICK ME TO SEE HTML CODE!</summary>

        ```js
        ```

      </details>


<br />
<br />

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - ✨ Only 선생님's 강의 ✨
  - about:blank
  - https://www.quora.com/What-does-dollar-sign-mean-in-programming
  - https://theqoop.tistory.com/295
  - https://www.computerhope.com/jargon/d/dollarsign.htm
  - https://stackoverflow.com/questions/41809631/jquery-function-vs-function
  - 
  
</detials>   

