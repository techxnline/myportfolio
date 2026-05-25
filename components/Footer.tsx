import React from 'react';
import { siteMeta } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="border-t bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-secondary">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>© {new Date().getFullYear()} Terie Carstarphen</div>
          <div className="flex gap-4">
            <a href={siteMeta.linkedIn} className="hover:text-primary">LinkedIn Profile</a>
            <a href={`mailto:${siteMeta.email}`} className="hover:text-primary">{siteMeta.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
