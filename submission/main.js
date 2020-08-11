

$(document).ready(function() {
    $('#submission').bind('change', function() {
        //var sub_elements = $('div.sub_type').children().hide(); // hide all the elements
        $('#docus').hide();
        $('#imgs').hide();
        $('#sbmt_btn').hide();
        var sub_value = $(this).val();
    
        /*if (sub_value.length) { // if somethings' selected
            sub_elements.filter('.' + sub_value).show(); // show the ones we want
        }*/
        if (sub_value.length){    // if somethings' selected
          $('#docus').show();
          $('#sbmt_btn').show();
          document.getElementById("submission").style.color = "white";
          document.getElementById("floating_subtype").setAttribute(
            "style", "top: 5px; left: 10px; opacity: 1; font-size: x-small;");
          if(sub_value == "photo_essay"){
            $('#imgs').show();
          }
        }

    }).trigger('change');
});
$(document).ready(function() {
    $('#yrlvl').bind('change', function() {
      var sub_value2 = $(this).val();
      
      if (sub_value2.length){
        document.getElementById("yrlvl").style.color = "white";
        document.getElementById("floating_yrlvl").setAttribute(
          "style", "top: 5px; left: 10px; opacity: 1; font-size: x-small;");
      }

    }).trigger('change');
});

function line_in(f_number) {
    $(`#line${f_number}`).stop().animate({width: "100%"}, {
      duration: 300
    });
}
function line_out(f_number) {
  $(`#line${f_number}`).stop().animate({width: "0%"}, {
    duration: 300
  });
}
/*
$(document).ready(function() {
  if ($("#email").is(":focus")) {
    $(`#line1`).stop().animate({width: "94.8%"}, {
      duration: 300
    });
  }
});*/

var banaagpresent = true;
var distance = $(".logo").offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance && banaagpresent == true) {
      $("#banaag").stop().animate({left: "-=250px", opacity: "0"}, {
        duration: 300
      });
      banaagpresent = false;
    }
    else if ( $window.scrollTop() < distance && banaagpresent == false) {
      $("#banaag").stop().animate({left: "+=250px", opacity: "1"}, {
        duration: 300
      });
      banaagpresent = true;
    }
});

function upload_details(file_num){
    var x = document.getElementById(`f_${file_num}`);
    var txt = "";
    if ('files' in x) {
      if (x.files.length == 0) {
        txt = "Select one or more files.";
      } else {
        for (var i = 0; i < x.files.length; i++) {
          //txt += "<strong>" + (i+1) + ".</strong> ";
          txt += " ";
          var file = x.files[i];
          if ('name' in file) {
            txt += file.name;
          }
          if (i+1 != x.files.length){
            txt +=", "  
          }
          /*if ('size' in file) {
            txt += file.size/1000 + "kb, ";
          }*/
        }
      }
    } 
    else {
      if (x.value == "") {
        txt += "Select one or more files.";
      } else {
        txt += "The files property is not supported by your browser!";
        txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
      }
    }
    document.getElementById(`output_${file_num}`).innerHTML = txt;
}
/*
function files_complete(){
  var f_num = 0;
  var x;
  for (f_num = 0; f_num < 5; f_num++) {
    x = document.getElementById(`f_${f_num}`);
    if ('files' in x) {
      if (x.files.length == 0) {
        txt = "Select one or more files.";
      }
    }
  }
}
*/

var _validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png", ".txt", ".docx", ".doc", ".pdf"];    
function Validate(oForm) {
  var arrInputs = oForm.getElementsByTagName("input");
  for (var i = 0; i < arrInputs.length; i++) {
    var oInput = arrInputs[i];
    if (oInput.type == "file") {
      var sFileName = oInput.value;
      //if (sFileName.length > 0) {
        var blnValid = false;
        for (var j = 0; j < _validFileExtensions.length; j++) {
          var sCurExtension = _validFileExtensions[j];
          if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
            blnValid = true;
            break;
          }
        }
        if (!blnValid) {
          alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
          return false;
        }
      //}
    }
  }
  return true;
}


