import Link from "next/link";

const NavBarMenuComponent = ({ isOpen }: { isOpen: boolean }) => {
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
                <Link href="/">ABOUT ME</Link>
            </div>
            <div>
                <Link href="/">SKILLS</Link>
            </div>
            <div>
                <Link href="/">PROJECTS</Link>
            </div>
        </div>
    );
};

export default NavBarMenuComponent;
