(function ($) {
    "use strict";
  /*Table of content
  ----------------------------------------*/
  /*
  1. WOW Js
  2. Counter up
  3. Mixitup
  4. Team Slick Slider
  5. Client Slick Slider
  6. Testimonial Slick Slider
  7. Hrro Slick Slider
  8. Progress Bar Animation
  9. Video Popup
  10. Preloader
  11. Image Popup
  12. Responsive
  13. Stickty Nave
*/
  /*===============================================
                    1. WOW Js
  =================================================*/
  // WOW Js Active
    new WOW().init();

  /*===============================================
                     2. Counter up 
   ================================================*/
    const counterClass = document.getElementsByClassName('counter-up').length > 0;
  if (counterClass) {
    $(".counter-up").counterUp({
      delay: 10,
      time: 1000,
    });

  }

  /*===============================================
                       3. Mixitup 
   ===============================================*/
    const mixitupClass = document.getElementsByClassName('project-content').length > 0;
  if (mixitupClass) {
    var mixer = mixitup('.project-content',
      {
        load: {
          filter: '.engineering'
        }
      });
  }

  /*===============================================
                   4. Team Slick Slider 
 ==================================================*/
    const teamSliderClass = document.getElementsByClassName('team-slider').length > 0;
  if (teamSliderClass) {
    $('.team-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  /*=============================================== 
                 5. Client Slick Slider 
  ================================================*/
    const clientSliderClass = document.getElementsByClassName('clients-slider').length > 0;
  if (clientSliderClass) {
    $('.clients-slider').slick({
      slidesToShow: 7,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1217,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1021,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
  }

  /*=============================================== 
                 6. Testimonial Slick Slider
  ================================================*/
    const testimonialSliderClass = document.getElementsByClassName('testimonial-slider').length > 0;
  if (testimonialSliderClass) {
    $('.testimonial-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: false,
      infinite: true,
    });
  }

  /*=============================================== 
                7. Hero Slick Slider
  ================================================*/
    const heroSliderClass = document.getElementsByClassName('hero-slider').length > 0;
  if (heroSliderClass) {
    $('.hero-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 9500,
      dots: false,
      infinite: true,
      prevArrow: false,
      nextArrow: false,
      pauseOnHover: false,
      pauseOnFocus: false,
    });
    $('.hero-slider').slickAnimation();
  }

  /*=============================================== 
                8. Progress Bar Animation
  ================================================*/
    const progressBarClass = document.getElementsByClassName('skillbar').length > 0;
  if (progressBarClass) {
    $('.skillbar').waypoint(function () {
      $('.skillbar').skillBars({
        from: 0,
        speed: 2000,
        interval: 100,
        decimals: 0,
      });
    }, { offset: '75%' });
  }

  /*=============================================== 
                9. Video Popup
  ================================================*/
  $('#career-video').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

      patterns: {
        youtube: {
          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

          id: 'v=', // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }

          src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        }
        // you may add here more sources
      },
      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    }
  });


  /*=============================================== 
                10. Preloader
  ================================================*/
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  });

  /*=============================================== 
                 11. Image Popup
   ================================================*/
  $('.img-popup').magnificPopup({
    type: 'image'
  });
  $('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
  });

  /*=============================================== 
               12. Responsive
 ================================================*/
  var dWith = window.matchMedia("(min-width: 992px)")
  function DeviceWidthChange(dWith) {
    if (dWith.matches) { // If media query matches
      //Remove Navebar Dropdown menu data toggle attribute
      $('#navbarText li.nav-item.dropdown a.dropdown-toggle').removeAttr('data-bs-toggle');
    } else {
      $('#navbarText li.nav-item.dropdown a.dropdown-toggle').attr('data-bs-toggle', 'dropdown');
    }
  }

  DeviceWidthChange(dWith) // Call listener function at run time
  dWith.addEventListener('change', DeviceWidthChange) // Attach listener function on state changes

  /*=============================================== 
               13. Stickty Nave
 ================================================*/
  //-------------For All pages---------------------
  const stickyNave = document.getElementById('sticky1-navbar-section');
  if (stickyNave) {
    window.onscroll = function () { stickyFunction() };

    var navbar = document.getElementById("sticky1-navbar-section");
    var sticky = navbar.offsetTop;

    function stickyFunction() {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky1");

      } else {
        navbar.classList.remove("sticky1");
      }
    }
  }
  //-------------For All pages End----------------
  //-------------For Home 2-----------------------
  const stickyNaveHome2 = document.getElementById('sticky2-navbar-section');
  if (stickyNaveHome2) {
    window.onscroll = function () { stickyFunction() };

    var navbar = document.getElementById("sticky2-navbar-section");
    var navbar2 = document.getElementById("sticky2-navbar");
    var sticky = navbar.offsetTop;

    function stickyFunction() {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky2");

        navbar2.classList.add("nav-bg-white");
        navbar2.classList.remove("navbar-dark");

        $("#logo-for-whitebg").show();
        $("#logo-for-darkbg").hide();

      } else {
        navbar.classList.remove("sticky2");
        navbar2.classList.remove("nav-bg-white");
        navbar2.classList.add("navbar-dark");

        $("#logo-for-whitebg").hide();
        $("#logo-for-darkbg").show();
      }
    }
  }
  //-------------For Home 2 End------------------
  //-------------For Home 3-----------------------
  const stickyNaveHome3 = document.getElementById('sticky3-navbar-section');
  if (stickyNaveHome3) {
    window.onscroll = function () { stickyFunction() };

    var navbar = document.getElementById("sticky3-navbar-section");
    var navbar2 = document.getElementById("top-navbar-home3");
    var sticky = navbar.offsetTop;

    function stickyFunction() {
      if (window.pageYOffset >= 200) {
        navbar2.classList.add("sticky3");
      } else {
        navbar2.classList.remove("sticky3");
      }
    }
  }

  //-------------For Home 2 End------------------
  //=======================END========================
})(jQuery);