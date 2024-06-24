$(function(){
    setInterval(function(){
        $(".slide ul").animate({top:-300}, 1000, function(){
            $(".slide li").eq(0).appendTo(".slide ul");
            $(".slide ul").css({top:0});
        });
    }, 2000);

    $(".gnb").mouseover(function(){
        $(".lnb").stop().slideDown();
        $(".bg").stop().slideDown();
    });

    $(".gnb").mouseout(function(){
        $(".lnb").stop().slideUp();
        $(".bg").stop().slideUp();
    });

    $(".layerPopup").click(function(){
        $(".layer_bg").show();
    });

    $(".layer a").click(function(){
        $(".layer_bg").hide();
    });
});