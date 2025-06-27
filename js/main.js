const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                console.log("entities in", entry.target.classList);
            } else {
                entry.target.classList.remove("animate")
                console.log("entities out", entry.target.classList);

            }
        });
    },
    {
        threshold: 0.3, // Adjust sensitivity
    }
);


(function ($) {
    "use strict";



    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    console.log("entities in", entry.target.classList);
                } else {
                    entry.target.classList.remove("animate")
                    console.log("entities out", entry.target.classList);

                }
            });
        },
        {
            threshold: 0.3, // Adjust sensitivity
        }
    );
    console.log("entities");

    const contactSection1 = document.querySelector(".animate_section");
    if (contactSection1) {
        observer.observe(contactSection1);

    }
});

document.addEventListener("DOMContentLoaded", function () {



    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    console.log("entities in", entry.target.classList);
                } else {
                    entry.target.classList.remove("animate")
                    console.log("entities out", entry.target.classList);

                }
            });
        },
        {
            threshold: 0.3, // Adjust sensitivity
        }
    );
    console.log("entities");
    const contactSection1 = document.querySelector(".bounceanima");
    if (contactSection1) {
        observer.observe(contactSection1);

    }

});


document.addEventListener("DOMContentLoaded", function () {

    const contactSection1 = document.querySelector(".Testimonial_section");
    if (contactSection1) {
        observer.observe(contactSection1);

    }

});
document.addEventListener("DOMContentLoaded", function () {

    const contactSection1 = document.querySelector(".projcomp");
    if (contactSection1) {
        observer.observe(contactSection1);

    }

});
document.addEventListener("DOMContentLoaded", function () {

    const contactSection1 = document.querySelector(".projcomp1");
    if (contactSection1) {
        observer.observe(contactSection1);

    }

});
document.addEventListener("DOMContentLoaded", function () {

    const contactSection1 = document.querySelector(".Services_Section");
    if (contactSection1) {
        observer.observe(contactSection1);

    }

});


document.addEventListener("DOMContentLoaded", function () {

    const contactSection1 = document.querySelector(".Team_start");
    if (contactSection1) {
        observer.observe(contactSection1);

    }

});

document.addEventListener("DOMContentLoaded", function () {

    const contactSection1 = document.querySelector(".About_Team");
    if (contactSection1) {
        observer.observe(contactSection1);

    }

});
document.addEventListener("DOMContentLoaded", function () {

    const contactSection1 = document.querySelector(".Services_Service");
    if (contactSection1) {
        observer.observe(contactSection1);

    }

});

document.addEventListener("DOMContentLoaded", function () {

    const contactSection1 = document.querySelector(".service_test");
    if (contactSection1) {
        observer.observe(contactSection1);

    }

});


document.addEventListener("DOMContentLoaded", function () {

    const contactSection1 = document.querySelector(".contact-form");
    if (contactSection1) {
        observer.observe(contactSection1);

    }

});


