'use strict';
// Custom scripts
$(document).ready(function(){
  
  // Add current year to footer copyright
  var currentDate = new Date();
  $('#current-year').text((currentDate).getFullYear());
  
  function cbpAnimatedHeader() {
    var docElem = document.documentElement,
      didScroll = false,
      changeHeaderOn = 300;
    function init() {
      window.addEventListener( 'scroll', function( ) {
        if( !didScroll ) {
          didScroll = true;
          setTimeout( scrollPage, 250 );
        }
      }, false );
    }
    function scrollPage() {
      var sy = scrollY();
      if ( sy >= changeHeaderOn ) {
        $( '.navbar-default' ).addClass('navbar-shrink' );
      }
      else {
        $( '.navbar-default' ).removeClass('navbar-shrink' );
      }
      didScroll = false;
    }
    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }
    init();
  }
  
  cbpAnimatedHeader();

  var scrollToPosition = function(event) {
    var target;
    if (event !== null) {
      event.preventDefault();
    }
    target = $(this).attr('href');
    $('body').animate({
      scrollTop: $(target).offset().top + 1
    }, 500, function() {
      window.location.hash = target;
    });
  };
  $('#main-nav a').click(scrollToPosition);
  
  $('.close-modal').click(function(){
     window.location=$(this).find('a').attr('href');
     return false;
  });
  
  
  $('#mixedContent').smoothDivScroll({
		hotSpotScrolling: false,
		touchScrolling: true,
    mousewheelScrolling: 'horizontal',
    scrollToAnimationDuration: 1200,
    scrollToEasingFunction: 'swing'
    
	});
  
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });
  
//  $('a.scroll-horizontal').click(function() {
//      var href = $.attr(this, 'href');
//      $('#mixedContent').animate({
//          scrollLeft: $(href).offset().left + 1
//      }, 1500, 'swing', function () {
//          window.location.hash = href;
//      });
//  });
  
  $('.scroll-horizontal').each(function(){
    $(this).on('click', function(e){
      e.preventDefault();
      var jumpToVal = $(this).attr('data-jump-to');
      $('#mixedContent').smoothDivScroll('scrollToElement', 'id', jumpToVal);
    });
  });

  
});




