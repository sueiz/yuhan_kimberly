"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var main = document.querySelector('main');
  var secWrap = document.querySelector('.section-wrap');
  var section = document.getElementsByName('section');
  console.log(section);
  var secPos = [];
  var first = 0,
      last = 0;
  var idx = 0;
  section.forEach(function (el) {
    secPos.push(el.offsetTop);
  });
  console.log(secPos);
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 10);
  var bln = false;
  window.addEventListener('mousewheel', function (e) {
    if (bln) return;

    if (e.wheelDelta < 0) {
      //down
      if (idx < section.length - 1) {
        idx++;
      }
    } else {
      //up
      if (idx > 0) {
        idx--;
      }
    }

    secWrap.style.transform = "translateY(-" + secPos[idx] + "px)";
    bln = true;
    setTimeout(function () {
      bln = false;
    }, 1000);
  });
});
window.addEventListener('DOMContentLoaded', function () {
  var secEl = document.getElementsByName('section');
  var tabBtn = document.querySelectorAll('.side_menu ul li a');
  var secArr = [];
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 10);
  secEl.forEach(function (sl, idx) {
    secArr.push(sl.offsetTop);
  });
  console.log(secArr);
  tabBtn.forEach(function (sl, idx) {
    sl.addEventListener('mouseover', function (e) {
      e.preventDefault();
      window.scroll(0, secArr[idx]);
      tabBtn.forEach(function (a) {
        a.classList.remove('active');
      });
      sl.classList.add('active');
    });
  });
});
$(function () {
  $('.ykhurb_wrap2').hide();
  $('.ykhurb_wrap').on('mouseover', function () {
    $('.ykhurb_wrap2').show();
    $('.ykhurb_wrap').css({
      right: '20rem'
    });
  });
  $('.ykhurb_wrap2').on('mouseleave', function () {
    $('.ykhurb_wrap2').hide();
    $('.ykhurb_wrap').css({
      right: '0'
    });
  });
  $('.ykhurb_wrap2 .title a').on('click', function () {
    $('.ykhurb_wrap2').hide();
    $('.ykhurb_wrap').css({
      right: '0'
    });
  });
  $('header').on('mouseover', function () {
    $('header').addClass('active');
    $('.sub_menu01,.sub_menu02,.sub_menu03,.sub_menu04').show();
    $('.logo img:nth-of-type(1)').css({
      display: 'none'
    });
    $('.logo img:nth-of-type(2)').css({
      display: 'block'
    });
  });
  $('header').on('mouseleave', function () {
    $('header').removeClass('active');
    $('.sub_menu01,.sub_menu02,.sub_menu03,.sub_menu04').hide();
    $('.logo img:nth-of-type(1)').css({
      display: 'block'
    });
    $('.logo img:nth-of-type(2)').css({
      display: 'none'
    });
  }); // 스크롤 내리면 헤더 메뉴 배경색 생김

  $(window).on('scroll', function () {
    var position = $(window).scrollTop();

    if (position > 10) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  }); // 스크롤 내리면 사이드메뉴 색상 바뀜
  // $(window).on("scroll",function(){
  //     if($(window).scrollTop() > $('.main img').offset().top){
  //         $('.side_menu a:nth-of-type(1)').addClass('active');
  //     }
  // })
});