/**
 * Created by Administrator on 2016/10/24.
 */
//首页图片轮播
var hasStarted=false,
    length=$('#wrapper-pic li').length,
    t=4000,//轮播时间
    timer=null,
    curIndex=0;
$('#wrapper-pic li:not(:first)').hide();
$('#btn li:first').addClass('active');
$('#left-btn,#right-btn').hide();
start();
function next() {
    var preIndex = curIndex;
    curIndex = ++curIndex % length;
    play(preIndex, curIndex);
}//向下翻页
function pre() {
    var preIndex = curIndex;
    curIndex = (--curIndex + length) % length;
    play(preIndex, curIndex);
}//向上翻页
function play(preIndex,curIndex) {
    $('#wrapper-pic li').eq(preIndex).fadeOut(1000)
        .parent().children().eq(curIndex).fadeIn(500);
    $('#btn li').removeClass('active');
    $('#btn li').eq(curIndex).addClass('active');
}//轮播动作
function start() {
    if (!hasStarted){
        hasStarted=true;
        timer=setInterval(next,t)
    }
}//开始轮播
function stop() {
    clearInterval(timer);
    hasStarted = false;
}//停止轮播
$('#btn li').hover(function() {
    stop();
    var preIndex = $("#btn li").filter(".active").index();
    curIndex = $(this).index();
    play(preIndex, curIndex);
}, function() {
    start();
});//下按钮事件
$('#wrapper-pic li,#left-btn,#right-btn').hover(function () {
    stop();
    $('#left-btn,#right-btn').show();
},function () {
    start();
    $('#left-btn,#right-btn').hide();
});
$('#left-btn').unbind('click');
$('#left-btn').bind('click', function() {
    pre();
});
$('#right-btn').unbind('click');
$('#right-btn').bind('click', function() {
    next();
});
//导航栏
$(function(){
    $(".nav li:has(ul)").hover(function(){
        $(this).children("ul").stop(true,true).slideDown(600);
    },function(){
        $(this).children("ul").stop(true,true).slideUp("fast");
    });
});

//返回顶部
$(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop()>200){
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