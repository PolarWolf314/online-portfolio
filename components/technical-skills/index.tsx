import TechnicalSkillsItemComponent from "./technical-skills-item-component";
import TechnicalSkillsCardComponent from "./technical-skills-card-component";

import reactLogo from "../../assets/logos/react-logo.svg";
import nextjsLogo from "../../assets/logos/nextjs-logo.svg";
import tailwindcssLogo from "../../assets/logos/tailwindcss-logo.svg";
import figmaLogo from "../../assets/logos/figma-logo.svg";
import javaLogo from "../../assets/logos/java-logo.svg";
import pythonLogo from "../../assets/logos/python-logo.svg";
import bashLogo from "../../assets/logos/bash-logo.svg";
import nodejsLogo from "../../assets/logos/nodejs-logo.svg";
import jsLogo from "../../assets/logos/js-logo.svg";
import tsLogo from "../../assets/logos/ts-logo.svg";

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
                <TechnicalSkillsCardComponent
                    categoryName="Back End"
                    items={
                        <>
                            <TechnicalSkillsItemComponent
                                logo={javaLogo}
                                name="Java"
                            />
                            <TechnicalSkillsItemComponent
                                logo={pythonLogo}
                                name="Python"
                            />
                            <TechnicalSkillsItemComponent
                                logo={bashLogo}
                                name="Bash/ZSH"
                            />
                            <TechnicalSkillsItemComponent
                                logo={nodejsLogo}
                                name="Node.js"
                            />
                        </>
                    }
                />
                <TechnicalSkillsCardComponent
                    categoryName="Full Stack"
                    items={
                        <>
                            <TechnicalSkillsItemComponent
                                logo={jsLogo}
                                name="JavaScript"
                            />
                            <TechnicalSkillsItemComponent
                                logo={tsLogo}
                                name="TypeScript"
                            />
                        </>
                    }
                />
            </div>
        </>
    );
};

export default TechnicalSkills;
