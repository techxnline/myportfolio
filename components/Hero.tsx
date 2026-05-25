import React from 'react';
import { hero } from '../data/siteData';

export default function Hero() {
  return (
    <section id="hero" className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">
            {hero.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-secondary">{hero.headline}</p>
          <p className="mt-6 text-base text-secondary">{hero.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#experience" className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-600">
              View Experience
            </a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-primary hover:bg-slate-50">
              Contact Me
            </a>
          </div>

          <p className="mt-4 text-sm text-secondary">Location: Michigan, USA • Available immediately • Remote</p>
        </div>
      </div>
    </section>
  );
}
