define(function(){
	var banner = function(){
		var oBox = document.getElementById("box");
		var Oul1 = document.getElementById("banner-ul1");
		var oLis = Oul1.getElementsByTagName("li")
		var oP1 = document.getElementById("banner-p1");
		var oP2 = document.getElementById("banner-p2");
		var oOl = document.getElementById("banner-ol1");
		var oOllis = oOl.getElementsByTagName("li");
		getPic();
		console.log(oLis);
		function getPic(){
			ajax({
				method:"get",
				url:"data/slider.json",
				success:function(data){
					console.log(data);
					var arr = JSON.parse(data);
					var brr=[]
					for(var i=0; i< arr.length;i++){
						var oImg = document.createElement("img");
						oImg.src = arr[i].src;
						brr.push(oImg);
					}
					for(var i = 0;i<oLis.length;i++){
						oLis[i].appendChild(brr[i]);
					}
				}
			})
		}
		Oul1.style.width = oLis[0].offsetWidth * oLis.length + "px";
		var index = 0;
		var num = oLis.length;
		//给左按钮添加点击事件
		oP1.onclick = function(){
			index --;
			if(index == -1){
				index = num - 1;
			}
			sport(Oul1,{
				left:-index * oLis[0].offsetWidth
			});
			slider();
		}
		//给右按钮添加点击事件
		oP2.onclick = function(){
			index++;
			if(index == num ){
				index = 0
			}
			sport(Oul1,{
				left:-index * oLis[0].offsetWidth
			});
			slider();
		}
		//轮到哪个哪个按钮显示
		function slider(){
			for(var i = 0;i < num;i++){
				oOllis[i].style.background = "#fff";
			}
			oOllis[index].style.background = "#d00";
		}
		//给按钮添加点击事件
		for(let i = 0; i < num; i++){
			oOllis[i].onmouseover = function(){
				index = i;
				sport(Oul1,{
					left:-index * oLis[0].offsetWidth
				})
				slider();
			}
		}
		function sport(obj,json,fn){
			//1.先清除上一次的计时器
			clearInterval(obj.timer);
			//2.开启新的计时器
			obj.timer = setInterval(function(){
				//假设一个变量为true,代表所有的属性都已经到达目标
				var stop = true;
				//遍历json对象，取出所有的属性及目标值
				for(var attr in json){
					//1.获取当前的值
					var cur = 0;
					if(attr == 'opacity'){
						cur = parseInt(parseFloat(getStyle(obj,attr)) * 100)
					}else{
						cur = parseInt(getStyle(obj,attr));
					}
					
					//2.计算速度
					var speed = (json[attr] - cur) / 8;
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					//3.检测停止
					if(cur != json[attr]){
						stop = false;
					}
					if(attr == 'opacity'){
						//改变透明度
						obj.style.opacity = (cur + speed) / 100;
						obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
					}else{
						//改变其它属性值
						obj.style[attr] = cur + speed + 'px';
					}
		   //			console.log(cur,json[attr],speed);
				}
				if(stop){
					clearInterval(obj.timer);
					if(typeof fn == 'function'){
						fn();
					}
				}
			},20)
		}
		//获取非行内样式
		function getStyle(obj,attr){
			return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,true)[attr];
		}
		function ajax({method = 'get', url, data, success, error}){

			var xhr = null;

				try{
					xhr = new XMLHttpRequest();
				}catch(error){
					xhr = new ActiveXObject('Microsoft.XMLHTTP');
					console.log(error);
				}

	//判断
				if(method.toLowerCase() == 'get' && data){
					url += '?' + data;
				}

				xhr.open(method, url, true);

				if(method.toLowerCase() == 'get'){
					xhr.send();
				}else{
					xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
					xhr.send(data);
				}

				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if(xhr.status == 200){
							/*
								在这里要处理下载的数据，不能确定如何处理下载到的数据。不能确定这里的代码怎么去编写。

								【注】我们需要在这里传入一个函数，在这里去调用函数。
								   这种函数叫做回调函数。
							*/
							if(success){
								success(xhr.responseText);
							}
						}else{
							// alert('Error: ' + xhr.status);
							if(error){
								error('Error: ' + xhr.status);
							}
						}		
					}
				}
			}
	}
	return{
		banner:banner
	}
})