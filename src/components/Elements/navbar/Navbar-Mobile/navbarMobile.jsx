import React, { useEffect, useRef } from 'react';

const NavbarMobile = () => {
    const navMb = useRef(null)
    const menuMb = useRef(null)
    
    useEffect(() => {
        
        function handleResize() {
            const headerHeight = document.querySelector("#header-wrap header").clientHeight
            const itemZindex = document.querySelectorAll(".item-zindex");
            // menuMb.current.style.height = `${window.innerHeight}px`

            function zIndex(zIndex) {
                for (let i = 0; i < itemZindex.length; i++) {
                    const element = itemZindex[i];
                    element.style.zIndex = zIndex;
                }
            }
            
            function menuBarMobile() {
                document.querySelector("#navbar-mobile .menu-bar-mobile").style.height = `calc(100% - ${headerHeight}px)`;
            }

            if (window.innerWidth <= 992) {
                navMb.current.classList.add("block");
                navMb.current.classList.remove("hidden");
                zIndex("10");
                menuBarMobile()
            } else {
                navMb.current.classList.add("hidden");
                navMb.current.classList.remove("block");
                zIndex("0");
            }
        }
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        
        const originalElement = document.querySelector(".menu-bar");

        if (originalElement) {
            menuMb.current.innerHTML = originalElement.outerHTML;
            originalElement.classList.add("menu-bar-mobile")
        }
    }, [])

    return (
        <div ref={navMb} id="navbar-mobile" className={`hidden absolute left-0 right-0 top-0 bottom-0 w-full bg-green-400`}>
            <div ref={menuMb} className='menu-mobile flex items-end absolute left-0 right-0 top-0 bottom-0 w-full bg-red-300 z-20 duration-500 translate-y-min bg-pink-500'></div>
        </div>
    )
}

export default NavbarMobile;
