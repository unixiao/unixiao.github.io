$(function() {

    $('#link1').bind('click', function(e) {
        e.preventDefault();
        $('#pop1').bPopup();
    });

    $('#link2').bind('click', function(e) {
        e.preventDefault();
        $('#pop2').bPopup();
    });

    

    $('#link3').bind('click', function(e) {
        e.preventDefault();
        $('#pop3').bPopup();
        $('.bxslider').bxSlider();

    });

});
