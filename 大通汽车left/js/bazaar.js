/**
 * Created by lenovo on 2017/7/13.
 */
//Ajax请求list列表内容
$.get("../data/bazaar.json",function(resText,status,xhr){
    //解析数据
    var obj = resText;
    if(typeof(resText) =="string"){
        obj = $ .parseJSON(resText)
    }
    var html = "";
    for (var i = 0; i < obj.list.length; i++) {
        html+="<li class=\"clearfix\"><a href='"+obj.list[i].href+"'> "+obj.list[i].title+"</a><span>"+obj.list[i].date+"</span></li>"
    }
    $("#list").html(html)
});


//分页效果

$(function(){
    $('.bazaarBox').kkPages({
        PagesClass:'li', //需要分页的元素
        PagesMth:12, //每页显示个数
        PagesNavMth:3 //显示导航个数
    });
})








