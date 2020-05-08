$(document).ready(function(){

  const $slider = $(".pages");
    $slider.on('init', () => {
        mouseWheel($slider)
    })
    .slick({
        dots: true,
        vertical: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 1000,
        autoplay: false,
        verticalSwiping: false,

    });

    $('a[data-slide]').click(function(e) {
       // e.preventDefault();
       var slideno = $(this).data('slide');
       $('.pages').slick('slickGoTo', slideno - 1);
    });

    $(".box-container .box ").click(function(){
        $('.box-container .box').not(this).removeClass('selected');
        $(this).toggleClass('selected');

       if ( $('.box.previewlegacy').hasClass("selected") ) {
            $( ".description.previewlegacy" ).show();
            $( ".description.mirror" ).hide();
            $( ".description.boozer" ).hide();
            $( ".description.badminton" ).hide();
       }
        if ( $('.box.mirror').hasClass("selected") ) {
            $( ".description.mirror" ).show();
            $( ".description.boozer" ).hide();
            $( ".description.badminton" ).hide();
            $( ".description.previewlegacy" ).hide();

       }
       if ( $('.box.boozer').hasClass("selected") ) {
            $( ".description.boozer" ).show();
            $( ".description.mirror" ).hide();
            $( ".description.badminton" ).hide();
            $( ".description.previewlegacy" ).hide();

       }
       if ( $('.box.badminton').hasClass("selected") ) {
            $( ".description.badminton" ).show();
            $( ".description.mirror" ).hide();
            $( ".description.boozer" ).hide();
            $( ".description.previewlegacy" ).hide();

       }
    });

    $('.work .right .description').matchHeight({ byRow: false });

});




function mouseWheel($slider) {
    $(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
}
    
function mouseWheelHandler(event) {
    // event.preventDefault()
    const $slider = event.data.$slider
    const delta = event.originalEvent.deltaY
    if(delta > 0) {
        $slider.slick('slickPrev')
    }
    else {
        $slider.slick('slickNext')
    }
}