import ProfileCardComponent from "./profile-card-component";

const AboutMe = () => {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 md:pb-10 md:h-new-screen items-center">
            <ProfileCardComponent />
            <div className="p-2.5 md:order-first">
                <div className="self-start text-xl md:text-5xl 2xl:text-8xl font-bold 2xl:font-semibold md:pb-10 2xl:pb-20">Hey!</div>
                <div className="text-justify md:leading-relaxed lg:text-2xl 2xl:text-3xl">
                    I&apos;m Aaron, a 21 year old Software Engineering student
                    at the University of Auckland. I love developing robust,
                    consistent, and applicable software using modern frameworks
                    such as React.
                    <br />
                    <br />
                    When I am not developing code, I will be spending time with
                    the people I love, playing video games, playing music, or
                    training.
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
