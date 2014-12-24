'use strict';
// Custom scripts
$(document).ready(function(){
  
  // Add current year to footer copyright
  var currentDate = new Date();
  $('#current-year').text((currentDate).getFullYear());
  
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
  
  $('.scroll-horizontal').each(function(){
    $(this).on('click', function(e){
      e.preventDefault();
      var jumpToVal = $(this).attr('data-jump-to');
      $('#mixedContent').smoothDivScroll('scrollToElement', 'id', jumpToVal);
    });
  });
  
  $('.sub-menu-link').each(function(){
    $(this).on('click', function(e){
      e.preventDefault();
      resetSubMenu();
      $(this).find('i').toggleClass('fa-chevron-up fa-chevron-down');
      $(this).next('.sub-menu').toggleClass('hidden');
    });
  });
  
  function resetSubMenu() {
    $('.sub-menu-link').each(function(){
      $(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
      $(this).next('.sub-menu').addClass('hidden');
    });
  }
  
  if($(window).width() < 768) {
    $('.scroll-horizontal').on('click', function(){
      $('.row-offcanvas').removeClass('active');
    });
  }

  
});




