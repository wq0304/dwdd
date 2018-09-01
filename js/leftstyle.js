define(["jquery"],function($){
	var leftstyle = function(){
		getThree();
		function getThree(){
			$.ajax({
				url:"data/leftstyle.json",
				success:function(data){
					
					for(var i=0;i<data.length;i++){
					if(i!=2){
						$(`<li class="leftbao">
							<div class="storesameleft">
								<a href="#">
									<img src="${data[i].bigimg}" alt="">
								</a>
							</div>
							<div class="storesameright">
								<div class="storesametop">
									<div class="store-top1">
										<div class="storetop1-txt">
											<p>${data[i].fular}</p>
											<p>${data[i].name}</p>
											<p>${data[i].dolor}</p>
										</div>
										<div class="storetop1-pic">
											<a href="">
												<img src="${data[i].smallimg}" alt="">
											</a>
										</div>
									</div>
									<div class="store-top2">
										<div class="storetop1-txt">
											
											<p>${data[i].bardot}</p>
											<p>${data[i].monye}</p>
										</div>
										<div class="storetop1-pic">
											<a href="">
												<img src="${data[i].middleimg}" alt="">
											</a>
										</div>
									</div>
									<div class="store-top1">
										<div class="storetop1-txt">
											<p>${data[i].fular}</p>
											<p>${data[i].name}</p>
											<p>${data[i].dolor}</p>
										</div>
										<div class="storetop1-pic">
											<a href="">
												<img src="${data[i].smallimg}" alt="">
											</a>
										</div>
									</div>
								</div>
								<div class="storesamebottom">
									<div class="store-bottom1">
										<div class="storebtm-txt">
											
											<p>${data[i].bardot}</p>
											<p>${data[i].monye}</p>
										</div>
										<div class="storebtm-pic">
											<a href="#">
												<img src="${data[i].smallimg}" alt="">
											</a>
										</div>
										
									</div>
									<div class="store-bottom1">
										<div class="storebtm-txt">
											<p>${data[i].fular}</p>
											<p>${data[i].name}</p>
											<p>${data[i].dolor}</p>
										</div>
										<div class="storebtm-pic">
											<a href="#">
												<img src="${data[i].smallimg}" alt="">
											</a>
										</div>
										
									</div>
									<div class="store-bottom1">
										<div class="storebtm-txt">
											<p>${data[i].fular}</p>
											<p>${data[i].name}</p>
											<p>${data[i].dolor}</p>
										</div>
										<div class="storebtm-pic">
											<a href="#">
												<img src="${data[i].smallimg}" alt="">
											</a>
										</div>
										
									</div>
								</div>
							</div>
						</li>`).appendTo($(".lifemovebox"));
					}
						
					if(i==2){
							$(`<li class="leftbao">
							<div class="lifestyle1">
							<div class="lifehover">
								<dl>
									<dd>
										<a href="#">
											<img src="${data[i].img1}" alt="">
										</a>
									</dd>
									<dt>
										<a href="#">
											<ul>
												<li>明星生活款</li>
												<li>Bolligner</li>
												<li></li>
												<li>007特别纪念版珍藏香槟礼盒</li>
											</ul>
										</a>
									</dt>
								</dl>
							</div>
							</div>
							<div  class="lifestyle1">
							<div class="lifehover2">
								<dd>
									<a href="#">
										<img src="${data[i].img2}" alt="">
									</a>
								</dd>
								<dt>
									<ul>
										<li>生活方式</li>
										<li>Joseph Joseph</li>
										<li style="width:30px;height:2px; background:#fff;margin-left:90px"></li>
										<li>方形彩虹蒸汽笼三件套，易收纳清洁蒸笼套装</li>
									</ul>
								</dt>
							</div>
							<div class="lifehover2">
								<dd>
									<a href="#">
										<img src="${data[i].img2}" alt="">
									</a>
								</dd>
								<dt>
									<ul>
										<li>生活方式</li>
										<li>Joseph Joseph</li>
										<li style="width:30px;height:2px; background:#fff;margin-left:90px"></li>
										<li>方形彩虹蒸汽笼三件套，易收纳清洁蒸笼套装</li>
									</ul>
								</dt>
								</div>
							</div>
							<div  class="lifestyle1" id="margin-life">
							<div class="lifehover2">
								<dd>
									<a href="#">
										<img src="${data[i].img2}" alt="">
									</a>
								</dd>
								<dt>
									<ul>
										<li>生活方式</li>
										<li>Joseph Joseph</li>
										<li style="width:30px;height:2px; background:#fff;margin-left:90px"></li>
										<li>方形彩虹蒸汽笼三件套，易收纳清洁蒸笼套装</li>
									</ul>
								</dt>
							</div>
							<div class="lifehover2">
								<dd>
									<a href="#">
										<img src="${data[i].img2}" alt="">
									</a>
								</dd>
								<dt>
									<ul>
										<li>生活方式</li>
										<li>Joseph Joseph</li>
										<li style="width:30px;height:2px; background:#fff;margin-left:90px"></li>
										<li>方形彩虹蒸汽笼三件套，易收纳清洁蒸笼套装</li>
									</ul>
								</dt>
							</div>
						</div>
						</li>`).appendTo($(".lifemovebox"));
						}
					}
				}
			}).done(function(){
				$(".itembtn-1").click(function(){
					$(this).attr("class","active").siblings().removeClass('active');
					$(".lifemovebox").stop().animate({
						left:0
					})
				});
				$(".itembtn-2").click(function(){
					$(this).attr("class","active").siblings().removeClass('active');
					$(".lifemovebox").stop().animate({
						left:-1200
					})
				});
				$(".itembtn-3").click(function(){
					$(this).attr("class","active").siblings().removeClass('active');
					$(".lifemovebox").stop().animate({
						left:-2400
					})
				});
				$(".store-top1").mouseover(function(){
					$(this).find(".storetop1-txt").stop().animate({
						left:40+"%"
					})
					$(this).find(".storetop1-pic").stop().animate({
						left:25+"%"
					})
				}).mouseout(function(){
					$(this).find(".storetop1-txt").stop().animate({
						left:45+"%"
					})
					$(this).find(".storetop1-pic").stop().animate({
						left:20+"%"
					})
				});
				$(".store-top2").mouseover(function(){
					$(this).find(".storetop1-txt").stop().animate({
						left:50
					})
					$(this).find(".storetop1-pic").stop().animate({
						left:35+"%"
					})
				}).mouseout(function() {
					$(this).find(".storetop1-txt").stop().animate({
						left:60
					})
					$(this).find(".storetop1-pic").stop().animate({
						left:30+"%"
					})
				});
				$(".store-bottom1").mouseover(function(){
					$(this).find(".storebtm-txt").stop().animate({
						left:20+"%"
					})
					$(this).find(".storebtm-pic").stop().animate({
						left:30+"%"
					})
				}).mouseout(function() {
					$(this).find(".storebtm-txt").stop().animate({
						left:25+"%"
					})
					$(this).find(".storebtm-pic").stop().animate({
						left:25+"%"
					})
				});

				$(".lifehover").hover(function(){
					$(this).find("dt").stop().animate({
						width:398,
						
						top:0,
						left:0
						
					},300)
				},function(){
					$(this).find("dt").stop().animate({
						width:0,
						left:50+"%"
					},300)
				});
				$(".lifehover2").hover(function(){
					$(this).find("dt").stop().animate({
						width:398,
						
						top:0,
						left:0
						
					},300)
				},function(){
					$(this).find("dt").stop().animate({
						width:0,
						left:50+"%"
					},300)
				});

				
			})

		}
		
	};
	return{
		leftstyle:leftstyle
	}
})