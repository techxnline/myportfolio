import React from 'react';

export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">{title}</p>
      {subtitle && <p className="mt-2 text-2xl font-semibold text-primary">{subtitle}</p>}
    </div>
  );
}
