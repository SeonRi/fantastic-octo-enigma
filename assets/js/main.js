$(function() {
    // Cache the window object

    // Parallax background effect
    var bg = $('#hero');
    $(window).scroll(function() {
        var x = $(this).scrollTop();
        bg.css('background-position', '0% ' + parseInt(-x / 10) + 'px');



        if ($(this).scrollTop() > $('#hero').height() / 35) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });


});
// $('section[data-type="background"]').each(function() {
//     var $bgobj = $(this); // assigning the object

//     $window.scroll(function() {

//         // scroll the background at var speed
//         // the yPos is a negative value because we're scrolling it UP!

//         var yPos = -($window.scrollTop() / $bgobj.data('speed'));

//         // Put together our final background position
//         var coords = '1%' + yPos + 'px';

//         // Move the background
//         $bgobj.css({ backgroundPosition: coords })



// }); // end window scroll
// });

//var width = $('#hero').width();
//$('#hero').height(Math.floor(width / 1.777));

//$(window).resize(function() {
//  var width = $('#hero').width();
//$('#hero').height(Math.floor(width / 1.777));
//$('#hero').css('background-position', 'center');
//}).resize();



// function modalShow() {
//     $(".modal-window").fadeToggle(200);
//     return false;
// }

// function modalHide() {
//     $(".modal-window").toggle();
//     return false;
// }

// $(document).ready(function() {
//     $("#close-modal").click(modalHide);
// });