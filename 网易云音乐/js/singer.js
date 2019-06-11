$.ajax({
	type:"get",
	url:"singer.json",
	async:false,
	success: function(data) { //请求成功执行
		$.each(data[0].header[0], function(i,t) {
//			console.log(t)
			$(".nav_one_ul").append($("<li style='background:#000000;'><a href='#' style='color:#FFFFFF;'>" + t[0] + "</a></li>"))
			var cor=$("<sub class='cor'>&nbsp;</sub>")
			cor.appendTo(".nav_one_ul>li")
			for(var i = 1; i < t.length; i++) {
				$(".nav_one_ul").append($("<li><a href='#'>" + t[i] + "</a></li>"))
			}
			$(".nav_one_ul>li>a:eq(1)").click(function() {
					alert("该项目由于开发者懒惰，并未开发～")
				})
				$(".nav_one_ul>li>a:eq(2)").click(function() {
					alert("该项目由于开发者懒惰，并未开发～")
				})
				$(".nav_one_ul>li>a:eq(3)").click(function() {
					alert("该项目由于开发者懒惰，并未开发～")
				})
				$(".nav_one_ul>li>a:eq(4)").click(function() {
					alert("该项目由于开发者懒惰，并未开发～")
				})
				$(".nav_one_ul>li>a:eq(5)").click(function() {
					alert("该项目由于开发者懒惰，并未开发～")
				})
		});
		$.each(data[0].header[1], function(i, t) {
//			console.log(t[4])
			for(var i = 0; i < t.length; i++) {		
				$(".nav_two_ul").append($("<li><a href='#'>" + t[i] + "</a></li>"))
			}
			$(".nav_two_ul a:eq(4)").css({
				"background":"#9B0909"
			})
			$(".nav_two_ul a:eq(4)").css({
				"border-radius": "20px"
			})
			$(".nav_two_ul>li>a:eq(1)").click(function(){
				alert("该项目由于开发者懒惰，并未开发～")
			})
			$(".nav_two_ul>li>a:eq(3)").click(function(){
				alert("该项目由于开发者懒惰，并未开发～")
			})
			$(".nav_two_ul>li>a:eq(0)").attr("href","index.html")
			$(".nav_two_ul>li>a:eq(5)").attr("href","new_file.html")
			$(".nav_two_ul>li>a:eq(2)").attr("href","index_s.html")
		})
		$.each(data[0].main[0], function(i,t) {
			$.each(t, function(i,t) {
				var li_singer=$("<li class='li_singer'></li>")
				var div_singer=$("<div class='u-cover u-cover-5'></div>")
				var img_singer=$("<img/>").attr("src",t.url)
				var a_singer=$("<a class='msk' title='"+t.nam+"的音乐'></a>")
				var p_singer=$("<p></p>")
				var a_nam=$("<a class='nm nm-icn f-thide s-fc0' title='"+t.nam+"的音乐'>"+t.nam+"</a>")
				var a_img=$("<a class='f-tdn'><i class='u-icn u-icn-5' title='"+t.nam+"的个人主页'></i></a>")
				a_nam.appendTo(p_singer)
				a_img.appendTo(p_singer)
				img_singer.appendTo(div_singer)
				a_singer.appendTo(div_singer)
				div_singer.appendTo(li_singer)
				p_singer.appendTo(li_singer)
				li_singer.appendTo($(".m-cvrlst"))
			});
});
		$.each(data[0].main[1], function(i,t) {
			$.each(t, function(i,t) {
				var li_singer=$("<li></li>")
				var div_singer=$("<div class='u-cover u-cover-5'></div>")
				var img_singer=$("<img/>").attr("src",t.url)
				var a_singer=$("<a class='msk' title='"+t.nam+"的音乐'></a>")
				var p_singer=$("<p></p>")
				var a_nam=$("<a class='nm nm-icn f-thide s-fc0' title='"+t.nam+"的音乐'>"+t.nam+"</a>")
				var a_img=$("<a class='f-tdn'><i class='u-icn u-icn-5' title='"+t.nam+"的个人主页'></i></a>")
				a_nam.appendTo(p_singer)
				a_img.appendTo(p_singer)
				img_singer.appendTo(div_singer)
				a_singer.appendTo(div_singer)
				div_singer.appendTo(li_singer)
				p_singer.appendTo(li_singer)
				li_singer.appendTo($(".m-cvrlst1"))
			});
            $(".m-cvrlst1>li:eq(5)").addClass("line1")
            $(".m-cvrlst1>li:eq(6)").addClass("line1")
            $(".m-cvrlst1>li:eq(7)").addClass("line1")
            $(".m-cvrlst1>li:eq(8)").addClass("line1")
            $(".m-cvrlst1>li:eq(9)").addClass("line1")
            $(".f-tdn:eq(14)").empty()
            $(".f-tdn:eq(15)").empty()
});        
		$.each(data[0].main[2], function(i,t) {
			$.each(t, function(i,t) {
				var li_nam=$("<li class='sml'></li>")
				var a_nam=$("<a class='nm nm-icn f-thide s-fc0' title='"+t.nam+"的音乐'>"+t.nam+"</a>")
//				if(t.i){
//					
//				}
				console.log()
				if(t.index == '1'){
					var a_img=$("<a class='f-tdn'><i class='icn u-icn u-icn-1' title='"+t.nam+"的个人主页'></i></a>")
					a_img.appendTo(li_nam)
				}
				a_nam.appendTo(li_nam)
				li_nam.appendTo($(".m-cvrlst1"))
			});
		
		});
	},
	error: function() { //请求失败执行

	}
});
//搜索框
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
$(document).scroll(function(){
	var top=$(this).scrollTop()
	if(top>=100){
		$(".m-back").fadeIn()
	}else{
		$(".m-back").fadeOut()
	}
})
var i = 1;

