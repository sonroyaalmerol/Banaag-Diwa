$(document).ready(function() {
    $('#dept').bind('change', function() {
        var elements = $('div.department').children().hide(); // hide all the elements
        var value = $(this).val();

        if (value.length) { // if somethings' selected
            elements.filter('.' + value).show(); // show the ones we want
        }
    }).trigger('change');
});