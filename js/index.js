$(function(){
	var obj=$(window).width();
	if(obj<=768){
		$(".img-responsive").css('margin', '0 auto');
		$("article").removeClass('art');
		$("article").css('width','100%');
		$("table").remove();
		$("form").html("<p><span style='color:red'>*&nbsp;</span><input type='text' name='name' placeholder='Your Name'/></p><p><span style='color:red'>*&nbsp;</span><input type='text' name='country_name' placeholder='Country'/></p><p><span style='color:red'>*&nbsp;</span><input type='text' name='tel' id='telphone' placeholder='Tel'/></p><span style='color:red'>*&nbsp;</span><select name='product'/></select></p><p><span style='color:red'>*&nbsp;</span><input type='text' name='email' placeholder='Your Email address'/></p><p><span style='color:white'>*&nbsp;</span><textarea rows='3' name='message' placeholder='Enter details: Raw material, Capacity, Feeding material size, Final product size, etc.'></textarea></p><p><button onclick='this.form.submit'>Send Now</button></p><div class='clearfix'></div")
		$("select").html("<option value='Mobile crusher'>Mobile crusher</option><option value='Stationary crusher'>Stationary crusher</option><option value='Grinding mill'>Grinding mill</option><option value='Mining machine'>Mining machine</option>");
		$("button").css('width','100%');
		$("select").css('color','#a1a1a1');
	}
	if(obj=320){
		//$("html").css('width', '113%');
	}
})