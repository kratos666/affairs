$( document ).ready(function() {
    $('.button').on('click', function (el) {
        var parent = this.closest('.message');
        if($(this).hasClass('next')){
            $(parent).removeClass('active').next().addClass('active');
        }else{
           $(parent).removeClass('active').prev().addClass('active'); 
        }
    })
});