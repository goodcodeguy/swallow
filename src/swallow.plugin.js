;(function ( $, window, undefined ) {

  var methods = {
    handleClick: function(e) {
      var target = $(e.target),
          traps = $.data(document, "swallow").traps,
          inside;

      for (var i in traps)
      {
        inside = false;

        // Is the click target the trap itself?
        if(target.is(traps[i][0])) 
          inside = true; // we are in the trap
        
        // Short circuit if we have already discovered where the target is
        if(false == inside)
        {
          $(traps[i][0]).find('*').each(function() {
            if($(this).is(target)) 
              inside = true;
          });
        }

        if(false == inside)
        {
          traps[i][1].apply();
          delete(traps[i]);
        }

        // If no more traps exist, go ahead and clean up the dom
        // This should probably be optional as it's not really necessary
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