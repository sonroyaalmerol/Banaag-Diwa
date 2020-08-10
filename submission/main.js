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
        if (sub_value.length){
          $('#docus').show();
          $('#sbmt_btn').show();
          //reset value of f_2
          if(sub_value == "photo_essay"){
            $('#imgs').show();
          }
        }

    }).trigger('change');
});

var banaagpresent = true;
var _top = $(window).scrollTop();
var _direction;
$(window).scroll(function(){
    var _cur_top = $(window).scrollTop();
    if(_top < _cur_top && banaagpresent == true){
      $("#banaag").stop().animate({left: "-=250px", opacity: "0"}, {
        duration: 1000
      });
      banaagpresent = false;
    }
    else if(_top > _cur_top && banaagpresent == false) {
      $("#banaag").stop().animate({left: "+=250px", opacity: "1"}, {
        duration: 1000
      });
      banaagpresent = true;
    }
    _top = _cur_top;
    console.log(_direction);
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


