/**
 * Created by Administrator on 2016/10/27.
 */
$(function(){
    $(".nav li:has(ul)").hover(function(){
        $(this).children("ul").stop(true,true).slideDown(600);
    },function(){
        $(this).children("ul").stop(true,true).slideUp("fast");
    });
});
//导航


$(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop()>300){
            $("#go-top").fadeIn(800);
        }
        else
        {
            $("#go-top").fadeOut(1000);
        }
    });
    $("#go-top").click(function(){
        $('body,html').animate({scrollTop:0},1500);
        return false;
    });
});
//返回顶部
var timer=null;
function scroll() {
    $("#scroll ul.t1-8list").animate({
        "margin-left": "-125px"
    }, 800,function() {
        $("#scroll ul.t1-8list li:eq(0)").appendTo($("#scroll ul.t1-8list"));
        $("#scroll ul.t1-8list").css({
            "margin-left": 0
        })
    })
}
timer=setInterval(scroll, 1500);

$('#scroll ul').hover(function () {
    clearInterval(timer);
},function () {
    timer=setInterval(scroll, 1500)
});
//无缝滚动
