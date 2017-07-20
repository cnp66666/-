$.ajax({
	type:"get",
	url:"../data/zhanting.json",
	success:function (data){
		var cont=data.cont[0]
		console.log(cont)
		
		$(".exhibition-cont-cont-left-ul").html($('<li><a href=""><img src="../image/'+cont.images1+'"/></a></li><li><a href=""><img src="../image/'+cont.images2+'"/></a></li><li><a href=""><img src="../image/'+cont.images2+'"/></a></li><li><a href=""><img src="../image/'+cont.images2+'"/></a></li>'))
		
		
		
		$(".exhibition-cont-cont-name").html(cont.name)
		$(".exhibition-cont-cont-price span").html(cont.price)
		for(var i=0;i<cont.img.length;i++){
			$(".exhibition-cont-cont-img span").append($('<img src="../image/'+cont.img[i].img1+'"/>'))
		}
		$(".exhibition-cont-cont-date span").html(cont.date)
		$(".exhibition-cont-cont-right").append('<input type="button" value="'+cont.zi+'" />')
	},
	async:true
});
//for(var i=0;i<$(".exhibition-cont-cont-left-ul li").length;i++){
//	$(".exhibition-cont-cont-left-ul li")[i].click(function (){
//		$(".exhibition-cont-cont-datu").src=$(".exhibition-cont-cont-left-ul li")[i].src
//		console.log($(".exhibition-cont-cont-datu").src)
//	})
//}
