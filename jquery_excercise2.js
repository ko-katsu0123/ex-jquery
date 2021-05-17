'use strict';
let textColor = "blue";
$(function(){
    $("#name").css("color", textColor);

    $("#btn").on("click", function(){
        if(textColor.equals("blue")){
            $("#name").css("color", "red");
        } else {
            $("#name").css("color", "blue");
        }
    });
});