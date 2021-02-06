//кнопки
$(".toggleButton").hover(function(){
$(this).addClass("highlightedButton");
}, function(){
  $(this).removeClass("highlightedButton");
});

$(".toggleButton").click(function(){
  $(this).toggleClass("active");
  $(this).removeClass("highlightedButton");
});
//высота textarea
$(".panel").height($(window).height() - $("#header").height() - 15);
    
$(".panel").width(($(window).width()/2) - 10);