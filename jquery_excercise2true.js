'use strict';
$(function(){
    $("btn").on("click", function(){
        if($("name").css("color", "blue")){
            $("name").css("color", "red");
        } else {
            $("name").css("color", "blue");
        }
        
    })
});