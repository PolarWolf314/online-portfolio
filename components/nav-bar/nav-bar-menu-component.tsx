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
                    ? "bg-fuchsia-500 h-new-screen"
                    : "bg-fuchsia-400 h-0 invisible"
            }`}
        >
            <div>
                <Link href="/" onClick={onClickHandler}>
                    ABOUT ME
                </Link>
            </div>
            <div>
                <Link href="/" onClick={onClickHandler}>
                    SKILLS
                </Link>
            </div>
            <div>
                <Link href="/" onClick={onClickHandler}>
                    PROJECTS
                </Link>
            </div>
        </div>
    );
};

export default NavBarMenuComponent;
