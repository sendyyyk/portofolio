import { classHeight } from '../../components/Layouts/DropdownMenu';
// import { menuMbEx } from '../../components/Elements/navbar/Navbar-Mobile/navbarMobile';
// import { menuBarEx } from '../../components/Elements/navbar//menu';
document.addEventListener("DOMContentLoaded", function () {
    function scrollOveflow() {
        const dropdownItem = document.getElementById("dropdown-item");
        dropdownItem.addEventListener('wheel', function (event) {
            event.preventDefault();
            if (event.deltaY > 0) {
                dropdownItem.scrollLeft -= 512;
            } else {
                dropdownItem.scrollLeft += 512;
            }
        });
    }

    // function cloneMenu() {
    //     const clonedElement = menuBarEx.current.cloneNode(true);
    //     clonedElement.classList.add("menu-bar-mobile");
    //     menuMbEx.current.appendChild(clonedElement);
    // }

    function menuBarMobile() {
        if (window.innerWidth <= 992) {
            document.querySelector("#navbar-mobile .menu-bar-mobile").style.height = `calc(100% - ${document.querySelector("#header-wrap header").clientHeight}px)`;
        }
    }

    function dropdownShow() {
        let dropdownBtn = document.querySelector("#navbar-mobile #dropdown-btn")
        const thirdLi = document.querySelector("#navbar-mobile .list-menu").parentElement.querySelector(":nth-child(3)");
        dropdownBtn.addEventListener('click', function (event) {
            event.preventDefault();
            dropdownBtn.classList.toggle("primary-color-bg");
            if (thirdLi.clientHeight == dropdownBtn.clientHeight) {
                thirdLi.style.height = `${classHeight}`;
            } else {
                thirdLi.style.height = ``;
            }
        });

    }

    window.onload = function () {
        scrollOveflow()
        // cloneMenu()
        dropdownShow()
        menuBarMobile()
    };

    window.onresize = function () {
        menuBarMobile()
        scrollOveflow();
    }

});