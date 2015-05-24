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
    
  })
})(jQuery);