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
$(document).ready(function() {
  // 'use strict';
  // resizeColorBlock();
  var $body = $('body');
  var bodyID = $body.attr('id');
  var bodyClass = $body.attr('class');
  // $('#' + bodyID + 'Link, body.portfolioPage #portfolioLink').addClass('activeTab');
  $('.' + bodyID + 'Link').addClass('active');
  if (bodyID === 'portfolio') {
    $('.itemOverlay').hide();
    $('.itemLink').hover(function(e) {
        e.preventDefault();
        $(this).find('.itemOverlay').show();
    }, function() {
        $(this).find('.itemOverlay').hide();
    });
  }
  // portfolio  mini nav
  // if (bodyClass === 'portfolioPage') {
  //   $('a.' + bodyID).addClass('active');
  // }

  // sticky nav
  function stickyNav() {
    var $nav = $('.leftNavContainer');
    if ($(window).width() > 530) {      
      $nav.stickyfloat({
        startOffset: 107,
        duration: 1000
        // delay: 100
        // easing: 'swing'
      });  
    }
    else {
      try {
        $nav.stickyfloat('destroy');
      }
      catch(e) {
        console.log('e: ' + e);
      }
    }  
  }
  stickyNav();
  $(window).on('resize orientationchange', function() {
    stickyNav();
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
