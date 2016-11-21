$(function(){
	var obj=$(window).width();
	if(obj<1261){
		$(".label").removeClass("float-left");
		$(".field").removeClass("float-right");
	}
	if (obj<1200){
		$(".top").removeClass('back-img');
		$(".back-i").append("<img src='./img/banner2.png' class='img-responsive'/>")

		if(obj>900){
			$(".app_img img").removeClass('img-responsive');
		}
	}
	if(obj<760){
		$(".con_flo").removeClass("float-right");
	}
})