import { AiOutlineLink } from "react-icons/ai";
import Badges from "../badges";

const ProjectsCardComponent = ({
    title,
    link,
    date,
    content,
    skills,
}: {
    title: string;
    link?: string;
    date: string;
    content: any;
    skills: any;
}) => {
    return (
        <div className="flex flex-col gap-y-3 bg-gradient-to-br from-fuchsia-100 to-blue-100 rounded-md drop-shadow-lg">
            <div className="flex flex-row justify-between mt-2.5 px-1.5">
                <h3 className={`${link ? "hover:underline" : ""} font-bold`}>
                    <a href={link} target="_blank" rel="noreferrer">
                        <span className="flex flex-row items-center gap-1 2xl:text-xl">
                            <AiOutlineLink
                                className={`${link ? "" : "hidden"}`}
                            />
                            {title}
                        </span>
                    </a>
                </h3>
                <span className="text-slate-500 2xl:text-xl">{date}</span>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-50 to-blue-50 border-t border-slate-300 rounded-b-md h-full px-4 pt-2 pb-2 flex flex-col justify-between 2xl:text-lg">
                {content}
                <div className="pt-2">
                    <Badges
                        badges={skills}
                        className="flex-wrap-reverse justify-end"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectsCardComponent;
