$(function(){
    // slide 버튼
    setInterval(function(){
        $(".slide ul").animate({top:-400}, function(){
            $(".slide li").eq(0).appendTo($(".slide ul"));
            $(".slide ul").css({top:0});
        });
    }, 3000);

    // 공지사항 버튼
    $(".title_box h2").eq(1).click(function(){
        $(".gallery").show();
        $(".notice").hide();

        $(".title_box h2").eq(1).addClass('on');
        $(".title_box h2").eq(0).removeClass();
    });

    // 갤러리 버튼
    $(".title_box h2").eq(0).click(function(){
        $(".gallery").hide();
        $(".notice").show();

        $(".title_box h2").eq(0).addClass('on');
        $(".title_box h2").eq(1).removeClass();
    });

    // 팝업 버튼
    $(".notice li").eq(0).click(function(){
        $(".popup").show();
    });
    $(".popup a").click(function(){
        $(".popup").hide();
    });
});