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
    slidesToShow: 3,
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
