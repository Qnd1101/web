$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(".nav>ul>li>ul").stop().slideDown(200)
    });
});

$(function(){
    $(".nav>ul>li").mouseleave(function(){
        $(".nav>ul>li>ul").stop().slideUp(200)
    });
});