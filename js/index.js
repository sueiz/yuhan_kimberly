// window.addEventListener('DOMContentLoaded', function () {
//     var section = document.getElementsByName('section');
//     var header = document.querySelector('header');
//     console.log(section);

//     var secPos = [];
//     var first = 0,
//         last = 0;
//     var idx = 0;

//     section.forEach(function (el) {
//         secPos.push(el.offsetTop);
//     })

    // setTimeout(function () {
    //     window.scrollTo(0, 0);
    // }, 10);

//     var menuHeight = document.querySelector('header').offsetHeight;
//     var bln = false;
//     window.addEventListener('mousewheel', function (e) {
//         if (bln) return;

//         if (e.wheelDelta < 0) {
//             //down
//             if (idx < section.length - 1) {
//                 idx++;
//             }
//             header.classList.add('scrollDown');
//             header.style.display = 'fixed';
//         } else {
//             //up
//             if (idx > 0) {
//                 idx--;
//             }
//             header.classList.add('scrollDown');
//             if (idx == 0) {
//                 header.classList.remove('scrollDown');
//             }
//         }
//         // console.log((secPos[idx]-menuHeight))

//         bln = true;
//         setTimeout(function () {
//             bln = false;
//         }, 1000);
//     });
// });

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
            var secEl = document.getElementsByName('section');
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
                            tabBtn[secEl.length].classList.add('active');
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
                    window.scroll(0, secArr[i]);
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





    // // section 01 history
    // var idx = 0;

    // $('.arrow-up').on('click',function(){


    //     $('.yk_history figure').eq(idx).css('left','-100%');
    //     idx ++;
    //     $('.yk_history figure').eq(idx).css({
    //         left: '0%',
    //         transition: '.5s'
    //     });

    //     if(idx == $('.yk_history figure').length-1){
    //         $(".arrow-up").off('click');

    //     }
    // });

    // $('.arrow-down').on('click',function(){
    //     $('.yk_history figure').eq(idx).css('left','100%');
    //     idx --;
    //     $('.yk_history figure').eq(idx).css({
    //         left: '-0%',
    //         transition: '.5s'
    //     });

    //     if(idx == 0){
    //         $('.arrow-down').attr("disabled","disabled");
    //     }
    // });
});