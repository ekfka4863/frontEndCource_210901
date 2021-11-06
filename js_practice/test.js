function getDay(a, b, c) {
  if(a) {
    return "a 있다";
  }
  console.log("함수 아직 돌아가는 중!");
  if(b) {
    console.log("b 있다 - ");   // b 있다 - 
    return "b 있다";            // "b 있다"
  }
  if(c) {
    return "c 있다";
  }
}

getDay(1, 12,);     // b 있다 


// var resultGlobal;




// var a = 1;
// var b = 2;

function add(a, b) {
  var result = a + b;

  return result;
}

// add(a, b);
add(5, 10);   // 15
add(29, 14);   // 43



function getElement() {
  let arr = [3, [4, ["array", 9], 2+3], [0]];

  let result = arr[1][1][0];

  return result;
}


function getElement() {
  let arr = [3, [4, ["array", 9], 2+3], [0]];
  let result = arr[1][1][0];
  return result;
}

getElement();