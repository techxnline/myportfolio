import React from 'react';

export default function ExpertiseCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-lg bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-sm text-secondary">{description}</p>
    </article>
  );
}
