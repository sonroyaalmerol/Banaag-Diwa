
var num0 = 0;
var num1 = 0;
var num2 = 0;
var allowScroll = true;

const MAX_PAGES = 8; // change depending on number of pages

// always reset to #0
$('html, body').animate({
    scrollTop: $("#0").offset().top
}, {
    duration: 500
});

function scrll_move(){
  $("#arrow1").animate({
    top: "82vh"
  }, {
      duration: 1000,
  });
  $("#arrow1").animate({
    top: "80vh"
  }, {
    duration: 1000,
  });
}


function chckgdlns(){
  $('html, body').animate({
    scrollTop: $("#4").offset().top
  }, {
    duration: 1000,
    complete: function () {
        allowScroll = true;
    }
  });  
  $("#banaag").animate({left: "-=250px", opacity: "0"}, {
    duration: 1000
  });
  $("#dot0").addClass('is-deselected');
  $("#dot0").removeClass('is-selected');
  $("#dot4").removeClass('is-deselected');
  $("#dot4").addClass('is-selected');
  num1 = 4;
  $("#arrow1").animate({opacity: "0"}, {
    duration: 500
  });
}

function sbmt_e(){
  $('html, body').animate({
    scrollTop: $("#8").offset().top
  }, {
    duration: 1000,
    complete: function () {
        allowScroll = true;
    }
  });  
  $("#banaag").animate({left: "-=250px", opacity: "0"}, {
    duration: 500
  });
  $("#dot0").addClass('is-deselected');
  $("#dot0").removeClass('is-selected');
  $("#dot8").removeClass('is-deselected');
  $("#dot8").addClass('is-selected');
  num1 = 8;
  $("#arrow1").animate({opacity: "0"}, {
    duration: 500
  });
}


$(`#dot${num1}`).addClass('is-selected');
$(window).bind('mousewheel', function(event) {
    num0 = event.originalEvent.wheelDelta/120;
    if (allowScroll) {
        allowScroll = false;
        if (num0 < 0) {
            // downscroll code
            num1++;
            num2 = 1;
            if (num1 === 1) {
                $("#banaag").animate({left: "-=250px", opacity: "0"}, {
                    duration: 1000
                });
                $("#arrow1").animate({opacity: "0"}, {
                  duration: 500
                });
            }
            if (num1 > MAX_PAGES) {
                num1 = MAX_PAGES;
            }
        } else if (num0 > 0) {
            // upscroll code
            num1--;
            num2 = -1;
            if (num1 === 0) {
                $("#banaag").animate({left: "+=250px", opacity: "1"}, {
                    duration: 1000
                });
                $("#arrow1").animate({opacity: "1"}, {
                  duration: 500
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
        
        $(`#dot${num1-num2}`).addClass('is-deselected');
        $(`#dot${num1-num2}`).removeClass('is-selected');
        $(`#dot${num1}`).removeClass('is-deselected');
        $(`#dot${num1}`).addClass('is-selected');
    }
});


       