$(document).ready(() => {
    const width = $(window).width();
    const height = $(window).height();
    // Get the objects that we are interested in
    let sections = $('section').toArray();
    let main = $('main')[0];
    // Create an observer for our sections to figure out which on is active
    const options = {
        root: main,
        threshold: 0.7
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('inactive-section');
                entry.target.classList.add('active-section');
            } else {
                entry.target.classList.remove('active-section');
                entry.target.classList.add('inactive-section');
            }
        })
    }, options);
    sections.forEach(section => observer.observe(section));

    function isMobile(width, height) {
        if (width == 414 && height == 896 ||
            width == 375 && height == 812 ||
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