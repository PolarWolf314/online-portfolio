import Image from "next/image";

import ProfileCardLogoComponent from "./profile-card-logo-component";

const ProfilePicture = require("assets/images/profile-pic.jpg");

const ProfileCardComponent = () => {
    return (
        <div className="flex flex-col items-center md:place-content-center space-y-2.5 w-full md:h-new-screen-2 py-2 bg-gradient-to-br from-fuchsia-100 to-blue-100 drop-shadow-xl rounded-xl">
            <div className="aspect-square h-52 md:h-1/2">
                <Image
                    src={ProfilePicture}
                    alt="Profile Picture"
                    className="rounded-full drop-shadow-lg"
                />
            </div>
            <div className="font-bold text-3xl md:text-5xl">Aaron Guo</div>
            <div className="text-sm lg:text-xl">
                Fourth Year Software Engineering Student
            </div>
            <div>
                <ProfileCardLogoComponent />
            </div>
        </div>
    );
};

export default ProfileCardComponent;
