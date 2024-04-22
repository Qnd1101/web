$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200)
    });
});

$(function(){
    $(".nav>ul>li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp(200)
    });

    let slideCount = $(".slideImg").length;
    let currentIndex = 0;

    setInterval(function(){
        currentIndex = currentIndex % slideCount;
        let slidePosition = currentIndex * (-1200)+"px";
        currentIndex++;
        $(".slideList").animate({left:slidePosition}, 400)
    }, 3000);
});