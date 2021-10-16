---
date: 2021-10-15-Friday
---

# TIL

- 📝 오늘 배운 내용 ✏️ : 
  - [x] `background` 속성으로 이미지 삽입하기 
    - `<img/>` 태그로 이미지를 삽입할 수 있다.       
    이미지 태그는 글자처럼 인식이 되는 인라인 요소이다.     
    추후에 JS로 내용을 변경하기 쉽다는 장점이 있다.         
    - css에는 background라는 속성이 있다.     
    이 속성은 배경처리를 위한 속성이기 때문에 ~~이미지 태그와는 다르게~~ 글씨, 내용 첨부 등을 JS로 변경하기 조금 복잡할 수 있다.          
    - background 속성의 종류는 **background-image, background-repeat, background-position, background-size**가 있다.     
    - 위의 모든 속성들은 background 하나로 축약표현이 가능하다.  
    ```css 
      background-image: url("../images/example.png"); 
      background-repeat: repeat || no-repeat || ...; 
      background-position: 0 0 || center || right || left || ...; 
      background-size: initial || cover || contain  || ...; 

      /* 축약표현 */
      background: url("../images/example.png") no-repeat center;
    ```

  <br />

  - [x] 이미지를 삽입하기 위해 사용하는 기술    
    - **IR(Image Replacement) 기법**
    - **IS(Image Sprites) 기법**
    - [요약정리본](https://github.com/ekfka4863/TIL/blob/master/CSS%26SASS%26Bootstrap/CSS/CSS_Image_Replacement.md) 클릭! 
      
  <br />

  - [x] `shadow` 속성  
    - 📍 `box-shadow: ;`
      <details>
      <summary>CLICK ME!</summary>

      ```html
        <div class="part box">
          <h2>상자에 그림자 주기</h2>
          <div class="box_shadow_01">box_shadow_01</div>
          <div class="box_shadow_02">box_shadow_02</div>
          <div class="box_shadow_03">box_shadow_03</div>
          <div class="box_shadow_04">box_shadow_04</div>
          <div class="star">box_shadow_05</div>
        </div>
      ```

      ```css 
        /* 상자에 그림자 주기 */
        .box > div {
          width: 350px;
          height: 200px;
          margin: 30px;
          text-align: center;
          line-height: 200px;
          background-color: #ddd;
        }
        .box_shadow_01 {
          /* 그림자 만드는 방법 - 기본 방법 (흐릿처리 포함)
          box-shadow: x-좌표 y-좌표 blur color; */
          box-shadow: 5px 5px 5px #077;
        }
        .box_shadow_02 {
          /* 그림자 만드는 방법 - 번짐 효과
          box-shadow: x-좌표 y-좌표 blur offset color; */
          /* box-shadow: 0 0 0 10px #077; */
          box-shadow: 0 0 5px 10px #077;
        }
        .box_shadow_03 {
          /* 그림자 만드는 방법 - 안으로 그림자 
          box-shadow: inset x-좌표 y-좌표 blur color; */
          /* box-shadow: 0 0 0 10px #077; */
          box-shadow: inset 5px 5px 0 #077;
          /* box-shadow: 5px 5px 0 #077 inset; */
        }
        .box_shadow_04 {
          /* 그림자 만드는 방법 - 그림자 중첩
          box-shadow: x-좌표 y-좌표 blur color; */
          box-shadow: 0 0 10px #fff,
                      -5px -5px 5px #555,
                      10px 10px 3px #adf,
                      inset 0 0 5px #333;
        }


        /* 그림자 효과를 사용해서 애니메이션을 적용한 배경으로 활용하기*/
        .box .star {
          width: 3px;
          height: 3px;
          background-color: #daa;
          /* 응용) 배경으로 활용... */
          box-shadow: 15px 15px 0 3px #0af,
                      50px 80px 0 5px #f06,
                      140px 300px #fa0,
                      -40px -20px #ddf,
                      -200px -400px #171717;

          position: fixed;
          animation: star 5000ms normal infinite ease-in;
        }

        /* animation */
        @keyframes star {
          0% {
            top: -100px;
            right: -200px;
            opacity: 0.8;
          }
          100% {
            top: 100%;
            right: 100%;
            opacity: 0;
          }
        }
      ```
      </details>

    - 📍 `text-shadow: ;`

      <details>
      <summary>CLICK ME!</summary>

       ```html
        <div class="part text">$
          <h2>글씨에 그림자 주기</h2>
          <div class="text_shadow_01">글자에 그림자 주기</div>
          <div class="text_shadow_02">글자에 그림자 주기</div>
          <div class="text_shadow_03">글자에 그림자 주기</div>
        </div>
      ```

      ```css 
        /* 글씨에 그림자 주기 */
        .text > div {
          width: 100%;
          min-width: 400px;
          height: 150px;
          margin-bottom: 10px;
          font-size: 48px;
          font-weight: 700;
          text-align: center;
          background-color: #ddd;
        }

        .text_shadow_01 {
          /* 글쓰에 그림자주기 
          text-shadow: x-좌표 Y-좌표 blur color; */
          text-shadow: 5px 5px 5px #777;
        }
        .text_shadow_02 {
          text-shadow: 5px 5px #47a,
                        10px 7px #fa0;
          color: rgba(255, 255, 255, 0.5);
        }
        .text_shadow_03 {
          /*  */
          background-image: url("../../images/background/pumpkins.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent; 
          font-size: 5rem;
        }
      ```
      </details>

    - 📍 `filter: drop-shadow();`

      <details>
      <summary>CLICK ME!</summary>

       ```html
        <div class="part image">
          <h2>이미지에 그림자 주기</h2>
          <div class="img_shadow_01"></div>
          <div class="img_shadow_02"></div>
          <div class="img_shadow_03"></div>
          <div class="img_shadow_04"></div>
        </div>
      ```

      ```css 
      /* 이미지에 그림자 주기 */
      .image > div {
        float: left;

        width: 200px;
        height: 200px;
        margin: 50px;
        border-radius: 100%;
        /* background-color: #ccc; */
        background-image: url("../../images/icons/arrow.svg");
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: 50% 50%
      }
      .img_shadow_01 {
        box-shadow: 5px 5px 5px #333;
      }
      .img_shadow_02 {
        /* 이미지 자체에 그림자가 생기는 것! 
        하지만 익스플로러 11도 안먹고, 구형에서는
        더더욱 적용 안돼다는 점... */
        /* filter: drop-shadow(5px 5px 5px #444); */
        /* 마이너스 값도 먹힘 */
        filter: drop-shadow(-5px -5px 5px #444);
        /* 여러개 적용 안됌! */
        filter: drop-shadow(-5px -5px 5px #444, 5px 5px 5px #eae);
      }
      .img_shadow_03 {
        filter: blur(10px);
      }
      /* 응용 */
      .img_shadow_03:hover {
        filter: blur(0) grayscale(0);
        transition: all 200ms linear;
      }
      .img_shadow_04 {
        /* filter: grayscale(30%); */
        /* filter: blur(2px) grayscale(50%); */
        filter: hue-rotate(180deg);
      }
      ```

      </details>
      

  <br />

  - [x] git에서 `branch` 새로 파는 cli 명령어              
    - 📍 새로운 브랜치를 생성할 때 👉 `git branch [새로운 브랜치 이름]`
    - 📍 방금 생성한 브랜치로 이동할 때 👉 `git checkout [새로운 브랜치 이름]`
    - 📍 브랜치를 삭제할 때 👉 `git branch -d [브랜치 이름]`

<br />  
<br />

## HW
- [x] 💻 빽다방 반응형 웹사이트 프로토타입 (메인페이지랑 서브페이지) figma로 더 develop ⌨️    

<br />

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - ✨ 선생님's 강의 ✨
  - https://backlog.com/git-tutorial/kr/stepup/stepup2_2.html
  - [IR - & IS 기법 요약 정리본](https://www.google.com/search?q=image+sprite+method&newwindow=1&hl=ko&source=hp&ei=EsNqYZ_2CILr9APNjZzoCg&iflsig=ALs-wAMAAAAAYWrRIt2uZnZ4BGH3foHYAcMQI0fE_wYI&oq=image+sprite+method&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCCEQoAEyBQghEKABOgsIABCABBCxAxCDAToICAAQgAQQsQM6BQgAEIAEOgoIABCABBCxAxAKOgcIABAeEIsDOgkIABAKEB4QiwM6BAgAEB46BggAEAoQHjoECAAQEzoGCAAQHhATOggIABAFEB4QEzoICAAQCBAeEBM6BggAEAgQHlDaxdMGWKD80wZgoIHUBmgBcAB4AIABqQGIAaYNkgEEMi4xM5gBAKABAbgBAg&sclient=gws-wiz)
</detials>   

