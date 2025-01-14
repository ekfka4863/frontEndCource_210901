---
date: 2021-11-18-Thursday
---

# TIL
- 📝 오늘 배운 내용 ✏️ : 
  - [x] `nodejs` 예시 - 명령어 
    - `npm init -y` 
    - `npm install -D sass` 
    - `npm install -D babel babel-cli` 
    - `npm install -D react react-cli react-dev` 
    - `npm i jquery`
    - `npm i jqueryui`
    - `npm i browser-sync`
    - `browser-sync start --server --files --watch "*.*"`
    - `npm run dev`
  - [x] `nodejs` 예시 - `package.json`에서 명령어 단축해서 만들기      
    ```json
     // package.json

      {
        "name": "test",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "dev": "sass --watch scss:css && browser-sync start --server --files --watch \"*.*\""
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "devDependencies": {
          "babel": "^6.23.0",
          "babel-cli": "^6.26.0",
          "react": "^17.0.2",
          "react-cli": "^0.3.1",
          "react-dev": "0.0.1",
          "sass": "^1.43.4"
        },
        "dependencies": {
          "browser-sync": "^2.27.7",
          "jquery": "^3.6.0",
          "jqueryui": "^1.11.1"
        }
      }
    ```
  - [x] `nodejs` 예시 - `.gitignore`로 `node_modules` 깃허브에 안 올라가게 설정    
    e.g.   

    ```
      node_modules/
    ```

  <br />

  - [x] `naming convention` 리마인드 
    - 네이밍 컨벤션이란? 
      - 프로그래밍을 하다보면 다양한 식별자가 등장한다. 해당 식별자들이 양이 많아지고 복잡성이 비대해지면서,
      우리는 식별자의 "성질"에 따라 식별자 명칭을 정하는데 규칙을 세우게 되었고, 이러한 "식별자의 성질에 따라 명칭에 규칙을 세우는 것"을 
      **네이밍 컨벤션**이라고 부른다.     
      한국어로는 **명명 규칙, 명명 규약** 이라고 생각하면 되겠다.     
    - 네이밍 컨벤션의 장점: 
      - 가독성 (legibility) 
      - 효율성 (efficiency)
      - <u>결론</u>: 협업시 통일성 있는 네이밍 컨벤션에 맞게 작성된 식별자/코드는 사후 다른 사람이 해당 코드를 작성 하지 않았어도 코드의 이해를 용이하게 하여
      유지 보수의 능률과 편의성을 향상 시킬수 있다.    
    - 네이밍 컨벤션의 예시:
      - `camelCase`:        
      낙타등 모양에서 따온 방법.        
      첫 단어는 소문자, 두번째 단어부터 대문자로 사용.     
      단어와 단어 사이는 모두 연결.
      - `snake_case`:      
      뱀의 모습을 따온 네이밍 컨벤션.     
      단어와 단어 사이를 언더바를 사용하여 띄워서 표기.     
      - `kebab-case`:       
      케밥이 꼬챙이에 꽂혀있는 모습에서 따온 방법.     
      모든 단어가 소문자로 시작, 단어와 단어 사이는 `-`로 연결.          
      - `PascalCase`:        
      첫 단어부터 각 단어의 시작 알파벳을 대문자로 작성하는 방법.      
      단어와 단어 사이는 모두 연결.    
   
  <br />
  <br />

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - ✨ Only 선생님's 강의 ✨
  - https://hoonesden.tech/posts/namingconvetion/

</detials>   

