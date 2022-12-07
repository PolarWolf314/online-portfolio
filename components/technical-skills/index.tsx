import TechnicalSkillsItemComponent from "./technical-skills-item-component";
import TechnicalSkillsCardComponent from "./technical-skills-card-component";
import bashLogo from "../../assets/logos/bash-logo.svg";

const TechnicalSkills = () => {
    return (
        <>
            <h1>Technical Skills</h1>
            <div className="flex flex-col gap-5">
                <TechnicalSkillsCardComponent
                    categoryName="Front End"
                    items={
                        <>
                            <TechnicalSkillsItemComponent
                                logo={bashLogo}
                                name="Bash"
                            />
                            <TechnicalSkillsItemComponent
                                logo={bashLogo}
                                name="Bash"
                            />
                            <TechnicalSkillsItemComponent
                                logo={bashLogo}
                                name="Bash"
                            />
                            <TechnicalSkillsItemComponent
                                logo={bashLogo}
                                name="Bash"
                            />
                        </>
                    }
                />
            </div>
        </>
    );
};

export default TechnicalSkills;
