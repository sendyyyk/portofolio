import React, { useEffect, useRef, useState } from 'react';

const HamburgerBtn = (props) => {
    const { dimention } = props;
    const lineWrapRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        setIsMenuOpen(prevState => !prevState);
    }

    useEffect(() => {

        function handleResize() {
            const navbarMobile = document.getElementById("navbar-mobile");
            const menuMobile = navbarMobile.querySelector(".menu-mobile");
            if (window.innerWidth <= 992) {
                document.getElementById("hamburger-btn").classList.remove("hidden");
                document.getElementById("hamburger-btn").classList.add("flex");

                const buttonWidth = document.getElementById("hamburger-btn").offsetWidth;
                const buttonHeight = document.getElementById("hamburger-btn").offsetHeight;
                if (lineWrapRef.current) {
                    lineWrapRef.current.style.width = `${buttonWidth / 1.5}px`;
                    lineWrapRef.current.style.height = `${buttonHeight / 1.7}px`;
                }
            } else {
                document.getElementById("hamburger-btn").classList.remove("flex");
                document.getElementById("hamburger-btn").classList.add("hidden");
                menuMobile.classList.add("translate-y-min");
                document.body.classList.remove("overflow-hidden");
                setIsMenuOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, []);

    useEffect(() => {
        const navbarMobile = document.getElementById("navbar-mobile");
        const menuMobile = navbarMobile.querySelector(".menu-mobile");
        if (menuMobile) {
            menuMobile.classList.toggle("translate-y-min", !isMenuOpen);
            document.body.classList.toggle("overflow-hidden", isMenuOpen);
        }
    }, [isMenuOpen]);

    return (
        <button id="hamburger-btn" className={`flex ${dimention} my-auto shadow-xl`} type="button" onClick={handleClick}>
            <div ref={lineWrapRef} className={`line-wrap flex flex-col relative justify-center mx-auto my-auto ${dimention}`}>
                <span className={`w-full bg-primary h-1/6 my-0 mb-auto opacity-80 ${isMenuOpen ? "cross-top" : ""}`} style={{ height: "0.3vw" }}></span>
                <span className={`w-full bg-primary h-1/6 mx-auto opacity-80 ${isMenuOpen ? "cross-center" : ""}`} style={{ height: "0.3vw" }}></span>
                <span className={`w-full bg-primary h-1/6 my-auto mb-0 opacity-80 ${isMenuOpen ? "cross-bottom" : ""}`} style={{ height: "0.3vw" }}></span>
            </div>
        </button>
    )
}

export default HamburgerBtn