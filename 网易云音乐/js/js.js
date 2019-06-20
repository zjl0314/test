$.ajax({
	type: "get",
	url: "json.json",
	async: false,
	success: function(data) {
		/*nav_one*/
		$.each(data[0].header[0], function(i, t) {
//			$(".nav_one_ul").append($("<li><a href='#'>" + t[0] + "</a></li>"))
			
			for(var i = 0; i < t.length; i++) {
				$(".nav_one_ul").append($("<li><a href='#'>" + t[i] + "</a></li>"))
			}
			var cor = $("<sub class='cor'>&nbsp;</sub>")
			cor.appendTo(".nav_one_ul>li")
			$(".nav_one_ul>li>a:eq(1)").click(function(){
					$(".nav_one_ul>li>a:eq(1)").attr("href","wdyy.html")
			})
			$(".nav_one_ul>li>a:eq(2)").click(function(){
					$(".nav_one_ul>li>a:eq(2)").attr("href","py.html")
			})
			$(".nav_one_ul>li>a:eq(3)").click(function(){
					alert("该项目由于开发者懒惰，并未开发～")
			})
			$(".nav_one_ul>li>a:eq(4)").click(function(){
				$(".nav_one_ul>li>a:eq(4)").attr("href","w_index.html")
			})
			$(".nav_one_ul>li>a:eq(5)").click(function(){
					$(".nav_one_ul>li>a:eq(5)").attr("href","down.html")
			})
			$(".nav_one_ul>li:eq(0)").css({
			"background": "#000",
			"color": "#333"
		})
		})
		/*nav_two*/
		$.each(data[0].header[1], function(i, t) {
			$(".nav_two_ul").append($("<li><a href='#' style='background:#9B0909;border-radius: 20px;font-size: 12px;color: white;'>" + t[0] + "</a></li>"))
			for(var i = 1; i < t.length; i++) {
				$(".nav_two_ul").append($("<li><a href='#'>" + t[i] + "</a></li>"))
			}
			$(".nav_two_ul>li>a:eq(1)").click(function(){
				alert("该项目由于开发者懒惰，并未开发～")
			})
			$(".nav_two_ul>li>a:eq(3)").click(function(){
				alert("该项目由于开发者懒惰，并未开发～")
			})
			$(".nav_two_ul>li>a:eq(4)").attr("href", "singer.html")
			$(".nav_two_ul>li>a:eq(2)").attr("href", "index_s.html")
			$(".nav_two_ul>li>a:eq(5)").attr("href", "new_file.html")
		})
		/*banner*/
        $.each(data[0].header[2], function(i, t) {
			$.each(data[0].header[3]["banner-behind"], function(i, a) {
				var box = $("<div class='swiper-slide banner-ss'></div>")
				var ban_div = $("<div class='ban-div'></div>")
				var ban_img = $("<img/ class='ban-img'>").attr("src", t[i].url)

				ban_img.appendTo(ban_div)
				ban_div.appendTo(box)
				box.appendTo($(".banner-sw"))
				$(".banner-ss:eq(0)").css("background", `url(${data[0].header[3]["banner-behind"][0]})repeat-x`)
				$(".banner-ss:eq(1)").css("background", `url(${data[0].header[3]["banner-behind"][1]})repeat-x`)
				$(".banner-ss:eq(2)").css("background", `url(${data[0].header[3]["banner-behind"][2]})repeat-x`)
				$(".banner-ss:eq(3)").css("background", `url(${data[0].header[3]["banner-behind"][3]})repeat-x`)
				$(".banner-ss:eq(4)").css("background", `url(${data[0].header[3]["banner-behind"][4]})repeat-x`)
				$(".banner-ss:eq(5)").css("background", `url(${data[0].header[3]["banner-behind"][5]})repeat-x`)
				$(".banner-ss:eq(6)").css("background", `url(${data[0].header[3]["banner-behind"][6]})repeat-x`)
				$(".banner-ss:eq(7)").css("background", `url(${data[0].header[3]["banner-behind"][7]})repeat-x`)
				$(".banner-ss:eq(8)").css("background", `url(${data[0].header[3]["banner-behind"][8]})repeat-x`)
			})

		});
		$.each(data[0].main[0], function(i, t) {
			$.each(t, function(i, t) {
				var li_img = $("<li class='li_img'></li>")
				var box = li_img.append($("<div class='u-cover'></div>").append($("<img/ title='" + t.txt + "'>").attr("src", t.url[0])));

				var p_li = $("<p class='text'><a href='#' class='lian' title='" + t.txt + "'>" + t.txt + "</a></p>");
				var divBottom = $("<div class='bottom'></div>")
				var spanIcon = $("<span class='iconfont icon-erji'></span>")
				var spanNum = $("<span class='number'>" + t.num + "</span>")
				var aPlay = $("<a href='#' class='iconfont icon-fenzu'  title='播放'></a>")
				spanIcon.appendTo(divBottom)
				spanNum.appendTo(divBottom)
				aPlay.appendTo(divBottom)
				divBottom.appendTo(box)
				p_li.appendTo(li_img)
				li_img.appendTo(li_img)
				$(".tj-img").append(li_img)
			});
			var a_singer = $("<a class='msk'></a>").appendTo($(".u-cover"))
		});
		$.each(data[0].main[1], function(i, t) {
			$.each(t, function(i, t) {
				var li_roll = $("<li class='roller_li'></li>");
				var li_img = $("<img/>").attr("src", t.url);
				var div_roll = $("<div class='u-cover-alb1' title='" + t.name + "'></div>")
				var a_mis = $("<a class='msk'></a>")
				var li_p1 = $("<p class='f-thide'></p>")
				var li_p2 = $("<p class='tit'></p>")
				var a_nam = $("<a href='#' class='s-fc0' title='" + t.name + "'>" + t.name + "</a>")
				var a_tit = $("<a href='#' class='s-fc0' title='" + t.tit + "'>" + t.tit + "</a>")
				var a_bf = $("<a href='#' class='icon-play'></a>")
				li_roll.append(div_roll)
				div_roll.append(li_img);
				a_mis.appendTo(div_roll)
				a_bf.appendTo(div_roll)
				li_p1.appendTo(li_roll)
				li_p2.appendTo(li_roll)
				a_nam.appendTo(li_p1)
				a_tit.appendTo(li_p2)
				$(".roller-flag").append(li_roll)
			});
		});
		$.each(data[0].main[2], function(i, t) {
			$.each(t, function(i, t) {
				var li_singer = $("<li class='li_singer'></li>");
				var a_singer = $("<a href='#'></a>")
				var div_singer = $("<div class='head'></div>")
				var j_img = $("<img/>").attr("src", t.url);
				var div_text = $("<div class='ifo'></div>");
				var h4_text = $("<h4></h4>")
				var span_text = $("<span class='nm'  title='" + t.name + "'>" + t.name + "</span>")
				var p_text = $("<p class='suggest'  title='" + t.suggest + "'>" + t.suggest + "</p>")
				span_text.appendTo(h4_text)
				h4_text.appendTo(div_text)
				p_text.appendTo(div_text)
				a_singer.appendTo(li_singer)
				div_singer.appendTo(a_singer)
				div_text.appendTo(a_singer)
				j_img.appendTo(div_singer)
				li_singer.appendTo($(".n-enter"))
			});
		});
		$.each(data[0].main[3], function(i, t) {
			$.each(t, function(i, t) {
				var li_dj = $("<li></li>")
				var a_dj = $("<a href='#' class='cver'></a>")
				var cver_img = $("<img/>").attr("src", t.url)
				var div_text = $("<div class='info'></div>")
				var p_text = $("<p></p>")
				var a_text = $("<a href='#' class='nm-icon' title='" + t.name + "'>" + t.name + "</a>")
				var sup_log = $("<a class='iconfont icon-vip'></a>")
				var p_suggest = $("<p class='suggest1' title='" + t.suggest + "'>" + t.suggest + "</p>")
				cver_img.appendTo(a_dj)
				a_dj.appendTo(li_dj)
				a_text.appendTo(p_text)
				sup_log.appendTo(p_text)
				p_text.appendTo(div_text)
				p_suggest.appendTo(div_text)
				div_text.appendTo(li_dj)
				li_dj.appendTo($(".f-cb1"))
			});
		});
		$.each(data[0].main[4], function(i, t) {
			var ol_list = $("<ul></ul>")
			$.each(t, function(i, t) {
				var li_List = $("<li class='nam'></li>")
				var a_bs = $("<a href='#' class='nml' title='" + t.txt + "'>" + t.txt + "</a>")
				var span_list = $("<span class='no-top' title='" + t.order + "'>" + t.order + "</span>")
				var oper = $("<div class='oper'></div>")
				var a_icon1 = $("<a class='s-bg s-bg-11' title='播放'></a>")
				var a_icon2 = $("<a class='u-icn1 u-icn-81' title='添加到播放列表'></a>")
				var a_icon3 = $("<a class='s-bg s-bg-12' title='收藏'></a>")
				span_list.appendTo(li_List)
				a_bs.appendTo(li_List)
				li_List.appendTo(ol_list)
				ol_list.appendTo($(".blk-two"))
				a_icon1.appendTo(oper)
				a_icon2.appendTo(oper)
				a_icon3.appendTo(oper)
				oper.appendTo(li_List)

			});
			var div_more = $("<div class='check-more'></div>")
			var a_more = $("<a href='#' class='more1'>查看全部></a>")
			a_more.appendTo(div_more)
			div_more.appendTo($(".blk-two"))
		});
		$.each(data[0].main[5], function(i, t) {
			var ol_list = $("<ul></ul>")

			$.each(t, function(i, t) {
				var li_List = $("<li class='nam'></li>")
				var a_bs = $("<a href='#' class='nml' title='" + t.txt + "'>" + t.txt + "</a>")
				var span_list = $("<span class='no-top' title='" + t.order + "'>" + t.order + "</span>")
				var oper = $("<div class='oper'></div>")
				var a_icon1 = $("<a class='s-bg s-bg-11' title='播放'></a>")
				var a_icon2 = $("<a class='u-icn1 u-icn-81' title='添加到播放列表'></a>")
				var a_icon3 = $("<a class='s-bg s-bg-12' title='收藏'></a>")
				span_list.appendTo(li_List)
				a_bs.appendTo(li_List)
				li_List.appendTo(ol_list)
				ol_list.appendTo($(".blk-three"))
				a_icon1.appendTo(oper)
				a_icon2.appendTo(oper)
				a_icon3.appendTo(oper)
				oper.appendTo(li_List)

			});
			var div_more = $("<div class='check-more'></div>")
			var a_more = $("<a href='#' class='more1'>查看全部></a>")
			a_more.appendTo(div_more)
			div_more.appendTo($(".blk-three"))
		});
		$.each(data[0].main[6], function(i, t) {
			var ol_list = $("<ul></ul>")

			$.each(t, function(i, t) {
				var li_List = $("<li class='nam'></li>")
				var a_bs = $("<a href='#' class='nml' title='" + t.txt + "'>" + t.txt + "</a>")
				var span_list = $("<span class='no-top' title='" + t.order + "'>" + t.order + "</span>")
				var oper = $("<div class='oper'></div>")
				var a_icon1 = $("<a class='s-bg s-bg-11' title='播放'></a>")
				var a_icon2 = $("<a class='u-icn1 u-icn-81' title='添加到播放列表'></a>")
				var a_icon3 = $("<a class='s-bg s-bg-12' title='收藏'></a>")
				span_list.appendTo(li_List)
				a_bs.appendTo(li_List)
				li_List.appendTo(ol_list)
				ol_list.appendTo($(".blk-four"))
				a_icon1.appendTo(oper)
				a_icon2.appendTo(oper)
				a_icon3.appendTo(oper)
				oper.appendTo(li_List)
			});
			var div_more = $("<div class='check-more'></div>")
			var a_more = $("<a href='#' class='more1'>查看全部></a>")
			a_more.appendTo(div_more)
			div_more.appendTo($(".blk-four"))
		});
	},
	error: function() {

	}
});
//搜索框
$(".searchbox").focus(function() {
	this.placeholder = "";

}).blur(function() {
	this.placeholder = "音乐/视频/电台/用户";
})

