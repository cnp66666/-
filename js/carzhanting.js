 $.ajax({
        type: "get",
        async: true,
        dataType: "json",
        url: "../data/carzhanting.json",
        success: function (data) {
        	$(".ul1").append("<li class='li clear'><div class='fd'><a href='#'><div class='liimg'><img src='../image/"+data.image1+"'/></div><div class='litext'>"+data.title+"</div></a></div><div class='fd'><a href='#'><div class='liimg'><img src='../image/"+data.image2+"'/></div><div class='litext'>"+data.title2+"</div></a></div><div class='fd'><a href='#' class='af'><div class='liimg'><img src='../image/"+data.image3+"'/></div><div class='litext'>"+data.title3+"</div></a></div></li>")
        	var s=data.nr2;
        	for(var i=0;i<s.length;i++){
        		$(".ul1").append("<li class='li2 clear'><div class='fd'><a href='#'><div class='liimg'><img src='../image/"+s[i].img+"'/></div><div class='litext'>"+s[i].title+"</div></a></div><div class='fd'><a href='#'><div class='liimg'><img src='../image/"+s[i].img2+"'/></div><div class='litext'>"+s[i].title2+"</div></a></div><div class='fd'><a href='#' class='af'><div class='liimg'><img src='../image/"+s[i].img3+"'/></div><div class='litext'>"+s[i].title3+"</div></a></div></li>")
        		
        	}
        		
        		
        	
        }
})