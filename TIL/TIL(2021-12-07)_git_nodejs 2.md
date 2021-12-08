---
date: 2021-12-07-Tuesday
---

# TIL
- 📝 오늘 배운 내용 ✏️ : 
  - [x] `git` 사용하는 이유 
    - 협업 및 버전 관리 
      - 시점마다 버전별로 코드를 갖고 있기 때문에 문제 발생시 해당 시점으로 변경/되돌아가기 가능 
  - [x] `git`명령어 
    - `git clone "주소"`: 깃 repository에서 자료를 받아서 사용
    - `git status`: 현재 작성중인 디렉토리 기준 깃 상태 파악 
    - `git config --global user.name "John Doe"`: 깃을 설치하고 나서 가장 먼저 해야하는 것은 사용자 이름과 이메일 주소를 설정하는 것
    - `git config --global user.email johndoe@example.com`: 이메일 주소 최초 설정
    - 이때!!     
    만약 전역으로 설정한 사용자 정보를 삭제해야 할 때는 ...
      - `git config --global --unset user.name`        
      - `git config --global --unset user.email`        
    로 사용할 수 있다.  
    - `git init`: ~~디렉토리를 생성(mkdir)하고 해당 디렉토리로 이동(cd)해서~~ 깃 최초 설정 
    - `git add .`: **.**을 적으면 모든 파일을 올리겠단 의미고, 올리고 싶은 디렉토리와 파일만 적어줘도 된다
    - `git commit -m "커밋메세지"`: 커밋하는 파일에 대한 정보를 간략하게 설명한다 
    - `git push`: 깃으로 보내준다 
    - `git pull`: 깃에 이미 올라가 있는 파일과 현재 올리려고 하는 파일 간에 충돌이 일어났을 때 깃에 있는 파일을 받아온다 
    - `git reset HEAD^`: 전단계로 넘어가기. `ctrl + z`와 같은 역할.      
    만약 몇단계 더 전으로 가고 싶으면 `HEAD~단계갯수`로 명령어를 변경해준다.     
    - `git revert`: 커밋 내용을 되돌린다.    
    다만 reset이랑 다른점은 아예 취소를 하는 것이 아니고, 변경해야 될 부분만 끌고와서 수정하는 기능이다.       

  <br />
  - [x] `nodejs`란? 
    - Node.js는 Chrome V8 Javascript 엔진으로 빌드된 Javascript **런타임**이다.     
    (cf. 런타임 = 프로그래밍 언어가 구동되는 환경)
    - 과거에는 자바스크립트 런타임이 브라우저 밖에서는 존재할 수 없었으나, Node.js는 그런 한계점을 보완해주었다.    

<br />
<br />

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - https://www.lainyzine.com/ko/article/how-to-set-git-repository-username-and-email/
  - https://www.lainyzine.com/ko/article/git-reset-and-git-revert-and-git-commit-amend/
  - https://flyingsquirrel.medium.com/git-rebase-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-ce6816fa859d
  - https://velog.io/@kimkevin90/Nodejs-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0Nodejs-%EB%9E%80
  - https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174371/package-json
  - https://points.tistory.com/92
  - https://steemit.com/javascript/@codingapple/babel-es6-es5

</details>   

