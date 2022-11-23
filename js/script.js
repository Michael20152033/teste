let x = document.querySelector("#contain");
let y = document.querySelector('.nav');

x.addEventListener("click", myFunction);

function myFunction() {


    y.classList.toggle("visible");
    x.classList.toggle("change");
}
document.querySelector('.nav').addEventListener("click", function() {
    y.classList.remove("visible");
    x.classList.remove("change");
});


$(document).ready(function($) {
    $('#btn').click(function() {
        $('.popup-fade').fadeIn();
        return false;
    });

    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });
});

$('a[href^="#"]').click(function() {
    let anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 600);
});