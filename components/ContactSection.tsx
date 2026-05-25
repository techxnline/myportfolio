import React from 'react';
import { siteMeta } from '../data/siteData';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-bg">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h3 className="text-2xl font-semibold text-primary">Let’s Work Together</h3>
        <p className="mt-3 text-sm text-secondary">I am available for remote AI evaluation, annotation, content review, data QA, and domain-expert projects.</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={`mailto:${siteMeta.email}`} className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white">
            Email: {siteMeta.email}
          </a>
          <div className="text-sm text-secondary">
            <p>{siteMeta.location}</p>
            <p>Availability: 10+ hours/week</p>
            <p>Work authorization: Authorized to work in the United States</p>
          </div>
        </div>
      </div>
    </section>
  );
}
