const DropdownList = (props) => {
    const { children, text, fontStyle } = props;
 
    return (
        <li className={`${fontStyle} my-auto h-4/5`} style={{width : "calc(100% / 3)"}}>
            <a href={`./${text}`} className="flex flex-col justify-center items-center w-11/12 mx-auto h-full rounded-lg">
                {children}
                <span className={`mt-2`}>
                    {text}
                </span>
            </a>
        </li>
    )
}

export default DropdownList