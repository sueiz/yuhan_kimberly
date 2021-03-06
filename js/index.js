$(function () {

    /* 사이드 메뉴 & 마우스 휠 이벤트 */
    var secEl = document.querySelectorAll('section');
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


    secEl.forEach(function (el, idx) {
        var i = 0;
        tabBtn[0].classList.add('active');
        el.addEventListener('mousewheel',indexSwift);
        el.addEventListener('DOMMouseScroll',indexSwift);
        function indexSwift(e) {
            if(e.wheelDelta < 0 || e.detail > 0) {
                header.classList.add('scrollDown');
                try {
                    tabBtn[idx].classList.remove('active');
                    tabBtn[idx].nextElementSibling.classList.add('active');
                } 
                catch(err) {
                    tabBtn[idx].classList.remove('active');
                }
                i = idx + 1;
            } else if(e.wheelDelta > 0 || e.detail < 0) {
                try {
                    tabBtn[idx].classList.remove('active');
                    tabBtn[idx].previousElementSibling.classList.add('active');
                } catch(err) {
                    tabBtn[0].classList.add('active');
                }
                i = idx - 1;
                if (i == 0) {
                    header.classList.remove('scrollDown');
                }
            }

            var footerH = footer.offsetHeight;
        
            if(secEl.length-1 >= i){
                window.scrollTo(0, secArr[i]);
            }else{
                window.scrollTo(0, secArr[secEl.length-1]+footerH);
            }
        }
    });
    
    /* 사이드 메뉴 클릭 */
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