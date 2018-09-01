console.log("加载完成");
require.config({
	paths:{
		"jquery":"jquery-1.11.0",
		"top":"top",
		"nav":"nav",
		"banner":"banner",
		"flag":"flag",
		"hot":"hot",
		"oversea":"oversea",
		"leftstyle":"leftstyle",
		"shopMall":"shopMall"
	},
	shim:{
		"jquery-cookie":["jquery"]

	}

})
require(["top","nav","banner","flag","hot","oversea","leftstyle","shopMall"],function(top,nav,banner,flag,hot,oversea,leftstyle,shopMall){
		top.main();
		nav.nav();
		banner.banner();
		flag.flag();
		hot.hot();
		oversea.oversea();
		leftstyle.leftstyle();
		shopMall.shopMall();
	

	})