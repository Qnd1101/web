$(function(){
    $(".gnb").mouseover(function(){
        $(".lnb").stop().slideDown();
    });
    $(".gnb").mouseleave(function(){
        $(".lnb").stop().slideUp();
    });
});