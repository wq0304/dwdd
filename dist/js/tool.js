define(function(){
	var tool = function(){
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
	}
		


	return{
		tool:tool
	}
})
