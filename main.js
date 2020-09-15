
var currentPage = -1;

var num_l = 0;
var num_l_prev = 0;
var l_width = 3.3;

var allowScroll = true;
var banaagpresent = true;

const MAX_PAGES = 8; // change depending on number of pages


function scrll_move() {
  $(".scrll_arrw").stop().animate({
    top: "82vh"
  }, {
      duration: 1000,
  });
  $(".scrll_arrw").stop().animate({
    top: "80vh"
  }, {
    duration: 1000,
  });
}

function nav_selection_update() {
  num_l_prev = num_l;
  if(currentPage < 1){
    num_l = 0;
    l_width = 3.3;
  }
  else if(currentPage > 0 && currentPage < 3){
    num_l = 1;
    l_width = 3.5;
  }
  else if(currentPage == 3){
    num_l = 2;
    l_width = 3.6;
  }
  else if (currentPage > 3 && currentPage < 8){
    num_l = 3;
    l_width = 6.6;
  }
  else if(currentPage == 8){
    num_l = 4;
    l_width = 4.2;
  }

  if (Math.abs(num_l-num_l_prev) != 0) { 
    $(`#line${num_l}`).stop().animate({width: `${l_width}em`}, {
      duration: 1000
    });
    $(`#line${num_l_prev}`).stop().animate({width: "0em"}, {
      duration: 1000
    });
    $(`#mobile${num_l_prev}`).addClass('mobile_deselected');
    $(`#mobile${num_l_prev}`).removeClass('mobile_selected');
    $(`#mobile${num_l}`).removeClass('mobile_deselected');
    $(`#mobile${num_l}`).addClass('mobile_selected');
  } else {
    $(`#line${num_l}`).stop().animate({width: `${l_width}em`}, {
      duration: 1000
    });
    $(`#mobile${num_l}`).addClass('mobile_selected');
  }
}

function change_dot_selection(select, deselect) {
  $(`#${deselect}`).stop().animate({opacity: "0"}, {
    duration: 1000
  });
  $(`#${select}`).stop().animate({opacity: "1"}, {
    duration: 1000
  });

  $(`#dot${deselect}`).addClass('is-deselected');
  $(`#dot${deselect}`).removeClass('is-selected');
  $(`#dot${select}`).removeClass('is-deselected');
  $(`#dot${select}`).addClass('is-selected');
}

function set_page(page) {

  //mobile nav
  $(".mobile_nav").removeClass("active");
  $(".button1").removeClass("btn");

  allowScroll = false;

  if (page > MAX_PAGES) {
    allowScroll = true;
    return;
  }
  else if (page < 0) {
    allowScroll = true;
    return;
  }

  if(page !== currentPage){
    $('html, body').stop().animate({
      scrollTop: $(`#${page}`).offset().top
    }, {
        duration: 1000,
        complete: function () {
          setTimeout(() => {  allowScroll = true; }, 500);
        }
    });
    $(`#${currentPage}`).stop().animate({opacity: "0"}, {
      duration: 1000
    });
    $(`#${page}`).stop().animate({opacity: "1"}, {
      duration: 1000
    });
  }

  if(page === 0) {
    $(".scrll_arrw").stop().animate({opacity: "1"}, {
      duration: 1000
    });
    if(banaagpresent == false) {
      $("#banaag").stop().animate({left: "+=250px", opacity: "1"}, {
        duration: 1000
      });
      /*if(screen.width < 1081){
        $(".covid").stop().animate({top: "23vh", opacity: "1"}, {
          duration: 1000
        });
      }*/
      banaagpresent = true;
    }
  }
  else if(page !== 0) {
    $(".scrll_arrw").stop().animate({opacity: "0"}, {
      duration: 1000
    });
    if(banaagpresent == true){
      $("#banaag").stop().animate({left: "-=250px", opacity: "0"}, {
        duration: 1000
      });
      /*if(screen.width < 1081){
        $(".covid").stop().animate({top: "-80vh", opacity: "0"}, {
          duration: 1000
        });
      }*/
      banaagpresent = false;
    }
  }

  change_dot_selection(page, currentPage);
  currentPage = page;
  
  nav_selection_update();
}

$(document).ready(function() {
  // mobile nav
  $(".button1").click(function() {
    $(".mobile_nav").toggleClass("active");
    $(".button1").toggleClass("btn");
  });

  // always reset to #0
  set_page(0);

  /*$(window).bind('mousewheel', function(event) {
    var num0 = event.originalEvent.wheelDelta/120;
    if (allowScroll) {
      if (num0 < 0) {
        // downscroll code
        set_page(currentPage+1);
      } else if (num0 > 0) {
        // upscroll code
        set_page(currentPage-1);
      }
    }
  });*/

  $(window).on('wheel', function(event){
    var num0 = event.originalEvent.deltaY;
    if (allowScroll) {
      if (num0 > 0) {
        set_page(currentPage+1);
      } else if (num0 < 0) {
        set_page(currentPage-1);
      }
    }
  });

  /*let touchstartY = 0;
  let touchendY = 0;

  document.addEventListener('touchstart', function(event) {
    touchstartY = event.changedTouches[0].screenY;
    event.preventDefault();
  }, false);
  document.addEventListener('touchend', function(event) {
    touchendY = event.changedTouches[0].screenY;
    event.preventDefault();

    if (allowScroll && touchendY != touchstartY) {
      if (touchendY < touchstartY) {
        // downscroll code
        set_page(currentPage+1);
      } else if (touchendY > touchstartY) {
        // upscroll code
        set_page(currentPage-1);
      }
    }
  }, false);*/
  var ts;
  $(document).bind('touchstart', function (e){
    e.preventDefault();
    ts = e.originalEvent.touches[0].clientY;
  });

  $(document).bind('touchend', function (e){
    var te = e.originalEvent.changedTouches[0].clientY;
    if (allowScroll && ts != te) {
      if(ts > te+5){
        set_page(currentPage+1);
      }else if(ts < te-5){
        set_page(currentPage-1);
      }
    }
  });
});
