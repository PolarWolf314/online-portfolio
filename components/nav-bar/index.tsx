import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavBarMenuComponent from "./nav-bar-menu-component";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div
                className={`sticky z-10 top-0 flex flex-row justify-between px-4 py-2 mb-3.5 transition duration-700 ease-in-out ${
                    isOpen ? "bg-fuchsia-500" : "bg-fuchsia-400"
                }`}
            >
                <span className="text-3xl font-bold">TITLE</span>
                <span className="text-3xl self-center">
                    <AiOutlineMenu onClick={onClickHandler} />
                </span>
            </div>
            <div>
                <NavBarMenuComponent isOpen={isOpen} />
            </div>
        </>
    );
};

export default NavBar;
