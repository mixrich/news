define([], function(){
    function Dimmer() {
      this.dimmer = null;
    }


    Dimmer.prototype.init = function() {
      var dimmer = document.getElementById('dimmer');
      if (dimmer) {
        this.dimmer = dimmer;
      }
    }

    Dimmer.prototype.showDimmer = function() {
      if (this.dimmer) {
        this.dimmer.classList.remove('dimmer--hidden');
      }
    }

    Dimmer.prototype.hideDimmer = function() {
      if (this.dimmer) {
        this.dimmer.classList.add('dimmer--hidden');
      }
    }

    return Dimmer;
})
