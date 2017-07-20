$.ajax({
	type: "get",
	async: true,
	dataType: "json",
	url: "../data/cuxiao.json",
	success: function(data) {
		var user = data;
		str = "";
		for(var i = 0; i < user.length; i++) {
			str +=
				'<div class="cuxiaoxinxi">' +
				'<div class="xinxi1">' +
				'<p class="xinxi-p1"><a href="cardetails.html"><span class="xinxi1-span">[节日促销]</span>'+user[i].title+'</a></p>' +
				'<p class="xinxi-p2"><a href="carzhanting.html">'+user[i].action+'</a></p>' +
				'</div>' +
				'<div class="xinxi2">' +
				'<p>'+user[i].start+'</p>' +
				'<p>'+user[i].end+'</p>' +
				'</div>' +

				'</div>'
		}
         $(".dayscuxiao").html(str)
         
	}
})
$(function(){
               $(".cuxiaoqiehuan").click(function(){
                   $(".dayscuxiao").html("<h2>无任何加载信息</h2>")
                   $("button").css("background","#dcdcdc")
                   $(this).css("background","black")
                  });
                  $(".footer-button1").click(function(){
                  	$(".dayscuxiao").html(str)
                  	$("button").css("background","#dcdcdc")
                   $(this).css("background","black")
                  })
	
            })