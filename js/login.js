define(["jquery"],function($){
	var login = function(){
		console.log(1);
		$(".saoma-li").click(function(){
			$(this).attr("class","active-login").siblings("li").attr("class","");
			$(".login-saoma").css("display","block");
			$(".login-login").css("display","none");
		});
		$(".count-li").click(function(){
			$(this).attr("class","active-login").siblings("li").attr("class","");
			$(".login-saoma").css("display","none");
			$(".login-login").css("display","block");
		});
		$(".login-saoma").mouseover(function(){
			$(".phone-pic").stop().animate({
				width:160,
				left:220
			});
			$(".erweima").stop().animate({
				left:60
			})
		}).mouseout(function(){
			$(".phone-pic").stop().animate({
				width:0,
				left:280
			});
			$(".erweima").stop().animate({
				left:120
			})
		});
		var oTher = document.getElementById("othertype1");
			var istrue = true;
			oTher.onclick = function(){
				if(istrue){
					oTher.innerHTML = "√";
					istrue = false;
				}else{
					oTher.innerHTML = " ";
					istrue = true;
				}
		}
	}
	return{
		login:login
	}
})   