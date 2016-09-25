
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
