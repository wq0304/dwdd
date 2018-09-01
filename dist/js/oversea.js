define(["jquery"],function($){
	var oversea = function(){
		$.ajax({
			url:"data/oversea.json",
			success:function(data){
				console.log(data);
				for(var i=0;i<data.length;i++){
					$(`<li>
					<a href="#" class="sealife-a">
						<img src="${data[i].src}" alt="">
					</a>
				</li>`).appendTo($(".sealife-ul"))
				}
				
			}
		})
	}
	return{
		oversea:oversea
	}
})