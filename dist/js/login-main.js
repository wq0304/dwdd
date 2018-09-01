console.log("加载完成");
require.config({
	paths:{
		"jquery":"jquery-1.11.0",
		
		"login":"login"
		
	},
	shim:{
		"jquery-cookie":["jquery"]

	}

})
require(["login"],function(login){
		
	login.login();
	})