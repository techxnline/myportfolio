import Link from 'next/link';
import React from 'react';
import { siteMeta } from '../data/siteData';

export default function Navbar() {
  return (
    <header className="backdrop-blur sticky top-0 z-40 border-b bg-white/60">
      <div className="mx-auto max-w-6xl px-6 py-4 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Home" className="text-lg font-semibold text-primary">
              {siteMeta.title.split('|')[0].trim()}
            </Link>
            <span className="hidden text-sm text-secondary sm:inline">{siteMeta.location}</span>
          </div>
          <div className="hidden gap-6 md:flex">
            <a href="#about" className="text-sm text-secondary hover:text-primary">
              About
            </a>
            <a href="#expertise" className="text-sm text-secondary hover:text-primary">
              Expertise
            </a>
            <a href="#services" className="text-sm text-secondary hover:text-primary">
              Services
            </a>
            <a href="#experience" className="text-sm text-secondary hover:text-primary">
              Experience
            </a>
            <a href="#contact" className="text-sm text-secondary hover:text-primary">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteMeta.email}`}
              className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 md:inline-block"
            >
              Contact
            </a>
            <button className="md:hidden rounded-md border p-2 text-secondary" aria-label="Open menu">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
