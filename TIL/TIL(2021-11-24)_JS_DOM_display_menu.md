---
date: 2021-11-22-Monday
---

# TIL
- 📝 오늘 배운 내용 ✏️ : 
  - [x] `SCSS 문법으로 header 만들기 연습`    
    - 연습문제 보기    
    <img src="./images/dom_open_menu.gif" width="600px" height="" style="" />   
    - 코드 보기         

      <details>
        <summary>CLICK ME TO SEE HTML CODE!</summary>

        ```html
          <!-- layout -->
          <div id="wrap">
            <header id="headBox">
              <h1><a href="./a_content.html">site name</a></h1>
              <nav class="nav_area">
                <h2 class="blind">navigation</h2>
                <!-- nav 버튼 -->
                <div class="navi_btn">
                  <button type="button">menu</button>
                </div>
                <!-- nav 버튼 -->
                <div class="navi_inner">
                  <div class="global_part">
                    <h3 class="blind">global navigation</h3>
                    <ul class="main_menu">
                      <li><a href="#">home</a></li>
                      <li><a href="#">link</a></li>
                      <li>
                        <div class="drop_btn">
                          <button type="button">
                            dropdown
                            <i class="iconify" data-icon="bi:file-arrow-down-fill"></i>
                          </button>
                        </div>
                        <ul class="sub_menu">
                          <li><a href="#">action</a></li>
                          <li class="border_line"><a href="#">another action</a></li>
                          <li><a href="#">something else here</a></li>
                        </ul>
                      </li>
                      <li><a href="#">disabled</a></li>
                    </ul>
                  </div>
                  <div class="search_part">
                    <h3 class="blind">search navigation</h3>
                    <form action="" method="GET">
                      <fieldset>
                        <legend class="blind">search area</legend>
                        <label for="searchInput" class="blind">필요한 자료를 검색하세요</label>
                        <input type="search" id="searchInput" name="search__Input" value="" placeholder="Search"></input>
                        <button type="button" class="search_btn">search</button>
                      </fieldset>
                    </form>
                    
                  </div>
                </div>
              </nav>
            </header>
          </div>
        ```

      </details>
      <br />
      
      <details>
        <summary>CLICK ME TO SEE SCSS CODE!</summary>

        ```scss
        // scss 코드 
        
        // @mixin =========================
        // mixin.scss
        @use "sass:math"; 

        // font-set
        @mixin font_set (){
          font-family:$font_family_en,  $font_family_kr,  $font_family_common; 
        }

        @mixin text_option($size:title3, $weight:4, $line:false){ 
          font-size:map-get($map:$font_size, $key: $size);
          font-weight:nth($font_weight,$weight);
          @if $line {
            line-height:24px;
            letter-spacing:-0.006em;    
          }
        }

        @mixin effect_shadow_01 {
          box-shadow:0px 4px 4px rgba(0,0,0,0.25);
        }

        // image
        $imgPath:'../img/';

        @mixin img($file, $repeat:no-repeat, $position:50% 50%, $size:initial){
          background: {
            image: url(#{$imgPath}#{$file});
            repeat: $repeat;
            position:$position;
            size: $size;
          } 
          & > span{
            display: block; 
            position: absolute; z-index:-1; clip:rect(0 0 0 0);
            width: 0; height: 0; overflow: hidden;
          }
          @content;
        }

        // size 
        @mixin full($file:false, $repeat:no-repeat, $position:50% 50%, $size:initial){
          display:block; width:100%; height:100%;
          
          @if ($file) {
            @include img($file, $repeat, $position, $size){      @content;    }
          }
        }

        // unit
        $baseSize: 16;
        @mixin remUnit($name, $unit){
          #{$name}: #{$unit} + px;
          #{$name}: math.div($unit , $baseSize) + rem;
        }

        // @media query --------------------------------------
        $mobile : 320px;
        $tablet : 600px;
        $laptop : 1024px;
        $pc:1440px;
        // $pcfull : 1920px;


        @mixin mobile(){
          @media all and (max-width: #{$tablet - 1}){
            @content;
          }
        }

        @mixin tablet(){
          @media all and (min-width:$tablet) and (max-width:#{$laptop - 1}) {
            @content; 
          }
        }

        @mixin handhelds(){
          @media all and (max-width:#{$laptop - 1}) {
            @content; 
          }
        }

        @mixin laptop(){
          @media all and (min-width:$laptop) and (max-width:#{$pc - 1}) {
            @content;
          }
        }

        @mixin pc(){
          @media all and (min-width:$pc) {
            @content;
          }
        }


        // color =========================
        $color_primary_01: #1a5d54;
        $color_primary_02: #834c33;
        $color_light_gray_01: #c4c4c4;
        $color_light_gray_02: #aaaaaa;
        $color_light_gray_03: #757575;
        $color_deep_gray: #505050;
        $color_black_01: #333333;
        $color_black_02: #171717;
        $color_white: #ffffff;
        $color_gray_op: rgba(85,85,85,0.3);
        $color_yellow_01: #ffbd55;
        $color_yellow_02: #f7e9d3;
        $color_white_02: #efefef;
        // ================================


        // common ================================
        .sub_menu.on {
          display: block;
        }

        // ================================
        #wrap {
          width: 100%;
          min-width: 320px;
          height: auto;
          min-height: 800px;
        }

        #headBox {
          position: relative;
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 56px;
          padding: 8px 10px;
          background-color: $color_gray_op;
        }

        h1 {
          width: 60px;
          height: 40px;
          background-color: $color_primary_01;

          & a {
            @include full;
          }
        }

        .nav_area {
          width: calc(100% - 70px);
          height: auto;
          min-height: 40px;
        }

        .navi_btn {
          display: none;
          float: right;
          width: 40px;
          height: 40px;

          &>button {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            border: 1px solid $color_deep_gray;
            background-color: $color_light_gray_02;
          }
        }

        .navi_inner {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: auto;
          min-height: 40px;
        }

        .global_part {
          width: auto;
          height: 40px;
        }

        .main_menu {
          display: flex;
          width: auto;
          height: 40px;

          &>li {
            position: relative;
            width: auto;
            margin-right: 16px;
            color: $color_black_01;
            font-weight: 600;
            text-transform: capitalize;

            &:last-child {
              margin-right: 0;
            }

            &>a {
              display: flex;
              align-items: center;
              padding: 0 10px;
              color: inherit;
              height: 100%;
            }

            @at-root .drop_btn {
              height: 100%;

              &>button {
                height: 100%;
                padding: 0 10px;
                color: inherit;
                text-transform: inherit;
              }
            }

            // .drop_btn
            @at-root .sub_menu {
              display: none;
              position: absolute;
              left: 0;
              top: calc(100% + 4px);
              width: auto;
              height: auto;
              border: 1px solid $color_light_gray_03;
              border-radius: 3px;
              color: $color_black_01;
              white-space: nowrap;
              background-color: $color_white;

              &>li {
                width: 100%;
                height: auto;
                margin-bottom: 8px;

                & a {
                  display: block;
                  width: 100%;
                  padding: 8px 20px;
                }
              }

              &>.border_line {
                border-bottom: 1px solid $color_light_gray_03;
              }
            }

            // .sub_menu
          }

          // li
        }

        // .main_menu

        .search_part {
          height: auto;

          &>form {
            width: auto;
            height: auto;
          }

          fieldset {
            display: flex;
            width: auto;
            height: auto;
            padding: 4px;
          }

          @at-root #searchInput {
            width: 250px;
            height: 40px;
            margin-right: 8px;
            border-radius: 4px;
            border: 1px solid $color_light_gray_02;
          }

          @at-root .search_btn {
            width: 70px;
            border-radius: 4px;
            border: 1px solid $color_primary_01;
            color: $color_primary_01;
            text-transform: capitalize;
          }
        }

        // .search_part


        // --------------------------------------------
        @include handhelds {

          // event
          .nav_area.on .navi_btn>button {
            background-color: $color_yellow_01;
          }

          .navi_btn>button:focus {
            outline: 4px solid $color_light_gray_03;
          }

          .navi_btn {
            display: block;
          }

          .navi_inner {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            padding: 10px;
            background-color: $color_gray_op;
            // display: none;
          }

          // navi_inner
          .nav_area.on .navi_inner {
            display: block;
          }

          .main_menu {
            flex-direction: column;
            height: auto;

            &>li {
              width: 100%;
              height: auto;
              min-height: 40px;
              margin-right: 0;
              padding: 8px;

              &>a {
                width: 100%;
                min-height: 40px;
              }

              @at-root .drop_btn {
                height: 40px;

                &>button {
                  width: 100%;
                  text-align: left;
                }
              }

              // .drop_btn
              @at-root .sub_menu {
                position: static;
              }

              // .sub_menu
            }

            // li
          }

          // .main_menu

          .global_part {
            margin-bottom: 16px;
            height: auto;

            @at-root #searchInput {
              width: calc(100% - 78px);
            }
          }

          // .global_part
          // .search_part {}
        }

        ```

        <br />

        ```css
        /* css 코드 */  

        .sub_menu.on {
          display: block;
        }

        #wrap {
          width: 100%;
          min-width: 320px;
          height: auto;
          min-height: 800px;
        }

        #headBox {
          position: relative;
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 56px;
          padding: 8px 10px;
          background-color: rgba(85, 85, 85, 0.3);
        }

        h1 {
          width: 60px;
          height: 40px;
          background-color: #1a5d54;
        }
        h1 a {
          display: block;
          width: 100%;
          height: 100%;
        }

        .nav_area {
          width: calc(100% - 70px);
          height: auto;
          min-height: 40px;
        }

        .navi_btn {
          display: none;
          float: right;
          width: 40px;
          height: 40px;
        }
        .navi_btn > button {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          border: 1px solid #505050;
          background-color: #aaaaaa;
        }

        .navi_inner {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: auto;
          min-height: 40px;
        }

        .global_part {
          width: auto;
          height: 40px;
        }

        .main_menu {
          display: flex;
          width: auto;
          height: 40px;
        }
        .main_menu > li {
          position: relative;
          width: auto;
          margin-right: 16px;
          color: #333333;
          font-weight: 600;
          text-transform: capitalize;
        }
        .main_menu > li:last-child {
          margin-right: 0;
        }
        .main_menu > li > a {
          display: flex;
          align-items: center;
          padding: 0 10px;
          color: inherit;
          height: 100%;
        }
        .drop_btn {
          height: 100%;
        }
        .drop_btn > button {
          height: 100%;
          padding: 0 10px;
          color: inherit;
          text-transform: inherit;
        }

        .sub_menu {
          display: none;
          position: absolute;
          left: 0;
          top: calc(100% + 4px);
          width: auto;
          height: auto;
          border: 1px solid #757575;
          border-radius: 3px;
          color: #333333;
          white-space: nowrap;
          background-color: #ffffff;
        }
        .sub_menu > li {
          width: 100%;
          height: auto;
          margin-bottom: 8px;
        }
        .sub_menu > li a {
          display: block;
          width: 100%;
          padding: 8px 20px;
        }
        .sub_menu > .border_line {
          border-bottom: 1px solid #757575;
        }

        .search_part {
          height: auto;
        }
        .search_part > form {
          width: auto;
          height: auto;
        }
        .search_part fieldset {
          display: flex;
          width: auto;
          height: auto;
          padding: 4px;
        }
        #searchInput {
          width: 250px;
          height: 40px;
          margin-right: 8px;
          border-radius: 4px;
          border: 1px solid #aaaaaa;
        }

        .search_btn {
          width: 70px;
          border-radius: 4px;
          border: 1px solid #1a5d54;
          color: #1a5d54;
          text-transform: capitalize;
        }

        @media all and (max-width: 1023px) {
          .nav_area.on .navi_btn > button {
            background-color: #ffbd55;
          }

          .navi_btn > button:focus {
            outline: 4px solid #757575;
          }

          .navi_btn {
            display: block;
          }

          .navi_inner {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            padding: 10px;
            background-color: rgba(85, 85, 85, 0.3);
          }

          .nav_area.on .navi_inner {
            display: block;
          }

          .main_menu {
            flex-direction: column;
            height: auto;
          }
          .main_menu > li {
            width: 100%;
            height: auto;
            min-height: 40px;
            margin-right: 0;
            padding: 8px;
          }
          .main_menu > li > a {
            width: 100%;
            min-height: 40px;
          }
          .drop_btn {
            height: 40px;
          }
          .drop_btn > button {
            width: 100%;
            text-align: left;
          }

          .sub_menu {
            position: static;
          }

          .global_part {
            margin-bottom: 16px;
            height: auto;
          }
          #searchInput {
            width: calc(100% - 78px);
          }
        }

        ```

        <br />

      </details>
      <br />

  - [x] `DOM 처리 - 클릭시 메뉴 보이게/사라지게 하기`    
    - 코드 보기         

      <details>
        <summary>CLICK ME TO SEE CODE!</summary>

        ```js
        // js 코드 

        // event 1 ------------------------------------
        // 변수 영역 ----------------------------------
        var naviArea = document.querySelector('.nav_area');
        var naviBtnWrapper = document.querySelector('.navi_btn');
        var naviBtn = naviBtnWrapper.querySelector('button');
        var navOn = 'on';


        // 이벤트 영역 --------------------------------
        // 메뉴를 클릭하면, navigation 영역이 나타나게/나타나 있으면 사라지게 하라 

        // 1. 오리지널 버전 
        // naviBtn.addEventListener('click', function(e) {
        //   e.preventDefault();

        //   var checkClassName = naviArea.classList.contains(navOn);

        //   if (!checkClassName) {
        //     naviArea.classList.add(navOn);
        //   } else {
        //     naviArea.classList.remove(navOn);
        //   }
        // });

        // 2. 응용 - 삼항 연산자 
        naviBtn.addEventListener('click', function(e) {
          e.preventDefault();

          var checkClassName = naviArea.classList.contains(navOn);

          (!checkClassName) ? naviArea.classList.add(navOn) :  naviArea.classList.remove(navOn);
        });


        // event 2 ------------------------------------
        // 변수 영역 ----------------------------------
        var dropBtnWrapper = document.querySelector('.drop_btn');
        var dropBtn = dropBtnWrapper.querySelector('button');
        var subMenu = document.querySelector('.sub_menu');

        var subMenuOn = 'on';



        // 이벤트 영역 --------------------------------
        // 메뉴가 열렸을 때, dropdown을 누르면 또 하나의 서브 메뉴가 보이게/사라지게 하라 
        dropBtn.addEventListener('click', function(e) {
          e.preventDefault();
          
          // var displayValue = getComputedStyle(subMenu).display;   // window 생략 가능하긴 함!
          var displayValue = window.getComputedStyle(subMenu).display;

          // 방법 1. 삼항연산자로 조건걸기 
          (displayValue === 'none') ? subMenu.style.display = 'block' : subMenu.style.display = 'none';
          // 이때, typeof displayValue는 'string', 그리고 직접적으로 displayValue = 'block';을 해도 효과 없음을 유의! 
        });

        ```

      </details>

<br />
<br />

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - ✨ Only 선생님's 강의 ✨
  
</detials>   

