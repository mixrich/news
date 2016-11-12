// Slider

var slickConfig = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    arrows: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev">&#8592</button>',
    nextArrow: '<button type="button" class="slick-next">&#8594;</button>',
    responsive: [
    {
      breakpoint: 1160,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
        adaptiveHeight: true,
        variableWidth: false,
        dots: true
      }
    },
    {
      breakpoint: 959,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        adaptiveHeight: true,
        variableWidth: true,
        dots: false
      }
    },
    {
        breakpoint: 840,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1,
          adaptiveHeight: true,
          variableWidth: false,
          dots: true
        }
    }
    ]
};

//Берем все слайдеры на странице
var sliders = $('.slider');

//Если есть хотя бы один, то для каждого берем его картинки и оборачиваем в div, после чего инифиализируем
if (sliders.length) {
    sliders.each(function(index, slider){

        var images = $(slider).find('img');

        if (images.length) {
            $(images).each(function(i, image){
                $(image).wrap('<div class="slider__image-container"></div>');
            });
        }

        $(slider).slick(slickConfig);

    });
}

//slider-news - Слайдер новостей внизу страницы статьи. Инициализируется только на мобиле
//
// var sliderNewsConfig = {
//     arrows: false,
//     centerMode: false,
//     slidesToShow: 1,
//     adaptiveHeight: true,
//     variableWidth: false,
//     dots: true
// };
//
// var sliderNews = $('.slider-news');
//
// if (sliderNews.length && screen.width < 768) {
//     sliderNews.each(function(index, slider){
//         $(slider).slick(sliderNewsConfig);
//     });
// }




$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        if (location.hash == "#search") {
            location.hash = '';
        }
    }
});

$(document).scroll(function(){
    if ($(this).scrollTop() > 500) {
        $('#to-the-top').fadeIn(600);
    } else {
        $('#to-the-top').fadeOut(600);
    }
});


$("#to-the-top").click(function() {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 500);
});