$(".ban-div").append($("<div class='swiper-button-prev swiper-button-white banner-sbp'></div>"))
$(".ban-div").append($("<div class='download'></div>"))
$(".download").append($("<a href='#'><div></div></a>"))
$(".ban-div").append($("<div class='swiper-button-next swiper-button-white banner-sbn'></div>"))

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
	autoplay: true,
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

$(".lian:eq(3)").prepend($("<img class='dt' />").attr("src", "img/icon-dt.png"))
$(".lian:eq(5)").prepend($("<img class='dt' />").attr("src", "img/icon-dt.png"))
$(".lian:eq(7)").prepend($("<img class='dt' />").attr("src", "img/icon-dt.png"))

var i = 0;
$(".xy").click(function() {
	if($(".roller-flag").is(":animated")) {
		return false;
	}
	i++;
	if(i == 3) {
		$(".roller-flag").css('left', '0')
		i = 1;
		$(".roller-flag").animate({
			"left": -645 * i
		})
	} else {
		$(".roller-flag").animate({
			"left": -645 * i
		})
	}
})
$(".xz").click(function() {
	if($(".roller-flag").is(":animated")) {
		return false;
	}
	i--;
	if(i == -1) {
		$(".roller-flag").css('left', '-1290px')
		i = 1;
		$(".roller-flag").animate({
			"left": -i * 645
		})
	} else {
		$(".roller-flag").animate({
			"left": -i * 645
		})
	}
})

$(".blk-two .no-top:lt(3)").css("color", "#c10d0c")
$(".blk-three .no-top:lt(3)").css("color", "#c10d0c")
$(".blk-four .no-top:lt(3)").css("color", "#c10d0c")

$(".nam").mouseenter(function() {
	$(this).find(".oper").show()
	$(this).find(".nml").width("96px")
})
$(".nam").mouseleave(function() {
	$(this).find(".oper").hide()
	$(this).find(".nml").width("170px")
})
$(".u-cover-alb1").mouseenter(function() {
	$(this).find(".icon-play").show()
})
$(".u-cover-alb1").mouseleave(function() {
	$(this).find(".icon-play").hide()
})
			$(document).scroll(function() {
				var top = $(this).scrollTop()  
				if(top>=50){
					$(".m-back").css("display","block")
				}else if(top<50){
					$(".m-back").css("display","none")
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
$(".login").click(function() {
	$("#bbox").css("display", "inline-block")
})
