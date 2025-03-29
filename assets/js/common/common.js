$(document).ready(function () {
    $(".nav").on("mouseenter", function () {
        $(".header").addClass("open");
    });
    $(".gnb-bg").on("mouseleave", function () {
        $(".header").removeClass("open");
    });

    $(".mo-nav-btn").click(function() {
        $(".mo-nav").toggleClass("open");
    });


    $(".mo-list-link").on("click", function () {
        let parentMenu = $(this).parent(".mo-menu-list");
    
        if (parentMenu.hasClass("on")) {
            // 이미 열려있으면 닫기
            parentMenu.removeClass("on");
        } else {
            // 다른 메뉴 닫고, 현재 메뉴 열기
            $(".mo-menu-list").removeClass("on");
            parentMenu.addClass("on");
        }
    });
})