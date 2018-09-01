console.log("加载完成");
require.config({
	paths:{
		"jquery":"jquery-1.11.0",
		"jquery-cookie":"jquery.cookie",
		
		"nav":"nav",
		"top":"top"
		
	},
	shim:{
		"jquery-cookie":["jquery"]

	}

})
require(["car","nav","top"],function(car,nav,top){
		
	car.car();
	nav.nav();
	top.main();
})