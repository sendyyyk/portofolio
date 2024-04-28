import React, { useEffect, useRef } from 'react';
let menuMbEx;

const NavbarMobile = () => {
    const navMb = useRef(null);
    const menuMb = useRef(null);
    useEffect(() => {
        
        function handleResize() {
            const headerHeight = document.querySelector("#header-wrap header").clientHeight;
            const itemZindex = document.querySelectorAll(".item-zindex");
            function zIndex(zIndex) {
                for (let i = 0; i < itemZindex.length; i++) {
                    const element = itemZindex[i];
                    element.style.zIndex = zIndex;
                }
            }
            
            if (window.innerWidth <= 992) {
                navMb.current.classList.add("block");
                navMb.current.classList.remove("hidden");
                zIndex("10");
            } else {
                navMb.current.classList.add("hidden");
                navMb.current.classList.remove("block");
                zIndex("0");
            }
        }
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        
        menuMbEx = menuMb;
    }, [])

    return (
        <div ref={navMb} id="navbar-mobile" className={`hidden absolute left-0 right-0 top-0 bottom-0 w-full`}>
            <div ref={menuMb} className='menu-mobile flex items-end fixed left-0 right-0 top-0 bottom-0 w-full bg-white z-20 duration-500 translate-y-min'></div>
        </div>
    )
}

export { menuMbEx };
export default NavbarMobile;