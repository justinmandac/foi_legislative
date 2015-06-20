(function($){
  $(function() {

    
    //mouse tracker
    var max_height = document.documentElement.clientHeight;
    var max_width  = document.documentElement.clientWidth;
    var container = document.getElementById('home-section');

    document.onscroll = function () {
      var y_offset = window.scrollY;
      var diff = max_height - y_offset;

      if(diff >= 0 ) {
        var style = window.getComputedStyle(container);
        var bg_y = style.getPropertyValue('background-position-y').split('%')[0];

        var y_mov = (diff/max_height - 1)*100;
        container.style.backgroundPositionY = (50+y_mov).toString()+'%';    
      }

    }    
    
  })
})(jQuery);