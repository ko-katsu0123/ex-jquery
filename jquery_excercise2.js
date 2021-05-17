// 方法としては非推奨
'use strict';
let textColor = "blue";

$(function(){
    $("#name").css("color", textColor);
});

$(function(){
    $("#btn").on("click", function(){
        if(textColor == "blue"){
            $("#name").css("color", "red");
            textColor = "red";
        } else {
            $("#name").css("color", "blue");
            textColor = "blue";
        }
    });
});