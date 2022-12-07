import TechnicalSkillsItemComponent from "./technical-skills-item-component";
import bashLogo from "../../assets/logos/bash-logo.svg";

const TechnicalSkills = () => {
    return (
        <>
            <h1>Technical Skills</h1>
            <div className="flex flex-col gap-5">
                <div
                    /* Front End */ className="flex flex-col gap-2.5 items-center px-1.5 py-2.5 bg-gradient-to-br from-fuchsia-100 to-blue-100 rounded-md drop-shadow-lg"
                >
                    <h3 className="self-start">Front End</h3>
                    <TechnicalSkillsItemComponent logo={bashLogo} name="Bash" />
                    <TechnicalSkillsItemComponent logo={bashLogo} name="Bash" />
                    <TechnicalSkillsItemComponent logo={bashLogo} name="Bash" />
                    <TechnicalSkillsItemComponent logo={bashLogo} name="Bash" />
                </div>
                <div
                    /* Front End */ className="flex flex-col gap-2.5 items-center px-1.5 py-2.5 bg-gradient-to-br from-fuchsia-100 to-blue-100 rounded-md drop-shadow-lg"
                >
                    <h3 className="self-start">Front End</h3>
                    <TechnicalSkillsItemComponent logo={bashLogo} name="Bash" />
                    <TechnicalSkillsItemComponent logo={bashLogo} name="Bash" />
                    <TechnicalSkillsItemComponent logo={bashLogo} name="Bash" />
                    <TechnicalSkillsItemComponent logo={bashLogo} name="Bash" />
                </div>
            </div>
        </>
    );
};

export default TechnicalSkills;
