var $win = $(window);
var isFlickity = true;
var $main_gallery = $('.main_gallery').flickity();

$win.on('load resize', function() {

    var windowWidth = window.innerWidth;

    if(windowWidth > 767) {
        if(isFlickity) {
            $main_gallery.flickity('destroy');
            isFlickity = false;
        }
    } else {
        if(!isFlickity) {
            $main_gallery.flickity({
                autoPlay: true,
                draggble: true,
                pageDots: true,
                prevNextButtons: false,
            });
            isFlickity = true;
        }
    }
});