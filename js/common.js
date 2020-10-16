$(function () {
    //start    

    $('header').load('http://sueiz.dothome.co.kr/yuhan-kimberly/inc_head_foot.html .header-wrap', header); // header 함수
    $('footer').load('http://sueiz.dothome.co.kr/yuhan-kimberly/inc_head_foot.html../inc_head_foot.html footer');

    function header() {
        $('.headerMenu').eq(localStorage.pageNum).addClass('active'); 

        $('.headerMenu').on('click', function (e) {
            e.preventDefault(); 
            
            localStorage.pageNum = $(this).index();
            console.log(localStorage.pageNum);
            location.href = $(this).attr('href');
        });



        var resMsg;
    var mq = window.matchMedia('(max-width:1024px)');

    mq.addListener(res);

    function res(e){
        if(e.matches){
            //모바일
            resMsg = 'mobile';
            
        }else{
            //PC
            resMsg = 'pc';
        }
    }
    res(mq);

    function nav(){
        if(resMsg == 'mobile'){
            console.log('모바일')
            $('.menu-trigger').on('click',function(){
                if($('.menu-trigger').hasClass('active') == false){
                    $('header').addClass('active');
                    $('.logo a').addClass('active');
                    $('.menu-trigger').addClass('active');
                    $('.header-wrap nav').css('display','block');
    
                }else if($('.menu-trigger').hasClass('active') == true){
                    $('header').removeClass('active');
                    $('.logo a').removeClass('active');
                    $('.menu-trigger').removeClass('active');
                    $('.header-wrap nav').css('display','none');
                }
            });

            $('.top_menu > li').on('click',function(){
                $(this).find('.sub_menu > li').toggleClass('active');
            });

        }else if(resMsg == 'pc'){
            console.log('pc');
            $('header').on('mouseover',function(){
                $('header').addClass('active');
                $('.logo a').addClass('active');
                $('.sub_menu').show();
            });
        
            $('header').on('mouseleave',function(){
                $('header').removeClass('active');
                $('.logo a').removeClass('active');
                $('.sub_menu').hide();
            });
        }
    }
    nav();
    }


    
    //end    
})
