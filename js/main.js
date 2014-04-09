function resizeColorBlock() {
  // adjust color block
  var topColorBlockH = $('.mainArea').height() - 80;
  $('.colorBlock.top').height(topColorBlockH);
  //$('#about .colorBlock.top').height(topColorBlockH - 18);
  // console.log(topColorBlockH);
  var previousOrientation = window.orientation;
  var checkOrientation = function() {
    if (window.orientation !== previousOrientation) {
      previousOrientation = window.orientation;
      topColorBlockH = $('.mainArea').height() - 80;
      $('.colorBlock.top').height(topColorBlockH);
    }
  };
}
$(document).ready(function() {
  'use strict';
  resizeColorBlock();
  var bodyID = $('body').attr('id');
  var bodyClass = $('body').attr('class');
  $('#' + bodyID + 'Link, body.portfolioPage #portfolioLink').addClass('activeTab');
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
  if (bodyClass === 'portfolioPage') {
    $('a.' + bodyID).addClass('active');
  }
});

$(window).on('load resize orientationchange', function() {
  resizeColorBlock();
  var resizeColorBlockTimeout = setTimeout(function() {
    clearTimeout(resizeColorBlockTimeout);
    resizeColorBlock();
  }, 800);
  // window.addEventListener('resize', checkOrientation, false);
  // window.addEventListener('orientationchange', checkOrientation, false);
  // just in case
  // setInterval(checkOrientation, 2000);
});

/*
//AJAX version
function loadContent(pageTitle) {
  var xmlhttp;
  var stateObj={index:pageTitle};
  if (window.XMLHttpRequest) {
    //modern browsers
    xmlhttp=new XMLHttpRequest();
  }
  else {
    //IE5, IE6
    xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById('contentcontainer').innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open('GET',pageTitle+'_content.html',true);
  xmlhttp.send();
  document.title='Angela Potter: '+pageTitle;
$(document).ready(function() {
  loadContent('about');
  $('#aboutLink').click(function() {
    loadContent('about');
  });
  $('#resumeLink').click(function() {
    loadContent('resume');
  });
  $('#portfolioLink').click(function() {
    loadContent('portfolio');
  });
  $('#contactLink').click(function() {
    loadContent('contact');
  });
  $('h1').click(function() {
    loadContent('about')
  });
  $('h2').click(function() {
    loadContent('portfolio')
  });
});
*/
