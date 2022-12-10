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
import nginxLogo from "../../assets/logos/nginx-logo.svg";
import cloudflareLogo from "../../assets/logos/cloudflare-logo.svg";
import firebaseLogo from "../../assets/logos/firebase-logo.svg";
import mongodbLogo from "../../assets/logos/mongodb-logo.svg";
import matlabLogo from "../../assets/logos/matlab-logo.svg";
import rLogo from "../../assets/logos/r-logo.svg";
import clogo from "../../assets/logos/c-logo.svg";
import githubLogo from "../../assets/logos/github-logo.svg";
import gitLogo from "../../assets/logos/git-logo.svg";
import markdownLogo from "../../assets/logos/markdown-logo.svg";
import latexLogo from "../../assets/logos/latex-logo.svg";
import mavenLogo from "../../assets/logos/maven-logo.svg";

const TechnicalSkills = () => {
    return (
        <>
            <div className="flex flex-col gap-y-4">
                <hr className="bg-black h-0.5 mx-2 md:hidden" />
                <h1 className="self-center font-bold text-xl md:text-4xl 2xl:text-6xl">
                    Technical Skills
                </h1>
                <div className="flex flex-wrap gap-5 lg:hidden">
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
                        className="order-1"
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
                        className="order-2"
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
                        className="order-3"
                    />
                    <TechnicalSkillsCardComponent
                        categoryName="DevOps"
                        items={
                            <>
                                <TechnicalSkillsItemComponent
                                    logo={nginxLogo}
                                    name="nginx"
                                />
                                <TechnicalSkillsItemComponent
                                    logo={cloudflareLogo}
                                    name="Cloudflare"
                                />
                            </>
                        }
                        className="order-4"
                    />
                    <TechnicalSkillsCardComponent
                        categoryName="Database"
                        items={
                            <>
                                <TechnicalSkillsItemComponent
                                    logo={firebaseLogo}
                                    name="Firebase"
                                />
                                <TechnicalSkillsItemComponent
                                    logo={mongodbLogo}
                                    name="MongoDB"
                                />
                            </>
                        }
                        className="order-5 md:order-6"
                    />
                    <TechnicalSkillsCardComponent
                        categoryName="Non-Web Technologies"
                        items={
                            <>
                                <TechnicalSkillsItemComponent
                                    logo={matlabLogo}
                                    name="Matlab"
                                />
                                <TechnicalSkillsItemComponent
                                    logo={rLogo}
                                    name="R"
                                />
                                <TechnicalSkillsItemComponent
                                    logo={clogo}
                                    name="C"
                                />
                            </>
                        }
                        className="order-6 md:order-5"
                    />
                    <TechnicalSkillsCardComponent
                        categoryName="Tools"
                        items={
                            <>
                                <TechnicalSkillsItemComponent
                                    logo={githubLogo}
                                    name="GitHub"
                                />
                                <TechnicalSkillsItemComponent
                                    logo={gitLogo}
                                    name="Git"
                                />
                                <TechnicalSkillsItemComponent
                                    logo={markdownLogo}
                                    name="Markdown"
                                />
                                <TechnicalSkillsItemComponent
                                    logo={latexLogo}
                                    name="LaTeX"
                                />
                                <TechnicalSkillsItemComponent
                                    logo={mavenLogo}
                                    name="Maven"
                                />
                            </>
                        }
                        className="order-7"
                    />
                </div>
                <div
                    /* Large Version */ className="hidden lg:grid lg:grid-cols-3 lg:gap-5"
                >
                    <div /* Web Related */ className="flex flex-col gap-y-5">
                        <h3 className="text-3xl 2xl:text-5xl">Web</h3>
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
                    <div /* Server Related */ className="flex flex-col gap-y-5">
                        <h3 className="text-3xl 2xl:text-5xl">Server</h3>
                        <TechnicalSkillsCardComponent
                            categoryName="DevOps"
                            items={
                                <>
                                    <TechnicalSkillsItemComponent
                                        logo={nginxLogo}
                                        name="nginx"
                                    />
                                    <TechnicalSkillsItemComponent
                                        logo={cloudflareLogo}
                                        name="Cloudflare"
                                    />
                                </>
                            }
                        />
                        <TechnicalSkillsCardComponent
                            categoryName="Database"
                            items={
                                <>
                                    <TechnicalSkillsItemComponent
                                        logo={firebaseLogo}
                                        name="Firebase"
                                    />
                                    <TechnicalSkillsItemComponent
                                        logo={mongodbLogo}
                                        name="MongoDB"
                                    />
                                </>
                            }
                        />
                    </div>
                    <div /* Other Related */ className="flex flex-col gap-y-5">
                        <h3 className="text-3xl 2xl:text-5xl">Others</h3>
                        <TechnicalSkillsCardComponent
                            categoryName="Non-Web Technologies"
                            items={
                                <>
                                    <TechnicalSkillsItemComponent
                                        logo={matlabLogo}
                                        name="Matlab"
                                    />
                                    <TechnicalSkillsItemComponent
                                        logo={rLogo}
                                        name="R"
                                    />
                                    <TechnicalSkillsItemComponent
                                        logo={clogo}
                                        name="C"
                                    />
                                </>
                            }
                        />
                        <TechnicalSkillsCardComponent
                            categoryName="Tools"
                            items={
                                <>
                                    <TechnicalSkillsItemComponent
                                        logo={githubLogo}
                                        name="GitHub"
                                    />
                                    <TechnicalSkillsItemComponent
                                        logo={gitLogo}
                                        name="Git"
                                    />
                                    <TechnicalSkillsItemComponent
                                        logo={markdownLogo}
                                        name="Markdown"
                                    />
                                    <TechnicalSkillsItemComponent
                                        logo={latexLogo}
                                        name="LaTeX"
                                    />
                                    <TechnicalSkillsItemComponent
                                        logo={mavenLogo}
                                        name="Maven"
                                    />
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TechnicalSkills;
