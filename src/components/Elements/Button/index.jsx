const Button = (props) => {
    const { children, variant = "bg-black", ...restProps } = props;
    return (
        <button className={`${variant}`} {...restProps}
            type="submit"
        >
            {children}
        </button>
    )
}

export default Button