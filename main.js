
var num0 = 0;
var num1 = 0;
var num2 = 0;
var num_l = 0;
var num_l_prev = 0;
var l_width = 3.3;
var allowScroll = true;

const MAX_PAGES = 8; // change depending on number of pages

// always reset to #0
$('html, body').animate({
    scrollTop: $("#0").offset().top
}, {
    duration: 1000
});

var banaagpresent = true;

function scrll_move(){
  $(".scrll_arrw").animate({
    top: "82vh"
  }, {
      duration: 1000,
  });
  $(".scrll_arrw").animate({
    top: "80vh"
  }, {
    duration: 1000,
  });
}



$(`#dot${num1}`).addClass('is-selected');
$(`#mobile${num1}`).addClass('mobile_selected');
document.getElementById("1").style.opacity = "0";
document.getElementById("2").style.opacity = "0";
document.getElementById("3").style.opacity = "0";
document.getElementById("4").style.opacity = "0";
document.getElementById("5").style.opacity = "0";
document.getElementById("6").style.opacity = "0";
document.getElementById("7").style.opacity = "0";
document.getElementById("8").style.opacity = "0";
$(`#line${num_l}`).animate({width: `${l_width}em`}, {
  duration: 1000
});
$(window).bind('mousewheel', function(event) {
    num0 = event.originalEvent.wheelDelta/120;
    if (allowScroll) {
        allowScroll = false;
        if (num0 < 0) {
            // downscroll code
            downscroll_code();
        } else if (num0 > 0) {
            // upscroll code
            upscroll_code();
        }
        $('html, body').animate({
            scrollTop: $(`#${num1}`).offset().top
        }, {
            duration: 1000,
            complete: function () {
                allowScroll = true;
            }
        });
        
        $(`#${num1}`).animate({opacity: "1"}, {
          duration: 1000
        });
        $(`#${num1-num2}`).animate({opacity: "0"}, {
          duration: 400
        });
        
        $(`#dot${num1-num2}`).addClass('is-deselected');
        $(`#dot${num1-num2}`).removeClass('is-selected');
        $(`#dot${num1}`).removeClass('is-deselected');
        $(`#dot${num1}`).addClass('is-selected');
        num_l_prev = num_l;
        if(num1 < 1){
          num_l = 0;
          l_width = 3.3;
        }
        else if(num1 > 0 && num1 < 3){
          num_l = 1;
          l_width = 3.5;
        }
        else if(num1 == 3){
          num_l = 2;
          l_width = 3.6;
        }
        else if (num1 > 3 && num1 < 8){
          num_l = 3;
          l_width = 6.6;
        }
        else if(num1 == 8){
          num_l = 4;
          l_width = 4.2;
        }
        if(Math.abs(num_l-num_l_prev) != 0){ 
          $(`#line${num_l}`).animate({width: `${l_width}em`}, {
            duration: 1000
          });
          $(`#line${num_l_prev}`).animate({width: "0em"}, {
            duration: 1000
          });
          $(`#mobile${num_l_prev}`).addClass('mobile_deselected');
          $(`#mobile${num_l_prev}`).removeClass('mobile_selected');
          $(`#mobile${num_l}`).removeClass('mobile_deselected');
          $(`#mobile${num_l}`).addClass('mobile_selected');
        }
    }
});

function back_to_top(){
  allowScroll = false;
  $('html, body').animate({
    scrollTop: $("#0").offset().top
  }, {
      duration: 1000,
      complete: function () {
          allowScroll = true;
      }
  });
  $(`#${num1}`).animate({opacity: "0"}, {
    duration: 400
  });
  num1 = 0;
  $(`#${num1}`).animate({opacity: "1"}, {
    duration: 1000
  });
  $("#dot8").addClass('is-deselected');
  $("#dot8").removeClass('is-selected');
  $("#dot0").removeClass('is-deselected');
  $("#dot0").addClass('is-selected');
  $("#banaag").animate({left: "+=250px", opacity: "1"}, {
    duration: 1000
  });
  banaagpresent = true;
  $(".scrll_arrw").animate({opacity: "1"}, {
    duration: 1000
  });
  num_l_prev = 4;
  num_l = 0;
  l_width = 3.3;
  $(`#line${num_l}`).animate({width: `${l_width}em`}, {
    duration: 1000
  });
  $(`#line${num_l_prev}`).animate({width: "0em"}, {
    duration: 1000
  });
}


