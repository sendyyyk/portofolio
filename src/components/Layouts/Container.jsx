const Container = (props) => {
    const { children } = props;
    return (
        <div className="w-full">
            {children}
        </div>
    )
}

export default Container;