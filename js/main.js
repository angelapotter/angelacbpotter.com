// function resizeColorBlock() {
//   // adjust color block
//   var topColorBlockH = $('.contentContainer').height() - 80;
//   $('.colorBlock.top').height(topColorBlockH);
//   //$('#about .colorBlock.top').height(topColorBlockH - 18);
//   // console.log(topColorBlockH);
//   var previousOrientation = window.orientation;
//   var checkOrientation = function() {
//     if (window.orientation !== previousOrientation) {
//       previousOrientation = window.orientation;
//       topColorBlockH = $('.contentContainer').height() - 80;
//       $('.colorBlock.top').height(topColorBlockH);
//     }
//   };
// }
function bindOpenMenuTrigger() {
  var $nav = $('.leftNavContainer');
  $('.menuIcon').click(function() {
    if ($nav.is(':visible')) {
      $nav.hide();  
    }
    else {
      $nav.show();  
    }
        
  });
  $('.contentContainer').click(function() {
    $nav.hide();
  });
}
var lastScrollTop = 0;
function bindTopNavTriggers() {
  $(window).scroll(function(e) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop + 5 || st < 8){
        // downscroll code
        $('.header').removeClass('fixed');
        $('.leftNavContainer').hide();
    }
    else if (st < lastScrollTop - 5) {
       // upscroll code       
       $('.header').addClass('fixed');
    }
   lastScrollTop = st;
    
    // something
  });
}


$(document).ready(function() {
  // 'use strict';
  // resizeColorBlock();
  var $body = $('body');
  var bodyID = $body.attr('id');
  var bodyClass = $body.attr('class');
  // $('#' + bodyID + 'Link, body.portfolioPage #portfolioLink').addClass('activeTab');
  $('.' + bodyID + 'Link').addClass('active');
  if (bodyID === 'portfolio') {
    // $('.itemOverlay').hide();
    $('.itemLink').hover(function(e) {
        e.preventDefault();
        $(this).find('.itemOverlay').hide();
    }, function() {
        $(this).find('.itemOverlay').show();
    });
  }

  bindOpenMenuTrigger();
  
  // portfolio  mini nav
  // if (bodyClass === 'portfolioPage') {
  //   $('a.' + bodyID).addClass('active');
  // }
  var previousWindowWidth = $(window).width();
  // sticky nav
  function stickyNav() {
    var $nav = $('.leftNavContainer');
    if ($(window).width() > 645) {
      if (previousWindowWidth <= 645) {
        $(window).off('scroll');     
        $nav.show().stickyfloat({
          startOffset: 107,
          duration: 10
          // delay: 100
          // easing: 'swing'
        }); 
      }
      else if ($(window).width() === previousWindowWidth) {
        $nav.show().stickyfloat({
          startOffset: 107,
          duration: 10
          // delay: 100
          // easing: 'swing'
        });
      }
    } 
    else if ($(window).width() <= 645) {
      if (previousWindowWidth > 645) {
        bindTopNavTriggers();
        $nav.hide().stickyfloat('destroy');
      }
      else if (previousWindowWidth === $(window).width()) {
        bindTopNavTriggers();
      }  
    }
    previousWindowWidth = $(window).width();  
  }
  function portfolioCoverHeight() {
    var $itemImages = $('.itemImage');
    if ($(window).width() <= 448) {      
      var $bgWidth = $itemImages.width();
      var $totalBgHeight = $bgWidth * (3000/378);
      var $spriteSpacing = $totalBgHeight / 10;
      var $spriteHeight = $spriteSpacing * (280/300);
      $itemImages.css('background-size', '100% ' + $totalBgHeight + 'px');
      $itemImages.add('.itemOverlay').height($spriteHeight);
      var projectArray = [
        'olsetAnydo',
        'olsetWebsite',
        'snake',
        'oldPerson',
        'myFive',
        'beforeItWasCool',
        'thirdLayerSoftware',
        'ssa',
        'olsetBizCards'
      ]
      $.each(projectArray, function(i, item) {
        var newBgPosY = i * $spriteSpacing * -1;
        $('#' + item).find('.itemImage').css('background-position', '0 ' + newBgPosY + 'px');
      });
    }
    else {
      $itemImages.add('.item').add('.itemOverlay').removeAttr('style');
    }
  }
  stickyNav();
  portfolioCoverHeight();
  $(window).on('resize orientationchange', function() {
    stickyNav();
    portfolioCoverHeight();
  });
  
  
  // $nav.stickyfloat('update', {
  //   duration: 100,
  //   delay: 100  
  // });
//   var stickyNavTop = $('.nav').offset().top;  
  
//   var stickyNav = function(){  
//     var scrollTop = $(window).scrollTop();  
           
//     if (scrollTop > stickyNavTop) {   
//         $('.nav').addClass('sticky');
//         $('.contentContainer').width($('.containerXL').width() - $('.nav').width());
//     } else {  
//         $('.nav').removeClass('sticky');   
//     }  
//   };  
    
//   stickyNav();  
    
//   $(window).scroll(function() {  
//       stickyNav();  
//   });
});

// $(window).on('load resize orientationchange', function() {
//   resizeColorBlock();
//   var resizeColorBlockTimeout = setTimeout(function() {
//     clearTimeout(resizeColorBlockTimeout);
//     resizeColorBlock();
//   }, 800);
//   // window.addEventListener('resize', checkOrientation, false);
//   // window.addEventListener('orientationchange', checkOrientation, false);
//   // just in case
//   // setInterval(checkOrientation, 2000);
// });
