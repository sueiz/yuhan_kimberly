$(function() {
    /* 초기 화면 */
    $('.section02').hide();
    $('.section03').hide();
    $('.plant_division ul li').eq(0).addClass('active');

    /* Tab 클릭 */
    $('.plant_division ul li').on('click',function(e){
        e.preventDefault();
        var idx = $(this).index();

        $('.plant_division ul li').removeClass('active');
        $(this).addClass('active');
       
        $('section').hide();
        $('section').eq(idx).show();
    })
});

