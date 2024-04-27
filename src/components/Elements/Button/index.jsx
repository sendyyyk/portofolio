const Button = (props) => {
    const { children, variant = "bg-black" } = props;
    return (
        <button className={`${variant}`}
            type="submit"
        >
            {children}
        </button>
    )
}

export default Button