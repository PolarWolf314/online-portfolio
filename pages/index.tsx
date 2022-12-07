import { useState } from "react";

import AboutMe from "../components/about-me";
import NavBar from "../components/nav-bar";
import { MyMenuContext } from "../contexts/menu-context";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    return (
        <MyMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            <NavBar />
            <div className="mx-5">
                <AboutMe />
            </div>
        </MyMenuContext.Provider>
    );
}
