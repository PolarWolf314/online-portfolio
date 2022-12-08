import ProjectsCardComponent from "./projects-card-component";

const Projects = () => {
    return (
        <div className="flex flex-col gap-4">
            <h2>Projects</h2>
            <ProjectsCardComponent
                title="React Websites"
                date="Dec 2021"
                content={
                    <>
                        I completed 14 small React website projects as a part of
                        my online learning. These websites challenged and grew
                        my ability to create applications using React. Replace
                        the 02 in the URL with integers up to 15 to see the
                        other projects.
                    </>
                }
                skills={<>React</>}
            />
            <ProjectsCardComponent
                title="React Websites"
                date="Dec 2021"
                content={
                    <>
                        I completed 14 small React website projects as a part of
                        my online learning. These websites challenged and grew
                        my ability to create applications using React. Replace
                        the 02 in the URL with integers up to 15 to see the
                        other projects.
                    </>
                }
                skills={<>React</>}
            />
        </div>
    );
};

export default Projects;
