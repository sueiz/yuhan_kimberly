window.addEventListener('DOMContentLoaded', function () {
    var main = document.querySelector('main');
    var secWrap = document.querySelector('.section-wrap');
    var section = document.getElementsByName('section');
    var header = document.querySelector('header');
    var logoImg = document.querySelector('.logo a');
    console.log(section);

    var secPos = [];
    var first = 0, last = 0;
    var idx = 0;

    section.forEach(function(el){
        secPos.push(el.offsetTop);
    })

    setTimeout(function(){
        window.scrollTo(0,0);
    },10);

    var menuHeight = document.querySelector('header').offsetHeight;
    var bln = false; 
    window.addEventListener('mousewheel',function(e){
        if(bln) return;
        
        if(e.wheelDelta < 0){
            //down
            if(idx < section.length-1){idx++;}
            header.classList.add('scrollDown');
            header.style.display = 'fixed';
            header.addEventListener('mouseleave',function(){
                logoImg.classList.add('active');
            })
        }else{
            //up
            if(idx > 0){idx--;}
            header.classList.add('scrollDown');
            if(idx == 0 ) {
                header.classList.remove('scrollDown');
                header.style.display = 'fixed';
            }
        }
        // console.log((secPos[idx]-menuHeight))
        
        bln=true;
        setTimeout(function(){bln=false;},1000);
    });
});

window.addEventListener('DOMContentLoaded', function () {
    var secWrap = document.querySelector('.section-wrap');
    var secEl = document.getElementsByName('section');
    var tabBtn = document.querySelectorAll('.side_menu ul li');
    var span = document.querySelectorAll('.side_menu ul li span');
    var header = document.querySelector('header');
    var logoImg = document.querySelector('.logo a');
    var secArr = [];

    secEl.forEach(function(sl,idx){
        secArr.push(sl.offsetTop);
    });
    var i = 0;
    
    secEl.forEach(function(el,idx){
        tabBtn[0].classList.add('active');
        el.addEventListener('mousewheel',function(e){
            
            if(e.wheelDelta < 0){
                try {
                    tabBtn[idx].classList.remove('active');
                    tabBtn[idx].nextElementSibling.classList.add('active');
                 }
                 catch{tabBtn[secEl.length].classList.add('active')}
                 i = idx+1;
            }else{
                header.classList.add('scrollDown');
                try{
                    tabBtn[idx].classList.remove('active');
                    tabBtn[idx].previousElementSibling.classList.add('active');
                 }
                 catch{tabBtn[0].classList.add('active');}
                 i = idx-1;
            }
            window.scroll(0,secArr[i]);
            // secWrap.style.transform = "translateY(-"+ (secArr[i])+"px)";
        })
    })

    tabBtn.forEach(function(sl,idx){
        sl.addEventListener('click',function(e){
            e.preventDefault();
            window.scroll(0,secArr[idx]);
            tabBtn.forEach(function(el){
                el.classList.remove('active');
            });
            sl.classList.add('active');
            if(idx!=0){
                header.classList.add('scrollDown');
                logoImg.classList.add('active');
            }else{
                header.classList.remove('scrollDown');
                logoImg.classList.remove('active');
            }
        });
    });
});

$(function() {
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

    /* 유한킴벌리 HUB */
    $('.ykhurb_wrap2').hide();
    $('.ykhurb_wrap').on('mouseover',function(){
        $('.ykhurb_wrap2').show();
        $('.ykhurb_wrap').css({
            right:'20rem'
        })
    });

    $('.ykhurb_wrap2').on('mouseleave',function(){
        $('.ykhurb_wrap2').hide();
        $('.ykhurb_wrap').css({
            right:'0'
        })
    });

    $('.ykhurb_wrap2 .title a').on('click',function(){
        $('.ykhurb_wrap2').hide();
        $('.ykhurb_wrap').css({
            right:'0'
        })
    });

    // section 01 history
    var idx = 0;

    $('.arrow-up').on('click',function(){

        
        $('.yk_history figure').eq(idx).css('left','-100%');
        idx ++;
        $('.yk_history figure').eq(idx).css({
            left: '0%',
            transition: '.5s'
        });

        if(idx == $('.yk_history figure').length-1){
            $(".arrow-up").off('click');
 
        }
    });

    $('.arrow-down').on('click',function(){
        $('.yk_history figure').eq(idx).css('left','100%');
        idx --;
        $('.yk_history figure').eq(idx).css({
            left: '-0%',
            transition: '.5s'
        });

        if(idx == 0){
            $('.arrow-down').attr("disabled","disabled");
        }
    });

});

