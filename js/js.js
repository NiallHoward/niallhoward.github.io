$(document).ready(function(){

  $(function() {
        //caches a jQuery object containing the header element
        var header = $(".buttonnavigation");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 500) {
                header.addClass("smaller");
            } else {
                header.removeClass("smaller");
            }
        });
    });

    $( '.allclickable' ).click( function() {
        var clickLinkClass = $( this ).find( 'a.clicklink' );

        if( clickLinkClass.length ) {

          if( clickLinkClass.attr( 'target' ) == '_blank' ) {
            var link = clickLinkClass.attr( 'href' );
            window.open( link, '_blank');
          }
          else {
            window.location = clickLinkClass.attr( 'href' );
          }
        }
        return false;
    });

});