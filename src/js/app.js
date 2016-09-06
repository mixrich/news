/*;(function () {



})();*/

require(['./modules/dimmer'], function(Dimmer) {

    var dimmer = new Dimmer();
    dimmer.init();
    document.addEventListener('click', function(e) {
        var target = e.target;
        if (target && target.hasAttribute('data-action')) {
            var action = target.getAttribute('data-action');
            switch (action) {
                case 'show-dimmer':
                    dimmer.showDimmer();
                    break;
                case 'hide-dimmer':
                    dimmer.hideDimmer();
                    break;
                default:

            }
        }
    });

});
