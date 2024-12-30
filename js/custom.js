$(document).ready(function($){
  // preloader js =============>>>
    setTimeout(function() {
      $('body').addClass('loaded');
    }, 500);
  // cursor effect =================== >>>
    new kursor({
      type: 2,
      color: "#121111",
    });
  // MENU ============================ >>>
    $(".menu").sticky({topSpacing:0});
  // typed =============>
    var typed = new Typed('.type', {
        strings: ['Social Media Management',
                'Facebook Ads',
                'Google Ads',
                'SEO',
                'Canva Design'],
                typeSpeed: 50,
                backSpeed: 50,
                backDelay: 300,
                startDelay: 1000,
                loop:true
    });
  // counter ============= >>
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = 0;

      function updateCounter() {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = target / 500;
        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 10);;
        } else {
          counter.innerText = target;
        }
      }
      updateCounter();
    });
  // HEADER-img ========= >>
    VanillaTilt.init(document.querySelector(".header-img"), {
      max: 5,
      speed: 400,
    });
  
  // slider ========================== >>>
    $('.used-app').owlCarousel({
      loop:true,
      margin:10,
      center: true,
      autoplay:true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      loop:true,
      nav:false,
      dots: false,
      responsive:{
          0:{
              items:3
          },
          600:{
              items:4
          },
          1000:{
              items:6
          }
      }
    });
  // service ========================== >>>
    VanillaTilt.init(document.querySelector(".service-one"), {
      max: 20,
      speed: 600,
          
    });
    VanillaTilt.init(document.querySelector(".service-two"), {
      max: 20,
      speed: 600,
          
    });
    VanillaTilt.init(document.querySelector(".service-three"), {
      max: 20,
      speed: 600,
          
    });
    VanillaTilt.init(document.querySelector(".service-four"), {
      max: 20,
      speed: 600,
          
    });
  // Gallery ========================= >>>
    $(document).ready(function(){
      $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
          $('.itembox').show('1000');
        }
        else{
          $('.itembox').not('.'+value).hide('1000');
          $('.itembox').filter('.'+value).show('1000');
        }
      })
      $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
      })
    });
  // video popup 1 =======>
    $('.see-image').magnificPopup({
      type: 'image',
      // iframe: {
      //     markup: '<div class="mfp-iframe-scaler">' +
      //         '<div class="mfp-close"></div>' +
      //         '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      //         '</div>',
      //     srcAction: 'iframe_src'
      // }
    });
    $('.view-expand').magnificPopup({
      type: 'image',
    });
  // BLOG SLIDER ===================== >>>
    $('.blog-slide').owlCarousel({
      loop:true,
      margin:10,
      dots: false,
      nav:true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      autoplaySpeed: 3000,
      navText:["<i class='far fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    });
  // clicent slider ================== >>>
    $('.testimonial-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      navText:["<i class='far fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
      responsive:{
          0:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });
});