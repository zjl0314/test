$.ajax({
	type:"get",
	url:"json.json",
	async:false,
	success: function(data) {
		$.each(data[0].header[0], function(i, t) {
			
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
		})
	},
	error: function() {

	}
});
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