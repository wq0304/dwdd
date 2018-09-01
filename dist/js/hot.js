define(["jquery"],function($){
	var hot = function(){
		getHot();
		function getHot(){
			$.ajax({
				url:"data/hot.json",
				success:function(data){
					console.log(data);
					for(var i=0;i<data.length;i++){
						$(`<div class="hot-change">
							<div class="hotimg-box">
								<img src="${data[i].img1}" alt="">
							</div>
							
							<div class="hot-introduce">
								<p class="hot-p1">
									${data[i].text1}
								</p>
								<p class="hot-p2">
									
								</p>
							</div>
							<div class="div2"></div>
							<div class="div3"></div>
							<div class="div4"></div>
							<div class="div5"></div>

							`).appendTo($(".hottop-li1"));
						$(`<div class="hot-change">
							<div class="hotimg-box">
								<img src="${data[i].img2}" alt="">
							</div>
							
							<div class="hot-introduce">
								<p class="hot-p1">
									${data[i].text2}
								</p>
								<p class="hot-p2">
									
								</p>
							</div>
							<div class="div2"></div>
							<div class="div3"></div>
							<div class="div4"></div>
							<div class="div5"></div>
							`).appendTo($(".hottop-li2"));
					}

					
				}
			});
			$(".hot-left").click(function(){
				$(".hotstore-top").stop().animate({
					left:-1200
					
				})
			});
			$(".hot-right").click(function(){
				$(".hotstore-top").stop().animate({
					left:0
					
				})
			});
			console.log($(".hottop-li"));
			$(".hottop-li").on("mouseover",".hot-change",function(){
				$(this).find(".div2").stop().animate({
					width:166,
					height:1
				});
				$(this).find(".div3").stop().animate({
					width:1,
					height:86
				});
				$(this).find(".div4").stop().animate({
					width:1,
					height:84,
					top:0
				});
				$(this).find(".div5").stop().animate({
					width:166,
					height:1,
					left:0
				});
				$(this).find(".hotimg-box").css("display","none");
				$(this).find("hot-introduce").css("display","block");

			});
			$(".hottop-li").on("mouseout",".hot-change",function(){
				$(this).find(".div2").stop().animate({
					width:0,
					height:1
				});
				$(this).find(".div3").stop().animate({
					width:1,
					height:0
				});
				$(this).find(".div4").stop().animate({
					width:1,
					height:0,
					top:83
				});
				$(this).find(".div5").stop().animate({
					width:0,
					height:1,
					left:165
				});
				$(this).find(".hotimg-box").css("display","block");
				$(this).find("hot-introduce").css("display","none");

			})

		}
	}
	return{
		hot:hot
	}
})