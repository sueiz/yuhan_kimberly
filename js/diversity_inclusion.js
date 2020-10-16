$(function() {
    /* 초기 화면 */
    $('.woman_empowerment').hide();
    $('.division ul li').eq(0).addClass('active');


    /* Tab 클릭 */
    $('.division ul li').on('click',function(){
        var idx = $(this).index();

        $('.division ul li').removeClass('active');
        $(this).addClass('active');
    })

    $('.division ul li').eq(0).on('click',function(){
        $('.woman_protect').show();
        $('.woman_empowerment').hide();
    });

    $('.division ul li').eq(1).on('click',function(){
        $('.woman_protect').hide();
        $('.woman_empowerment').show();
    });
});

