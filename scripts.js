$(window).scroll(function(){
  
    if ($("#scrolltest1").visible() ){
      $("#scrolltest1Parent").addClass('cardFlyIn');
    };
});

$(".nav ul li").on("click", function() {
  $(".nav li").removeClass("active");
  $(this).addClass("active");
  console.log("test");
});

