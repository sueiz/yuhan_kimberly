$(function () {
    //start    
    $('header').load('https://sueiz.github.io/yuhan_kimberly/inc_head_foot .header-wrap', header);
    $('footer').load('https://sueiz.github.io/yuhan_kimberly/inc_head_foot footer');

    $.ajax({
        url: '../inc_head_foot.html',
        success: function (data) {
            $('main').prepend($(data).find('.ykhurb_wrap'));
            $('main').prepend($(data).find('.ykhurb_wrap2'));
            ykhurb();
        }
    })

    function ykhurb() {
        /* 유한킴벌리 HUB */
        $('.ykhurb_wrap2').hide();
        $('.ykhurb_wrap').on('click', function () {
            $('.ykhurb_wrap2').show();
            $('.ykhurb_wrap').css({
                right: '20rem'
            })
        });

        $('.ykhurb_wrap2').on('mouseleave', function () {
            $('.ykhurb_wrap2').hide();
            $('.ykhurb_wrap').css({
                right: '0'
            })
        });

        $('.ykhurb_wrap2 .title a').on('click', function (e) {
            e.preventDefault();
            $('.ykhurb_wrap2').hide();
            $('.ykhurb_wrap').css({
                right: '0'
            })
        });
    }

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

        function res(e) {
            if (e.matches) {
                //모바일
                resMsg = 'mobile';

            } else {
                //PC
                resMsg = 'pc';
            }
        }
        res(mq);

        function nav() {
            if (resMsg == 'mobile') {
                console.log('모바일')
                $('.menu-trigger').on('click', function () {
                    if ($('.menu-trigger').hasClass('active') == false) {
                        $('header').addClass('active');
                        $('.logo a').addClass('active');
                        $('.menu-trigger').addClass('active');
                        $('.header-wrap nav').css('display', 'block');

                    } else if ($('.menu-trigger').hasClass('active') == true) {
                        $('header').removeClass('active');
                        $('.logo a').removeClass('active');
                        $('.menu-trigger').removeClass('active');
                        $('.header-wrap nav').css('display', 'none');
                    }
                });

                $('.top_menu > li').on('click', function () {
                    $(this).find('.sub_menu > li').toggleClass('active');
                });

            } else if (resMsg == 'pc') {
                console.log('pc');
                $('header').on('mouseover', function () {
                    $('header').addClass('active');
                    $('.logo a').addClass('active');
                    $('.sub_menu').show();
                });

                $('header').on('mouseleave', function () {
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