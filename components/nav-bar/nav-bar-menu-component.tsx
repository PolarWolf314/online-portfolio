import Link from "next/link";

import { useMenuContext } from "../../contexts/menu-context";

const NavBarMenuComponent = ({ isOpen }: { isOpen: boolean }) => {
    const { isMenuOpen, setIsMenuOpen } = useMenuContext();
    const onClickHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div
            className={`fixed w-full top-[51px] overflow-hidden z-10
            transition-all duration-700 ease-in-out ${
                isOpen
                    ? "bg-fuchsia-200 h-new-screen"
                    : "bg-fuchsia-400 h-0 invisible"
            }`}
        >
            <div className="flex flex-col items-center gap-4 pt-8">
                <div
                    onClick={onClickHandler}
                    className="bg-gradient-to-br from-fuchsia-100 to-blue-100 border border-b-fuchsia-300 border-r-fuchsia-300 h-10 w-10/12 flex items-center px-4 rounded-lg cursor-pointer"
                >
                    <Link href="#About-Me" className="text-xl font-medium w-full">
                        <span>About Me</span>
                    </Link>
                </div>
                <div
                    onClick={onClickHandler}
                    className="bg-gradient-to-br from-fuchsia-100 to-blue-100 border border-b-fuchsia-300 border-r-fuchsia-300 h-10 w-10/12 flex items-center px-4 rounded-lg cursor-pointer"
                >
                    <Link href="#Skills" className="text-xl font-medium w-full">
                        <span>Skills</span>
                    </Link>
                </div>
                <div
                    onClick={onClickHandler}
                    className="bg-gradient-to-br from-fuchsia-100 to-blue-100 border border-b-fuchsia-300 border-r-fuchsia-300 h-10 w-10/12 flex items-center px-4 rounded-lg cursor-pointer"
                >
                    <Link href="#Projects" className="text-xl font-medium w-full">
                        <span>Projects</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBarMenuComponent;
