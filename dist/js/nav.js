define(["jquery"],function($){
	var nav = function(){
	
	
		showList();
		function showList(){
			$.ajax({
				url:"data/nav.json",
				success:function(data){
					//console.log(data);
					for(var i=0;i<data.length;i++){
						$(`<li>
								<div class="menu-fenlei ">
									<a href="#" class="menu-manya "><span>${data[i].title}</span></a>
								</div >
								<div class="menu-xiangqing">
									<div class="xiangqing1">
										<h2>
											<a href="#">
												${data[i].fenlei1}
											</a>
										</h2>
										<div class="a">
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
										</div>
									</div>
									<div class="xiangqing1">
										<h2>
											<a href="#">
												${data[i].fenlei2}
											</a>
										</h2>
										<div class="a">
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
										</div>
									</div>
									<div class="xiangqing1">
										<h2>
											<a href="#">
												${data[i].fenlei3}
											</a>
										</h2>
										<div class="a">
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
											<a href="#">${data[i].s1}</a>
										</div>
									</div>
									<div class="xiangqing-btn">
										<a href="#">${data[i].m1}</a>
										<a href="#">${data[i].m2}</a>
									</div>
								</div>
							</li>`).appendTo($(".menu-box"));
					}
				}
			}).done(function(){
				
				var oAs = document.getElementsByClassName("menu-manya");
				//console.log(oAs);
				for(let i=0;i<oAs.length;i++){
					oAs[i].style.background="url(../images/nav.png)no-repeat";
					oAs[i].style.backgroundPosition = "-5px"+" "+i*(-32)+"px";
				};
				$("#classify-li").on("mouseover",function(){
					$(".menu-left").css("display","block");
				}).on("mouseout",function(){
					$(".menu-left").css("display","none");
				});
				$(".menu-box").on("mouseover","li",function(){
					$(this).find(".menu-xiangqing").css("display","block");
					$(this).css({
						background:"rgba(0,0,0,.5)"
					})
				})
				$(".menu-box").on("mouseout","li",function(){
					$(this).find(".menu-xiangqing").css("display","none");
					$(this).siblings("li").css({
						background:"rgba(255,255,255,.5)"
					});
					$(this).css({
						background:"rgba(255,255,255,.5)"
					})
				})

			})
		}
	}
	return{
		nav:nav
	}
})