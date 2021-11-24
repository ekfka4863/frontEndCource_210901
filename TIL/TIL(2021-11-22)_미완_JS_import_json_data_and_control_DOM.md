---
date: 2021-11-22-Monday
---

# TIL
- 📝 오늘 배운 내용 ✏️ : 
  - [x] `유사배열객체를 배열로 강제 변환`             
  (feat. **prototype**)           
    <details>
      <summary>CLICK ME TO SEE AN EXAMPLE!</summary>

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

    </details>      

  <br />

  - [x] `call` & `apply` & `bind`의 사용방법 및 차이점      
    <details>
      <summary>CLICK ME TO SEE AN EXAMPLE!</summary>

      <img src="./images/call_apply_bind.png" width="700px" height="" style="padding-left: px;" />

    </details>      
  - [x] `jQuery` cdn 방식으로 불러오는 방법 
    - [jQuery cdn script 연결 방법 퍼오기 링크](https://code.jquery.com/) 클릭! 

  <br />
  <br />





https://7942yongdae.tistory.com/67
https://curryyou.tistory.com/340
https://itprogramming119.tistory.com/entry/Jquery-22-ajax-%EB%A9%94%EC%86%8C%EB%93%9C
http://tcpschool.com/ajax/ajax_header_request
https://teserre.tistory.com/7
https://codingsquirrel.tistory.com/5
https://tpgns.github.io/2018/04/08/javaScript-factory-function-with-es6/
https://velog.io/@sae1013/JS-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EA%B0%9D%EC%B2%B4%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B2%83
http://tcpschool.com/ajax/ajax_advance_docType
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=qbxlvnf11&logNo=220877806711
https://ichi.pro/ko/jseseo-ibenteu-haendeulleowa-addeventlistenerui-chaijeom-eun-mueos-ibnikka-165150920301620
https://poiemaweb.com/js-event
https://velog.io/@eunjin/JavaScript-fetch-%ED%95%A8%EC%88%98-%EC%93%B0%EB%8A%94-%EB%B2%95-fetch-%ED%95%A8%EC%88%98%EB%A1%9C-HTTP-%EC%9A%94%EC%B2%AD%ED%95%98%EB%8A%94-%EB%B2%95
https://poiemaweb.com/js-event


https://goddino.tistory.com/71
https://mjmjmj98.tistory.com/25
https://araikuma.tistory.com/640


https://hianna.tistory.com/483
https://codingnuri.com/javascript-tutorial/changing-style-and-css-using-html-dom.html
https://coding-restaurant.tistory.com/212







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

</detials>   

