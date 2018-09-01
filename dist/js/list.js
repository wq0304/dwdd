define(["jquery","jquery-cookie"],function($){
	var list=function(){
		getPic();
		function getPic(){
			console.log(1);
			$.ajax({
				url:"data/list.json",
				success:function(data){
					console.log(data);
					for(var i=0;i<data.length;i++){
						$(`<div class="pitem">
								
									<div class="inbox">
										<ul class="inbox-ul1">
											<li class="inbox-img">
												<a href="/theFive/dist/detail.html" class="pitem-a"target="_blank"><img src="${data[i].img}" alt=""></a>
											</li>
											<li class="inbox-txt">
												<a href="#">
													${data[i].txt1}
												</a>
											</li>
											<li class="inbox-price">
												<a href="#">
													${data[i].price}
												</a>
											</li>
										</ul>
									</div>
								
								</div>`).appendTo($(".stblockbox-con"))
					}
				}
			}).done(function(){
				
				$(".pitem").click(function(){
					var index1 = $(this).index()-1;
					$(this).attr("id",index1);
					var goodId = $(this).attr("id");
					console.log(goodId);
					var cartStr = $.cookie("cart")?$.cookie("cart"):"";
					var cartObj = convertCartStrToObj(cartStr);
					cartObj[goodId] = {
						"id":goodId
					};

					cartStr = JSON.stringify(cartObj);
					console.log(cartStr);
					var date = new Date();
					date.setTime(date.getTime()+ 6000*60*1000);
					$.cookie("cart",cartStr,{expires:date});

				});
				function convertCartStrToObj(cartStr){
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
					if(!cartStr){
						return {};
					}
					console.log(cartStr);
					return JSON.parse(cartStr);
				}

			})
		}
	}
	return{
		list:list
	}
})