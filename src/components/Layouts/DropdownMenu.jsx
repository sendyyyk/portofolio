import React, { useEffect, useRef } from 'react';
let classHeight;

const DropdownMenu = (props) => {
    const { children } = props
    const widthUlRef = useRef(null);

    useEffect(() => {
        const liCholdCount = widthUlRef.current.childElementCount;
        classHeight = `calc(13vw * ${liCholdCount + 1})`;
        if (widthUlRef.current.childElementCount > 3) {
            widthUlRef.current.style.width = `calc(${ liCholdCount } * 100% / 3)`;
        }
    }, []);

    return (
        <ul ref={widthUlRef} id='dropdown-menu' className="flex absolute bottom-0 w-full h-full mt-4 duration-500 secondary-color-bg-x">
            {children}
        </ul>
    )
}

export { classHeight };
export default DropdownMenu;