import { Link } from "./common/link";
import { ExperienceCard, JobDetails } from "./experience-card";
import { Arrow } from "./icons/arrow";

export function MainContent() {
    const jobs: JobDetails[] = [
        {
            role: "Student Application Developer",
            company: "UC Davis IET",
            companyLink: "https://iet.ucdavis.edu/",
            startDate: "Oct 2023",
            endDate: "Present",
            description: (
                <>
                    - Worked with students and senior developers to maintain
                    MyInfoVault, an all-encompassing platform for academic
                    personnel
                    <br />
                    - Developed 10+ new features in a complex and mature Java
                    Spring web application as per the needs of actual users
                    <br />
                    - Collaborated on an ongoing UI refresh and transitioned
                    existing JSP pages to modern technologies such as Vue.js and
                    Angular
                </>
            ),
            techStack: [
                "Java",
                "Spring",
                "Vue.js",
                "Angular",
                "MariaDB",
                "Jira",
            ],
        },

        {
            role: "Software Engineering Intern",
            company: "American Wild Horse Campaign",
            companyLink: "https://home.americanwildhorse.org/",
            startDate: "June 2023",
            endDate: "Sept 2023",
            description: (
                <>
                    - Worked with a team of fellow interns to build & release a
                    full-stack mobile application to gather crowdsourced data
                    for an ongoing project to identify and tag horses in the
                    wild with machine learning
                    <br />
                    - Designed and deployed backend systems for image
                    processing, user management, and app functionality using
                    standard technologies and platforms such as node.js,
                    postgres, Microsoft Azure, Google Firebase, PostgresSQL,
                    Docker, and Kubernetes.
                    <br />
                    - Implemented machining learning models in to the backend to
                    ensure image validity and quality whilst removing unwanted
                    and dangerous content
                </>
            ),
            techStack: [
                "Node.js",
                "Postgres",
                "Azure",
                "Firebase",
                "Docker",
                "Kubernetes",
                "Machine Learning",
                "Flutter",
            ],
        },
    ];

    return (
        <main className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about">
                Since I was a kid, I've always been fascinated by technology. I
                started coding in middle school and have been hooked ever since.
                I'm currently a student at UC Davis studying computer science.
                I've worked on a variety of projects with vastly different
                technologies and teams. In the past, I've built robots with my
                {" "}
                <Link
                    href="https://homesteadrobotics.com/"
                    label="robotics team"
                >
                    Robotics Team
                </Link>, helped launch a{" "}
                <Link
                    href="https://www.instagram.com/thesteamorg/"
                    label="ed-tech startup"
                >
                    ed-tech startup
                </Link>{" "}
                , interned at a{" "}
                <Link
                    href="https://home.americanwildhorse.org/"
                    label="American Wild Horse Campaign"
                >
                    large non-profit organization
                </Link>{" "}
                tracking horses in the wild and (currently) working at my
                school's{" "}
                <Link
                    href="https://iet.ucdavis.edu/"
                    label="university"
                >
                    IT department
                </Link>.
            </section>

            <section id="experience">
                <ol className="group/list">
                    {jobs.map((job, index) => (
                        <ExperienceCard key={index} job={job} />
                    ))}
                </ol>
                <div className="mt-12 text-center">
                    <Link href="/resume.pdf" label="View my full Resume">
                        View my full Resume <Arrow />
                    </Link>
                </div>
            </section>
        </main>
    );
}
