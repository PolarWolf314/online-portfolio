import AboutMe from "../components/about-me";
import NavBar from "../components/nav-bar";

export default function Home() {
    return (
        <>
        <NavBar />
            <div className="mx-5">
                <AboutMe />
            </div>
        </>
    );
}
