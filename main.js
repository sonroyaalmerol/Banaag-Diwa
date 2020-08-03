
var num0 = 0;
var num1 = 0;
var allowScroll = true;

const MAX_PAGES = 8; // change depending on number of pages

// always reset to #0
$('html, body').animate({
    scrollTop: $("#0").offset().top
}, {
    duration: 500
});

$(window).bind('mousewheel', function(event) {
    num0 = event.originalEvent.wheelDelta/120;
    if (allowScroll) {
        allowScroll = false;
        if (num0 < 0) {
            // downscroll code
            num1++;
            if (num1 === 1) {
                $("#banaag").animate({left: "-=250px", opacity: "0"}, {
                    duration: 1000
                });
            }
            if (num1 > MAX_PAGES) {
                num1 = MAX_PAGES;
            }
        } else if (num0 > 0) {
            // upscroll code
            num1--;
            if (num1 === 0) {
                $("#banaag").animate({left: "+=250px", opacity: "1"}, {
                    duration: 700
                });
            }
            if (num1 < 0){
                num1 = 0;
            }
        }
        $('html, body').animate({
            scrollTop: $(`#${num1}`).offset().top
        }, {
            duration: 1000,
            complete: function () {
                allowScroll = true;
            }
        });
    }
});
    