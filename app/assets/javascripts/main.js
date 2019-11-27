document.addEventListener("turbolinks:load",function(){
  
  $("#slider01-focus").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: "#slider01",
  });

  $("#slider01").slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    asNavFor: "#slider01-focus",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $("#slider-testimonials").slick({
    centerPadding: '60px',
    slidesToShow: 1,
    dots: true,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });  

  $("#slider-testimonials").on( 'beforeChange', function(){
    $(this).find('.slick-current img').addClass('shrink-shift');
  });

  $("#slider-testimonials").on( 'afterChange', function(){
    $(this).find('.slick-current img').removeClass('shrink-shift');
  });

});
