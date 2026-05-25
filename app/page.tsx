import { ArrowRight, Briefcase, Sparkles, Users } from "lucide-react";

const features = [
  {
    title: "Design & Product",
    description: "Crafting polished interfaces with accessibility, motion, and brand consistency in mind.",
    icon: Sparkles,
  },
  {
    title: "Web Development",
    description: "Building fast, scalable sites and apps using Next.js, React, and modern frontend tooling.",
    icon: Briefcase,
  },
  {
    title: "Team Collaboration",
    description: "Working closely with teams to deliver thoughtful products on deadline.",
    icon: Users,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300 shadow-sm shadow-slate-950/20">
            Landing page updated for a polished portfolio experience
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build digital experiences that look beautiful and feel effortless.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I create modern landing pages, product interfaces, and performant web applications using
            Next.js, Tailwind CSS, and React.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              View projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-sky-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="border-t border-slate-800/90 bg-slate-950/90 px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">Featured work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Projects that combine clarity, speed, and strong visual direction.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">UI system</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Brand refresh dashboard</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Designed and shipped a responsive analytics dashboard with clean data visualizations and fast interactions.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">Web app</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Modern e-commerce landing page</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Built a conversion-focused storefront with accessible navigation, fast loading, and polished product storytelling.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">Components</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Design system components</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Created reusable, accessible components for landing pages, dashboards, and internal design systems.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-800/90 bg-slate-950/90 px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">Let’s connect</p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to launch your next product?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            I’m available for freelance work and full-time opportunities. Reach out and we’ll make something great.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Say hello
          </a>
        </div>
      </section>
    </main>
  );
}
