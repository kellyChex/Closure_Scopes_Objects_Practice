$(document).ready(function(){

  var tracker = 1;

  $("#addCounter").click(function() {
    var large =  '<div id="div'+tracker +'"class="buttonDivider">'+
    '<button id="plus'+tracker +'" value="start">+</button>'+
    '<button id="minus'+tracker +'" value="start">-</button>'+
    '<button id="reset'+tracker +'" value="start">Reset</button>'+
    '<span id="counter'+tracker +'">0</span>'+
    '<button id="delete'+tracker +'" value="start">Delete</button>'+
    '</div>'
    $("body").append(large);
    tracker += 1;

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

    var awe = awesomeCounter();
    var blah = awe + tracker;
    console.log(blah);

    var add = $("#div"+tracker).click(function(event) {
      result.html(awe.plus());
    })
    var subtract = $("#minus"+tracker).click(function(event) {
      result.html(blah.minus());
    })
    var res = $("#reset"+tracker).click(function(event) {
      result.html(blah.reset());
    })

    // var delete = $("#delete"+tracker).click(function(event) {
    //   $("#div1").remove();
    // })

  }) //addCounter Function


}); //ready function





// var add = $("#div"+tracker);
//   console.log(add);
// var subtract = $("#minus"+tracker)
//   console.log(subtract);
// var res = $("#reset"+tracker)
//   console.log(res);
// var result = $("#counter"+tracker);
// var awe = awesomeCounter();
// var blah = awe + tracker;
//   console.log(blah);
// var del = $("#delete"+tracker);
//
// add.click(function(event) {
//   result.html(blah.plus());
//
// })
// subtract.click(function(event) {
//   result.html(blah.minus());
//
// })
// res.click(function(event) {
//   result.html(.reset());
//
// })
//
// del.click(function(event) {
//   $("#div1").remove();
//
// })
