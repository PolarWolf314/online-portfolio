import Image from "next/image";

import ProfileCardLogoComponent from "./profile-card-logo-component";

const ProfilePicture = require("assets/images/profile-pic.jpg");

const ProfileCardComponent = () => {
    return (
        <div>
            <Image src={ProfilePicture} alt="Profile Picture" />
            <div>Aaron Guo</div>
            <div>Second Year Software Engineering Student</div>
            <div>
                <ProfileCardLogoComponent />
            </div>
        </div>
    );
};

export default ProfileCardComponent;
