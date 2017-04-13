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
  
/*  $('.sl').slick({
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
*/
  $('.sl_partners').slick({
    infinite: true,
    slidesToShow: 4,
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

$(".sl").slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 150,
    fade: true,
    cssEase: 'linear'
});

 //ticking machine
    var percentTime;
    var tick;
    var time = 1;
    var progressBarIndex = 0;

    $('.progressBarContainer .progressBar').each(function(index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 5.1);
    }

    function interval() {
        if (($('.sl .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('.sl .slick-track div[aria-hidden="false"]').data("slickIndex");
            startProgressbar();
        } else {
            percentTime += 1 / (time + 5);
            $('.inProgress' + progressBarIndex).css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $('.single-item').slick('slickNext');
                progressBarIndex++;
                if (progressBarIndex > 5) {
                    progressBarIndex = 0;
                }
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $('.inProgress').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }
    startProgressbar();
    // End ticking machine

    $('.progressBarContainer div').click(function () {
      clearInterval(tick);
      var goToThisIndex = $(this).find("span").data("slickIndex");
      $('.single-item').slick('slickGoTo', goToThisIndex, false);
      startProgressbar();
    });