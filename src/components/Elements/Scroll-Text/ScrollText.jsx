import React, { useEffect, useRef } from 'react';


const ScrollText = (props) => {
    
    const scrollTextRef = useRef(null);

    useEffect(() => {
        const displayText = scrollTextRef.current;
        if (displayText) {
            const textLength = displayText.innerText.length;
            const transformValue = -1 * textLength + "ch";
            displayText.style.transform = `translateX(${transformValue})`;
        }
    }, []);

    const { children, style } = props;
    return (
        <div ref={scrollTextRef} className={`scroll-text w-full h-full whitespace-nowrap duration-500 ${style}`}>
            {children}
        </div>
    )
}

export default ScrollText;