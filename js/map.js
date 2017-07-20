var map = new BMap.Map("allmap");  
	map.centerAndZoom(new BMap.Point(116.4035,39.915),8); 
	setTimeout(function(){
		map.setZoom(14);   
	}, 2000);  //2秒后放大到14级
	map.enableScrollWheelZoom(true);
	map.addControl(new BMap.NavigationControl());    
	map.addControl(new BMap.ScaleControl());    
	map.addControl(new BMap.OverviewMapControl());    
	map.addControl(new BMap.MapTypeControl());    
	map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用