$(".icn-vol").click(function() {
	i++;
	if(i % 2 == 0) {
		$(".m-vol").css("display", "block")
	}else{
		$(".m-vol").css("display", "none")
	}

})
$(function() {
	//			封装
	function fenz(obj) {
		//	点击方块
		obj.on('mousedown', function(e) {
			//				获取鼠标在方块里点击的值
			var disX = e.offsetX;
			disY = e.offsetY;
			//				随着鼠标移动事件
			$(document).on('mousemove', function(e) {
				//					获取鼠标距离网页边的距离
				var ax = e.pageX;
				ay = e.pageY;
				//					获取小方块移动左距离
				bL = ax - disX;
				//					获取小方块移动右距离
				bT = ay - disY;
				//					如果方块的左边边距小于0
				if(bL < 0) {
					//						方块的左边距等于0
					bL = 0
					//						反之 方块大于大方块减小方块的宽
				} else if(bL > $('#bbox').width() - $('#sbox').width()) {
					//						小方块的左边距等于大方块减小方块的宽
					bL = $('#bbox').width() - $('#sbox').width()
				}
				//					如果方块的上边边距小于0
				if(bT < 0) {
					//						方块的上边距等于0
					bT = 0
					//						反之 方块大于大方块减小方块的高
				} else if(bT > $('#bbox').height() - $('#sbox').height()) {
					//						小方块的上边距等于大方块减小方块的高
					bT = $('#bbox').height() - $('#sbox').height()
				}
				//					给小方块的父级加top和left的值
				obj.parent('#sbox').css({
					'left': bL,
					'top': bT,
				})

			})
			//				鼠标弹起关闭移动
			$(document).on('mouseup', function() {
				$(document).off('mousemove')
			})
		})
	}
	fenz($('.sb-top'))
})
$(".gbct").click(function() {
	$("#bbox").css("display", "none")
})
$(".dl").click(function() {
	$("#bbox").css("display", "inline-block")
})