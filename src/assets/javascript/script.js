document.addEventListener("DOMContentLoaded", function () {
    // function scrollOveflow() {
    //     const dropdownItem = document.getElementById("dropdown-item");
    //     dropdownItem.addEventListener('wheel', function (event) {
    //         event.preventDefault();
    //         if (event.deltaY > 0) {
    //             dropdownItem.scrollLeft -= 512;
    //         } else {
    //             dropdownItem.scrollLeft += 512;
    //         }
    //     });
    // }

    function menuBarMobile() {
        if (window.innerWidth <= 992) {
            document.querySelector("#navbar-mobile .menu-bar-mobile").style.height = `calc(100% - ${document.querySelector("#header-wrap header").clientHeight}px)`;
        }
    }


    window.onload = function () {
        menuBarMobile()
    };

    window.onresize = function () {
        menuBarMobile()
    }

});