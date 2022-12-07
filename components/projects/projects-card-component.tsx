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
        <div>
            <div>
                <span>{title}</span>
                <span>{date}</span>
            </div>
            <div>{content}</div>
            <div>{skills}</div>
        </div>
    );
};

export default ProjectsCardComponent;
