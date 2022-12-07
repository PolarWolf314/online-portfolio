import {
    AiOutlineGithub,
    AiFillLinkedin,
    AiOutlineMail,
    AiOutlineFilePdf,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const ProfileCardLogoComponent = () => {
    return (
        <div className="flex gap-x-5 text-2xl">
            <span>
                <AiOutlineGithub />
            </span>
            <span>
                <FaDiscord />
            </span>
            <span>
                <AiOutlineMail />
            </span>
            <span>
                <AiFillLinkedin />
            </span>
            <span>
                <AiOutlineFilePdf />
            </span>
        </div>
    );
};

export default ProfileCardLogoComponent;
