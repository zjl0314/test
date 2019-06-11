$.ajax({
	type: "get", //请求方式
	url: "json1.json", //接口
	async: false, //是否异步
	success: function(data) { //请求成功执行
		/*nav_one*/
		$.each(data[0].header[0], function(i, t) {
			$(".nav_one_ul").append($("<li style='background:#000000;'><a href='#' style='color:#FFFFFF;'>" + t[0] + "</a></li>"));
			for(var i = 1; i < t.length; i++) {
				$(".nav_one_ul").append($("<li><a href='#'>" + t[i] + "</a></li>"));
			}
		})
		/*nav_two*/
		$.each(data[0].header[1], function(i, t) {
			$(".nav_two_ul").append($("<li><a href='#' style='background:#9B0909;border-radius: 20px;font-size: 12px;color: white;'>" + t[0] + "</a></li>"));
			for(var i = 1; i < t.length; i++) {
				$(".nav_two_ul").append($("<li><a href='#'>" + t[i] + "</a></li>"));
			}
//			$(".nav_two_ul>a:eq(2)").attr("href","index_s.html");
//			$(".nav_two_ul>a:eq(4)").attr("href","singer.html");
//			$(".nav_two_ul>a:eq(5)").attr("href","new_file.html");
		})
		/*banner*/
		$.each(data[0].header[2], function(i, t) {
			for(var i = 0; i < t.length; i++) {
				var div = $("<div style='margin:auto;width:984px;height:336px;' class='ban_box'></div>");
				var img = $("<img style=''/>").attr('src', t[i].url);
				var box = $("<div class='swiper-slide ban_ss'></div>").append(div);
				img.appendTo(div);
				$(".ban_sw").append(box);
			}
			$.each(data[0].header[3], function(i, t) {
				$(".ban_ss:eq(0)").css("background","url('"+t[0].url+"')");
				$(".ban_ss:eq(1)").css("background","url('"+t[1].url+"')");
				$(".ban_ss:eq(2)").css("background","url('"+t[2].url+"')");
				$(".ban_ss:eq(3)").css("background","url('"+t[3].url+"')");
				$(".ban_ss:eq(4)").css("background","url('"+t[4].url+"')");
				$(".ban_ss:eq(5)").css("background","url('"+t[5].url+"')");
				$(".ban_ss:eq(6)").css("background","url('"+t[6].url+"')");
				$(".ban_ss:eq(7)").css("background","url('"+t[7].url+"')");
				$(".ban_ss:eq(8)").css("background","url('"+t[8].url+"')");
			});
		});
		/*tab*/
		$.each(data[0].main.tab, function(i, t) {
			$("<a class='tab_a' style='margin-left:10px;'>" + t + "</a>").appendTo($(".tab"));
		});
		/*m_cvrlst*/
		$.each(data[0].main.m_cvrlst, function(i, t) {
			var li_img = $("<li class='li_img' title='"+t.txt+"'></li>");
			var box_li = $("<div class='li_b'><a class='iconfont icon-erji'></a><span class='nb'>" + t.nb + "</span><a class='iconfont icon-fenzu'></a></div>");
			var img = $("<img />").attr('src', t.url);
			var a_li = $("<a class='dec' href='#'>" + t.txt + "</a>");
			var a_bg = $("<a class='a_bg'></a>");
			var box_bg = $("<div class='box_bg'></div>");
			img.appendTo(box_bg);
			a_bg.appendTo(box_bg)
			box_bg.appendTo(li_img);
			box_li.appendTo(li_img);
			a_li.appendTo(li_img);
			$(".m_cvrlst").append(li_img);
		});
		/*disk*/
		$.each(data[0].main.disk, function(i, t) {
			var box1 = $("<div class='swiper-slide disk_ss'></div>").append($("<img class='disk_img' title='"+t.txt+"'/>").attr('src', t.url)).append($("<p style='font-size: 12px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;word-wrap: normal;'><a href='#' style='color: #000;'>"+t.txt+"</a></p>")).append($("<p style='width:90%;font-size:12px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;word-wrap: normal;'><a href='#' style='color:#333;'>"+t.txt1+"</a></p>"));
			$(".disk_sw").append(box1);
		});
		/*n_center*/
		$.each(data[0].main.n_center, function(i, t) {
			var li = $("<li></li>");
			var li_a = $("<a href='/user/home?id=29879272' class='itm f-tdn'></a>");
			var li_box1 = $("<div class='head'></div>");
			var li_box2 = $("<div class='ifo'></div>");
			var li_img = $("<img />").attr("src",t.url);
			var li_h4 = $("<h4></h4>");
			var h4_span = $("<span class='nm f-fs1 f-ib f-thide'>"+t.t_h1+"</span>");
			var li_p = $("<p class='f-thide s-fc3'>"+t.t_p+"</p>");
			li_img.appendTo(li_box1);
			li_box1.appendTo(li_a);
			li_a.appendTo(li);
			li_box2.appendTo(li_a);
			h4_span.appendTo(li_h4);
			li_h4.appendTo(li_box2);
			li_p.appendTo(li_box2);
			$(".n-enter").append(li);
		})
		/*n-hotdj*/
		$.each(data[0].main.n_hotdj, function(i, t) {
			var li = $("<li></li>");
			var li_a = $("<a href='/user/home?id=278438485' class='cver'></a>");
			var li_img = $("<img />").attr("src",t.url);
			var li_box = $("<div class='info'></div>");
			var li_p1 = $("<p></p>");
			var li_pa = $("<a href='#' class='nm-icn f-thide s-fc0'>"+t.t_p1+"</a>");
			var li_icon = $("<a class='iconfont icon-vip'></a>");
			var li_p2 = $("<p style='color:#666;'>"+t.t_p2+"</p>");
			li_a.appendTo(li);
			li_img.appendTo(li_a);
			li_box.appendTo(li);
			li_p1.appendTo(li_box);
			li_pa.appendTo(li_p1);
			li_icon.appendTo(li_p1);
			li_p2.appendTo(li_box);
			$(".n-hotdj").append(li);
		})
		/*blk*/
		$.each(data[0].main.blk1, function(i, t) {
			$("<li class='bl_li1'>"+"<span class='blk_li blk_li1'>"+t.num+"</span>"+"<a href='#' class='t_a' style='color: #333;' title='"+t.txt+"'>"+t.txt+"</a></li>").appendTo($(".ol"));
			var oper = $("<div class='oper'></div>");
		})
		$.each(data[0].main.blk2, function(i, t) {
			$("<li class='bl_li1'>"+"<span class='blk_li blk_li2'>"+t.num+"</span>"+"<a href='#' class='t_a' style='color: #333;'>"+t.txt+"</a></li>").appendTo($(".ol1"));
		})
		$.each(data[0].main.blk3, function(i, t) {
			$("<li class='bl_li1'>"+"<span class='blk_li blk_li3'>"+t.num+"</span>"+"<a href='#' class='t_a' style='color: #333;'>"+t.txt+"</a></li>").appendTo($(".ol2"));
		})
	},
	error: function() { //请求失败执行

	}
});
/*btn*/
$(".ban_box").append($("<div class='swiper-button-prev swiper-button-white ban_sbp'></div>"));
$(".ban_box").append($("<div class='swiper-button-next swiper-button-white ban_sbn'></div>"));
$(".ban_box").append($("<div class='download'><a href='https://music.163.com/#/download' class='download_btn'></a><p>PC 安卓 iPhone WP iPad Mac 六大客户端</p></div>"))
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
/*轮播图*/
var swiper = new Swiper('.ban_sc', {
	autoplay: true,
	spaceBetween: 30,
	loop: true,
	effect: 'fade',
	pagination: {
		el: '.ban_sc .swiper-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.ban_sbn',
		prevEl: '.ban_sbp',
	}
});
/*电台节目*/
$(".dec:eq(3)").prepend($("<img class='radio'/>").attr("src", "img/radio.png"));
$(".dec:eq(5)").prepend($("<img class='radio'/>").attr("src", "img/radio.png"));
$(".dec:eq(7)").prepend($("<img class='radio'/>").attr("src", "img/radio.png"));
/*新碟上架*/
var swiper = new Swiper('.disk_sc', {
	slidesPerView : 5,
	slidesPerGroup : 5,
	spaceBetween : 10,
	direction:"horizontal",
	loop: true, 
	navigation: {
      nextEl: '.disk_sbn',
      prevEl: '.disk_sbp',
    }
});
/*disk*/
$(".disk-ss").append($("<a href='#'><div class='main-lc-bg'></div></a>"))
$(".main-lc-bg").append($("<a href='#'><div class='main-lc-an'></div></a>"))
/*回到顶部*/
$(document).scroll(function(){
	var top = $(this).scrollTop();
	if(top >= 100){
		$(".back").fadeIn();
	}else{
		$(".back").fadeOut();
	}
})
/*f-cb*/
$(".blk_li1:lt(3)").css("color","#c10d0c");
$(".blk_li2:lt(3)").css("color","#c10d0c");
$(".blk_li3:lt(3)").css("color","#c10d0c");

