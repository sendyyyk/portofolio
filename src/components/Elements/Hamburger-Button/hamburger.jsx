import React, { useEffect, useRef } from 'react';

const HamburgerBtn = (props) => {
    const { dimention } = props;
    const lineWrapRef = useRef(null);
    
    useEffect(() => {
        const navbarMobile = document.getElementById("navbar-mobile");
        const menuMobile = navbarMobile.querySelector(".menu-mobile");

        function handleResize() {
            if (window.innerWidth <= 992) {
                document.getElementById("hamburger-btn").classList.remove("hidden");
                document.getElementById("hamburger-btn").classList.add("flex");

                const buttonWidth = document.getElementById("hamburger-btn").offsetWidth;
                const buttonHeight = document.getElementById("hamburger-btn").offsetHeight;
                if (lineWrapRef.current) {
                    lineWrapRef.current.style.width = `${buttonWidth / 1.2}px`;
                    lineWrapRef.current.style.height = `${buttonHeight / 1.3}px`;
                }
            } else {
                document.getElementById("hamburger-btn").classList.remove("flex");
                document.getElementById("hamburger-btn").classList.add("hidden");
                menuMobile.classList.add("translate-y-min");
                document.body.classList.remove("overflow-hidden");
            }
        }
        function handleClick() {
            menuMobile.classList.toggle("translate-y-min");
            document.body.classList.toggle("overflow-hidden");
        }
        
        const hamburgerBtn = document.getElementById("hamburger-btn");
        hamburgerBtn.addEventListener('click', handleClick);

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        
        return () => {
            hamburgerBtn.removeEventListener('click', handleClick);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, []);

    return (
        <button id="hamburger-btn" className={`flex ${dimention} my-auto`} type="button">
            <div ref={lineWrapRef} className={`line-wrap flex flex-col mx-auto my-auto ${dimention}`}>
                <span className={`w-full bg-primary h-1/6 my-0 mb-auto opacity-80`} style={{ height: "0.5vw" }}></span>
                <span className={`w-full bg-primary h-1/6 mx-auto opacity-80`} style={{ height: "0.5vw" }}></span>
                <span className={`w-full bg-primary h-1/6 my-auto mb-0 opacity-80`} style={{ height: "0.5vw" }}></span>
            </div>
        </button>
    )
}

export default HamburgerBtn