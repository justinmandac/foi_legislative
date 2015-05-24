(function($){
  $(function() {
    var indicators = $('.indicator');
    var scroll_trigger = $('#scroll-trigger');
    
    
    scroll_trigger.on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 0
      }, 700, 'swing');
    });
    
    indicators.click(function () {
      var parent = $(this).parents('.timeline-item');
      var content = parent.children('.item-content');
      console.log(parent);
      console.log(content);
      
      if(content.hasClass('hidden')) {
        content.removeClass('hidden');
        
        $('html, body').stop().animate({
          'scrollTop': content.offset().top - 0
        }, 700, 'swing');        
        
      }
      else {
        content.addClass('hidden');
      }
    
    });
    
    //mouse tracker
    var max_height = document.documentElement.clientHeight;
    var max_width  = document.documentElement.clientWidth;
    var container = document.getElementById('home-section');

    console.log('Doc size is (width x height) : ' + max_width + ',' + max_height);

    container.onmousemove = function(e) {
      var x_gain = 2;
      var y_gain = 4;   

      var style = window.getComputedStyle(container);
      var bg_x = style.getPropertyValue('background-position-x').split('%')[0];
      var bg_y = style.getPropertyValue('background-position-y').split('%')[0];

      console.log(bg_x);

      var x =   ((e.clientX+max_width/2) - max_width)/max_width;
      var y =   ((e.clientY+max_height/2) - max_height)/max_height;

      var x_mov = x_gain * x;
      var y_mov = y_gain * y;

      container.style.backgroundPositionX = (50+x_mov).toString()+'%';
      container.style.backgroundPositionY = (50+y_mov).toString()+'%';    
    };

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