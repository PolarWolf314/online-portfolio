import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        About Me
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Skills
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
