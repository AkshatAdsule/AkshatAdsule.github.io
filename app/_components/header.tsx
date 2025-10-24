import { Aperture } from "./icons/aperture";
import { Github } from "./icons/github";
import { LinkedIn } from "./icons/linkedin";
import { Unsplash } from "./icons/unsplash";

export function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1>Akshat Adsule</h1>
        <h2>Student at UC Davis</h2>
        <p>
          Motivated student (and teacher at times) with strong interests in
          technology
        </p>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          <li className="mr-5 text-xs shrink-0">
            <Github />
          </li>
          <li className="mr-5 text-xs shrink-0">
            <LinkedIn />
          </li>
          <li className="mr-5 text-xs shrink-0">
            <Unsplash />
          </li>
          <li className="mr-5 text-xs shrink-0">
            <Aperture />
          </li>
          <li className="mr-5 text-xs shrink-0">
            <Unsplash />
          </li>
        </ul>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <a className="group flex items-center py-3" href="#about">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                About
              </span>
            </a>
            <a
              className="group flex items-center py-3 active"
              href="#experience"
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                experience
              </span>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}
