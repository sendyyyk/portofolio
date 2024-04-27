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

    window.onload = function () {
        scrollOveflow()
    };

    window.onresize = function () {
        scrollOveflow();
    }
})
