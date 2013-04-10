;(function ( $, window, undefined ) {

  var methods = {
    handleClick: function(e) {
      var target = $(e.target),
          traps = $.data(document, "clicktrap").traps,
          inside;

      for (var i in traps)
      {
        inside = false;

        if(target.is(traps[i][0])) 
          inside = true;
        
        $(traps[i][0]).children().each(function() {
          if($(this).is(target)) 
            inside = true;
        });

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
      $(window).unbind('.clicktrap');
      $.removeData(document, 'clicktrap');
    }
  }
  $.fn.clicktrap = function( callback ) {

    var data = $(document).data('clicktrap');

    if( !data )
    {
      $(document).data('clicktrap', {
        traps: []
      });

      $(document).on('click.clicktrap', methods.handleClick);
    }

    return this.each(function() {
      $.data(document, "clicktrap").traps.push([this, callback]);
    });

  };

}) (jQuery);