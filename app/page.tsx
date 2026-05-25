import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Hero from '../components/Hero';
import ExpertiseCard from '../components/ExpertiseCard';
import ServiceCard from '../components/ServiceCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillGroup from '../components/SkillGroup';
import EducationCard from '../components/EducationCard';
import ContactSection from '../components/ContactSection';
import { expertise, services, experience, skillGroups, education, certifications, strengths } from '../data/siteData';

export default function HomePage() {
  return (
    <main className="bg-bg text-primary">
      <Hero />

      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeading title="About" subtitle="AI training data, evaluation, and quantitative expertise" />
        <p className="max-w-3xl text-sm text-secondary">
          Terie has 7+ years of experience across AI training data, LLM evaluation, multimodal annotation, prompt-response evaluation, pairwise ranking, RLHF-style assessment, red-teaming, and quality assurance. Strong quantitative grounding through an MSc in Actuarial Science, a Postgraduate Diploma in Data Science, and hands-on experience with Python, R, SQL, statistics, probability, risk modeling, and machine learning.
        </p>
      </section>

      <section id="expertise" className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeading title="Core Expertise" subtitle="Where I add value" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((ex) => (
            <ExpertiseCard key={ex.title} title={ex.title} description={ex.description} />
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeading title="Services I Can Support" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s} title={s} />
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeading title="Experience" />
        <ExperienceTimeline items={experience} />
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeading title="Skills" subtitle="Technical, multimodal, and domain expertise" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <SkillGroup key={g.title} title={g.title} items={g.items} />
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeading title="Education & Certifications" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((e) => (
            <EducationCard key={e.degree} degree={e.degree} school={e.school} year={e.year} />
          ))}
        </div>
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-primary">Certifications</h4>
          <ul className="mt-3 text-sm text-secondary">
            {certifications.map((c) => (
              <li key={c.title}>{c.title} — {c.issuer}, {c.date}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="strengths" className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeading title="Why Work With Me" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <div key={s.title} className="rounded-lg bg-card p-4 shadow-sm">
              <h5 className="text-sm font-semibold text-primary">{s.title}</h5>
              <p className="mt-2 text-sm text-secondary">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />

    </main>
  );
}
