import React from 'react';

export default function EducationCard({ degree, school, year }: { degree: string; school: string; year: string }) {
  return (
    <div className="rounded-lg bg-card p-4 shadow-sm">
      <p className="text-sm font-semibold text-primary">{degree}</p>
      <p className="mt-1 text-sm text-secondary">{school} • {year}</p>
    </div>
  );
}
