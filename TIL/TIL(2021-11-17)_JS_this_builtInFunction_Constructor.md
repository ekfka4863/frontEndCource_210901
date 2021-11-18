---
date: 2021-11-17-Wednesday
---

# TIL
- 📝 오늘 배운 내용 ✏️ : 
  - [x] `내장함수`의 정의와 생성자함수와 원시함수와의 관계 (cf. 인스턴스)

    ```js
      // 내장함수/메서드/빌트인 전역 함수 (cf. vs 빌트인 전역 프로퍼티)
      /* 내장함수는 이미 만들어진 함수들을 의미한다. 
         이는 프로그램 전역에서 직접적으로 홀출할 수 있는 빌트인 함수로서 전역 객체의 메서드다. 
           e.g. console.log(), alert(), parseInt(), encodeURI(), decodeURI(), ...
      */

      // 원시함수 
      /* -> JS를 구성하는 함수, js의 형타입을 (근본적으로) 구성하게 하는 최소한의/이미되어져 있는 세팅이라고 볼 수 있다. 
         -> 생성자 함수이자 내장함수이다. 
            단!!! 내장함수라고 하기에는 있는 그대로 사용할 수 없다. 
              e.g. Number(), String(), Boolean(), Date(), Function(), Object(), Array(), ...
      */


      // 생성자 함수 
      /* -> 유사한 객체를 만들어낼때 효율적으로 중복되는 코드 없이, 
            여러개의 객체들을 만들어 내기 위해 필요한 함수 
            like) 붕어빵 틀
        특징 1: 생성자 함수는 대문자로 시작한다
        특징 2: 생성자함수로 객체를 만들때는.. 즉, 인스턴스를 생성할 떄는 new 연산자를 사용해야 한다
        특징 3: 생성자 함수 내에 this를 사용
           e.g.
            function Person(name, age) {     // 생성자 함수 (cf. 객체의 추상화 - 붕어빵틀과 붕어빵들)   
              this.name = name; 
              this.age = age; 
            }
      */

      // 인스턴스 
      /* -> 생성자 함수로 생성된 객체들 
            like) 슈크림이 들어간, 팥이 들어간 … 붕어빵들
            e.g. 
              var dr = new Person('daram', 26);  // {name: 'daram', age : 26} -> 인스턴스 
              var ys = new Person('young', 28);
      */
    ```

  - [x] `this`의 정의~~와 this 바인딩 case by case~~ 
    - `this`의 정의: **this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는** <u>자기 참조 변수 (self-referencing variable)</u>
    **다.      
    this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.** 
    - 📍 _this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다._      
    - this가 가리키는 값     

      |**함수 호출 방식**|**this가 가리키는 값**(cf. this 바인딩)|
      |:--:|:--:|
      |일반 함수로서 호출|전역 객체 (cf. 브라우저/window)|
      |메서드로서 호출|메서드를 호출한 객체 (tip! 마침표 앞의 객체)|
      |생성자 함수로서 호출|생성자 함수가 (미래에) 생성할 인스턴스|

  - [x] `scss` 문법  
    - `@if`
    - `list`와 `map`으로 변수 생성 및 할당 👉 코드에 `map-get()`와 `nth()` 함수를 사용하여 적용 

    <br />
    <br />

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - ✨ Only 선생님's 강의 ✨
  - https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval
  - https://www.codingfactory.net/11024
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this
  - https://poiemaweb.com/js-this
  - https://heropy.blog/2018/01/31/sass/

</detials>   

