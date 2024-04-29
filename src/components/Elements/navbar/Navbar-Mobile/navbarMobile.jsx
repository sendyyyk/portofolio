import React, { useEffect, useRef } from 'react';
import Menu from '../menu';
let menuMbEx;

const NavbarMobile = () => {
    const navMb = useRef(null);
    const menuMb = useRef(null);
    useEffect(() => {
        const itemZindex = document.querySelectorAll(".item-zindex");
        function zIndex(zIndex) {
            for (let i = 0; i < itemZindex.length; i++) {
                const element = itemZindex[i];
                element.style.zIndex = zIndex;
            }
        }

        function handleResize() {
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

        handleResize(); // Panggil handleResize saat komponen dimuat

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };

    }, [])

    menuMbEx = menuMb
    return (
        <div ref={navMb} id="navbar-mobile" className={`hidden absolute left-0 right-0 top-0 bottom-0 w-full bg-red-400`}>
            <div ref={menuMb} className='menu-mobile flex items-end fixed left-0 right-0 top-0 bottom-0 w-full bg-white z-20 duration-500 translate-y-min'><Menu classStyle="menu-bar-mobile" /></div>
        </div>
    )
}

export { menuMbEx };
export default NavbarMobile;