define(["jquery"],function($){
	var shopMall = function(){
		shop();
		classbag();
		promotion();
		fixed();
		function shop(){
			$.ajax({
				url:"data/shopmall.json",
				success:function(data){
					//console.log(data);
					for(var i=0;i<data.length;i++){
						$(`<li class="shopmall-li1">
								<div class="shopmall-total">
									<a href="#">
										<div class="shopmall-halft">${data[i].chineseN}</div>
									</a>
									<a href="#">
										<div class="shopmall-halfb">${data[i].englishN}
											<div class="kuang">
									
											</div>
										</div>
							
									</a>
								</div>
							</li>`
						).appendTo($(".shopmall-ul1"));
					}
				}
			}).done(function(){
				$(".shopmall-li1").on("mouseover",".shopmall-total",function(){
					$(this).stop().animate({
						top:-50
					})
				});
				$(".shopmall-li1").on("mouseout",".shopmall-total",function(){
					$(this).stop().animate({
						top:0
					})
				});

			})
		};
		function classbag(){
			$.ajax({
				url:"data/classbag.json",
				success:function(data){
					//console.log(data);
					for(var i=0;i<data.length;i++){
						if(i==0){
							for(var j in data[i]){
								$(`<li>
									<a href="#">
										${data[i][j]}
									</a>
									</li>`
								).appendTo($(".good1-link"));
							}
						}
						if(i==1){
							
							$(`<li>
								<a href="#"><img src="${data[i].src1}" alt=""></a>
								<a href="#"><img src="${data[i].src2}" alt=""></a>
								<a href="#"><img src="${data[i].src3}" alt=""></a>
								<a href="#"><img src="${data[i].src4}" alt=""></a>
							</li>
							<li>
								<a href="#"><img src="${data[i].src5}" alt=""></a>
								<a href="#"><img src="${data[i].src6}" alt=""></a>
								<a href="#"><img src="${data[i].src7}" alt=""></a>
								<a href="#"><img src="${data[i].src8}" alt=""></a>
							</li>
							<li>
								<a href="#"><img src="${data[i].src9}" alt=""></a>
								<a href="#"><img src="${data[i].src10}" alt=""></a>
								<a href="#"><img src="${data[i].src11}" alt=""></a>
								<a href="#"><img src="${data[i].src12}" alt=""></a>
							</li>
								`).appendTo($(".goodpic-ul"));
								
							
						}
						if(i==2){
							$(`<a href="#">
							<img src="${data[i].img}" alt="">
							</a>
							<div class="good2pic-top">
							<p>${data[i].img}</p>
							<p></p>
							<p>${data[i].txt1}</p>
							<p>${data[i].txt2}</p>
							</div>`).appendTo($(".good2-pic"))
						}
						if(i==3){
							for(var m in data[i]){
								$(`<div>
								<a href="#">
									<img src="${data[i][m]}" alt="">
								</a>
								</div>`).appendTo($(".classbag-good3"));
							}
							
						}
					}
				}
			})
			.done(function(){
				var index1 = 0;
				var length = $(".goodpic-ul li").size();
				
				$(".goods-p1").click(function() {
					
					index1--;
					if(index1==-1){
						index1 = length-1;
					}
					/*$(".goodpic-ul").stop().animate({
						left:-index1*220
					});*/
					slidermove();
				
				});
				$(".goods-p2").click(function(){
					index1++;
					if(index1==length){
						index1=0;
					}
					/*$(".goodpic-ul").stop().animate({
						left:-index1*220
					});*/
					slidermove();
				});
				$(".anniu").find("div").click(function(){

					$(this).attr("class","active-good").siblings("div").attr("class","");
					index1=$(this).index()-1;
					$(".goodpic-ul").stop().animate({
						left:-index1*220
					});
				});
				function slidermove(){
					$(".goodpic-ul").stop().animate({
						left:-index1*220
					});
					$(".anniu").find("div").eq(index1).attr("class","active-good").siblings('div').attr("class","");
				}
				
			})
	
		};

		function promotion(){
			console.log(1);
			$.ajax({
				url:"data/promotion.json",
				success:function(data){
					console.log(data);
					for(var i=0;i<data.length;i++){
						if(i==0){
							$(`<div class="promo-pic1">
									<a href="#">
										<img src="${data[i].img1}" alt="">
									</a>
								</div>
								<div class="promo-pic2">
									<a href="#">
										<img src="${data[i].img2}" alt="">
									</a>
								</div>
								<div class="promo-pic3">
									<a href="#">
										<img src="${data[i].img3}" alt="">
									</a>
								</div>`).appendTo($(".promotion1"))
						}
						if(i==1){
							$(`<div class="promo2-pic1">
								<a href="#">
									<img src="images/promo4.jpg" alt="">
								</a>
								</div>
								<div class="promo2-pic2">
									<a href="#">
										<img src="images/promo5.jpg" alt="">
									</a>
								</div>
								<div class="promo2-pic3">
									<a href="#">
										<img src="images/promo6.jpg" alt="">
									</a>
								</div>`).appendTo($(".promotion2"))	
						}
						if(i==2){
							for(var j in data[i]){
								$(`<div class="proleft-pic">
									<a href="#">
										<img src="${data[i][j]}" alt="">
									</a>
									<div id="po1"></div>
									<div id="po2"></div>
									<div id="po3"></div>
									<div id="po4"></div>
								</div>`).appendTo($(".proleft"))
							}
						}
						if(i==3){
							for(var j in data[i]){
								$(`<li>
									<a href="#">
										<img src="${data[i][j]}" alt="">
									</a>

								</li>`).appendTo('.blankbox');
							}
							
						}
					}
				}
			}).done(function(){
				$('.blankbox').find("li").eq(0).css("zIndex","20");
				var m=20;
				$(".proleft-pic").on("mouseover",function(){
					$(this).find("#po1").stop().animate({
						width:193,
						height:1
					});
					$(this).find("#po2").stop().animate({
						width:1,
						height:64
					});
					$(this).find("#po3").stop().animate({
						width:1,
						height:64,
						top:0
					});
					$(this).find("#po4").stop().animate({
						width:193,
						height:1,
						left:0
					});
					
					var a = $(this).index();
					
					/*console.log(a);*/
					/*console.log($(".blankbox li").size());*/
					$(".blankbox li").eq(a).css({
						zIndex: m++
					}) 
				})
				$(".proleft-pic").on("mouseout",function(){
					$(this).find("#po1").stop().animate({
						width:0,
						height:1
					});
					$(this).find("#po2").stop().animate({
						width:1,
						height:0
					});
					$(this).find("#po3").stop().animate({
						width:1,
						height:0,
						top:64
					});
					$(this).find("#po4").stop().animate({
						width:0,
						height:1,
						left:193
					});
				})
			})
		};

		function fixed(){
			$(".menu-bao-div").on("mouseover",function(){
				
				$(this).css({
					background:"url(../images/share01.png)no-repeat -89px -123px #b28247"
				})
			}).on("mouseout",function(){
				$(this).css({
					background:"url(../images/share01.png)no-repeat -86px -159px #333"

				})

			});
			$(".zichan-div").on("mouseover",function(){
				$(this).css({
					background:"url(../images/share01.png)no-repeat -140px -123px #b28247"
				});
				$(".zichan-tab").css("display","block")
			}).on("mouseout",function(){
				$(this).css({
					background:"url(../images/share01.png)no-repeat -140px -154px #333"
				});
				$(".zichan-tab").css("display","none");

				
			});
			$(".zichan-tab").on("mouseover",function(){
					$(".zichan-div").css({
						background:"#b28247"
					})
				}).on("mouseout",function(){
					$(this).css("display","none");
					$(".zichan-div").css({
						background:"background: url(../images/share01.png)no-repeat -140px -154px #333"
					})
				})
		//喜欢
			$(".like-div").on("mouseover",function(){
				$(this).css({
					background:"url(../images/share01.png)no-repeat -202px -123px #b28247"
				});
				$(".like-tab").css("display","block")
			}).on("mouseout",function(){
				$(this).css({
					background:"url(../images/share01.png)no-repeat -202px -154px #333"

				});
				$(".like-tab").css("display","none");
				
			});
			$(".like-tab").on("mouseover",function(){
					$(".like-div").css({
						background:"#b28247"
					})
				}).on("mouseout",function(){
					$(this).css("display","none");
					$(".like-div").css({
						background:"background: url(../images/share01.png)no-repeat -202px -154px #333"
					})
				})
				//咨询
			$(".zixun-div").on("mouseover",function(){
				$(this).css({
					background:"url(../images/share01.png)no-repeat -258px -123px #b28247"
				});
				$(".zixun-tab").css("display","block")
			}).on("mouseout",function(){
				$(this).css({
					background:"url(../images/share01.png)no-repeat -258px -163px #333"

				});
				$(".zixun-tab").css("display","none");
			});
			$(".zixun-tab").on("mouseover",function(){
					$(".zixun-div").css({
						background:"#b28247"
					})
				}).on("mouseout",function(){
					$(this).css("display","none");
					$(".zixun-div").css({
						background:"background: url(../images/share01.png)no-repeat -258px -163px #333"
					})
			})
		}
	}
	return{
		shopMall:shopMall
	}
})