"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Projects", href: "#live-projects" },
  { label: "DevSecOps", href: "#devsecops" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollY = window.scrollY + 80;
      let current = "";
      for (const link of navLinks) {
        const el = document.getElementById(link.href.slice(1));
        if (el && el.offsetTop <= scrollY) current = link.href.slice(1);
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-slate-900 font-bold text-lg tracking-tight hover:text-sky-600 transition-colors"
        >
          <span className="text-sky-600">V</span>iko
          <span className="text-slate-500 font-normal ml-1 text-sm hidden sm:inline">
            / Fullstack &amp; DevSecOps
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm px-3 py-2 rounded-md transition-all ${
                    isActive
                      ? "text-sky-700 bg-sky-50 font-medium"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="ml-1 p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all inline-flex items-center"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href={siteConfig.resumeUrl}
              download
              className="ml-2 text-sm px-4 py-2 rounded-md bg-sky-50 border border-sky-200 text-sky-700 hover:bg-sky-100 hover:border-sky-300 transition-all"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-600 hover:text-slate-900 p-2 rounded-md hover:bg-slate-100 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu — animated */}
      <div
        className={`md:hidden border-slate-200 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-200 ease-in-out ${
          open ? "max-h-screen opacity-100 border-t" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block text-sm px-3 py-2.5 rounded-md transition-all ${
                    isActive
                      ? "text-sky-700 bg-sky-50 font-medium"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="block text-slate-700 hover:text-slate-900 text-sm px-3 py-2.5 rounded-md hover:bg-slate-100 transition-all"
            >
              GitHub
            </a>
          </li>
          <li className="pt-1 pb-2">
            <a
              href={siteConfig.resumeUrl}
              download
              onClick={handleLinkClick}
              className="block text-center text-sm px-4 py-2.5 rounded-md bg-sky-50 border border-sky-200 text-sky-700 hover:bg-sky-100 transition-all"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
