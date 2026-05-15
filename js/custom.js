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

if (tabButtons.length && tabContents.length) {
    tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            tabButtons.forEach((btn) => {
                btn.classList.remove("active");
            });
            tabContents.forEach((content) => {
                content.style.display = "none";
            });
            button.classList.add("active");
            tabContents[index].style.display = "block";
        });
    });
}

// Show first tab content by default
if (tabContents.length) {
    tabContents.forEach((content, index) => {
        content.style.display = index === 0 ? "block" : "none";
    });
}

// =======================<<<<<Product Details Gallery>>>>>=======================

document.addEventListener("DOMContentLoaded", function () {
    var prdtSection = document.querySelector(".prdt_dtls");
    if (!prdtSection) {
        return;
    }

    var mainImg = prdtSection.querySelector(".prdt_main_img");
    var zoomBtn = prdtSection.querySelector(".prdt_zoom_btn");
    var rgtContent = prdtSection.querySelector(".prdt_rgt_cntnt");
    var flavorEl = rgtContent ? rgtContent.querySelector("h4") : null;
    var taglineEl = rgtContent ? rgtContent.querySelector("p") : null;
    var prevPriceEl = rgtContent ? rgtContent.querySelector(".prev_price") : null;
    var currPriceEl = rgtContent ? rgtContent.querySelector(".crnt_price") : null;
    var thumbs = prdtSection.querySelectorAll(".prdt_btm_imgs .prdt_thumb");
    var variants = prdtSection.querySelectorAll(".rgt_btm_imgs .prdt_variant");

    function setActiveThumb(el) {
        thumbs.forEach(function (t) {
            t.classList.remove("is-active");
        });
        if (el) {
            el.classList.add("is-active");
        }
    }

    function setActiveVariant(el) {
        variants.forEach(function (v) {
            v.classList.remove("is-active");
        });
        if (el) {
            el.classList.add("is-active");
        }
    }

    function setMainImage(src, alt) {
        if (!mainImg || !src) {
            return;
        }
        mainImg.src = src;
        if (alt) {
            mainImg.alt = alt;
        }
    }

    function openZoom() {
        if (!mainImg) {
            return;
        }
        var src = mainImg.src;
        if (window.jQuery && jQuery.fancybox) {
            jQuery.fancybox.open({
                href: src,
                type: "image",
            });
        } else {
            window.open(src, "_blank");
        }
    }

    function applyVariant(variantEl) {
        if (!variantEl) {
            return;
        }

        var mainSrc =
            variantEl.getAttribute("data-main-src") ||
            (variantEl.querySelector("img") && variantEl.querySelector("img").src);
        var imgAlt =
            variantEl.querySelector("img") && variantEl.querySelector("img").alt;
        var flavor = variantEl.getAttribute("data-flavor");
        var prevPrice = variantEl.getAttribute("data-prev-price");
        var currPrice = variantEl.getAttribute("data-curr-price");
        var tagline = variantEl.getAttribute("data-tagline");

        setMainImage(mainSrc, imgAlt);
        setActiveVariant(variantEl);
        setActiveThumb(null);

        if (flavorEl && flavor) {
            flavorEl.textContent = "Flavor : " + flavor;
        }
        if (prevPriceEl && prevPrice) {
            prevPriceEl.textContent = prevPrice;
        }
        if (currPriceEl && currPrice) {
            currPriceEl.textContent = currPrice;
        }
        if (taglineEl && tagline) {
            taglineEl.textContent = tagline;
        }
    }

    thumbs.forEach(function (thumb) {
        thumb.addEventListener("click", function () {
            var src =
                thumb.getAttribute("data-main-src") ||
                (thumb.querySelector("img") && thumb.querySelector("img").src);
            var alt =
                thumb.querySelector("img") && thumb.querySelector("img").alt;

            setMainImage(src, alt);
            setActiveThumb(thumb);
            setActiveVariant(null);
        });

        thumb.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                thumb.click();
            }
        });
    });

    variants.forEach(function (variant) {
        variant.addEventListener("click", function () {
            applyVariant(variant);
        });

        variant.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                variant.click();
            }
        });
    });

    if (zoomBtn) {
        zoomBtn.addEventListener("click", openZoom);
        zoomBtn.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openZoom();
            }
        });
    }

    if (mainImg) {
        mainImg.addEventListener("click", openZoom);
        mainImg.style.cursor = "zoom-in";
    }
});