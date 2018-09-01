define(["jquery","jquery-cookie"],function($){
	var detail = function(){
		xuanxiang();
		getPic();
		function getPic(){
			$.ajax({
				url:"data/detail.json",
				success:function(data){
					
					var cartStr = $.cookie("cart");
					/*console.log(typeof(cartStr));*/
					var cartObj = convertCartStrToObj(cartStr);
					
					var arr = []
					for(var id in cartObj){
						arr.push(cartObj[id].id); 
					}
					
					var j = arr[arr.length-1];
					
					var dataObj = data[0];
					console.log(dataObj[j]);
					for(var m in dataObj[j]){
						if(m!="id"&&m!="jieshao"&&m!="color"&&m!="price"){
							$(`<li>
							<span class="mark">
								
							</span>
							<span class="float">
								
							</span>
							<img src="${dataObj[j][m]}" alt="">
						</li>`).appendTo($(".shop-topimg"));
						$(`<li class="botimg-li1">
							<img src="${dataObj[j][m]}" alt="">
						</li>`).appendTo($(".botimg-img"));
						$(`<img src="${dataObj[j][m]}" alt="">`).appendTo($(".hiden-bigimg"))
					}else if(m=="jieshao"){
						$(`<a href="#">
							${dataObj[j][m]}
							</a>
							`).appendTo($(".shoptitle-p2"))
					}else if(m=="price"){
						$(".vip-span1").html(`${dataObj[j][m]}`)
					}else if(m=="color"){
						$(`<span class="colorp1-span2">${dataObj[j][m]}</span>`).appendTo($(".color-p1"));
					}if(m=="id"){
						$(".shopdetail").attr("id",`${dataObj[j][m]}`);
					}

					}
					
				}
			}).done(function(){

				 
				$(".shop-topimg").find("li").eq(0).css("zIndex","1");
				$(".hiden-bigimg").find("img").eq(0).css("zIndex","1");
				var oMark1 = document.querySelectorAll(".mark");
				//console.log(oMark1);
				var oFloat = document.querySelectorAll(".float");
				var oTop = document.getElementById("topimg");
				var oBigs = oTop.getElementsByTagName("li");
				var oBottom = document.getElementById("bottom-botimg");
				var oSmalls = oBottom.getElementsByTagName("li");
				var oBigpic = document.getElementById("big_pic"); 
				var oBigimg = oBigpic.getElementsByTagName("img");
				var oBtn1 = document.getElementById("botbtn1");
				var oBtn2 = document.getElementById("botbtn2");
			
				 //点击切换
				var zIndex = 1;
				for(var i = 0; i < oSmalls.length; i++){
					oSmalls[i].index = i;
					oSmalls[i].onclick = function(){
					zIndex++;
					oBigs[this.index].style.zIndex = zIndex;
					oBigimg[this.index].style.zIndex = zIndex;
					}	
				}	
				//给遮罩添加移入移出的事件
				for(var i = 0; i < oMark1.length; i++){
					oMark1[i].index = i;
					oMark1[i].onmouseenter = function(){
						this.style.zIndex = "2";
						oFloat[this.index].style.display = "block";
						
						oBigpic.style.display = "block";

					}
					oMark1[i].onmouseleave = function(){
					oFloat[this.index].style.display = "none";
					oBigpic.style.display = "none";

					}
					oMark1[i].onmousemove = function(event){
					var e = event || window.event;
					//做ofloat的跟随事件
					var left = e.pageX - oTop.offsetLeft - oMark1[this.index].offsetLeft - oFloat[this.index].offsetWidth/2;
					var top = e.pageY - oTop.offsetTop - oMark1[this.index].offsetTop - oFloat[this.index].offsetHeight/2 - 250;
					//设置左边界
					if(left < 0){
						left = 0;
					}else if(left > oMark1[this.index].offsetWidth - oFloat[this.index].offsetWidth){
						left = oMark1[this.index].offsetWidth - oFloat[this.index].offsetWidth;
					}
					//设置上下的边界
					if(top < 0){
						top = 0;
					}else if(top > oMark1[this.index].offsetHeight - oFloat[this.index].offsetHeight){
						top = oMark1[this.index].offsetHeight - oFloat[this.index].offsetHeight;
					}
					//设置float的left和top的值
					oFloat[this.index].style.left = left + "px";
					oFloat[this.index].style.top = top + "px";
					//设置滑块在小图中的比列
					var pX = left / (oMark1[this.index].offsetWidth - oFloat[this.index].offsetWidth);
					var pY = top / (oMark1[this.index].offsetHeight - oFloat[this.index].offsetHeight);
					//console.log(pX,pY);
					//设置大图的移动范围（两个的比列要相同，因为图是比框要大的，图要往左移动）
						oBigimg[this.index].style.left = -pX *(oBigimg[this.index].offsetWidth - oBigpic.offsetWidth) + "px";
						oBigimg[this.index].style.top = -pY * (oBigimg[this.index].offsetHeight - oBigpic.offsetHeight) + "px";
					}
				}
		
				oBtn1.onclick = function(){
					speed = 10;
			
					if(oBottom.offsetLeft==-300){
						oBottom.style.left=-300+"px";
					}else{
						oBottom.style.left = oBottom.offsetLeft - speed + "px";
					}

				}
				oBtn2.onclick = function(){
					speed = 0;
					if(oBottom.offsetLeft==0){
						oBottom.style.left = 0 + "px";
					}else{
						oBottom.style.left = oBottom.offsetLeft + (speed+10) + "px";
					}
				}

				//给左右数字增减
				createcook();
				carNum();
				function createcook(){
					var x = $(".liang").val();
					
					var y = parseInt(x);
					$(".spanjia").click(function(){
						y++;
						$(".liang").val(y);
					});
					
					$(".spanjian").click(function(){
							y--;
							if(y==0){
								y=1;
								$(".liang").val(y);
							}else{
								$(".liang").val(y);
							}		
					});
					$(".caring").mouseover(function(){
						$(".hide-car").css("display","block");
						carList();
					}).mouseout(function(){
						$(".hide-car").css("display","none");
					})
					$("#shopping-car").click(function(){
						var h = $(".liang").val();
						var o = parseInt(h);
						var id = $(".shopdetail").attr("id");
						console.log(id);
						var first = $.cookie("goodcar") == null?true:false;
						if(first) {
							$.cookie("goodcar",`[{id:${id},num:${o}}]`,{expires:7});
						}else{
							var str = $.cookie("goodcar");
							var arr = eval(str);
							var same = false;
							for(var i = 0; i< arr.length;i++){
								if(arr[i].id == id){
									arr[i].num = parseInt(arr[i].num) +parseInt(`${o}`);
									var cookieStr = JSON.stringify(arr);
									$.cookie("goodcar",cookieStr,{expires:7});
									same = true;
									break;
								}
							}
							if(!same){
								var obj = {id:id,num:o};
								arr.push(obj);
								var cookieStr = JSON.stringify(arr);
								$.cookie("goodcar",cookieStr,{expires:7});
							}
						}
						carNum();
						console.log($.cookie("goodcar"));
						
					}) 
				}

				function carNum(){
					var str = $.cookie("goodcar");
					
					if(str){
						var arr = eval(str);
						var sum = 0;
						for(var i=0;i<arr.length;i++){
							sum += parseInt(arr[i].num);	
						} 
						$("#carNum").html(sum);
					}
				}
				carList();
				function carList(){
					$.ajax({
						url:"data/detail.json",
						success:function(data){
						
							var brr = data[0];
							
							var str = $.cookie("goodcar");
							var arr = eval(str);
							console.log(arr);
							$(".hide-car").html("");
							for(var i = 0;i<arr.length;i++){
								
								$(`<div class="hidecar1">
										<img src="${brr[arr[
											i].id].img1}" alt="">
										<div class="hidecar1-txt">
											<p class="hidecar1-p1">
												${brr[arr[i].id].jieshao}
											</p>
											<p class="hidecar1-p2">
												<span>
													${brr[arr[i].id].price}	
												</span>
												<em>
													*${arr[i].num}
												</em>
											</p>
										</div>
									</div>`).appendTo($(".hide-car"));
								$(`<div class="hidecar1-sub">
										<a href="/shop-car.html">
											<div class="hidecar1-box">
												去购物车结算
											</div>		
										</a>
									</div>`).appendTo($(".hide-car"));
							}
						}

					})
				}
				
			})
		}
			function convertCartStrToObj(cartStr){
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				if(!cartStr){
					return {};
				}
				
				return JSON.parse(cartStr);
			}
	

			function xuanxiang(){
				$(".detail-ul1 li").click(function(){
					$(this).css({
						color:"#d00"
					})
					$(this).siblings("li").css({
						color:"#666"
					})
					var a = $(this).index();
					if(a==0){
						$(".detail-pic").css("display","block");
						$(".detail-chicun").css("display","none");
						$(".detail-pingjia").css("display","none");
					}else if(a==1){
						$(".detail-pic").css("display","none");
						$(".detail-chicun").css("display","block");
						$(".detail-pingjia").css("display","none");
					}else{
						$(".detail-pic").css("display","none");
						$(".detail-chicun").css("display","none");
						$(".detail-pingjia").css("display","block");
					}
					
				})
			}



	}
	return{
		detail:detail
	}
})