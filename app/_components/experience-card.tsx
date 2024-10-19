import { Link } from "./common/link";
import { Arrow } from "./icons/arrow";
import { TechBadge } from "./tech-badge";

export interface JobDetails {
    role: string;
    company: string;
    companyLink: string;
    startDate: string;
    endDate: string;
    description: React.ReactNode;
    techStack: string[];
}

interface ExperienceCardProps {
    job: JobDetails;
}

export function ExperienceCard({ job }: ExperienceCardProps) {
    return (
        <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 w-full md:w-auto text-center md:text-left lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* shadow */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                {/* Time */}
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    {job.startDate} - {job.endDate}
                </header>
                {/* desc */}
                <div className="z-10 sm:col-span-6">
                    <h3>
                        <span className="text-sm font-semibold text-slate-200">
                            {job.role}
                        </span>
                        <span className="block text-lg font-semibold text-slate-100">
                            <Link
                                href={job.companyLink}
                                label={job.company}
                            >
                                {job.company}
                                <Arrow />
                            </Link>
                        </span>
                    </h3>

                    <p className="mt-2 text-sm leading-normal text-left">
                        {job.description}
                    </p>

                    {/* Tech used */}
                    <ul className="mt-2 flex flex-wrap">
                        {job.techStack.map((tech) => (
                            <TechBadge key={`${job.role}-${tech}`}>
                                {tech}
                            </TechBadge>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
}
