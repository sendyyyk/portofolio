import { Link } from "react-router-dom";

const Logo = (props) => {
    const { children } = props;
    
    return (
        <section className="logo-navbar flex text-5xl h-full my-auto">
            <a href="/" className="my-auto secondary-color-txt">{children}</a>
        </section>
    )
}

export default Logo;