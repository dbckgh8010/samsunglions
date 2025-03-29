$(document).ready(function() {
    
    const mainSwiper = new Swiper(".section1 .swiper", {
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        autoplay: { delay: 3000 },
        navigation: {nextEl: ".swiper-next", prevEl: ".swiper-prev"},
    });

    const video = $(".video-content")[0];
    $(".pause-btn").on("click", function() {
        video.pause();
        $(this).hide();
        $(".play-btn").show();
        $(".play-btn").css("display", "flex");
    });

    $(".play-btn").on("click", function() {
        video.play();
        $(this).hide();
        $(".pause-btn").show();
        $(".pause-btn").css("display", "flex");
    });

    $(".play-btn").hide();

    const cheerSwiper = new Swiper(".section3 .swiper", {
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        autoplay: {delay: 3000},
        pagination: {
            el: ".page",
            type: 'fraction',
        },
    });

    const partnerSwiper = new Swiper(".section4 .swiper", {
        slidesPerView: 5,
        grabCursor: false,
        loop: true,
        autoplay: {delay: 1000},
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 5,
            }
        }
    });
});