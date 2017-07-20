$.ajax({
		type:"get",
		url:"../data/award.json",
		async:true,
		success:function(e){
			$.each(e.award, function(i,msg) {
				$("#award").append($("<li class='clear'><div class='award_img'><span class='on'></span><img src='../"+msg.src+"'/></div><div class='award_details'><p class='award_name'><b>"+msg.nsme+"</b></p><p class='award_cost'>奖品价值：<span>"+msg.price+"</span>	元</p><p class='award_num award_cost'>共：<span>"+msg.max+" </span>份	剩：<span>"+msg.min+"</span> 份</p><p class='award_begin'>开始时间：<span>"+msg.begindate+"</span> 截至时间：<span>"+msg.deadline+"</span></p></div><div class='award_particpation'><p class='award_particpation_num'>参与人数：<span>"+msg.num+"</span></p><a href='javascript:;'><button>参与活动</button></a></div></li>"))
			});
		}
	});
