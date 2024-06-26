import ProjectsCardComponent from "./projects-card-component";

const Projects = () => {
    return (
        <div className="flex flex-col gap-4 2xl:gap-10 py-8 2xl:py-16">
            <h2 className="self-center font-bold text-xl md:text-4xl 2xl:text-6xl">
                Projects
            </h2>
            <div className="grid gap-4 2xl:gap-10 md:grid-cols-2 2xl:grid-cols-3">
                <ProjectsCardComponent
                    title="EngiWear Android App"
                    link="https://github.com/PolarWolf314/softeng-306-project-1"
                    date="Sept 2023"
                    content={
                        <>
                            This is the the first Keystone Project for my formal
                            education using Java to create a full stack Android
                            application using Firebase as a backend. Our team
                            came first place overall for this project. I was the
                            main designer of the app, responsible for how it
                            looks and feels.
                        </>
                    }
                    skills={["java", "android", "firebase", "figma", "github"]}
                />
                <ProjectsCardComponent
                    title="Optimal Scheduler App"
                    link="https://github.com/PolarWolf314/softeng-306-project-2"
                    date="Oct 2023"
                    content={
                        <>
                            This is the the second Keystone Project for my
                            formal education using Java to implement algorithms
                            such as DFS and A* in ELS and AO state space to
                            optimally schedule CPU tasks. Our team created a
                            terminal visualiser—the first of its kind in the
                            history of this course. We used Docker to automate
                            the compiling and running of the code, to
                            consistently track improvements in performance over
                            time.
                        </>
                    }
                    skills={[
                        "java",
                        "android",
                        "figma",
                        "github",
                        "docker",
                    ]}
                />
                <ProjectsCardComponent
                    title="React Websites"
                    link="https://polarwolf314-react-projects-02.netlify.app"
                    date="Dec 2021"
                    content={
                        <>
                            I completed 14 small React website projects as a
                            part of my online learning. These websites
                            challenged and grew my ability to create
                            applications using React. Replace the 02 in the URL
                            with integers up to 15 to see the other projects.
                        </>
                    }
                    skills={["react"]}
                />
                <ProjectsCardComponent
                    title="E-Commerce App (WIP)"
                    link="https://polarwolf314-ecommerce.netlify.app"
                    date="Dec 2021"
                    content={
                        <>
                            This is the Capstone Project for React JS Zero to
                            Mastery. It is still a work in progress but will
                            eventually utilise Stripe, GraphQL, Firebase, and
                            React for a fully responsive e-commerce app. It has
                            Google and email authentication, with a basic cart
                            system.
                        </>
                    }
                    skills={["react", "firebase", "scss"]}
                />
                <ProjectsCardComponent
                    title="Personal Portfolio (WIP)"
                    date="Dec 2022"
                    content={
                        <>
                            This is the website you are currently on! It uses
                            React, Tailwind CSS, Next.JS, TypeScript, and is
                            hosted on my private server running Ubuntu 20.04
                            using nginx as a reverse proxy and Cloudflare as my
                            DNS. I am currently working on making it fully
                            responsive.
                        </>
                    }
                    skills={[
                        "react",
                        "tailwindcss",
                        "nextjs",
                        "typescript",
                        "cloudflare",
                        "ubuntu",
                        "figma",
                    ]}
                />
                <ProjectsCardComponent
                    title="AI Doodling Game"
                    date="Oct 2022"
                    content={
                        <>
                            This is the Cornerstone Project for my formal
                            education using Java and JavaFX to make a drawing
                            game with four unique game modes. It was designed
                            from the ground up using Figma, and was concluded
                            with a design report. I worked collaboratively with
                            two other teammates using GitHub. It has 40 pull
                            requests and over 200 commits.
                        </>
                    }
                    skills={["java", "javafx", "git", "github", "figma"]}
                />
                <ProjectsCardComponent
                    title="Avondale Taekwon Do"
                    link="https://polarwolf314.github.io/AvondaleTKD/"
                    date="Nov 2021"
                    content={
                        <>
                            This was one of my first projects regarding web
                            development. I made this two days after I started
                            learning web development for the first time. My
                            eventual goal is to refresh this website using React
                            and making it fully responsive using Tailwind CSS.
                        </>
                    }
                    skills={["html", "css", "javascript"]}
                />
            </div>
        </div>
    );
};

export default Projects;
