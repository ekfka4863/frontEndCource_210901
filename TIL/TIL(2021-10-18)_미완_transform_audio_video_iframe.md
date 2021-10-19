---
date: 2021-10-18-Monday
---

# TIL
- 📝 오늘 배운 내용 ✏️ : 
  - [x] `transform`이란? 
    - [https://github.com/ekfka4863/TIL/blob/master/CSS%26SASS%26Bootstrap/CSS/CSS_transform_%EB%AF%B8%EC%99%84.md]

  <img src="./images/" alt="transform 연습하기" width="400px" height="350px" style="padding-left: 40px;"/>
  <br />

  - [x] transform을 활용한 `카드 뒤집기 애니메이션 효과`
<!-- 여기 -->
  - [x] `video`, `audio`, `iframe`
    - video: mp4, ogg, ogv(음성을 뺀 영상), webM        
    ```html
    <!-- 사용 방법 -->
    ```
    - audio: mp3, ogg(비디오, 오디오 둘 다 가능)
    ```html
    ```
    - iframe: 외부의 문서를 불러와서 삽입하는 코드 (facebook, twitterm instagram, youtube, etc.)
    ```html
    ```
<!-- 여기 -->

  - [x] **저작권** 관련하여...       
    - 오디오나 비디오는 단순하게 그냥 `free audio/video`라고 해서 맘대로 쓰는게 아니고, 
    출처를 밝히거나 해서 라이센스에 위배되지 않게 사용하는 것이 중요하다.        
    또한, 오디오나 비디오는 파일 포맷에도 신경을 써야한다.      
    - `mp3`은 MS사의 오디오 파일이라 저작권에 걸린다.      
    (cf. 비용 발생)
    - `acc`는 또 A사(cf. 🍎사)꺼...     
    - 그래서 오디오를 보통은 `wav` 또는 `ogg`라는 웹에서 동작하는 오디오 파일 포맷으로 바꿔서 사용하는데, 
    변환시에는 e.g. [오디오 변환 사이트](https://convertio.co/kr/)를 활용하면 된다.             
    단, 이때, `wav`로 변환하면 오디오는 오히려 파일 용량이 늘어나버린다.          
    그래서, 📍 <u>팁</u> 📍!                
    <i>일단, <b>ogg</b>로 변환한다.               
    하지만 <del>오디오와 비디오 둘 다 지원하는 파일 포맷인</del> ogg는 몇몇 사이트에서 약간의 제약이 있다.   
    그러면 그떄는 <b>webm</b>으로 변환한다.         
    </i>            
    <br />
    (cf.       
    `webm`은 "왜 확장자까지 돈을 받아?!"라고 하는 프로젝트에서 시작.     
    IE ~~(Edge는 10에 와서 webm의 지원을 추가함)~~와 safari는 지원을 안하는 파일 포맷이다.        
    참고로 safari에서는 ~~mp3는 되지만~~ ogg도 지원되지 않는다.        
    단, mp4는 모든 브라우저 지원.         
    ~~그렇기 때문에~~ mp3, mp4가 라이센스 비용이 발생한다고 해서 아예 안 쓸순 없다.                       
    위에서 말한 지원 유무를 확인하고 가장 적합한 파일 확장자를 사용할 필요가 있다는 점 참고!)        
    (cf. [OGV, OGG, OGA 파일이란 무엇이며 다른 형식으로 변환하는 방법](https://ko.echoshare.co/open-and-convert-ogv-ogg-oga/) 참고!)
    <br />

  - [x] `overflow(-x || -y): visible || hidden || scroll || auto || inherit`
    - 요소의 박스에 콘텐츠가 넘칠 때 표현방법을 지정한다.    
    - 기본값은 visible이고, 넘치는 콘텐츠를 자르지 않고 요소의 박스를 넘어 표시한다.     
    hidden은 넘치는 콘텐츠를 자르고 보이지 않게 한다.      
    scroll은 넘치는 콘텐츠를 자르지만 스크롤바를 표시한다.      
    auto도 scroll과 마찬가지로 넘치면 콘텐츠를 자르지만 스크롤바가 표시된다.     
    inherit은 부모 요소로부터 값을 상속받게하는 속성이다.          
    - 기본 문법 (CSS):      
    ```css
      div {
          width: 150px; 
          height: 150px;
          overflow: scroll; 
      }
    ```
    - 기본 문법 (JS):       
    ```javascript
      object.style.overflow = "scroll";
    ```

  - [x] `backface-visibility: visible || hidden || initial || inherit`
    - 한국어로 하면 `이면 가시성`이라고 하기도 하는 이 속성은...      
      요소의 뒷쪽에서 앞면이 보이게 할지 정하는 속성이다.      
      (cf. 3D transform(변형) 속성과 연관되어 있으며, 입체적인 모습의 뒷면의 가시성을 결정한다.)
    - 기본값 visible은 뒷쪽에 가시성을 줘서 앞면이 보이게 한다.      
    hidden은 기본값의 반대의 역할로 보이지 않게 한다.         
    기본적으로 해당 속성을 상속되지 않는다. 상속을 원한다면 inherit을 속성값으로 넣어준다.    
  - 기본 문법 (CSS):      
  ```css
    div {
      -webkit-backface-visibility: hidden; /* Chrome, Safari, Opera */ 
      backface-visibility: hidden;
    }
  ```
  - 기본 문법 (JS):       
  ```javascript
    object.style.backfaceVisibility = "hidden";
  ```







 





<!-- - `카드 뒤집기 애니메이션` 
  - 📍 <u>TIP</u> 📍         
  ```css 
    👉
  ```    -->


<br /> 
<br />

## HW
- [x] 💻 빽다방 반응형 웹사이트 서브페이지 총 5개
  - 스케치 
  - figma로 프로토타입 만들기

<br /> 
<br />

---

<details>
<summary>CLICK ME!</summary>  

- cf.  
  - https://webdir.tistory.com/431
  - https://www.codingfactory.net/10971
  - https://developer.mozilla.org/ko/docs/Web/CSS/backface-visibility
  - https://developer.mozilla.org/ko/docs/Web/CSS/overflow
  - https://webdir.tistory.com/347
  - https://ko.echoshare.co/open-and-convert-ogv-ogg-oga/
  - https://xeneo.tistory.com/80
  - 
  - 
  - 

</detials>   -->

 -->

