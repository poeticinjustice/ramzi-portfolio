'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === '/';

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
    // If not on home page, let the Link navigate normally
  };

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
                className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200'
              >
                About
              </Link>
              <Link
                href='/#projects'
                onClick={(e) => handleSectionClick(e, 'projects')}
                className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200'
              >
                Projects
              </Link>
              <Link
                href='/#contact'
                onClick={(e) => handleSectionClick(e, 'contact')}
                className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200'
              >
                Contact
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
