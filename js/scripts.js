$(document).ready(function() {

  var elements = ["h1", "p", "div", "img", "span"];
  elements.forEach(function(element){
    $(element).click(function(){
      alert("This is a " + element);
    });



  });
  // $("h1").click(function() {
  //   alert("This is a header");
  // });
  // $("p").click(function() {
  //   alert("This is a paragraph!");
  // });
  // $("div").click(function() {
  //   alert("This is a div");
  // });
  // $("img").click(function() {
  //   alert("This is a cat image!")
  // });
  // $("span").click(function() {
  //   alert("And this is a span")
  // });

});
