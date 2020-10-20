$(function() {
// header

    $('header').on('mouseover',function(){
        $('header').addClass('active');
        $('.logo a').addClass('active');
        $('.sub_menu').show();

    });

    $('header').on('mouseleave',function(){
        $('header').removeClass('active');
        $('.logo a').removeClass('active');
        $('.sub_menu').hide();

        if( $(window).scrollTop() > 10 ){
            $('.logo a').addClass('active');
        }

    });

    $(window).on('scroll',function(){
        var position = $(window).scrollTop();

        if(position > 10){
            $('header').addClass('scrollDown');
            $('.logo a').addClass('active');

        }else{
            $('header').removeClass('scrollDown');
            $('.logo a').removeClass('active');
        }
    });
});