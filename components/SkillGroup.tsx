import React from 'react';

export default function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h5 className="text-sm font-semibold text-primary">{title}</h5>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <li key={it} className="rounded-md bg-white/90 px-3 py-1 text-sm text-primary shadow-sm">{it}</li>
        ))}
      </ul>
    </div>
  );
}
