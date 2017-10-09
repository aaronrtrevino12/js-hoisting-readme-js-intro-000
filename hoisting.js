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
  var name = "Cricky";  // does not print "Cricky" because it is outside the scope of "sayMy" function
  var sayMy = function (){  // function is declared
    var name = "Kristin";  // variable is defined inside scope of "sayMy" function
    console.log(name);  // print name("Kristin")
  }
  sayMy();  // call function
}
