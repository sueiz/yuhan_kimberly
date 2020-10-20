$(function() {
    /* Tab 클릭 */

    $('.historyYear ul li').eq(0).addClass('active')
    $('.historyYear ul li').on('click',function(){
        var idx = $(this).index();

        $('.historyYear ul li').removeClass('active');
        $(this).addClass('active');
       
        $('section').hide();
        $('section').eq(idx).show();
    })
});

