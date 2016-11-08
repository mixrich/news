// Categories
var categoriesShowAllButton = document.getElementById('js-categories-show-all');

if (categoriesShowAllButton) {
    categoriesShowAllButton.addEventListener('click', function() {
        this.style.display='none';

        var toogles = document.getElementsByClassName('categories__toogle');
        if (toogles) {
            for (var i=0; i<toogles.length; i++) {
                toogles[i].classList.remove('hidden');
            }
        }
    });
}



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

var sliderNewsConfig = {
    arrows: false,
    centerMode: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    variableWidth: false,
    dots: true
};

var sliderNews = $('.slider-news');

if (sliderNews.length && screen.width < 768) {
    sliderNews.each(function(index, slider){
        $(slider).slick(sliderNewsConfig);
    });
}



$('#showMore').on('click', some);

function some() {
    console.log('func');
    // do some stuff
}





/*var titleHeight = 48;
console.log('here');*/
/*$(window).resize(function() {
    $('.news-item__title').each(function(){
        var lineHeight = parseInt($(this).css('line-height'));
        var height = $(this).height();
        var ratio = height/titleHeight;
        if (ratio > 1) {
            lineHeight = lineHeight/ratio;
            var font = lineHeight/1.5;

            $(this).css('line-height', lineHeight + 'px');
            $(this).css('font-size', font + 'px');

        }
    });
});
*/
/*$(window).resize(function() {
    $('.news-item__title').each(function(){
        if ($(this).height() > titleHeight) {
            $(this).addClass('news-item__title_overflow');
        }
    });
});*/
