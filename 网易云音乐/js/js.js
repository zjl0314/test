$.ajax({
	type: "get", //请求方式
	url: "json.json", //接口
	async: false, //是否异步
	success: function(data) { //请求成功执行
		/*nav_one*/
		$.each(data[0].header[0], function(i, t) {
			/*console.log(t[0])*/
			$(".nav_one_ul").append($("<li style='background:#000000;'><a href='#' style='color:#FFFFFF;'>" + t[0] + "</a></li>"))
			for(var i = 1; i < t.length; i++) {
				$(".nav_one_ul").append($("<li><a href='#'>" + t[i] + "</a></li>"))
			}
		})
		/*nav_two*/
		$.each(data[0].header[1], function(i, t) {
			$(".nav_two_ul").append($("<li><a href='#' style='background:#9B0909;border-radius: 20px;font-size: 12px;color: white;'>" + t[0] + "</a></li>"))
			for(var i = 1; i < t.length; i++) {
				$(".nav_two_ul").append($("<li><a href='#'>" + t[i] + "</a></li>"))
			}
		})
		/*banner*/
		$.each(data[0].header[2], function(i, t) {
			for(var i = 1; i < t.length; i++) {
				var divList = $("<div class='swiper-slide'></div>").append($("<img/>").attr("src", t[i].url))
				//						console.log(divList)
				$(".swiper-wrapper").append(divList)
				//                       imgList.appendTo($(""))
				//						liList.append($(".banner-img"))
				//						imgList.appendTo($(".banner-img"))
			}
			//					console.log(t[0])
		});
		
		
		
		
		$.each(data[0].header[3]["banner-behind"], function(i, t) {
//            for(var i=0;i<t.length;i++){
              	var bannerHehind = $("<img/>").appendTo($("<div class='banner-behind'></div>"))
//            var i=0;
//             $(".swiper-button-prev").click(function(){	
//           	
//           	i++;
//           })
			$(".banner").css("background", `url(${data[0].header[3]["banner-behind"][0]})repeat-x`)
			bannerHehind.appendTo($(".banner"))
//           }		
		  });
        
	},
	error: function() { //请求失败执行

	}
});
/*搜索框*/
$(".searchbox").focus(function() {
	this.placeholder = "";

}).blur(function() {
	this.placeholder = "音乐/视频/电台/用户";
})

/*登录隐藏*/
$(".login").mouseover(function() {
	$(".login_menu").show();
	$(".icon-arrLeft-fill").show();

}).mouseout(function() {
	$(".login_menu").hide();
	$(".icon-arrLeft-fill").hide();
})
$(".login_menu").mouseover(function() {
	$(".login_menu").show();
	$(".icon-arrLeft-fill").show();
}).mouseout(function() {
	$(".login_menu").hide();
	$(".icon-arrLeft-fill").hide();
})
var swiper = new Swiper('.swiper-container', {
	autoplay:true,
	spaceBetween: 30,
	loop: true,
	effect: 'fade',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
})
/*换banner背景色*/
//$(".swiper-button-prev").on("click",function(){
//	for(var k=0;k<$(".banner-behind").length;k++){
//		$(".banner").css("background-image",`url($())`)
//	}
//})