var span_1 = $("<div style='width: 22px;height: 22px;display: none;background: url(img/hh.png) 0 -85px no-repeat;position:absolute;right:25px;bottom:5px;'></div>")
span_1.appendTo($(".disk_ss"));
$(".disk_img").hover(function(){
	$(this).siblings("div").show()
},function(){
	$(this).siblings("div").hide()
})
$(".disk_ss:eq(5)").css("margin-left","60px");
$(".disk_ss:eq(10)").css("margin-left","55px");
$(".disk_ss:eq(15)").css("margin-left","55px");
/*oper*/
var op_box = $("<div class='oper'></div>");
var op_a1 = $("<a class='op_a'></a>");
var op_a2 = $("<a class='ope_a'></a>")
var op_a3 = $("<a class='oper_a'></a>");
op_a1.appendTo(op_box);
op_a2.appendTo(op_box);
op_a3.appendTo(op_box);
$(".bl_li1").append(op_box);
$(".bl_li1").mouseenter(function(){
	$(this).find(".oper").show().css("width","85px");
}).mouseleave(function(){
	$(this).find(".oper").hide().css("width","170px");
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
$(".register").click(function() {
	$("#bbox").css("display", "inline-block")
})
$(".main-right-top-a").click(function() {
	$("#bbox").css("display", "inline-block")
})
