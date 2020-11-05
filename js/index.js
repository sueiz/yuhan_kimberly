$(function () {
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
                    $('.menu-trigger').addClass('active');
                    $('.header-wrap nav').css('display', 'block');

                } else if ($('.menu-trigger').hasClass('active') == true) {
                    $('header').removeClass('active');
                    $('.menu-trigger').removeClass('active');
                    $('.header-wrap nav').css('display', 'none');
                }
            });

            $('.top_menu > li').on('click', function () {
                $(this).find('.sub_menu > li').toggleClass('active');
            });

            $(window).on("scroll",function(){
                if($(window).scrollTop() > 0){
                    $('header').addClass('active');
                }else if($(window).scrollTop() == 0){
                    $('header').removeClass('active');
                }
            })
            

        } else if (resMsg == 'pc') {
            console.log('pc');
            $('header').on('mouseover', function () {
                $('header').addClass('active');
                $('.sub_menu').show();
            });

            $('header').on('mouseleave', function () {
                $('header').removeClass('active');
                $('.sub_menu').hide();
            });

            /* 사이드 메뉴 & 마우스 휠 이벤트 */
            var secEl = document.querySelectorAll('section');
            console.log(secEl)
            var tabBtn = document.querySelectorAll('.side_menu ul li');
            var header = document.querySelector('header');
            var footer = document.querySelector('footer');
            var secArr = [];

            secEl.forEach(function (sl, idx) {
                secArr.push(sl.offsetTop);
            });

            setTimeout(function () {
                window.scrollTo(0, 0);
            }, 10);

            var i = 0;

            secEl.forEach(function (el, idx) {
                tabBtn[0].classList.add('active');
                el.addEventListener('mousewheel', function (e) {
                    if (e.wheelDelta < 0) {
                        header.classList.add('scrollDown');
                        try {
                            tabBtn[idx].classList.remove('active');
                            tabBtn[idx].nextElementSibling.classList.add('active');
                        } catch {
                        }
                        i = idx + 1;
                    } else {
                        
                        try {
                            tabBtn[idx].classList.remove('active');
                            tabBtn[idx].previousElementSibling.classList.add('active');
                        } catch {
                            tabBtn[0].classList.add('active');
                        }
                        i = idx - 1;

                        if (i == 0) {
                            header.classList.remove('scrollDown');
                        }
                    }
                    
                    var footerH = footer.offsetHeight;
                    if(secEl.length-1 >= i){
                        window.scroll(0, secArr[i]);
                    }else{
                        window.scroll(0, secArr[secEl.length-1]+footerH);
                    }

                })
            })

            tabBtn.forEach(function (sl, idx) {
                sl.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.scroll(0, secArr[idx]);
                    tabBtn.forEach(function (el) {
                        el.classList.remove('active');
                    });
                    sl.classList.add('active');
                    if (idx != 0) {
                        header.classList.add('scrollDown');
                    } else {
                        header.classList.remove('scrollDown');
                    }
                });
            });
        }
    }
    nav();

    /* SLIDE */
    $(".slide ul").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    });

    $('.bn').eq(1).find('figure').addClass('active');
    $('.slide ul').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.bn figure').removeClass('active');
    });

    $('.slide ul').on('afterChange', function (event, slick, currentSlide) {
        $('.bn').eq(currentSlide + 1).find('figure').addClass('active');
    });
});