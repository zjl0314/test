$.ajax({
	type: "get", //请求方式
	url: "new_file.json", //接口
	async: false, //是否异步
	success: function(data) { //请求成功执行
		/*htn*/
		$.each(data[0].header[0], function(i, t) {
			$(".header-top-nav-ul").append("<a href='#' class='header-top-a'><li class='header-top-li1'>" + t[0] + "</li></a>")
			var cor=$("<sub class='cor'>&nbsp;</sub>")
			cor.appendTo(".header-top-nav-ul>a:eq(1)")
			for(var i = 1; i < t.length; i++) {
				$(".header-top-nav-ul").append("<a href='#' class='header-top-a'><li class='header-top-li'>" + t[i] + "</li></a>")
			}
			$(".header-top-a:eq(1)").click(function(){
				$(".header-top-a:eq(1)").attr("href","wdyy.html")
			})
			$(".header-top-a:eq(2)").click(function(){
				$(".header-top-a:eq(2)").attr("href","py.html")
			})
			$(".header-top-a:eq(3)").click(function(){
				alert("该项目由于开发者懒惰，并未开发～")
			})
			$(".header-top-a:eq(4)").click(function(){
				$(".header-top-a:eq(4)").attr("href","w_index.html")
			})
			$(".header-top-a:eq(5)").click(function(){
				$(".header-top-a:eq(5)").attr("href","down.html")
			})
		})
		/*hcn*/
		$.each(data[0].header[1], function(i, t) {
			$(".header-center-ul").append("<a href='index.html' class='header-center-a'><li class='header-center-li'>" + t[0] + "</li></a>")
			for(var i = 1; i < t.length-1; i++) {
				$(".header-center-ul").append("<a href='#' class='header-center-a'><li class='header-center-li'>" + t[i] + "</li></a>")
			}
			$(".header-center-ul>a:eq(1)").click(function(){
			   alert("该项目由于开发者懒惰，并未开发～")
			})
			$(".header-center-ul>a:eq(3)").click(function(){
			   alert("该项目由于开发者懒惰，并未开发～")
			})
			$(".header-center-ul").append("<a href='#' class='header-center-a'><li class='header-center-li1'>" + t[5] + "</li></a>")
		    $(".header-center-ul>a:eq(4)").attr("href", "singer.html")
		     $(".header-center-ul>a:eq(2)").attr("href", "index_s.html")
		     $(".header-center-ul>a:eq(0)").attr("href", "index.html")
		})
		/*fclt*/
//		$.each(data[0].footer[0], function(i, t) {
//			for(var i = 0; i < t.length; i++) {
//				$(".footer-center-ltop").append("<a href='#' class='footer-center-la'><span class='footer-center-lspan'>" + t[i] + "</span></a>")
//			}
//		})
		/*mlt*/
		$.each(data[0].nmain[0],function(i, t){
			$.each(data[0].nmain[1],function(i, a){
				$.each(data[0].nmain[2],function(i, b){
					for(var i = 0; i < t.length; i++) {
						var box1 = $("<li class='main-top-li'></li>").append($("<img />").attr("src", t[i].url)).append($("<p class='main-top-p'><a href='#' class='main-top-a'>" + a[i] + "</a></p>").prop("title", a[i])).append($("<p class='main-top-p1'><a href='#' class='main-top-a1'>" + b[i] + "</a></p>").prop("title", b[i])).append($("<a href='#'><div class='main-top-bg'></div></a>").prop("title", a[i]))
						$(".main-top-ul").append(box1)
					}
				})
			})
		})
		$.each(data[0].nmain[3],function(i, t){
			$.each(data[0].nmain[4],function(i, a){
				$.each(data[0].nmain[5],function(i, b){
					for(var i = 0; i < t.length; i++) {
						var box2 = $("<li class='main-center-li'></li>").append($("<img />").attr("src", t[i].url)).append($("<p class='main-center-p'><a href='#' class='main-center-a'>" + a[i] + "</a></p>").prop("title", a[i])).append($("<p class='main-center-p1'><a href='#' class='main-center-a1'>" + b[i] + "</a></p>").prop("title", b[i])).append($("<a href='#'><div class='main-center-bg'></div></a>").prop("title", a[i]))
						$(".main-center-ul").append(box2)
					}
					console.log(b)
				})
			})
		})
	},
	error: function() { //请求失败执行

	}
});

$(".header-top-btn").mouseenter(function() {
	$(this).css({
		border: "solid white 1px",
		color: "white"
	})
}).mouseleave(function() {
	$(this).css({
		border: "1px solid #4F4F4F",
		color: "#ccc"
	})
})
$(".header-top-sdiv").mouseenter(function() {
	$("#select").css("display", "inline-block")
	$(".icon-shangjiantou").css("display", "inline-block")
}).mouseleave(function() {
	$("#select").css("display", "none")
	$(".icon-shangjiantou").css("display", "none")
})
$("#select-li").mouseenter(function() {
	$(this).css({
		backgrund: "#343434",
	})
})
$(".main-top-bg").append($("<a href='#'><div class='main-top-an' title='播放'></div></a>"))
$(".main-center-bg").append($("<a href='#'><div class='main-center-an' title='播放'></div></a>"))
$(document).scroll(function() {
				var top = $(this).scrollTop()  
				if(top>=50){
					$(".m-back").css("display","block")
				}else if(top<50){
					$(".m-back").css("display","none")
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