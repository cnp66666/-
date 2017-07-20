$.ajax({
				type: "get",
				async: true,
				dataType: "json",
				url: "../data/usersays.json",
				success: function(data) {
					var user = data;
					str = "";
					for(var i = 0; i < user.length; i++) {
						str += 
						'<div>'+
						'<div class="server">' +
							'<ul>' +
							'<li>环境：' + user[i].huanjing + '</li>' +
							'<li>服务：' + user[i].fuwu + '</li>' +
							'<li>产品：' + user[i].chanpin + '</li>' +
							'<li>价位：' + user[i].jiawei + '</li>' +
							'</ul>' +
							'</div>' +
							'<div class="moresays">' +
							'<p class="moresays-p1"><span class="moresays-span">' + user[i].user + '</span>于<span>' + user[i].time + '</span>发表评论</p>' +
							'<p class="moresays-p2"><b>' + user[i].content + '</b></p>' +
							'<p class="moresays-p3"><span class="moresays-span1">商家回复:</span>' +' '+ user[i].huifu + '</p>' +

							'</div>'+
							'</div>'
					}
					$(".says3").html(str)
                     
				}
			})


$(function(){
               $(".footerbutton2").click(function(){
                   $(".says3").html("<h2>无任何加载信息!</h2>")
                    $("button").css("background","#dcdcdc")
                   $(this).css("background","black")
                  });
                  $(".footerbutton1").click(function(){
                  	$(".says3").html(str)
                  	 $("button").css("background","#dcdcdc")
                   $(this).css("background","black")
                  })
	
           })	
