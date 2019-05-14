

$(".hamburger").click(function(){
        $(".hamburger").toggleClass("is-active");
        $(".overlay__menu").toggleClass("open__1");
        $(".active__anime").toggleClass("fadeInLeft1");
        $("body").toggleClass("overflow__none");
    });
    $(".is-active").click(function(){
        $(".overlay__menu").toggleClass("open__1");
        $("body").removeClass("overflow__none");
        
    });


$(document).ready(function() {
  $("a.scrollto2").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});  




$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});  

// new WOW().init();

$(".scrollto").click(function(){
    $(".overlay__menu").toggleClass("open__1");
    $(".hamburger").removeClass("is-active");
    $("body").removeClass("overflow__none");
});

$(".close__form").click(function(){
    $(".success").toggleClass("none__form");
    $(".overlay").toggleClass("none__form");
});
$(".overlay").click(function(){
    $(".success").toggleClass("none__form");
    $(".overlay").toggleClass("none__form");
});





$("#button").click(function(){
  $(".popup1").toggleClass("show-block");
  $(".overlay1").toggleClass("show-block");
});


$(".close-success").click(function(){
  $(".pop_up-window").removeClass("visible");  
  $(".overlay1").addClass("none-block");  
  $(".overlay1").removeClass("show-block");
   
});


$(".close-popup-x").click(function(){
  $(".popup1").toggleClass("none-block");  
  $(".popup1").removeClass("show-block"); 
  $(".overlay1").addClass("none-block");
  $(".overlay1").removeClass("show-block");
});