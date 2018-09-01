console.log("加载完成");
require.config({
	paths:{
		"jquery":"jquery-1.11.0",

		"regist":"regist"
		
	},
	shim:{
		"jquery-cookie":["jquery"]

	}

})
require(["regist"],function(regist){
		
	regist.regist();
	})