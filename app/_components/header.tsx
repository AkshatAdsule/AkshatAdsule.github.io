"use client"; // Make it a client component as hooks are used
import { useState, useEffect, useRef } from 'react';
import { Github } from "./icons/github";
import { LinkedIn } from "./icons/linkedin";

export function Header() {
  const [activeLink, setActiveLink] = useState("#about"); // Assuming '#about' is the first section

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    // Add other navigation items here if they exist or will be added
  ];

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // 50% of the section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink("#" + entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = navItems.map(item => document.getElementById(item.href.substring(1)));

    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []); // navItems can be added to dependency array if it's not static

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1>Akshat Adsule</h1>
        <h2>Student at UC Davis</h2>
        <p>
          Motivated student (and teacher at times) with strong interests in
          technology
        </p>
        <ul
          className="ml-1 mt-8 flex items-center"
          aria-label="Social media"
        >
          <li className="mr-5 text-xs shrink-0">
            <Github />
          </li>
          <li className="mr-5 text-xs shrink-0">
            <LinkedIn />
          </li>
        </ul>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className={`group flex items-center py-3 ${activeLink === item.href ? "active" : ""}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor jump
                    handleLinkClick(item.href);
                    // Optional: smooth scroll to section
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all motion-reduce:transition-none ${activeLink === item.href ? "w-16 bg-slate-200" : "group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"}`}></span>
                  <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 ${activeLink === item.href ? "text-slate-200" : "group-hover:text-slate-200 group-focus-visible:text-slate-200"}`}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
