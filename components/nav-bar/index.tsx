import { AiOutlineMenu } from "react-icons/ai";
import NavBarMenuComponent from "./nav-bar-menu-component";
import { useMenuContext } from "../../contexts/menu-context";

const NavBar = () => {
    const { isMenuOpen, setIsMenuOpen } = useMenuContext();
    const onClickHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div
                className={`sticky z-10 top-0 flex flex-row justify-between px-4 py-2 mb-3.5 transition duration-700 ease-in-out ${
                    isMenuOpen ? "bg-fuchsia-200" : "bg-fuchsia-400"
                }`}
            >
                <span className="text-3xl font-bold">Aaron Guo</span>
                <span className="text-3xl self-center cursor-pointer">
                    <AiOutlineMenu onClick={onClickHandler} />
                </span>
            </div>
            <div>
                <NavBarMenuComponent isOpen={isMenuOpen} />
            </div>
        </>
    );
};

export default NavBar;
