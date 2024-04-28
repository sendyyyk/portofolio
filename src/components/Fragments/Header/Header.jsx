import Navbar from "../../Elements/navbar/navbar";
import NavbarMobile from "../../Elements/navbar/Navbar-Mobile/navbarMobile";
import React, { useEffect, useRef } from 'react';

const Header = () => {
    const headerWrap = useRef(null);

    useEffect(() => {
        function headerHeight() {
            const bodyHeight = document.body.clientHeight;
            headerWrap.current.style.height = bodyHeight + "px";
        }

        headerHeight();
        window.addEventListener("resize", headerHeight);
        window.addEventListener("load", headerHeight);
        return () => {
            window.removeEventListener("resize", headerHeight);
            window.removeEventListener("load", headerHeight);
        };

    },[])

    return (
        <div ref={headerWrap} id="header-wrap" className="flex absolute justify-center left-0 w-full">
            <header className="sticky h-28 mt-10 top-0 z-40">
                <Navbar></Navbar>
            </header>
            <NavbarMobile></NavbarMobile>
        </div>
    )
}

export default Header;