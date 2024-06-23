$(function(){
    setInterval(function(){
        $(".slide ul").animate({top:-400}, 1000, function(){
            $(".slide li").eq(0).appendTo(".slide ul");
            $(".slide ul").css({top:0});
        })
    }, 2000);

    $(".title_box li").eq(0).click(function(){
        $(".notice").show();
        $(".gallery").hide();
        
        $(".title_box li a").eq(0).addClass("active");
        $(".title_box li a").eq(1).removeClass();
    });

    $(".title_box li").eq(1).click(function(){
        $(".notice").hide();
        $(".gallery").show();
        
        $(".title_box li a").eq(1).addClass("active");
        $(".title_box li a").eq(0).removeClass();
    });

    $(".layerPopup").click(function(){
        $(".layer").show();
    });

    $(".layer a").click(function(){
        $(".layer").hide();
    });
});