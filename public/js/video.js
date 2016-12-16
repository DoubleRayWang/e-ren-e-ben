/**
 * Created by Administrator on 2016/10/27.
 */
//导航栏
$(function(){
    $(".nav li:has(ul)").hover(function(){
        $(this).children("ul").stop(true,true).slideDown(600);
    },function(){
        $(this).children("ul").stop(true,true).slideUp("fast");
    });
});
//选项卡
$('.statement div.play:not(:first)').hide();
$('ul#choose li:first').addClass('active-v');
$('ul#choose li').click(function() {
    var index = $(this).index();
    $(this).addClass('active-v').siblings().removeClass('active-v');
    $('.statement div.play').eq(index).fadeIn(1200).siblings().hide();
});

