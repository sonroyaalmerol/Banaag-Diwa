// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
  var num0 = 0;
  var num1 = 0;

  //var distance = $("#0").offset().top;

$(window)
    .bind('mousewheel', function(event) {
    //event.preventDefault();
    num0 = event.originalEvent.wheelDelta/120;
    
        if (num0 <= 0){
          // downscroll code
          num1++;
          switch(num1){
                case 1:
                    $("#banaag").animate({left: "-=250px", opacity: "0"}, 1000);
                    $('html, body').animate({
                        scrollTop: $("#1").offset().top
                    }, 1000);
                    break;
                case 2:
                    $('html, body').animate({
                        scrollTop: $("#2").offset().top
                    }, 1000);
                    break;
                case 3:
                    $('html, body').animate({
                        scrollTop: $("#3").offset().top
                    }, 1000);
                    break;
                case 4:
                    $('html, body').animate({
                        scrollTop: $("#4").offset().top
                    }, 1000);
                    break;
                case 5:
                    $('html, body').animate({
                        scrollTop: $("#5").offset().top
                    }, 1000);
                    break;
                case 6:
                    $('html, body').animate({
                        scrollTop: $("#6").offset().top
                    }, 1000);
                    break;
                case 7:
                    $('html, body').animate({
                        scrollTop: $("#7").offset().top
                    }, 1000);
                    break;
                case 8:
                    $('html, body').animate({
                        scrollTop: $("#8").offset().top
                    }, 1000);
                    break;
                case 9:
                    num1 = 8;
                    $('html, body').animate({
                        scrollTop: $("#8").offset().top
                    }, 1000);
                    break;
                    
            }
        } 
        else if (num0 >= 0) {
          // upscroll code
            num1--;
            switch(num1){
                case 0:
                    $("#banaag").animate({left: "+=250px", opacity: "1"}, 700);
                    $('html, body').animate({
                        scrollTop: $("#0").offset().top
                    }, 1000);
                    break;
                case -1:
                    num1 = 0;
                    break;
                    //hello
                case 1:
                    $('html, body').animate({
                        scrollTop: $("#1").offset().top
                    }, 1000);
                    break;
                case 2:
                    $('html, body').animate({
                        scrollTop: $("#2").offset().top
                    }, 1000);
                    break;
                case 3:
                    $('html, body').animate({
                        scrollTop: $("#3").offset().top
                    }, 1000);
                    break;
                case 4:
                    $('html, body').animate({
                        scrollTop: $("#4").offset().top
                    }, 1000);
                    break;
                case 5:
                    $('html, body').animate({
                        scrollTop: $("#5").offset().top
                    }, 1000);
                    break;
                case 6:
                    $('html, body').animate({
                        scrollTop: $("#6").offset().top
                    }, 1000);
                    break;
                case 7:
                    $('html, body').animate({
                        scrollTop: $("#7").offset().top
                    }, 1000);
                    break;
            }
        }
});


/*$(window).scroll(function() {
    if ( $(this).scrollTop() >= distance ) {
        console.log('is in top');
    } else {
        console.log('is not in top');
    }
});*/
    