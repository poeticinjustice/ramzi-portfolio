'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNameClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinkClasses =
    'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200';

  const mobileNavLinkClasses =
    'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white block px-4 py-3 text-base font-medium transition-colors duration-200';

  return (
    <nav className='fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 z-50'>
      <div className='max-w-6xl mx-auto px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0'>
            <button
              onClick={handleNameClick}
              className='text-xl font-semibold text-slate-900 dark:text-white tracking-tight hover:opacity-80 transition-opacity cursor-pointer'
            >
              Ramzi Kanazi
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              <Link
                href='/#about'
                onClick={(e) => handleSectionClick(e, 'about')}
                className={navLinkClasses}
              >
                About
              </Link>
              <Link
                href='/#projects'
                onClick={(e) => handleSectionClick(e, 'projects')}
                className={navLinkClasses}
              >
                Projects
              </Link>
              <Link
                href='/#contact'
                onClick={(e) => handleSectionClick(e, 'contact')}
                className={navLinkClasses}
              >
                Contact
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button + theme toggle */}
          <div className='flex items-center gap-2 md:hidden'>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200'
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              ) : (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 top-16 bg-black/20 dark:bg-black/40 md:hidden z-40'
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden='true'
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg z-50 transition-all duration-200 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className='px-4 py-3 space-y-1'>
          <Link
            href='/#about'
            onClick={(e) => handleSectionClick(e, 'about')}
            className={mobileNavLinkClasses}
          >
            About
          </Link>
          <Link
            href='/#projects'
            onClick={(e) => handleSectionClick(e, 'projects')}
            className={mobileNavLinkClasses}
          >
            Projects
          </Link>
          <Link
            href='/#contact'
            onClick={(e) => handleSectionClick(e, 'contact')}
            className={mobileNavLinkClasses}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
