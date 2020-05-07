
 /* jQuery Preloader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$('.dropdown').mouseover(function(){
      $(this).find('.dropdown-menu').slideDown(650);
    });
    $('.dropdown').mouseleave(function(){
      $(this).find('.dropdown-menu').slideUp(650);
    });
$(document).ready(function() {


  /* BxSlider for slider
    -----------------------------------------------*/
  (function (window, $) {
  'use strict';

  // Cache document for fast access.
  var document = window.document;

  function mainSlider() {
    $('.bxslider').bxSlider({
		auto: true,
      pagerCustom: '#bx-pager',
      mode: 'fade',
      nextText: '',
      prevText: ''
    });
  }

  mainSlider();

  var $links = $(".bx-wrapper .bx-controls-direction a, #bx-pager a");
  $links.click(function(){
     $(".slider-caption").removeClass('animated fadeInLeft');
     $(".slider-caption").addClass('animated fadeInLeft');
  });

  $(".bx-controls").addClass('container');
  $(".bx-next").addClass('fa fa-angle-right');
  $(".bx-prev").addClass('fa fa-angle-left');


  })(window, jQuery);


   /* Owl Carousel
    -----------------------------------------------*/
  // $(document).ready(function() {
  //   $("#owl-work").owlCarousel({
  //     autoPlay: 3000,
  //     items : 3,
  //     itemsDesktop : [1199,3],
  //     itemsDesktopSmall : [979,3],
  //   });
  // });
  

  /* Parallax section
    -----------------------------------------------*/
  // function initParallax() {
  //   $('#work').parallax("100%", 0.3);
  //   $('#about').parallax("100%", 0.2);
  //   $('#team').parallax("100%", 0.3);
  //   $('#portfolio').parallax("100%", 0.1);
  //   $('#plan').parallax("100%", 0.3);
  //   $('#contact').parallax("100%", 0.2);
  // }
  // initParallax();


  /* Nivo lightbox
    -----------------------------------------------*/
  // $('#portfolio .col-md-4 a').nivoLightbox({
  //       effect: 'fadeScale',
  //   });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

// To Show or hide the sticky footer button
$("#back").hide();
$(window).scroll(function()
 {
  event.preventDefault();

  if ($(this).scrollTop() > 200)
 {
  $("#back").fadeIn(200);
} 
else
 {
  $("#back").fadeOut(200);
}
 });    

// Animate the scroll to top
$("#back").click(function(event) 
{
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 5000);
  })

    /*Script to toggle Accordion in Product Categories*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++)
    {
        acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
$(document).ready(function(){
    $('#more-vege').hide();
    $('#more-sauces').hide();
    $('.btn-more-vege').click(function(){
        var content = $(this).text();
        if(content == 'Show More'){
            $(this).text('Show Less');
        }else{
            $(this).text('Show More');
        }
         $('#more-vege').slideToggle();
          $('#more-sauces').slideToggle();          //there's slideDown and slideUp too. slideToggle(1200);
    });

 // $(document).ready(function() {
 //    $('#moree').hide();

 //   $('#btn-readmoree').click(function(){
 //        var content=$(this).text()
 //        if (content== '#moree') {
 //          $(this).text('Show more')
 //        }else
 //        {
 //          $(this).text('Show less')
 //        }

 //     $('#moree').slideToggle();
 //        });
     });
