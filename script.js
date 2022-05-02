$("input").focus(function(){
    $(".btn").css("opacity", "1")
});
$("input").focusout(function(){
    $(".btn").css("opacity", "0.4")
})