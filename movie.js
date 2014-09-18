$(document).ready(function(){


    $('#link1').click(function () {
        var src = 'http://www.youtube.com/embed/Um74eQTtQxU?list=PLJDfbnm6ydhwmK14LWAFvNT3UspoPjmU-autoplay=1';
        $('#myModal').modal('show');
        $('#myModal iframe').attr('src', src);
    });

    

    $('#myModal button').click(function () {
        $('#myModal iframe').removeAttr('src');
    });
    $('#image-gallery-button').on('click', function (event) {
        event.preventDefault();
        blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());

    });

});