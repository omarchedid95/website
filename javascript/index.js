$(document).ready(() => {
    var width = $(window).width();
    var height = $(window).height();
    console.log(width, height)

    function isMobile(width, height) {
        if (width == 375 && height == 812 ||
            width == 414 && height == 736 ||
            width == 375 && height == 667 ||
            width == 320 && height == 568 ||
            width == 320 && height == 480) {
                return true;
        }
        return false;
    }

    // Remove the desktop menu for any mobile device
    if (isMobile(width, height)) {
        $('header').remove();
    }

    // iPhone X
    if (width == 375 && height == 812) {
        
    }
    // iPhone 6,7,8 Plus
    if (width == 414 && height == 736) {

    }
    // iPhone 6,7,8
    if (width == 375 && height == 667) {

    }
    // iPhone 5,5s
    if (width == 320 && height == 568) {

    }
    // iPhone 4,4s
    if (width == 320 && height == 480) {

    }
});