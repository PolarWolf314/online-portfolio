import { useState } from "react";

import AboutMe from "../components/about-me";
import NavBar from "../components/nav-bar";
import Projects from "../components/projects";
import TechnicalSkills from "../components/technical-skills";
import { MyMenuContext } from "../contexts/menu-context";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    return (
        <MyMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            <NavBar />
            <div className="mx-5">
                <div
                    /* Anchor for ID becuase of sticky bar */
                    id="About-Me"
                    className="-top-[70px] block relative invisible"
                />
                <AboutMe />
                <div
                    /* Anchor for ID becuase of sticky bar */
                    id="Skills"
                    className="-top-[54px] block relative invisible"
                />
                <TechnicalSkills />
                <div
                    /* Anchor for ID becuase of sticky bar */
                    id="Projects"
                    className="-top-[40px] block relative invisible"
                />
                <Projects />
            </div>
        </MyMenuContext.Provider>
    );
}
