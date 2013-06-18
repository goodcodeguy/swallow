;(function ( $, window, undefined ) {

  var methods = {
    handleClick: function(e) {
      var target = $(e.target),
          traps = $.data(document, "swallow").traps,
          inside;

      for (var i in traps)
      {
        inside = false;

        if(target.is(traps[i][0])) 
          inside = true;
        
        // Short circuit if we are already inside
        if(false == inside)
        {
          $(traps[i][0]).find('*').each(function() {
            if($(this).is(target)) 
              inside = true;
          });
        }

        // Short circuit if we are already inside
        if(false == inside)
        {
          traps[i][1].apply();
          delete(traps[i]);
        }

        if(traps.length == 0)
        {
          methods.destroy();
        }
        
      }
    },
    destroy: function() {
      $(window).unbind('.swallow');
      $.removeData(document, 'swallow');
    }
  }
  $.fn.swallow = function( callback ) {

    var data = $(document).data('swallow');

    if( !data )
    {
      $(document).data('swallow', {
        traps: []
      });

      $(document).on('click.swallow', methods.handleClick);
    }

    return this.each(function() {
      $.data(document, "swallow").traps.push([this, callback]);
    });

  };

}) (jQuery);