$.ajax({
	type:"get",
	url:"data/qiche.json",
	success:function (data){
		var news=data.news
		var lunbotu=data.lunbo
		console.log(news.length)
		var newList=$(".cont-one-news-list")
		var lunboList=$(".cont-two-lunbo-ul")
		for(var i=0;i<news.length;i++){
			var aaa=$("<li><a href=''><div></div><span>"+news[i].cont+"</span><span>"+news[i].date+"</span></a></li>")
			newList.append(aaa)
		}
		for(var i=0;i<lunbotu.length;i++){
			var a=$('<li><a href="javascript:;"><img src="'+lunbotu[i].src+'"/></a></li>')
			lunboList.append(a)
		}
	},
	async:true
});


$(".cont-two-left").click(function (){
	$(".cont-two-lunbo-ul").animate({"left":"-800px"},500);
})
$(".cont-two-right").click(function (){
	$(".cont-two-lunbo-ul").animate({"left":"0px"},500);
})
//$(".navHeader .navHeader-ul li a").click(function(){
//	$(this).css("color","#5AC8F1");
//	$(this).siblings("a").css("color","white")
//})

//$(".img1").zoombie();
