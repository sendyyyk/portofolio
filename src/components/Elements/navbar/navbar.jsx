import Logo from "./logo";
import Menu from "./menu";
import HamburgerBtn from "../../Elements/Hamburger-Button/hamburger";

const Navbar = () => {
    return (
        <nav className="container-custom flex mx-auto px-5 backdrop-blur-2xl">
            <div className="flex justify-between w-full">
                <Logo>Sendy Cheeks</Logo>
                <Menu></Menu>
                <HamburgerBtn></HamburgerBtn>
            </div>
        </nav>
    )
}

export default Navbar;