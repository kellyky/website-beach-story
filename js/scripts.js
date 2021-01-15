$(document).ready(function() {
  $(".clickable").click(function() {
    $(".bw-showing").show();
    $("p").hide();
  });
  $(".bw-showing").hover(function() {
    $(".color-showing").show();
    // $(".bw-showing").hide();
  });
});
