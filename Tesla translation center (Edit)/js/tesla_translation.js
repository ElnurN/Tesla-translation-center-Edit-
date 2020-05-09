"use strict";

$(document).ready(function(){
$(".hamburger").click(function(){
    $(".hide_menu").show();
});

$(".fa-times").click(function(){
    $("hide_menu").hide();
});
});