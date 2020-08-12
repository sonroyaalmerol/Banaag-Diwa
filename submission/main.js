

$(document).ready(function() {
    $('.carousel').carousel({
      interval: 10000
    });
    $('#submission').bind('change', function() {
        $('#docus').hide();
        $('#imgs').hide();
        $('#sbmt_btn').hide();
        var sub_value = $(this).val();
    
        if (sub_value.length){    
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

var banaagpresent = true , 
    allowScroll = true;
var distance = $(".logo").offset().top,
    $window = $(window);

$window.scroll(function() {
    if(allowScroll){
      if ( $window.scrollTop() >= distance && banaagpresent == true) {
        allowScroll = false;
        $("#banaag").stop().animate({left: "-=250px", opacity: "0"}, {
          duration: 300, 
          complete: function () {
            allowScroll = true;
          }
        });
        banaagpresent = false;
        if(screen.width < 1081){
          allowScroll = false;
          $(".covid").stop().animate({top: "-80vh", opacity: "0"}, {
            duration: 1000,
            complete: function () {
            }
          });
          $("#forms").stop().animate({top: "10vh"}, {
            duration: 1000,
            complete: function () {
              allowScroll = true;
            }
          });
        }
      }
      else if ( $window.scrollTop() < distance && banaagpresent == false) {
        allowScroll = false;
        $("#banaag").stop().animate({left: "+=250px", opacity: "1"}, {
          duration: 300,
          complete: function () {
            allowScroll = true;
          }
        });
        banaagpresent = true;
        if(screen.width < 1081){
          allowScroll = false;
          $(".covid").stop().animate({top: "23vh", opacity: "1"}, {
            duration: 1000
          });
          $("#forms").stop().animate({top: "=39vh"}, {
            duration: 1000,
            complete: function () {
              allowScroll = true;
            }
          });
        }
      }
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


