document.addEventListener("DOMContentLoaded", function () {

    function menuBarMobile() {
        if (window.innerWidth <= 992) {
            document.querySelector("#navbar-mobile .menu-bar-mobile").style.height = `calc(100% - ${document.querySelector("#header-wrap header").clientHeight}px)`;
        }
    }

    window.onresize = function () {
        menuBarMobile();
    }
    window.onload = function () {
        menuBarMobile();
    };

});