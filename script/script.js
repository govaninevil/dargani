$(document).on('ready', function () {

    // $( ".owl-prev")('<i class="fa fa-chevron-left"></i>');
    // $( ".owl-next")('<i class="fa fa-chevron-right"></i>');


    $("#mobile").on("click", function () {
        $("body").toggleClass("mobile");
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('header').addClass("small");
        } else {
            $('header').removeClass("small");
        }
    });



    $('#award-slider').owlCarousel({
        loop: true,
        margin: 76,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 3
            },
            1023: {
                items: 4
            },
            1536: {
                items: 5.5
            }
        }
    });

    $('#furniture-slider').owlCarousel({
        loop: true,
        margin: 76,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 3
            },
            1023: {
                items: 4
            }
        }
    });

    $('#steel-coil-slider').owlCarousel({
        loop: true,
        margin: 76,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 3
            },
            1023: {
                items: 4
            }
        }
    });

    $('#banner-slider').owlCarousel({
        loop: true,
        margin: 76,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('#parentVerticalTab').easyResponsiveTabs({
        type: 'vertical', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function (event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo2');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });

    $("#menu-button").on("click", function () {
        $(".drop-down").toggleClass("show");
    });
});