function dot_go_to(dot_num){
  allowScroll = false;
  $('html, body').animate({
    scrollTop: $(`#${dot_num}`).offset().top
  }, {
      duration: 1000,
      complete: function () {
          allowScroll = true;
      }
  });
  if(num1 != dot_num){
    $(`#${num1}`).animate({opacity: "0"}, {
      duration: 400
    });
    $(`#${dot_num}`).animate({opacity: "1"}, {
      duration: 1000
    });
  }
  
  
  if(dot_num === 0){
    $(".scrll_arrw").animate({opacity: "1"}, {
      duration: 1000
    });
    if(banaagpresent == false){
      $("#banaag").animate({left: "+=250px", opacity: "1"}, {
        duration: 1000
      });
      banaagpresent = true;
    }
  }
  else if(dot_num != 0){
    $(".scrll_arrw").animate({opacity: "0"}, {
      duration: 1000
    });
    if(banaagpresent == true){
      $("#banaag").animate({left: "-=250px", opacity: "0"}, {
        duration: 1000
      });
      banaagpresent = false;
    }
  }
  $(`#dot${num1}`).addClass('is-deselected');
  $(`#dot${num1}`).removeClass('is-selected');
  $(`#dot${dot_num}`).removeClass('is-deselected');
  $(`#dot${dot_num}`).addClass('is-selected');
  num1 = dot_num;
  num_l_prev = num_l;
  if(num1 < 1){
    num_l = 0;
    l_width = 3.3;
  }
  else if(num1 > 0 && num1 < 3){
    num_l = 1;
    l_width = 3.5;
  }
  else if(num1 == 3){
    num_l = 2;
    l_width = 3.6;
  }
  else if (num1 > 3 && num1 < 8){
    num_l = 3;
    l_width = 6.6;
  }
  else{
    num_l = 4;
    l_width = 4.2;
  }
  if(Math.abs(num_l-num_l_prev) != 0){ 
    $(`#line${num_l}`).animate({width: `${l_width}em`}, {
      duration: 1000
    });
    $(`#line${num_l_prev}`).animate({width: "0em"}, {
      duration: 1000
    });
    $(`#mobile${num_l_prev}`).addClass('mobile_deselected');
    $(`#mobile${num_l_prev}`).removeClass('mobile_selected');
    $(`#mobile${num_l}`).removeClass('mobile_deselected');
    $(`#mobile${num_l}`).addClass('mobile_selected');
  }
}


function nav_go_to(num){
  allowScroll = false;
  $('html, body').animate({
    scrollTop: $(`#${num}`).offset().top
  }, {
      duration: 1000,
      complete: function () {
          allowScroll = true;
      }
  });
  $(`#${num1}`).animate({opacity: "0"}, {
    duration: 400
  });
  $(`#${num}`).animate({opacity: "1"}, {
    duration: 1000
  });
  
  if(num === 0){
    $(".scrll_arrw").animate({opacity: "1"}, {
      duration: 1000
    });
    if(banaagpresent == false){
      $("#banaag").animate({left: "+=250px", opacity: "1"}, {
        duration: 1000
      });
      banaagpresent = true;
    }
  }
  else if(num != 0){
    $(".scrll_arrw").animate({opacity: "0"}, {
      duration: 1000
    });
    if(banaagpresent == true){
      $("#banaag").animate({left: "-=250px", opacity: "0"}, {
        duration: 1000
      });
      banaagpresent = false;
    }
  }
  $(`#dot${num1}`).addClass('is-deselected');
  $(`#dot${num1}`).removeClass('is-selected');
  $(`#dot${num}`).removeClass('is-deselected');
  $(`#dot${num}`).addClass('is-selected');
  num1 = num;
  num_l_prev = num_l;
  if(num1 < 1){
    num_l = 0;
    l_width = 3.3;
  }
  else if(num1 > 0 && num1 < 3){
    num_l = 1;
    l_width = 3.5;
  }
  else if(num1 == 3){
    num_l = 2;
    l_width = 3.6;
  }
  else if (num1 > 3 && num1 < 8){
    num_l = 3;
    l_width = 6.6;
  }
  else{
    num_l = 4;
    l_width = 4.2;
  }
  if(Math.abs(num_l-num_l_prev) != 0){ 
    $(`#line${num_l}`).animate({width: `${l_width}em`}, {
      duration: 1000
    });
    $(`#line${num_l_prev}`).animate({width: "0em"}, {
      duration: 1000
    });
    $(`#mobile${num_l_prev}`).addClass('mobile_deselected');
    $(`#mobile${num_l_prev}`).removeClass('mobile_selected');
    $(`#mobile${num_l}`).removeClass('mobile_deselected');
    $(`#mobile${num_l}`).addClass('mobile_selected');
  }
}

       
/*
var rect = element.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;

alert('Element is ' + offset + ' vertical pixels from <body>');


var left1 = document.getElementById("left1");
left1.style.position = "fixed":
left1.style.position = "absolute";
*/

