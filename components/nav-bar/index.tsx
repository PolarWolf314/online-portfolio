import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
    return (
        <div className="sticky z-10 top-0 flex flex-row justify-between px-4 py-2 bg-fuchsia-400 mb-3.5">
            <span className="text-3xl font-bold">TITLE</span>
            <span className="text-3xl self-center">
                <AiOutlineMenu />
            </span>
        </div>
    );
};

export default NavBar;
