const ProjectsCardComponent = ({
    title,
    date,
    content,
    skills,
}: {
    title: string;
    date: string;
    content: any;
    skills: any;
}) => {
    return (
        <div className="flex flex-col gap-y-3 bg-gradient-to-br from-fuchsia-100 to-blue-100 rounded-md drop-shadow-lg">
            <div className="flex flex-row justify-between mt-2.5 px-1.5">
                <h3 className="font-bold">{title}</h3>
                <span className="text-slate-500">{date}</span>
            </div>
            <div className="text-justify bg-gradient-to-br from-fuchsia-50 to-blue-50 border-t border-slate-300 rounded-b-md px-4 pt-2 pb-2">
                {content}
                <div>{skills}</div>
            </div>
        </div>
    );
};

export default ProjectsCardComponent;