/* 
//-------set "Guidelines" to position:fixed----------
//https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
//https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element-relative-to-the-browser-window
//http://jsbin.com/wigaca/1/edit?html,console,output
function fix_gdlns(){
  var elemRect = document.html.getBoundingClientRect(),
      offsetTop   = elemRect.top - 20,
      offsetLeft   = elemRect.left;

  document.getElementById("bdy-gdlns1").style.position = "fixed";
  console.log('done fixed');
  document.getElementById("bdy-gdlns1").style.top = `${offsetTop}px`;
  console.log(offsetTop);
  document.getElementById("bdy-gdlns1").style.left = `${offsetLeft}px`;
  console.log(offsetLeft);
}
*/

$(document).ready(function() {
  $(".button1").click(function() {
    $(".mobile_nav").toggleClass("active");
    $(".button1").toggleClass("btn");
  });
});



function downscroll_code(){
  num1++;
  num2 = 1;
  if (num1 === 1) {
      $("#banaag").animate({left: "-=250px", opacity: "0"}, {
          duration: 1000
      });
      banaagpresent = false;
  }
  if (num1 > 0) {
    $(".scrll_arrw").animate({opacity: "0"}, {
      duration: 500
    });
  }

  if (num1 > MAX_PAGES) {
      num1 = MAX_PAGES;
  }
}
function upscroll_code(){
  num1--;
  num2 = -1;
  if (num1 === 0) {
      $("#banaag").animate({left: "+=250px", opacity: "1"}, {
          duration: 1000
      });
      banaagpresent = true;
      $(".scrll_arrw").animate({opacity: "1"}, {
        duration: 1000
      });
  }
  if (num1 < 0){
      num1 = 0;
  }
}
let touchstartY = 0;
let touchendY = 0;

document.addEventListener('touchstart', function(event) {
    touchstartY = event.changedTouches[0].screenY;
}, false);
document.addEventListener('touchend', function(event) {
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
    /*if (touchendY <= touchstartY) {
        console.log('Swiped up');
    }
    if (touchendY >= touchstartY) {
        console.log('Swiped down');
    }*/
    if (allowScroll) {
      allowScroll = false;
      if (touchendY < touchstartY) {
          // downscroll code
        downscroll_code();
      } else if (touchendY > touchstartY) {
          // upscroll code
        upscroll_code();
      }
      else {
        return 0;
      }
      $('html, body').animate({
          scrollTop: $(`#${num1}`).offset().top
      }, {
          duration: 1000,
          complete: function () {
              allowScroll = true;
          }
      });
      
      $(`#${num1}`).animate({opacity: "1"}, {
        duration: 1000
      });
      $(`#${num1-num2}`).animate({opacity: "0"}, {
        duration: 400
      });
      
      $(`#dot${num1-num2}`).addClass('is-deselected');
      $(`#dot${num1-num2}`).removeClass('is-selected');
      $(`#dot${num1}`).removeClass('is-deselected');
      $(`#dot${num1}`).addClass('is-selected');
      num_l_prev = num_l;
      if(num1 < 1){
        num_l = 0;
        l_width = 3.3;
      }
      else if(num1 > 0 && num1 < 3){
        num_l = 1;
        l_width = 3.5;
      }
      else if(num1 == 3){
        num_l = 2;
        l_width = 3.6;
      }
      else if (num1 > 3 && num1 < 8){
        num_l = 3;
        l_width = 6.6;
      }
      else if(num1 == 8){
        num_l = 4;
        l_width = 4.2;
      }
      if(Math.abs(num_l-num_l_prev) != 0){ 
        $(`#line${num_l}`).animate({width: `${l_width}em`}, {
          duration: 1000
        });
        $(`#line${num_l_prev}`).animate({width: "0em"}, {
          duration: 1000
        });
        $(`#mobile${num_l_prev}`).addClass('mobile_deselected');
        $(`#mobile${num_l_prev}`).removeClass('mobile_selected');
        $(`#mobile${num_l}`).removeClass('mobile_deselected');
        $(`#mobile${num_l}`).addClass('mobile_selected');
      }
  }
}
