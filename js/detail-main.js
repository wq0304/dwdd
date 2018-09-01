console.log("加载完成");
require.config({
	paths:{
		"jquery":"jquery-1.11.0",
		"jquery-cookie":"jquery.cookie",
		"detail":"detail",
		"nav":"nav",
		"top":"top"
		
	},
	shim:{
		"jquery-cookie":["jquery"]

	}

})
require(["detail","nav","top"],function(detail,nav,top){
		
	detail.detail();
	nav.nav();
	top.main();
})