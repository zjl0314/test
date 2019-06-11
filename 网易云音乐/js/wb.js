$(".WB_iptxt").focus(function(){
	  $(".WB_iptxt").css("border","1px solid #ffb941")
	  $(".WB_iptxt").css("backgroundColor"," #fff")
	  $(".WB_iptxt").css("color","rgb(102,102,102)")
	  this.placeholder=""
	  	
	  
}).blur(function(){
	$(".WB_iptxt").css("border","1px solid #bebebe1")
	  $(".WB_iptxt").css("backgroundColor","#fafafa")
	  $(".WB_iptxt").css("color","rgb(154,154,154)")
	  this.placeholder="请用微博帐号登录"
})
$(".WB_iptxt1").focus(function(){
	  $(".WB_iptxt").css("border","1px solid #ffb941")
	  $(".WB_iptxt").css("backgroundColor"," #fff")
	  $(".WB_iptxt").css("color","rgb(102,102,102)")
	  this.placeholder=""
	  	
	  
}).blur(function(){
	$(".WB_iptxt1").css("border","1px solid #bebebe1")
	  $(".WB_iptxt").css("backgroundColor","#fafafa")
	  $(".WB_iptxt").css("color","rgb(154,154,154)")
	  this.placeholder="请输入密码"
})