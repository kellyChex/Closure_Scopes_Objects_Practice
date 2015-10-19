$(document).ready(function(){
  function awesomeCounter() {
    var counter = 0;
    return {
      plus: function() {
        counter += 1;
        return counter;
      }, //plus function
      minus: function() {
        counter -= 1;
        return counter;
      }, //minus function
      reset: function() {
        counter = counter*0;
        return counter;
      } //reset
    }; // return function


  }
  // awesome counter function
  var add = $("#plus1");
  var subtract = $("#minus1");
  var res = $("#reset1")
  var result = $("#counter1");
  var awe = awesomeCounter();
  var del = $("#delete1");

  $("#plus1").click(function(event) {
    $("#counter1").html(awe.plus());

  })
  subtract.click(function(event) {
    result.html(awe.minus());

  })
  res.click(function(event) {
    result.html(awe.reset());

  })

  del.click(function(event) {
    $("#div1").remove();

  })

  var add2 = $("#plus2");
  var subtract2 = $("#minus2");
  var res2 = $("#reset2")
  var result2 = $("#counter2");
  var awe2 = awesomeCounter();
  var del2 = $("#delete2");

  add2.click(function(event) {
    result2.html(awe2.plus());

  })
  subtract2.click(function(event) {
    result2.html(awe2.minus());

  })
  res2.click(function(event) {
    result2.html(awe2.reset());

  })

  del2.click(function(event) {
    $("#div2").remove();

  })

  var add3 = $("#plus3");
  var subtract3 = $("#minus3");
  var res3 = $("#reset3")
  var result3 = $("#counter3");
  var awe3 = awesomeCounter();
  var del3 = $("#delete3");

  add3.click(function(event) {
    result3.html(awe3.plus());

  })
  subtract3.click(function(event) {
    result3.html(awe3.minus());

  })
  res3.click(function(event) {
    result3.html(awe3.reset());

  })

  del3.click(function(event) {
    $("#div3").remove();

  })

}); //ready function
