import Link from "next/link";

const NavBarMenuComponent = () => {
    return (
        <div>
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
