console.log("加载完成");
require.config({
	paths:{
		"jquery":"jquery-1.11.0",
		"jquery-cookie":"jquery.cookie",
		"top":"top",
		"nav":"nav"
		
	},
	shim:{
		"jquery-cookie":["jquery"]

	}

})
require(["list","top","nav"],function(list,top,nav){
		list.list();
		top.main();
		nav.nav();

	})