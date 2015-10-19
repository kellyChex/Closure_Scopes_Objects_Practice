$(document).ready(function(){
  var rowTracker = 0;

  $("#addCounter").click(function(){
    var incount = 0;
    var tracker = rowTracker; // save current row


  $("body").append('<div id="div'+tracker +'"class="buttonDivider">'+
    '<button id="plus'+tracker +'" value="start">+</button>'+
    '<button id="minus'+tracker +'" value="start">-</button>'+
    '<button id="reset'+tracker +'" value="start">Reset</button>'+
    '<span id="counter'+tracker +'">0</span>'+
    '<button id="delete'+tracker +'" value="start">Delete</button>'+
    '</div>')

    $("#plus"+tracker).click(function(event) {
      incount++;
      $("#counter"+tracker).html(incount);

      var accumulator = "";
      for (var i=0; i<rowTracker; i++) {
        accumulator += $("#counter"+i).html();
      }
      alert(accumulator);
    })
    $("#minus"+tracker).click(function(event) {
      incount--;
      $("#counter"+tracker).html(incount);
    })
    $("#reset"+tracker).click(function(event) {
      incount = 0;
    })

    // var delete = $("#delete"+tracker).click(function(event) {
    //   $("#div1").remove();
    // })

    rowTracker++;

  }) //addCounter Function


}); //ready function
