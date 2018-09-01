define(["jquery"],function($){
	var regist = function(){
		
		var oPhone = document.getElementById("phone-input");
		
		var oSpanphone = document.getElementById("phone-span");
		var oIcode = document.getElementById("inputcode");
		var oGetcode = document.getElementById("getcode");
		var oChangecode = document.getElementById("change-code");
		var oErrorc = document.getElementById("codeerror");
		var iPass = document.getElementById("inpass");
		var tPass = document.getElementById("tpass");
		var oSuggest = document.getElementById("pasuggest");
		var oCpass=document.getElementById("confirmpa");
		var oBtn = document.getElementById("regist-btn");
		oPhone.onblur = function(){
			var str = /^1[34578][0-9]{9}$/;
			if(str.test(oPhone.value)){
				oSpanphone.style.display="none";
				oPhone.style.border="1px solid #cccccc";
			}else{
				oSpanphone.style.display="block";
				oSpanphone.innerHTML = "请输入11位数字的手机号码";
				oPhone.style.border="1px solid #d00";
			}
		}

		oGetcode.onclick = function(){
			oGetcode.innerHTML = testCode(4);
		}
		oChangecode.onclick = function(){
			oGetcode.innerHTML = testCode(4);
		}
		oIcode.onblur = function(){
			var val1 = oGetcode.innerHTML.toLowerCase();;
			var val2 = oIcode.value.toLowerCase();;
			if(val1==val2){
				oIcode.style.border="1px solid #ccc";
				oErrorc.style.display="none";
			}else{
				oIcode.style.border="1px solid #d00";
				oErrorc.innerHTML="验证码错误";
				oErrorc.style.display="block";
			}
		}
		//输入密码
		iPass.onblur = function(){
			
			if(iPass.value.length<6||iPass.value.length>20){
				iPass.style.border="1px solid #d00";
				oSuggest.innerHTML = "建议使用数字字母，6-20位";
				oSuggest.style.display="block";
			}else if(!(/^[A-Za-z0-9]+$/.test(iPass.value))){
				iPass.style.border="1px solid #d00";
				oSuggest.innerHTML = "建议使用数字字母，6-20位";
				oSuggest.style.display="block";
			}else{
				oSuggest.style.display="none";
				iPass.style.border="1px solid #ccc";
			}
		}
		//确认密码

		oCpass.onblur = function(){
			if(oCpass.value==iPass.value){
				tPass.style.display="none";
				oCpass.style.border = "1px solid #ccc";
			}else{
				tPass.style.display="block";
				oCpass.style.border = "1px solid #d00";
			}
		}
		$(".regist-sub").mouseover(function(){
			
			$(this).css({
				background:"#651d1d"
			})
		}).mouseout(function(){
			$(this).css({
				background:"#292929"
			})
		})






		function testCode(n){
			var arr = [];
			for(var i = 0; i < n; i++){
				var num = parseInt(Math.random()*100);
				if(num >= 0 && num <= 9){
					arr.push(num);
				}else if(num >= 65 && num <= 90){
					var str = String.fromCharCode(num);
					arr.push(str);
				}else if(num >= 17 && num <= 42){
					var str1 = String.fromCharCode(num+80);
					arr.push(str1);
				}else{
					i--;
					//避免消耗循环的次数 也就是当他循环到不是这几个数的时候再让他随机一次
				}
			}
			return arr.join("");
		}

	}
	return{
		regist:regist
	}
})