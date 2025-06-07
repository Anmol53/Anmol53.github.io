'use client';

import { Navigation } from "./Navigation";

export function Header() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            onClick={scrollToTop}
            className="text-xl font-bold hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Anmol Agrawal
          </a>
          <Navigation />
        </div>
      </div>
    </header>
  );
} 