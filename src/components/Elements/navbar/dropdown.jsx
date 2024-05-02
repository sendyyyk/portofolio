import { useEffect, useRef } from "react";

const DropdownList = (props) => {
    const { children, text, fontStyle } = props;
    const li = useRef(null);

    useEffect(() => {
        li.current.style.width = "calc(100% / 3)";
    }, [])  

    return (
        <li ref={li} className={`${fontStyle} my-auto h-4/5`}>
            <a href={`./${text}`} className="flex flex-col justify-center items-center w-11/12 mx-auto h-full rounded-lg bg-white">
                {children}
                <span className={`mt-2 bg-white-txt-x`}>
                    {text}
                </span>
            </a>
        </li>
    )
}

export default DropdownList