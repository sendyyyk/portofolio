import DropdownList from "./dropdown";
import DropdownMenu, { classHeight } from "../../Layouts/DropdownMenu";
import DarkModeButton from "../Dark-Mode/dark-mode-btn";
import { useEffect, useRef } from "react";

const Menu = ({ classStyle }) => {
    const menuBar = useRef(null);
    const dropdownBtn = useRef(null);
    const dropdownItem = useRef(null);

    function dropdownClick() {
        const thirdLi = document.querySelector("#navbar-mobile .list-menu").parentElement.querySelector(":nth-child(3)");
        if (window.innerWidth <= 992) {
            dropdownBtn.current.classList.toggle("primary-color-bg");
            if (thirdLi.clientHeight == dropdownBtn.current.clientHeight) {
                thirdLi.style.height = `${classHeight}`;
            } else {
                thirdLi.style.height = ``;
            }
        }
    }

    function dropdownWheel(event) {
        var deltaY = event.deltaY || event.detail || -event.wheelDelta;
        if (deltaY > 0) {
            dropdownItem.current.scrollLeft -= 512;
        } else {
            dropdownItem.current.scrollLeft += 512;
        }
    }

    return (
        <section ref={menuBar} className={`menu-bar flex ${classStyle}`}>
            <ul className="flex mt-auto text-xl h-full">
                <li className="list-menu flex mr-16 my-auto">
                    <a href="/" className="block secondary-color-txt">Home</a>
                </li>
                <li className="list-menu flex mr-16 my-auto">
                    <a href="/about" className="block secondary-color-txt">About</a>
                </li>
                <li className="list-menu flex mr-16 my-auto">
                    <a ref={dropdownBtn} href="javascript:void(0)" id="dropdown-btn" className="dropdown flex" onClick={dropdownClick} onWheel={dropdownWheel}>
                        <span className="my-1 secondary-color-txt" >Others</span>
                        <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path className="secondary-color-txt" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M36 18L24 30L12 18" /></svg>
                        <div ref={dropdownItem} id="dropdown-item" className="dropdown-item absolute right-0 top-0 w-0 h-44 mt-28 cursor-default duration-500 overflow-x-auto">
                            <DropdownMenu>
                                <DropdownList fontStyle="text-base" text="Skills">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185" />
                                    </svg>
                                </DropdownList>
                                <DropdownList fontStyle="text-base" text="Galery">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 20 18">
                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z" />
                                    </svg>
                                </DropdownList>
                                <DropdownList fontStyle="text-base" text="Videos">
                                    <svg fill="#252525" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g><g><g><path d="M445.76,0H66.24C29.663,0,0,29.653,0,66.24v339.093v40.427C0,482.347,29.663,512,66.24,512h379.52 c36.593,0,66.24-29.647,66.24-66.24v-40.427V66.24C512,29.647,482.353,0,445.76,0z M66.24,42.667h379.52 c13.029,0,23.573,10.545,23.573,23.573V384H42.667V66.24C42.667,53.22,53.224,42.667,66.24,42.667z M469.333,445.76 c0,13.029-10.545,23.573-23.573,23.573H66.24c-13.016,0-23.573-10.554-23.573-23.573v-19.093h426.667V445.76z" /><path d="M224.311,295.627l106.667-64c13.81-8.286,13.81-28.3,0-36.586l-106.667-64c-14.219-8.532-32.309,1.711-32.309,18.293v128 C192.002,293.916,210.092,304.158,224.311,295.627z M234.669,187.012l43.869,26.321l-43.869,26.321V187.012z" /></g></g></g></svg>
                                </DropdownList>
                                <DropdownList fontStyle="text-base" text="Videos">
                                    <svg fill="#252525" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g><g><g><path d="M445.76,0H66.24C29.663,0,0,29.653,0,66.24v339.093v40.427C0,482.347,29.663,512,66.24,512h379.52 c36.593,0,66.24-29.647,66.24-66.24v-40.427V66.24C512,29.647,482.353,0,445.76,0z M66.24,42.667h379.52 c13.029,0,23.573,10.545,23.573,23.573V384H42.667V66.24C42.667,53.22,53.224,42.667,66.24,42.667z M469.333,445.76 c0,13.029-10.545,23.573-23.573,23.573H66.24c-13.016,0-23.573-10.554-23.573-23.573v-19.093h426.667V445.76z" /><path d="M224.311,295.627l106.667-64c13.81-8.286,13.81-28.3,0-36.586l-106.667-64c-14.219-8.532-32.309,1.711-32.309,18.293v128 C192.002,293.916,210.092,304.158,224.311,295.627z M234.669,187.012l43.869,26.321l-43.869,26.321V187.012z" /></g></g></g></svg>
                                </DropdownList>
                            </DropdownMenu>
                        </div>
                    </a>
                </li>
                <li className="flex my-auto">
                    <DarkModeButton/>
                </li>
            </ul>
        </section>
    )
}

export default Menu;