// ! Pre Loader By Jquery

// $(window).on("load", function () {
//     $("#pre_Loader").fadeOut(2000);
// });

// =======================<<<<<>>>>>=======================


// ! Custom Fixed NavBar

// $(function () {
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > 400) {
//             $("header").addClass("active");
//         } else {
//             $("header").removeClass("active");
//         }
//     });
// });

// =======================<<<<<>>>>>=======================


// ! Back To Top (Jquery)

// let btn = $('#backToTop');
// $(window).on('scroll', function () {
//     if ($(window).scrollTop() > 300) {
//         btn.addClass('show');
//     } else {
//         btn.removeClass('show');
//     }
// });
// btn.on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, '1000');
// });


// =======================<<<<<>>>>>=======================

// ! Easy Responsive Tabs

// $(document).ready(function () {
//     $('#horizontalTab').easyResponsiveTabs({
//         type: 'default',
//         width: 'auto',
//         fit: true,
//         closed: 'accordion',
//         activate: function (event) {
//             var $tab = $(this);
//             var $info = $('#tabInfo');
//             var $name = $('span', $info);
//             $name.text($tab.text());
//             $info.show();
//         }
//     });
// });

// =======================<<<<<>>>>>=======================


// ! Swiper Slider

var swiper = new Swiper(".featr_swpr .mySwiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 3.9,
    spaceBetween: 20,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
    speed: 1500,
    breakpoints: {
        0: {
            slidesPerView: 1.3,
            gap: 10,
        },
        481:{
            slidesPerView: 1.9,
            gap: 10,
        },
668:{
    slidesPerView: 2.7,
},
        990: {
            slidesPerView: 3.2,
        },

        1200: {
            slidesPerView: 3.9,
            gap: 20,
        },
        
    },
    // direction: "vertical",
});

// Autoplay Stop on Hover

/* $(".swiper").mouseenter(function () {
    swiper.autoplay.stop();
});

$(".swiper").mouseleave(function () {
    swiper.autoplay.start();
});

*/

// =======================<<<<<>>>>>=======================
// avik 08.05.26
// =======================<<<<<Customer Swiper>>>>>=======================

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".reviewSwiper", {
        slidesPerView: 3,
        spaceBetween: 120,
        loop: true,
      
        speed: 3000,

        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        // freeMode: true,
        // freeModeMomentum: false,

        // allowTouchMove: false,

        breakpoints: {
            0: {
                slidesPerView: 1.3,
                gap: 10,
                spaceBetween: 10,
                centeredSlides: true,
            },
        376: {
                slidesPerView: 1.5,
                gap: 10,
                spaceBetween: 10,
                centeredSlides: true,
            },
            481:{
                slidesPerView: 1.9,
                gap: 10,
                centeredSlides: true,
                spaceBetween: 15,
            },
            576:{
                slidesPerView: 2.2,  
                centeredSlides: false,
            },
    668:{
        slidesPerView: 2.7,
    },
            768: {
                slidesPerView: 2.9,
            },
840:{
    slidesPerView: 2.3,
},
            1200: {
                slidesPerView: 3,
                gap: 140,
            },
            
        },
    });
});

// =======================Moumi 9.5.26===============================
// ! Swiper Slider

var swiper = new Swiper(".offr_swpr .mySwiper1", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 26,
    speed: 800,
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        480: {
            slidesPerView: 1.8,
        },

        768: {
            slidesPerView: 2.2,
        },
        840: {
            slidesPerView: 3.2,
        }
    }
});


// =======================<<<<<>>>>>=======================
// avik 12.05.26
// =======================<<<<<Related Product Swiper>>>>>=======================

document.addEventListener("DOMContentLoaded", function () {

    var swiper = new Swiper(".productSwiper", {
        loop: true,
        slidesPerView: 3.5,
        spaceBetween: 10,
        speed: 4000,

        allowTouchMove: false,

        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
    });
});

// =======================<<<<<Product Describe Tab JS>>>>>=======================

const tabButtons = document.querySelectorAll(".tab_btn");
const tabContents = document.querySelectorAll(".tab_content");

tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {

        // Remove active class from all buttons
        tabButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Hide all tab contents
        tabContents.forEach((content) => {
            content.style.display = "none";
        });

        // Add active class to clicked button
        button.classList.add("active");

        // Show current tab content
        tabContents[index].style.display = "block";
    });
});

// Show first tab content by default
tabContents.forEach((content, index) => {
    content.style.display = index === 0 ? "block" : "none";
});