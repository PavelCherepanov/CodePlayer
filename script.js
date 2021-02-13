function updateOutput(){
  // html -> output
  $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
  document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());
  
}

//кнопки
$(".toggleButton").hover(function(){
$(this).addClass("highlightedButton");
}, function(){
  $(this).removeClass("highlightedButton");
});

$(".toggleButton").click(function(){
  $(this).toggleClass("active");
  $(this).removeClass("highlightedButton");

  // появление и исчезновение textarea
  var panelId = $(this).attr("id") + "Panel";
  $("#" + panelId).toggleClass("hidden");

  // настраиваем ширину (кол-во textarea)
  var numberOfActivePanels = 4 - $(".hidden").length;
  $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
});
//высота textarea
$(".panel").height($(window).height() - $("#header").height() - 15);
// ширина    
$(".panel").width(($(window).width() / 2) - 10);

updateOutput();

$("textarea").on('change keyup paste', function(){
  updateOutput();
});