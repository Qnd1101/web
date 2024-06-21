$(function(){
    $(".gnb li").mouseover(function(){
        $(".lnb").stop().slideDown();
        $(".bg").stop().slideDown();
    });
    $(".gnb li").mouseleave(function(){
        $(".lnb").stop().slideUp();
        $(".bg").stop().slideUp();
    });

    setInterval(function(){
        $(".slide ul").animate({left:-1200}, 2000, function(){
            $(".slide li").eq(0).appendTo(".slide ul");
            $(".slide ul").css({left:0})
        });
    }, 2000);

    $(".notice li").eq(0).click(function(){
        $(".layer_bg").show();
    });

    $(".layer a").click(function(){
        $(".layer_bg").hide();
    });
});