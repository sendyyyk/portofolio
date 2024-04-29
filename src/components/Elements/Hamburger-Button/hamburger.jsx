import React, { useEffect, useRef, useState } from 'react';
import { menuMbEx } from '../navbar/Navbar-Mobile/navbarMobile';

const HamburgerBtn = () => {
    const lineWrapRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        setIsMenuOpen(prevState => !prevState);
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 992) {
                document.getElementById("hamburger-btn").classList.remove("hidden");
                document.getElementById("hamburger-btn").classList.add("flex");
    
            } else {
                document.getElementById("hamburger-btn").classList.remove("flex");
                document.getElementById("hamburger-btn").classList.add("hidden");
                document.body.classList.remove("overflow-hidden");
                setIsMenuOpen(false);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, []);
    
    useEffect(() => {
        if (menuMbEx.current) {
            menuMbEx.current.classList.toggle("translate-y-min", !isMenuOpen);
            document.body.classList.toggle("overflow-hidden", isMenuOpen);
        }
    }, [isMenuOpen]);

    return (
        <button id="hamburger-btn" className={`flex w-12 h-12 my-auto shadow-xl`} type="button" onClick={handleClick}>
            <div ref={lineWrapRef} className={`line-wrap flex flex-col justify-between relative mx-auto my-auto w-full h-full `}>
                <span className={`w-full secondary-color-bg my-0 mb-auto opacity-80 ${isMenuOpen ? "cross-top" : ""}`} style={{ height: "0.3vw" }}></span>
                <span className={`w-full secondary-color-bg mx-auto opacity-80 ${isMenuOpen ? "cross-center" : ""}`} style={{ height: "0.3vw" }}></span>
                <span className={`w-full secondary-color-bg my-auto mb-0 opacity-80 ${isMenuOpen ? "cross-bottom" : ""}`} style={{ height: "0.3vw" }}></span>
            </div>
        </button>
    )
}

export default HamburgerBtn