


$.get("../data/privilege.json",function(resText,status,xhr){
    //解析数据
    var obj = resText;
    if(typeof(resText) =="string"){
        obj = $ .parseJSON(resText)
    }
    var html = "";
    for (var i = 0; i < obj.list.length; i++) {
        html+="<li class=\"clearfix\"><div class=\"left\"><img src="+obj.list[i].src+" alt=''/></div>" +
            "<div class=\"right\"><h2>"+obj.list[i].name+"</h2>" +
            "<p class='ljjs'>立即节省:<span>"+obj.list[i].price+"</span></p>" +
            "<p class='hy'>还有<span>"+obj.list[i].date+"</span>结束</p>" +
            "<p class='cnt'>"+obj.list[i].annotation+"</p>"+
            "<div><input class='btn1' type='button' value='立即打印' /><input class='btn2' type='button' value=免费手机下载 /></div></div>" +
            "" +
            "</li>" +
            "<li></li>"
    }
    $("#ylist").html(html)
});