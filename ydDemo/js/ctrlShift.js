/**
 * Created by Administrator on 2018/3/14.
 */


window.onload=function(){
    ctrl();
    /*prohibit();*/
};
function ctrl() {
    <!--去掉html中的注释-->
    var str=document.getElementById("html").innerHTML;
    var reg=/\<\!\-\-[\s\S]*?\-\-\>/g;
    document.getElementById("html").innerHTML=str.replace(reg,"");
}
function prohibit() {
    /*禁止查看网页源代码*/
    document.onkeydown = function() {
        var e = window.event || arguments[0];
        //屏蔽F12
        if(e.keyCode == 123) {
            return false;
            //屏蔽Ctrl+Shift+I
        } else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            return false;
            //屏蔽Shift+F10
        } else if((e.shiftKey) && (e.keyCode == 121)){
            return false;
            //屏蔽ctrl+u
        } else if((e.ctrlKey) && (e.keyCode == 85)){
            return false;
        }
    };
    //屏蔽右键单击
    document.oncontextmenu = function() {
        return false;
    }
}