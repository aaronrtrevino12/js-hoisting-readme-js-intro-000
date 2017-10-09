function callMe() {
  var lyric = "maybe";  // Moved variable assignment to the top of current scope
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}


function crazy(){
  var thisIsCrazy = function (){  // Moved function declaration to the top of current scope
    console.log("hey!!!")
  }
  thisIsCrazy();
}


function sayMyName(){
  // fix the code in here:
  var sayMy = function (){
    var name = "Kristin";
    console.log(name);
  }
  //var name = "Cricky";
  sayMy();
}
