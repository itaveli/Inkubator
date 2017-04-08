  $('.slider_banner').slick({
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 3000,
  	arrows: false,
  	infinite: true,
  	speed: 150,
  	fade: true,
  	cssEase: 'linear'
  });
  
  $('.sl').slick({
  	slidesToScroll: 1,
  	autoplay: false,
  	autoplaySpeed: 3000,
  	arrows: false,
  	dots: true,
  	infinite: true,
  	speed: 150,
  	fade: true,
  	cssEase: 'linear'
  });

  $('.sl_partners').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

/*$('.sl_partners').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});*/