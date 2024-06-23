$(function(){
    setInterval(function(){
        $(".slide ul").animate({left:-800}, 1000, function(){
            $(".slide li").eq(0).appendTo(".slide ul");
            $(".slide ul").css({left:0});
        });
    }, 2000);

    $(".layerPopup").click(function(){
        $(".layer").show();
    });

    $(".layer a").click(function(){
        $(".layer").hide();
    });
});