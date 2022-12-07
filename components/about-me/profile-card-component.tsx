import Image from "next/image";

import ProfileCardLogoComponent from "./profile-card-logo-component";

const ProfilePicture = require("assets/images/profile-pic.jpg");

const ProfileCardComponent = () => {
    return (
        <div className="flex flex-col items-center space-y-2.5 w-full py-2 bg-gradient-to-br from-fuchsia-100 to-blue-100 drop-shadow-xl rounded-xl">
            <Image
                src={ProfilePicture}
                alt="Profile Picture"
                className="h-52 w-52 rounded-full drop-shadow-lg"
            />
            <div className="font-bold text-3xl">Aaron Guo</div>
            <div className="text-sm">
                Second Year Software Engineering Student
            </div>
            <div>
                <ProfileCardLogoComponent />
            </div>
        </div>
    );
};

export default ProfileCardComponent;
