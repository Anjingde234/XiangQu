
	$(function(){
				$('.square').mouseover(function(){
					$('.square span').addClass("bank");
					$('.square a').addClass("colors");
					$(this).siblings().children().removeClass("bank");
					$(this).siblings().children().removeClass("colors");
				});
			});
