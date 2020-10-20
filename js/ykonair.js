

$(function() {
    $('.instagram span').on('mouseover',function(){
        $('.instagram span').addClass('active');
    })
    $('.instagram span').on('mouseleave',function(){
        $('.instagram span').removeClass('active');
    })

    $('.youtube span').on('mouseover',function(){
        $('.youtube span').addClass('active');
    })
    $('.youtube span').on('mouseleave',function(){
        $('.youtube span').removeClass('active');
    })
    
    $('.facebook span').on('mouseover',function(){
        $('.facebook span').addClass('active');
    })
    $('.facebook  span').on('mouseleave',function(){
        $('.facebook  span').removeClass('active');
    })
    $('header').on('mouseover',function(){
        $('header').addClass('active');
        $('.sub_menu01,.sub_menu02,.sub_menu03,.sub_menu04').show();
        $('.logo img:nth-of-type(1)').css({
            display:'none'
        })
        $('.logo img:nth-of-type(2)').css({
            display:'block'
        })
    });

    $('header').on('mouseleave',function(){
        $('header').removeClass('active');
        $('.sub_menu01,.sub_menu02,.sub_menu03,.sub_menu04').hide();
        $('.logo img:nth-of-type(1)').css({
            display:'block'
        })
        $('.logo img:nth-of-type(2)').css({
            display:'none'
        })
    });


});

