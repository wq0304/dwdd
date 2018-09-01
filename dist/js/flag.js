define(["jquery"],function($){
	var flag = function(){
		flagPic();
		function flagPic(){
			$.ajax({
				url:"data/flag.json",
				success:function(data){
					console.log(data);
					for(var i=0;i<data.length;i++){
						$(`<li class="flag-li">
						<a href="#">
							<img src="${data[i].img1}" alt="">
						</a>
						<div class="flag-introduce">
							<div class="falgpic-box">
								<img src="${data[i].img2}" alt="">
								<div class="hengxian">
								</div>
							</div>
							<div class="flag-miaoshu">
								<p>${data[i].text1}</p>
								<p>${data[i].text2}</p>
							</div>

						</div>
					</li>`).appendTo($(".flagpic-box"))
					}
				}

			})
			$(".flagpic-box").on("mouseover","li",function(){
				$(this).find(".flag-introduce").stop().animate({
					top:175
				})
			}).on("mouseout","li",function(){
				$(this).find(".flag-introduce").stop().animate({
					top:275
				})
			})
		}
	}
	return{
		flag:flag
	}
	
})