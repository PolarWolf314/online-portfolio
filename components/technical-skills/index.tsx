import TechnicalSkillsItemComponent from "./technical-skills-item-component";
import TechnicalSkillsCardComponent from "./technical-skills-card-component";
import reactLogo from "../../assets/logos/react-logo.svg";
import nextjsLogo from "../../assets/logos/nextjs-logo.svg";
import tailwindcssLogo from "../../assets/logos/tailwindcss-logo.svg";
import figmaLogo from "../../assets/logos/figma-logo.svg";

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
                                logo={reactLogo}
                                name="React"
                            />
                            <TechnicalSkillsItemComponent
                                logo={nextjsLogo}
                                name="Next.js"
                            />
                            <TechnicalSkillsItemComponent
                                logo={tailwindcssLogo}
                                name="Tailwind CSS"
                            />
                            <TechnicalSkillsItemComponent
                                logo={figmaLogo}
                                name="Figma"
                            />
                        </>
                    }
                />
            </div>
        </>
    );
};

export default TechnicalSkills;
