(function ($) {

 "use strict";



/*----------------------------

 jQuery MeanMenu

------------------------------ */

	jQuery('nav#dropdown').meanmenu();	

	

/*----------------------------

 wow js active

------------------------------ */

 new WOW().init();	   

/*--------------------------

 scrollUp

---------------------------- */	

	$.scrollUp({

        scrollText: '<i class="fa fa-angle-up"></i>',

        easingType: 'linear',

        scrollSpeed: 900,

        animation: 'fade'

    });

 /*------------------------------------

 jquery Serch Box activation code 

 --------------------------------------*/

 $(".search-button").on('click', function(){

    $(".search-text").slideToggle('slow');

});

/*----------------------------

 Team Section active

------------------------------ */  

  $(".team-area").owlCarousel({

      autoPlay: false, 

	  slideSpeed:2000,

	  pagination:true,

	  navigation:false,	  

      items : 3,

	  /* transitionStyle : "fade", */    /* [This code for animation ] */

	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],

      itemsDesktop : [1199,3],

	  itemsDesktopSmall : [980,2],

	  itemsTablet: [767,1],

	  itemsMobile : [479,1],

  });

/*-------------------------------------

Lightslider activation For Single room

--------------------------------------*/

  $('#image-gallery').lightSlider({

    gallery:true,

    item:1,

    thumbItem:9,

    slideMargin: 1,

    speed:500,

    auto:true,

    loop:true,

    onSliderLoad: function() {

    $('#image-gallery').removeClass('cS-hidden');

    }  

  });

  /*----------------------------

   Testimonial Section active

  ------------------------------ */  

    $(".testimonial-area").owlCarousel({

        autoPlay: true, 

      slideSpeed:2000,

      pagination:true,

      navigation:false,   

        items : 1,

      /* transitionStyle : "fade", */    /* [This code for animation ] */

      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],

        itemsDesktop : [1199,1],

      itemsDesktopSmall : [980,1],

      itemsTablet: [768,1],

      itemsMobile : [479,1],

    });

  /*----------------------------

   Blog Section active

  ------------------------------ */  

    $(".blog-area").owlCarousel({

        autoPlay: true, 

      slideSpeed:2000,

      pagination:false,

      navigation:true,  

        items : 3,

      /* transitionStyle : "fade", */    /* [This code for animation ] */

      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],

        itemsDesktop : [1199,3],

      itemsDesktopSmall : [980,3],

      itemsTablet: [768,2],

      itemsMobile : [479,1],

    });

    //Sticky Header

    $(window).on('scroll', function(){

        if( $(window).scrollTop()>100 ){

             $('#sticker').addClass('stick');

        } else {

            $('#sticker').removeClass('stick');

        }

    });

	   









})(jQuery); 