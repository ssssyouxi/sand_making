$(function(){
	var obj=$(window).width();
	if(obj<1200){
		if(obj>800){
			$(".im_1").css('margin-right','0');
			$(".im_3").css('margin-right','0');
			$(".im_2").css('margin-left','0');
			$(".im_4").css('margin-left','0');
		}else{
		$(".img-responsive").css('margin', '0 auto');
	}
}
	if(obj<=768){

		$("article").removeClass('art');
		$("article").css('width','100%');
		$("table").remove();
		$("form").html("<p><span style='color:red'>*&nbsp;</span><input type='text' name='name' placeholder='Your Name'/></p><p><span style='color:red'>*&nbsp;</span><input type='text' name='country_name' placeholder='Country'/></p><p><span style='color:red'>*&nbsp;</span><input type='text' name='tel' id='telphone' placeholder='Tel'/></p><span style='color:red'>*&nbsp;</span><select name='product' class='selec'/></select></p><p><span style='color:red'>*&nbsp;</span><input type='text' name='email' placeholder='Your Email address'/></p><p><span style='color:white'>*&nbsp;</span><textarea rows='3' name='message' placeholder='Enter details: Raw material, Capacity, Feeding material size, Final product size, etc.'></textarea></p><p><button onclick='this.form.submit'>Send Now</button></p><div class='clearfix'></div")
		$(".selec").html("<option value='Mobile crusher'>Mobile crusher</option><option value='Stationary crusher'>Stationary crusher</option><option value='Grinding mill'>Grinding mill</option><option value='Mining machine'>Mining machine</option>");
		$("button").css('width','100%');
		$(".selec").css('color','#a1a1a1');
		$(".banner").attr('src','./img/banner2.png')
	}
	if(obj<=414){
		$(".banner").attr('src','./img/banner.png');
	}
})