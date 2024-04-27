import React, { useEffect, useRef } from 'react';

const DropdownMenu = (props) => {
    const { children } = props
    const widthUlRef = useRef(null);

    useEffect(() => {
        if (widthUlRef.current.childElementCount > 3) {
            widthUlRef.current.style.width = `calc(${widthUlRef.current.childElementCount} * 100% / 3)`;
        }

    }, []);

    return (
        <ul ref={widthUlRef} id='dropdown-menu' className="flex absolute bottom-0 w-full h-full mt-4 duration-500">
            {children}
        </ul>
    )
}

export default DropdownMenu;