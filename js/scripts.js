$(document).ready(function() {
  $("#click1").click(function() {
    $("#bw-disappear").hide();
    $("#beach-color-reveal").show();
    $("#intro").hide();
    // $("#the-end").hide();
  });
  $("#click2").click(function() {
    $("#beach-color-reveal").hide();
    $("#circle").show();
    // $("#the-end").hide();
  });
  $("#click3").click(function() {
    $("#circle").hide();
    $("#birds").show();
    // $("#the-end").hide();
  });
  $("#click4").click(function() {
    $("#birds").hide();
    $("#tank").show();
    // $("#the-end").hide();
  });
  $("#click5").click(function() {
    $("#tank").hide();
    $("#mollusk").show();
    // $("#the-end").hide();
  });
  $("#click6").click(function() {
    $("#mollusk").hide();
    $("#fuel").show();
    // $("#the-end").hide();
  });
  $("#click7").click(function() {
    $("#fuel").hide();
    $("#north").show();
    // $("#the-end").hide();
  });
  $("#click8").click(function() {
    $("#north").hide();
    $("#trading-post").show();
  });
  $("#click9").click(function() {
    $("#trading-post").hide();
    $("#the-end").show();
  });
});
