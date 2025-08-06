import { Link } from "./common/link";
import { Arrow } from "./icons/arrow";
import { TechBadge } from "./tech-badge";

export interface ProjectDetails {
    name: string;
    description: React.ReactNode;
    projectLink: string;
    techStack: string[];
}

interface ProjectCardProps {
    project: ProjectDetails;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 w-full md:w-auto text-center md:text-left lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* shadow */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                {/* desc */}
                <div className="z-10 sm:col-span-8">
                    <h3>
                        <Link
                            href={project.projectLink}
                            label={project.name}
                        >
                            <span className="text-lg font-semibold text-slate-200">
                                {project.name}
                            </span>
                            <Arrow />
                        </Link>
                    </h3>

                    <p className="mt-2 text-sm leading-normal text-left max-w-full">
                        {project.description}
                    </p>

                    {/* Tech used */}
                    <ul className="mt-2 flex flex-wrap">
                        {project.techStack.map((tech) => (
                            <TechBadge key={`${project.name}-${tech}`}>
                                {tech}
                            </TechBadge>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
}
