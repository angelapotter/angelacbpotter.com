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
  $nav.removeAttr('style');
  $('.menuIcon').off('click').click(function() {
    if ($nav.is(':visible')) {
      $nav.hide();  
    }
    else {
      var newNavHeight = $(window).height() - $('.header').height();
      $nav.show().css({
        'max-height': newNavHeight + 'px',
        'overflow-y': 'auto',
      }).scroll(function(e) {
        e.preventDefault();
      });
      // $nav.attr('style') = 'overflow-y: scroll; height: ' + newNavHeight 
    }        
  });
  if ($(window).width() <= 645) {
    $('.contentContainer').click(function() {
      $nav.removeAttr('style').hide();
    });  
  }
  
}

var lastScrollTop = 0;
// hide/show header on scroll (mobile)
function bindTopNavTriggers() {
  $('.header').scrollUpMenu({
    waitTime: 20,
    transitionTime: 150,
    menuCss: { 
      'position': 'fixed',
      // 'top': '-8px',
      'width': '100%',
      'border-bottom': '1px solid #ccc',
      'z-index': 7
    }
  });

  // var $header = $('.header');
  // $(window).scroll(function(e) {
  //   var st = $(this).scrollTop();
  //   var bodyHeight = $('body').height();
  //   var windowHeight = $(window).height();
  //   // downscroll or reached top of page
  //   if (st > lastScrollTop + 3 || st < 8) {
  //       if ($header.hasClass('fixed')) {
  //         $header.removeClass('fixed');
  //         $('.leftNavContainer').hide();
  //         // at top of page
  //         // if (st < 8) {
  //         //   if ($header.hasClass('fixed')) {
  //         //     $(this).removeClass('fixed').hide().slideDown();
  //         //   }     
  //         // }
  //         // $('.contentContainer').css('padding-top', '16px');  
  //       }       
  //   }
  //   // upscroll or reached bottom of page
  //   else if (st < lastScrollTop - 3 || st >= bodyHeight - 2 - windowHeight) {
  //     if (!$header.hasClass('fixed')) {
  //       $header.hide().addClass('fixed').show();
  //       // $('.contentContainer').css('padding-top', 55 + 16 + 'px'); 
  //     }     
  //   }
  //   lastScrollTop = st;    
  //   // something
  // });
}

function portfolioCoverHeight() {
  var $itemImages = $('.itemImage');
  if ($(window).width() <= 448) {      
    var $bgWidth = $itemImages.width();
    var $totalBgHeight = $bgWidth * (3000/378);
    // wtf sometimes $totalBgHeight gets set to 0
    if ($totalBgHeight > 1) {
      var $spriteSpacing = $totalBgHeight / 10;
      var $spriteHeight = $spriteSpacing * (280/300);    
      $itemImages.css('background-size', '100% ' + $totalBgHeight + 'px');
      $itemImages.add('.itemOverlay').height($spriteHeight);  
    }
   
    var projectArray = [
      'olsetAnydo',
      'olsetWebsite',
      'snake',
      'oldPersonApp',
      'myFive',
      'beforeItWasCool',
      'thirdLayerSoftware',
      'ssa',
      'olsetBizCards',
      'musicNotation'
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

function portfolioFilters() {
  var $filtersContainer = $('.filtersContainer');
  $filtersContainer.find('div').click(function() {
    var $filterOption = $(this);
    var filterClass = $filterOption.attr('class');
    var $portfolioItems = $('#items').find('.item');
    $filtersContainer.find('div').removeClass('active');
    $filterOption.addClass('active');
    $portfolioItems.hide();
    if (filterClass === 'all') {
      $portfolioItems.fadeIn('fast');  
    }
    else {
      $portfolioItems.filter('.' + filterClass).fadeIn('fast');
      // $portfolioItems.each(function(i, item) {
      //   var $portfolioItem = $(this);
      //   if ($portfolioItem.hasClass(filterClass)) {
      //     $portfolioItem.fadeIn();
      //   }
      // });  
    }  
  });
}

function windowWidthIsSmall() {
  return ($('#smallWidth').height() > 0);
}


$(document).ready(function() {
  // 'use strict';
  // resizeColorBlock();
  var $body = $('body');
  var bodyID = $body.attr('id');
  var bodyClass = $body.attr('class');
  // $('#' + bodyID + 'Link, body.portfolioPage #portfolioLink').addClass('activeTab');

  // show active section on left nav
  $('.' + bodyID + 'Link').addClass('active');

  // if (bodyID === 'portfolio') {
  //   // $('.itemOverlay').hide();
  //   $('.itemLink').hover(function(e) {
  //       e.preventDefault();
  //       $(this).find('.itemOverlay').hide();
  //   }, function() {
  //       $(this).find('.itemOverlay').show();
  //   });
  // }

  // bindOpenMenuTrigger();
  
  // portfolio  mini nav
  // if (bodyClass === 'portfolioPage') {
  //   $('a.' + bodyID).addClass('active');
  // }
  // var previousWindowWidth = $(window).width();
  windowWidthIsSmall();
  var previousWindowWidthIsSmall = windowWidthIsSmall();
  // sticky nav
  function stickyNav() {
    var $nav = $('.leftNavContainer');
    // var windowWidth = $(window).width();
    // var windowWidth = window.outerWidth;
    if (!windowWidthIsSmall()) {
      if (previousWindowWidthIsSmall) {
        $(window).off('scroll');     
        $nav.show().stickyfloat({
          startOffset: 107,
          duration: 10
          // delay: 100
          // easing: 'swing'
        });
        $('.contentContainer').off('click');
        $('.header').removeAttr('style');
        // $(window).off('scroll');
        // previousWindowWidth = $(window).width();
        previousWindowWidthIsSmall = windowWidthIsSmall(); 
      }
      else if (windowWidthIsSmall() === previousWindowWidthIsSmall) {
        $nav.show().stickyfloat({
          startOffset: 107,
          duration: 10
          // delay: 100
          // easing: 'swing'
        });
      }
    } 
    else if (windowWidthIsSmall()) {
      if (!previousWindowWidthIsSmall) {
        $(window).off('scroll');
        bindTopNavTriggers();
        bindOpenMenuTrigger();
        $nav.hide().stickyfloat('destroy');
        // previousWindowWidth = windowWidth;
        previousWindowWidthIsSmall = windowWidthIsSmall();
        $('.header').show();
      }
      else if (previousWindowWidthIsSmall === windowWidthIsSmall()) {
        bindTopNavTriggers();
        bindOpenMenuTrigger();
      }  
    }
    // previousWindowWidth = $(window).width();
    previousWindowWidthIsSmall = windowWidthIsSmall();  
  }
  stickyNav();
  $(window).on('resize orientationchange', function() {
    stickyNav();
    portfolioCoverHeight();
  });

  // portfolio index only
  if (bodyID === 'portfolio') {
    portfolioCoverHeight();
    portfolioFilters();  
  }
  
  
  
  
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
