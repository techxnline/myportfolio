import React from 'react';

export default function ExperienceTimeline({ items }: { items: { role: string; dates: string; description: string }[] }) {
  return (
    <div className="space-y-6">
      {items.map((it, idx) => (
        <div key={idx} className="relative rounded-lg border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-primary">{it.role}</h4>
            <span className="text-sm text-secondary">{it.dates}</span>
          </div>
          <p className="mt-3 text-sm text-secondary">{it.description}</p>
        </div>
      ))}
    </div>
  );
}
