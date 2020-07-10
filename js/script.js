$(document).ready(function() {
    
  $('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });



  $('.portfolio__works').isotope({
    itemSelector: '.portfolio-work',
    layoutMode: 'masonry',
    sortBy: 'original-order'
  });

  $('.portfolio__nav ul li').click(function() {
  $('.portfolio__nav ul li').removeClass('active');
  $(this).addClass('active');
  
  var selector = $ (this).attr('data-filter');
  $('.portfolio__works').isotope({
    filter: selector
  });
    return false;
  });



  $(".owl-carousel").owlCarousel({
    items: 1,
    animateIn: true,
    animateOut: 'fadeOut'
  });



  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });



  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  })


});