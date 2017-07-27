$( document ).ready(function() {
    $('.button').on('click', function (el) {
		var parent = this.closest('.message');
		var w = $(window).width();
		var num = parent.getAttribute('data-slide');
		if($(this).hasClass('next')){
			$(parent).removeClass('active').next().addClass('active');
			if(w < 460){
				if(num > 2 && num < 7){
					$('.back-full').addClass('back-2');
				}else if(num >=7){
					$('.back-full').addClass('back-3');
				}
			}else{
				$('.back-full').addClass('fullback');
			}
		}else{
			$(parent).removeClass('active').prev().addClass('active'); 
		} 
	})
});