/**
 * Created by Administrator on 2016/10/26.
 */

    var nextNum=document.getElementById('next-num'),
        nextTxt=document.getElementById('seccode-text'),
        inSec=document.getElementById('inSec'),
        inTxt=document.getElementById('inTxt'),
        inPass=document.getElementById('inPass'),
        tipT=document.getElementById('tip-txt'),
        tipP=document.getElementById('tip-pass');
    var regP=/^[a-zA-Z]\w{5,17}$/,//以字母开头，长度在6~18之间，只能包含字符、数字和下划线
        regT=/^1(3|4|5|7|8)\d{9}$/;//验证手机号码
    nextNum.onclick = function () {
        nextTxt.innerText = rand();
    };
    function rand() {
        var i=0,
            t='';
        do {
            var tempNum=Math.floor(Math.random()*123);
            if ((48<=tempNum&&tempNum<=57)||(65<=tempNum&&tempNum<=90)||(97<=tempNum&&tempNum<=122)){
                t+=String.fromCharCode(tempNum);
                i++;
            }
        }while (i<4);
        return t;
    }
    fo(inSec);
    fo(inTxt);
    inSec.onblur=function () {
        if(nextTxt.innerText==inSec.value){
            inSec.style.outline='2px solid #8ecbbc';
        }else {
            inSec.style.outline='2px solid red';
            inSec.placeholder='验证码不正确';
        }
    };
    function fo(put) {
        put.onfocus=function () {
            put.placeholder='';
        }
    }
    inTxt.onblur=function () {
        if(regT.test(inTxt.value)){
            tipT.innerText='√帐号可用';
            tipT.style.color='#8ecbbc';
            inTxt.style.outline='2px solid #8ecbbc';
        }else {
            tipT.innerText='☆格式错误';
            tipT.style.color='red';
            inTxt.style.outline='2px solid red';
        }
    };
    inPass.onblur=function () {
        if(regP.test(inPass.value)){
            tipP.innerText='√密码可用';
            tipP.style.color='#8ecbbc';
            inPass.style.outline='2px solid #8ecbbc';
        }else {
            tipP.innerText='☆格式错误';
            tipP.style.color='red';
            inPass.style.outline='2px solid red';
        }
    };

$(function(){
    $(".nav li:has(ul)").hover(function(){
        $(this).children("ul").stop(true,true).slideDown(600);
    },function(){
        $(this).children("ul").stop(true,true).slideUp("fast");
    });
});