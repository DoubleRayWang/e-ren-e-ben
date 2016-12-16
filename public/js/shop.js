/**
 * Created by Administrator on 2016/10/26.
 */
    function fb(input,val) {
        input.focus(function () {
            $('#search-b').val('');
        });
        input.blur(function () {
            $('#search-b').val(val);
        });
    }
    function Scroll(obj,speed,interval){    //父级容器，轮播速度，切换间隔
        $("."+obj).each(function(){
            var $box = $(this),
                $imgDiv =$box.children('.shop-lazy'),
                $imgUl = $imgDiv.children("#shop-lazy-pic"),
                $imgLi = $imgUl.children("li"),
                $preNext=$box.children('.pre-next'),
                n = $imgLi.length,
                width = $imgLi.width(),
                left = parseFloat($imgUl.css("left")),
                k = 0,
                Player;
            $imgUl.css("width",n*width);
            function scroll(){                //轮播事件
                $imgUl.stop().animate({left:-width},speed,function(){
                    k += 1;
                    $imgUl.css("left",0);
                    $imgUl.children("li:first").appendTo($(this));
                });
            }

            $preNext.click(function(){      //左右按钮点击事件
                if($(this).hasClass('next')){
                    if(!$imgUl.is(":animated")){
                        k += 1;
                        $imgUl.animate({left:-width},speed,function(){
                            $imgUl.css("left",0);
                            $imgUl.children("li:first").appendTo($(this));
                            if(k >= n){
                                k = 0;
                            }
                        });
                    }
                }
                else {
                    if(!$imgUl.is(":animated")){
                        k += -1;
                        $imgUl.css("left",-width);
                        $imgUl.children("li:last").prependTo($imgUl);
                        $imgUl.stop().animate({left:0},speed);
                        if(k < 0){
                            k = n-1;
                        }
                        $btnUl.children("li").removeClass('cur').eq(k).addClass('cur');
                    }
                }
            });
            $box.hover(                     //鼠标移入、移出事件
                function(){
                    clearInterval(Player);
                    $preNext.addClass('show');
                },
                function(){
                    Player = setInterval(function(){scroll()},interval);
                    $preNext.removeClass('show');
                }
            );
            Player = setInterval(function(){scroll()},interval);
        });
    }

fb($('#search-b'),'Search');//得到焦点
Scroll("lazy-box",700,2500);//轮播
//导航
$('ul#menu li').eq(3).addClass('nav-bg-shop');
$('ul#menu li').mouseover(function () {
    $(this).addClass('nav-bg-shop').siblings().removeClass('nav-bg-shop');
});

//图标跳动
var dPic=$('.icon-logo');
dPic.hover(function() {
    $(this).animate({
        marginTop:-15,
        opacity: 0.7
    }, 200).animate({
        marginTop:10,
        opacity: 0.8
    }, 100).animate({
        marginTop:-5,
        opacity: 0.9
    }, 200).animate({
        marginTop:0,
        opacity: 0.9
    }, 100)
}, function() {
    $(this).stop(true).animate({
        marginTop:0,
        opacity: 1
    }, 200);
});



