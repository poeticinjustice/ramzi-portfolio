'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [loadingLink, setLoadingLink] = useState<string | null>(null);

  const handleExternalLink = (url: string, name: string) => {
    setLoadingLink(name);
    window.open(url, '_blank');
    // Clear after 3 seconds
    setTimeout(() => setLoadingLink(null), 3000);
  };

  return (
    <div className='min-h-screen bg-white dark:bg-slate-900'>
      {/* Loading Toast */}
      {loadingLink && (
        <div className='fixed bottom-4 right-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3'>
          <svg className='animate-spin h-5 w-5' viewBox='0 0 24 24'>
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
              fill='none'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
          <span className='text-sm font-medium'>
            Opening {loadingLink}... (may take a moment to wake up)
          </span>
        </div>
      )}

      <Navigation />

      {/* Hero Section */}
      <section className='hero-gradient pt-24 pb-20 px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 dark:text-white mb-8 tracking-tight'>
              Full-Stack Developer
            </h1>
            <p className='text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed'>
              Building data-driven web applications that make complex
              information accessible—from congressional voting records to NYC
              job markets.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <a
                href='#projects'
                className='bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200'
              >
                View Portfolio
              </a>
              <a
                href='#contact'
                className='border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200'
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='section-gradient py-20 px-6 lg:px-8'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='mb-16'>
            <h2 className='text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-6 tracking-tight text-center'>
              About
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed text-left'>
              From my Commodore 64 to embarrassingly asking Cursor&apos;s and
              Claude Code&apos;s opinions on my about statement, I have had a
              lifelong interest in technology. With a curiosity for data ranging
              from congressional voting records to NYC&apos;s open datasets, I
              build applications that I hope can make information more
              accessible. Working with the MERN stack and Redux Toolkit, I
              create platforms that handle everything from tracking thousands of
              congressional votes to streamlining email marketing analytics.
              I&apos;m drawn to projects that explore what&apos;s possible when
              you combine interesting APIs with modern web technologies.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200'>
              <div className='w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-6 h-6 text-slate-600 dark:text-slate-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                Frontend Development
              </h3>
              <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                React 19, Redux Toolkit, Tailwind CSS, Bootstrap, Vite,
                Cloudinary, Leaflet Maps
              </p>
            </div>

            <div className='text-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200'>
              <div className='w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-6 h-6 text-slate-600 dark:text-slate-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                Backend Development
              </h3>
              <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                Node.js, Express, MongoDB Atlas, Mongoose, JWT Auth
              </p>
            </div>

            <div className='text-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200'>
              <div className='w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-6 h-6 text-slate-600 dark:text-slate-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                DevOps & Tools
              </h3>
              <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                Git, Heroku, Render, CI/CD, Claude Code, Cursor AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='hero-gradient py-20 px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-6 tracking-tight'>
              Featured Projects
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed'>
              Exploring what&apos;s possible when you combine public APIs with
              modern web technologies—built with the MERN stack and curiosity.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* KTR */}
            <div className='bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200'>
              <div className='p-8'>
                <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-4'>
                  KTR (Know The Ropes)
                </h3>
                <p className='text-slate-600 dark:text-slate-400 mb-6 leading-relaxed'>
                  Congressional voting records and member data. Scrapes House and
                  Senate websites using Python/lxml, processes vote data through
                  Node.js batch pipelines, and provides vote tracking, member
                  profiles, and pattern analysis with an admin dashboard.
                </p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    MERN Stack
                  </span>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    Redux Toolkit
                  </span>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    Cloudinary
                  </span>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    Congress API
                  </span>
                </div>
                <div className='flex gap-6'>
                  <div className='flex items-center gap-2'>
                    <a
                      href='https://github.com/poeticinjustice/ktr'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors'
                    >
                      GitHub
                    </a>
                    <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200'>
                      <svg
                        className='w-3 h-3 mr-1'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Private
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      handleExternalLink(
                        'https://ktr-c75c27a564a2.herokuapp.com/',
                        'KTR'
                      )
                    }
                    className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors relative group'
                    title='Hosted on Heroku free tier - may take a moment to wake up'
                  >
                    Live Demo
                    <span className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'>
                      Hosted on Heroku - may take a moment to wake up
                    </span>
                  </button>
                  <a
                    href='/projects/ktr'
                    className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors'
                  >
                    Project Details
                  </a>
                </div>
              </div>
            </div>

            {/* NYC Jobs App */}
            <div className='bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200'>
              <div className='p-8'>
                <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-4'>
                  NYC Jobs
                </h3>
                <p className='text-slate-600 dark:text-slate-400 mb-6 leading-relaxed'>
                  Job search platform for 6,000+ NYC government positions.
                  Searches by category, location, salary, and keywords. Includes
                  note-taking with priority levels and tags for tracking
                  applications. Links directly to official job postings for
                  application.
                </p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    MERN Stack
                  </span>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    Redux Toolkit
                  </span>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    NYC Open Data
                  </span>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    JWT Auth
                  </span>
                </div>
                <div className='flex gap-6'>
                  <a
                    href='https://github.com/poeticinjustice/nyc-jobs-app'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors'
                  >
                    GitHub
                  </a>
                  <button
                    onClick={() =>
                      handleExternalLink(
                        'https://nyc-jobs-app.onrender.com/',
                        'NYC Jobs'
                      )
                    }
                    className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors relative group'
                    title='Hosted on Render free tier - may take a moment to wake up'
                  >
                    Live Demo
                    <span className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'>
                      Hosted on Render - may take a moment to wake up
                    </span>
                  </button>
                  <a
                    href='/projects/nyc-jobs'
                    className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors'
                  >
                    Project Details
                  </a>
                </div>
              </div>
            </div>

            {/* MailChamp */}
            <div className='bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200'>
              <div className='p-8'>
                <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-4'>
                  MailChamp
                </h3>
                <p className='text-slate-600 dark:text-slate-400 mb-6 leading-relaxed'>
                  Turns hours of manual MailChimp data analysis into seconds.
                  Automates campaign performance reporting with customizable
                  link exclusion, dual-format exports (spreadsheet +
                  email-ready), and visual analytics—eliminating the tedious
                  process of copying data across multiple pages and calculating
                  statistics manually.
                </p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    MERN Stack
                  </span>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    Redux Toolkit
                  </span>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    MailChimp API
                  </span>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    Recharts
                  </span>
                </div>
                <div className='flex gap-6'>
                  <div className='flex items-center gap-2'>
                    <a
                      href='https://github.com/poeticinjustice/MailChamp2024'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors'
                    >
                      GitHub
                    </a>
                    <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200'>
                      <svg
                        className='w-3 h-3 mr-1'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Private
                    </span>
                  </div>
                  <a
                    href='/projects/mailchamp'
                    className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors'
                  >
                    Project Details
                  </a>
                </div>
              </div>
            </div>

            {/* Placer */}
            <div className='bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200'>
              <div className='p-8'>
                <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-4'>
                  Placer
                </h3>
                <p className='text-slate-600 dark:text-slate-400 mb-6 leading-relaxed'>
                  Location discovery and sharing platform. Users post places with
                  photos (via Cloudinary), view them on Leaflet maps with
                  geolocation search, and browse in gallery/list/map views.
                  Includes user profiles, comments, and admin approval workflow.
                </p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    MERN Stack
                  </span>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    Redux Toolkit
                  </span>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    Cloudinary
                  </span>
                  <span className='px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full'>
                    Leaflet
                  </span>
                </div>
                <div className='flex gap-6'>
                  <a
                    href='https://github.com/poeticinjustice/placer'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors'
                  >
                    GitHub
                  </a>
                  <button
                    onClick={() =>
                      handleExternalLink(
                        'https://placer-app-cffc6463c817.herokuapp.com',
                        'Placer'
                      )
                    }
                    className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors relative group'
                    title='Hosted on Heroku free tier - may take a moment to wake up'
                  >
                    Live Demo
                    <span className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'>
                      Hosted on Heroku - may take a moment to wake up
                    </span>
                  </button>
                  <a
                    href='/projects/placer'
                    className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors'
                  >
                    Project Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='section-gradient py-20 px-6 lg:px-8'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-6 tracking-tight'>
              Let&apos;s Connect
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed'>
              Currently exploring full-stack opportunities where I can work with
              interesting data and build tools that make information more
              accessible.
            </p>
          </div>

          <div className='max-w-5xl mx-auto'>
            <div className='text-center'>
              <div className='grid md:grid-cols-3 gap-8'>
                <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200 rounded-lg'>
                  <div className='flex flex-col items-center text-center'>
                    <div className='w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6'>
                      <svg
                        className='w-8 h-8 text-slate-600 dark:text-slate-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>
                    </div>
                    <h4 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                      Email
                    </h4>
                    <a
                      href='mailto:ramzi.kanazi@gmail.com'
                      className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors'
                    >
                      ramzi.kanazi@gmail.com
                    </a>
                  </div>
                </div>

                <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200 rounded-lg'>
                  <div className='flex flex-col items-center text-center'>
                    <div className='w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6'>
                      <svg
                        className='w-8 h-8 text-slate-600 dark:text-slate-400'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                    </div>
                    <h4 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                      GitHub
                    </h4>
                    <a
                      href='https://github.com/poeticinjustice'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors'
                    >
                      github.com/poeticinjustice
                    </a>
                  </div>
                </div>

                <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200 rounded-lg'>
                  <div className='flex flex-col items-center text-center'>
                    <div className='w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6'>
                      <svg
                        className='w-8 h-8 text-slate-600 dark:text-slate-400'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                      </svg>
                    </div>
                    <h4 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                      LinkedIn
                    </h4>
                    <a
                      href='https://linkedin.com/in/ramzi-kanazi'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors'
                    >
                      linkedin.com/in/ramzi-kanazi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 px-6 lg:px-8 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700'>
        <div className='max-w-6xl mx-auto text-center'>
          <p className='text-slate-600 dark:text-slate-400 text-sm'>
            © 2025 Ramzi Kanazi. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
