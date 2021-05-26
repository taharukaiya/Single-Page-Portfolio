// jQuery starts here
$(document).ready(function () {





    // Sticky menu starts here
    $('.js-services-section').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });
    // Sticky menu ends here





    // MixItUp section starts here
    var mixer = mixitup(".container");
    // MixItUp section ends here




    // smooth scrolling for all browsers starts here
    // $("a").on("click", function (event) {
    //     if (this.hash !== "") {
    //         event.preventDefault();
    //         var hash = this.hash;

    //         $("html, body").animate({
    //                 scrollTop: $(hash).offset().top,
    //             },
    //             800,
    //             function () {
    //                 window.location.hash = hash;
    //             });

    //     }
    // });
    // smooth scroll for all browsers ends here



});
// jQuery ends here





// Custom JavaScript starts here
// Mobile Menu starts here
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
// Mobile Menu ends here
// Custom JavaScript ends here