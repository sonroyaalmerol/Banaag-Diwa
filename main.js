
var num0 = 0;
var num1 = 0;
var allowScroll = true;

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
    