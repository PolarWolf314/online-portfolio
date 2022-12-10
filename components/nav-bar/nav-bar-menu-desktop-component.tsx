import Link from "next/link";

const NavBarDesktopComponent = () => {
    return (
        <div className="grid grid-cols-3 text-xl justify-items-center">
            <Link href="#About-Me">
                <span>About Me</span>
            </Link>
            <Link href="#Skills">
                <span>Skills</span>
            </Link>
            <Link href="#Projects">
                <span>Projects</span>
            </Link>
        </div>
    );
};

export default NavBarDesktopComponent;
