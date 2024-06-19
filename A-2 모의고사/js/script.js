$(function(){
    setInterval(function(){
        $(".slide ul").animate({left: -1200, }, 1000, function(){
            $(".slide li").eq(0).appendTo($(".slide ul"));
            $(".slide ul").css({left: 0});
        });
    }, 3000);

    $(".gnb li").mouseover(function(){
        $(".lnb").stop().slideDown();
        $(".bg").stop().slideDown();
    });

    $(".gnb li").mouseleave(function(){
        $(".lnb").stop().slideUp();
        $(".bg").stop().slideUp();
    });

    $(".notice ul li").eq(0).click(function(){
        $(".popup_box").show();
    });
    $(".popup a").click(function(){
        $(".popup_box").hide();
    });
});