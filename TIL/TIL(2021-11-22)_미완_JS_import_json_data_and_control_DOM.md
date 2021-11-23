---
date: 2021-11-22-Monday
---

# TIL
- 📝 오늘 배운 내용 ✏️ : 
  - [x] `유사배열객체를 배열로 강제 변환`       (feat. **prototype**)           
  
  ```html
    <body>
      <!-- layout -->

      <ul>
        <li>list_01</li>
        <li>list_02</li>
        <li>list_03</li>
        <li>list_04</li>
        <li>list_05</li>
      </ul>

    </body>
  ```       
   
  ```js
    var ul = document.querySelector('ul');  
    var list = ul.children;
    console.log(list);   
    // HTMLCollection(5) [li, li, li, li, li]
    // HTMLCollection -> forEach 사용 불가 
    // 해결 방법 -> 유사 배열을 배열로 만들어준다 
    
    var arr = Array.prototype.slice.apply(list);
    console.log(arr);   // [li, li, li, li, li]
    console.log(Array.isArray(arr));  // true

    // 이제 아래와 같이 배열 메서드 사용 가능!! 
    arr.forEach(function(element) {
      console.log(element);
    }); 
  ```

  <br />

  - [x] `call` & `apply`의 차이점 
     - `call`은 
     - 반면, `apply`은         
  - [x] `jQuery` cdn 방식으로 불러오는 방법 
    - [jQuery cdn script 연결 방법 퍼오기 링크](https://code.jquery.com/) 클릭! 
  - [x] `jQuery` 문법 
    - `append()`       
      - 기능:      
      vanilla js의 createElemnet와 append의 기능을 동시에/ 복합적으로 사용할 수 있는 jQuery의 기능이다       
      - 문법 기본 형태:      
      ```js     
        $("선택자").append("추가할요소");
      ```

    - `eq()`  
      - 기능:      
      선택한 요소의 인덱스 번호에 해당하는 요소를 찾는다 
      - 문법 기본 형태:        
      ```js 
        $("선택자").eq("숫자");
      ```

    - `text()`  
      - 기능:      
      ~~~~~~
      - 문법 기본 형태:        
      ```js 
        $("선택자").text();
      ```
  <!-- https://www.codingfactory.net/10327 -->
    -
    -
    -
  
<!-- 
   https://www.notion.so/TIL-2021-09-01-bac05ebd79b7431aa8de08eba2eeb912
     -->
    
    
    <br />
    <br />

  <!-- ```js
  ``` -->

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - ✨ Only 선생님's 강의 ✨
  - https://www.zerocho.com/category/JavaScript/post/5af6f9e707d77a001bb579d2
  - [유사배열객체를 배열로 바꾸는 방법](https://wookkk.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9C%A0%EC%82%AC-%EB%B0%B0%EC%97%B4%EC%9D%84-%EB%B0%B0%EC%97%B4%EB%A1%9C-%EB%B0%94%EA%BE%B8%EA%B8%B0)
  - https://beomy.tistory.com/4
  - https://aljjabaegi.tistory.com/524
  - https://velog.io/@canonmj/%ED%95%A8%EC%88%98%EC%99%80-%EB%A9%94%EC%84%9C%EB%93%9C%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%8A%94-object-%EC%8B%AC%ED%99%94%EC%9D%B4%ED%95%B4
  - https://beomy.tistory.com/4
  - [jQuery - eq() 메서드](https://webzz.tistory.com/90)      
  - [jQuery - append() 메서드](https://www.codingfactory.net/10170)      
  - 

</detials>   

