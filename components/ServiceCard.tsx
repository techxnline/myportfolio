import React from 'react';

export default function ServiceCard({ title }: { title: string }) {
  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <p className="text-sm font-medium text-primary">{title}</p>
    </div>
  );
}
