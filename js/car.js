define(["jquery","jquery-cookie"],function($){
	var car = function(){
		
		var carStr = $.cookie("goodcar")?$.cookie("goodcar"):"";
		var arr = eval(carStr);
		alert(arr.length);
		
		if(arr.length==0){
			$(".blank-car").css("display","block");
		}else{
			var arr = eval(carStr);
			//console.log(arr);
			$.ajax({
				url:"data/detail.json",
				success:function(data){
					var crr = data[0];
					for(var i = 0; i < arr.length;i++){
						var num = arr[i].num;
						var pricef = crr[arr[i].id].price;
						var price =pricef.slice(1);
						var he = num * price;
						$(`<ul class="cargood" id="${arr[i].id}">
								<li class="goodname">
									<a href="#">
										<img src="${crr[arr[i].id].img1}" alt="">
									</a>
									
									<div class="goodname-txt">
										<a href="#">
											<span class="goodname-span">
												${crr[arr[i].id].jieshao}
											</span>
										</a>
									</div>	
								</li>
								<li class="goodnature">
									<span>
										${crr[arr[i].id].color}
									</span>
								</li>
								<li class="goodprice">
									<span>
										${crr[arr[i].id].price}
									</span>
								</li>
								<li class="goodnum">
									<input type="button" class="numdec" value="-">
									<input type="text" class="goodnums"
									value="${arr[i].num}">
									<input type="button" class="numadd" value="+">
								</li>
								<li class="active-mes"> 
									<span>
										-
									</span>
								</li>
								<li class="goodhe">
									<span>
										${he}
									</span>
								</li>
								<li class="goodcao">
									<span>
										删除
									</span>
								</li>
						</ul> `).appendTo($(".carlist-con"))
					}
					
				}
			}).done(function(){
				//给按钮添加商品数量
				$(".numadd").click(function(){
					var id = $(this).parents(".cargood").attr("id");
					var carStr1 = $.cookie("goodcar")?$.cookie("goodcar"):"";
					var carObj1 = eval(carStr1);
					carObj1[id].num += 1;
					$(this).siblings(".goodnums").val(carObj1[id].num);
					var pricem = $(this).parents(".cargood").find(".goodprice").find("span").html();
					var price = pricem.slice(12,18);
					//console.log(price);
					$(this).parents(".cargood").find(".goodhe").find("span").html(carObj1[id].num*price);
					carStr1 = JSON.stringify(carObj1);
					$.cookie("goodcar",carStr1,{
						expires:7
					});
					
					//console.log($.cookie("goodcar"));
				})
				//给按钮减少商品的数量
				$(".numdec").click(function(){
					var id = $(this).parents(".cargood").attr("id");
					var carStr1 = $.cookie("goodcar")?$.cookie("goodcar"):"";
					var carObj1 = eval(carStr1);
					console.log(carObj1[id].num);
					if(carObj1[id].num > 1){
						carObj1[id].num -= 1;
						$(this).siblings(".goodnums").val(carObj1[id].num);
						var pricem = $(this).parents(".cargood").find(".goodprice").find("span").html();
						var price = pricem.slice(12,18);
						//console.log(price);
						$(this).parents(".cargood").find(".goodhe").find("span").html(carObj1[id].num*price);
						carStr1 = JSON.stringify(carObj1);
						$.cookie("goodcar",carStr1,{
							expires:7
						})
					}
					
				})
				//给input添加写入的事件
				$(".goodnums").blur(function(){
					var id = $(this).parents(".cargood").attr("id");
					var carStr1 = $.cookie("goodcar")?$.cookie("goodcar"):"";
					var carObj1 = eval(carStr1);
					var pattern = /^\d+$/;
					if(!pattern.test($(this).val())){
						carObj1[id].num = 1;
						$(this).val("1");
					}else{
						carObj1[id].num = parseInt($(this).val());
					}
					var pricem = $(this).parents(".cargood").find(".goodprice").find("span").html();
					var price = pricem.slice(12,18);
					//console.log(price);
					$(this).parents(".cargood").find(".goodhe").find("span").html(carObj1[id].num*price);
					carStr1 = JSON.stringify(carObj1);
					$.cookie("goodcar",carStr1,{
						expires:7
					});

				})
				//删除事件
				$(".goodcao").find("span").click(
					function(){
						console.log(1);
					var id = $(this).parents(".cargood").remove().attr("id");
					var carStr1 = $.cookie("goodcar")?$.cookie("goodcar"):"";
					var carObj1 = eval(carStr1);
					carObj1.splice(id,1);
					
					carStr1 = JSON.stringify(carObj1);
					
					$.cookie("goodcar",carStr1,{expires:7});
					var a = $.cookie("goodcar");
					var b = eval(a);
					console.log(b.length);
					if(b.length==0){
						$(".blank-car").css("display","block");
					}
				})
			})
			
		}

	
		


	}
	return{
		car:car
	}
})