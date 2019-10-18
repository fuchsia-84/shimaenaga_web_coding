var $win = $(window);

$win.on('load resize', function() {

    var windowWidth = window.innerWidth;

    if(windowWidth < 767) {
        $('.main_gallery').flickity({
                autoPlay: true,
                draggble: true,
                pageDots: true,
                prevNextButtons: false,
        })
    } else {
        $('.main_gallery').flickity('destroy')
    }
});