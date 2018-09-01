define(["jquery"],function($){
	var main = function(){
		getTop();
		function getTop(){
			$.ajax({
				url:"data/top.json",
				success:function(data){
					//console.log(data);
					$(`<img src="${data[0].img}" alt="">`).appendTo($('#top'));
				}
			})
		}
		header();
		function header(){
			$(".my-five").hover(function(){
				$(this).css({
					background:"#fff",
					
				});
				$("#myfive-dd").css({
					display:"block",
					background:"#fff"
					
				});
				$("#myfive-em").css({
					background:"url(../images/share02.png) no-repeat -325px -30px"
				});
				$(".myfive-a").css("color","orange");
				$("#myfive-dd").find("a").hover(function(){
					$(this).css("color","#d00");
				},function(){
					$(this).css("color","#666");
				});
				
			},function(){
				$(this).css("background","");
				$("#myfive-dd").css("display","none");
				$("#myfive-em").css({
					background:"url(../images/share01.png) no-repeat -384px -320px"
				});
				$(".myfive-a").css("color","#666");
			});


			$(".phonedown").hover(function(){
				$(this).css("background","#fff")
				$(this).find("a").css("color","#d00");
				$(".phonedown").find("em").css({
					background:"url(../images/share02.png) no-repeat -325px -30px"
				});
				$(".phone-qr").css({
					display:"block",
					zIndex:20
				});
			},function(){
				$(this).css("background","");
				$(this).find("a").css("color","#666");
				$(".phonedown").find("em").css({
					background:"url(../images/share01.png) no-repeat -384px -320px"
				});
				$(".phone-qr").css("display","none");
			})
		};
		search();
		function search(){
			$.ajax({
				url:"data/search.json",
				success:function(data){
					//console.log(data);
					for(var i = 0;i<data.length;i++){
						$(`<li>
						<a href="#">
							${data[i].name}
						</a>
						</li>`).appendTo($(".search-ul1"))
					}
				}
			})
		}
	}
	return{
		main:main
	}
})

