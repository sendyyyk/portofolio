import React, { useEffect, useRef } from 'react';

const HamburgerBtn = (props) => {
    const { dimention } = props;
    const lineWrapRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);

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
                    lineWrapRef.current.style.width = `${buttonWidth / 1.5}px`;
                    lineWrapRef.current.style.height = `${buttonHeight / 1.7}px`;
                }
            } else {
                document.getElementById("hamburger-btn").classList.remove("flex");
                document.getElementById("hamburger-btn").classList.add("hidden");
                menuMobile.classList.add("translate-y-min");
                document.body.classList.remove("overflow-hidden");
                line1Ref.current.classList.remove("cross-top");
                line2Ref.current.classList.remove("cross-center");
                line3Ref.current.classList.remove("cross-bottom");
            }
        }
        function handleClick() {
            menuMobile.classList.toggle("translate-y-min");
            document.body.classList.toggle("overflow-hidden");
            line1Ref.current.classList.toggle("cross-top");
            line2Ref.current.classList.toggle("cross-center");
            line3Ref.current.classList.toggle("cross-bottom");
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
        <button id="hamburger-btn" className={`flex ${dimention} my-auto shadow-xl`} type="button">
            <div ref={lineWrapRef} className={`line-wrap flex flex-col relative justify-center mx-auto my-auto ${dimention}`}>
                <span ref={line1Ref} className={`w-full bg-primary h-1/6 my-0 mb-auto opacity-80`} style={{ height: "0.3vw" }}></span>
                <span ref={line2Ref} className={`w-full bg-primary h-1/6 mx-auto opacity-80`} style={{ height: "0.3vw" }}></span>
                <span ref={line3Ref} className={`w-full bg-primary h-1/6 my-auto mb-0 opacity-80`} style={{ height: "0.3vw" }}></span>
            </div>
        </button>
    )
}

export default HamburgerBtn