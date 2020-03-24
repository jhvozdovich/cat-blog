$(document).ready(function() {
  $("#dark-mode").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode-class");
  })

  $("#standard-display").click(function() {
    $("body").removeClass();
    $("body").addClass("standard-display-class");
  })
})