$( document ).ready(function() {
    $('.button').on('click', function (el) {
        var parent = this.closest('.message');
        if($(this).hasClass('next')){
            $(parent).removeClass('active').next().addClass('active');
        }else if(($(this).hasClass('splash'))){
			var w = $(window).width();
			$('.back-full').hide(1000);
				if(w > 1370){
				$('.back').show(1000);
				}else{
					$('.back-left').show(1000);
				}
			$(this).closest('.message').removeClass('active').next().addClass('active');
		}else{
           $(parent).removeClass('active').prev().addClass('active'); 
        }
    })
});