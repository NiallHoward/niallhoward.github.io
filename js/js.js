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

    // $(document).mousemove(function(event) {
    //   windowWidth = $(window).width();
    //   windowHeight = $(window).height();
      
    //   mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    //   mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
      
    //   $('.content-wrap').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
    // });

    document.querySelector('.hovereffect').onmousemove = (e) => {

      const x = e.pageX - e.target.offsetLeft
      const y = e.pageY - e.target.offsetTop
    
      e.target.style.setProperty('--x', `${ x }px`)
      e.target.style.setProperty('--y', `${ y }px`)
      
    }

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