$(function(){
    $(".slideList li:gt(0)").hide();
    setInterval(function() {   
        $(".slideList li:first").fadeOut(3000).next().fadeIn(3000).end().appendTo(".slide ul");
    }, 3000);

    $(".tab_btn li").eq(0).click(function(){
        $(".notice").show();
        $(".gallery").hide();

        $(".tab_btn li").eq(0).addClass("active");
        $(".tab_btn li").eq(1).removeClass();
    });

    $(".tab_btn li").eq(1).click(function(){
        $(".notice").hide();
        $(".gallery").show();

        $(".tab_btn li").eq(1).addClass("active");
        $(".tab_btn li").eq(0).removeClass();
    });
    

    $(".layerPopup").click(function(){
        $(".layer").show();
    });

    $(".layer a").click(function(){
        $(".layer").hide();
    });
});