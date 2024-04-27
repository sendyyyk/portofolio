import { Link } from "react-router-dom";

const Logo = (props) => {
    const { children } = props;
    return (
        <section className="logo-navbar flex text-5xl h-full my-auto">
            <Link to="/" className="my-auto">{children}</Link>
        </section>
    )
}

export default Logo;