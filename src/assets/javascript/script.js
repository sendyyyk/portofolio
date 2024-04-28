import { classHeight } from '../../components/Layouts/DropdownMenu';
document.addEventListener("DOMContentLoaded", function () {
    const bodyHeight = document.body.clientHeight;
    const bodyWidth = document.body.clientWidth;
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
    
    function cloneMenu() {
        const cloneMenuBar = document.querySelector(".menu-bar");
        const menuMobile = document.querySelector("#navbar-mobile .menu-mobile")
        const clonedElement = cloneMenuBar.cloneNode(true);
        clonedElement.classList.add("menu-bar-mobile");
        menuMobile.appendChild(clonedElement);
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
        cloneMenu()
        dropdownShow()
    };
    
    window.onresize = function () {
        scrollOveflow();
    }

});