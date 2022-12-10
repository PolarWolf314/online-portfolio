import { useState } from "react";

import {
    AiOutlineGithub,
    AiFillLinkedin,
    AiOutlineMail,
    AiOutlineFilePdf,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const ProfileCardLogoComponent = () => {
    const [isCopied, setIsCopied] = useState(false);

    const emailOnClickHandler = () => {
        navigator.clipboard.writeText("aaronjoshguo@gmail.com");
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1250);
    };
    return (
        <div className="flex gap-x-5 text-3xl">
            <span>
                <a
                    href="https://github.com/PolarWolf314"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiOutlineGithub />
                </a>
            </span>
            <span>
                <a
                    href="https://discordapp.com/users/201892070091128832"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaDiscord />
                </a>
            </span>
            <span>
                <AiOutlineMail
                    onClick={emailOnClickHandler}
                    className="cursor-pointer"
                />
                <div
                    // Clipboard pill
                    className={`flex justify-center transition-all duration-400 ease-in-out ${
                        isCopied ? "opacity-100" : "invisible opacity-0"
                    }`}
                >
                    <div className="absolute bg-fuchsia-400 text-center p-2 rounded-full text-sm">
                        Copied to clipboard!
                    </div>
                </div>
            </span>
            <span>
                <a
                    href="https://www.linkedin.com/in/aaron-guo-764b7a21b"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillLinkedin />
                </a>
            </span>
            <span>
                <a
                    href={require("../../assets/AaronGuoCV.pdf")}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <AiOutlineFilePdf />
                </a>
            </span>
        </div>
    );
};

export default ProfileCardLogoComponent;
