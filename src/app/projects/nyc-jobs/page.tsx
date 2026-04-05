'use client';

import Navigation from '@/components/Navigation';
import MermaidDiagram from '@/components/LazyMermaidDiagram';
import ImageModal from '@/components/ImageModal';
import ExpandableStory from '@/components/ExpandableStory';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectGallery from '@/components/project/ProjectGallery';
import HighlightCard from '@/components/project/HighlightCard';
import TechStackItem from '@/components/project/TechStackItem';
import SectionContainer from '@/components/project/SectionContainer';
import { useImageModal } from '@/hooks/useImageModal';

export default function NYCJobsCaseStudy() {
  const { isModalOpen, modalImageIndex, openModal, closeModal } =
    useImageModal();

  const nycJobsImages = [
    {
      src: 'https://res.cloudinary.com/ramziscloud/image/upload/v1759687825/portfolio/bihjxsat6tboszhlk40o.png',
      alt: 'NYC Jobs Search Interface - Advanced job search with filtering by category, location, salary, and keywords',
      caption:
        'Advanced Job Search - Real-time search through thousands of NYC government positions with multi-criteria filtering and smart caching',
    },
    {
      src: 'https://res.cloudinary.com/ramziscloud/image/upload/v1759687826/portfolio/g4ukit6ndg1eafmevqap.png',
      alt: 'NYC Jobs Notes Management - Personal note-taking system with priority levels and categorization',
      caption:
        'Notes Management System - Job-linked notes with priority levels, tags, and advanced filtering for tracking applications',
    },
  ];

  return (
    <div className='min-h-screen bg-white dark:bg-slate-900'>
      <Navigation />

      <ProjectHero
        title='NYC Jobs'
        subtitle='Government Job Search & Application Tracker'
      />

      {/* Background */}
      <section className='section-gradient py-8 px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-16'>
            <div>
              <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-6'>
                Background
              </h2>
              <ExpandableStory
                teaser="New York's an exciting city, and as it turns out, New York has lots of exciting data. From tree maps to skate parks and job postings, you can find much of what's out in the city right online."
                fullStory={
                  <>
                    <p>
                      New York&apos;s an exciting city, and as it turns out, New
                      York has lots of exciting data. From tree maps to skate
                      parks and job postings, you can find much of what&apos;s
                      out in the city right online. I wanted to learn more about
                      their Open Data portal, so I decided to make a site using
                      their public Jobs NYC Postings API endpoint and process
                      6,000+ job postings with advanced filtering and caching.
                    </p>
                    <p>
                      The city&apos;s own jobs site is very nice. First, it
                      loads right away! It&apos;s not running on Render&apos;s
                      free tier like mine, and the best way to apply is on it,
                      but one can&apos;t search and filter by salary. For one of
                      the world&apos;s most expensive cities, they make their
                      applicants work to figure out whether they can afford to
                      live here. Still, they have thousands of great jobs, and I
                      felt that there should be a site that could provide that
                      needed service, so I made it.
                    </p>
                    <p>
                      To make the process of applying to city jobs easier, users
                      can set up profiles and add job-linked notes with priority
                      levels and tags to track applications and organize their
                      search process. They can also add a separate note if
                      they&apos;d like to track a job outside of the city
                      government. With thousands of positions across every
                      borough and agency, this app can help make the city&apos;s
                      job market a little more navigable.
                    </p>
                  </>
                }
                className='mb-6'
              />
            </div>
            <div className='space-y-6'>
              <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
                <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                  Live Demo
                </h3>
                <a
                  href='https://nyc-jobs-app.onrender.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors relative group inline-block'
                  title='Hosted on Render free tier - may take a moment to wake up'
                >
                  nyc-jobs-app.onrender.com
                  <span className='absolute bottom-full left-0 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'>
                    Hosted on Render - may take a moment to wake up
                  </span>
                </a>
              </div>
              <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
                <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                  Source Code
                </h3>
                <a
                  href='https://github.com/poeticinjustice/nyc-jobs-app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors'
                >
                  github.com/poeticinjustice/nyc-jobs-app
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectGallery images={nycJobsImages} onImageClick={openModal} />

      {/* Key Features */}
      <SectionContainer variant='gradient'>
        <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-12 text-center'>
          Key Features & Functionality
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='space-y-6'>
            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                Dual Job Search — NYC & Federal
              </h3>
              <ul className='space-y-2 text-slate-600 dark:text-slate-400 text-sm'>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    NYC Open Data API — 6,000+ city government postings
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    USA Jobs API — federal positions alongside city roles
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Multi-criteria filtering (category, location, salary,
                    keywords)
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>Multiple sorting options (date, title, salary)</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>Pagination with URL state persistence</span>
                </li>
              </ul>
            </div>

            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                Notes Management
              </h3>
              <ul className='space-y-2 text-slate-600 dark:text-slate-400 text-sm'>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>Job-linked notes with automatic job data fetching</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Note types (general, interview, application, followup,
                    research) with priority levels
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>Advanced filtering, pagination, and CSV export</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='space-y-6'>
            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                Map View, Saves & Searches
              </h3>
              <ul className='space-y-2 text-slate-600 dark:text-slate-400 text-sm'>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Interactive Mapbox GL map with clustered job pins and static
                    geocoding
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Save searches by name and rerun with one click (up to 20)
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Save jobs and track through an application pipeline
                    (interested → applied → interviewing → offered/rejected)
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Log application dates, interview dates, followup dates, and
                    document links per job
                  </span>
                </li>
              </ul>
            </div>

            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                User Management & Authentication
              </h3>
              <ul className='space-y-2 text-slate-600 dark:text-slate-400 text-sm'>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>JWT-based authentication with persistent sessions</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Role-based access control (User, Admin, Moderator)
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Admin dashboard for user management and system analytics
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Technology Stack */}
      <SectionContainer>
        <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-12 text-center'>
          Technology Stack
        </h2>
        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-6'>
              Backend Architecture
            </h3>
            <div className='space-y-4'>
              <TechStackItem text='Node.js & Express.js with optimized routing' />
              <TechStackItem text='MongoDB Atlas with automatic scaling' />
              <TechStackItem text='Mongoose ODM with virtual fields and validation' />
              <TechStackItem text='JWT authentication with role-based access' />
              <TechStackItem text='Security middleware (Helmet, bcryptjs, rate limiting)' />
              <TechStackItem text='Jest test suite — integration and unit coverage' />
            </div>
          </div>
          <div>
            <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-6'>
              Frontend Architecture
            </h3>
            <div className='space-y-4'>
              <TechStackItem text='React 18 with hooks and concurrent features' />
              <TechStackItem text='Redux Toolkit with async thunks' />
              <TechStackItem text='React Router v6 with protected routes' />
              <TechStackItem text='Tailwind CSS for responsive design' />
              <TechStackItem text='Mapbox GL for interactive job map with clustering and geolocation' />
              <TechStackItem text='NYC Open Data API · USA Jobs API · NYS Jobs' />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Technical Highlights */}
      <SectionContainer variant='gradient'>
        <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-12 text-center'>
          Technical Highlights
        </h2>
        <div className='space-y-8'>
          <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700'>
            <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
              Performance
            </h3>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              Caching for NYC API responses, database indexing for queries,
              debounced search input, pagination.
            </p>
          </div>
          <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700'>
            <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
              Security
            </h3>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              Input validation with express-validator, rate limiting, CORS,
              bcrypt password hashing, role-based permissions.
            </p>
          </div>
          <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700'>
            <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
              Data Integration
            </h3>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              Connects to NYC Open Data Jobs API and the USA Jobs federal API
              with caching to respect rate limits. Error handling with timeout
              protection and source badges to distinguish listings.
            </p>
          </div>
          <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700'>
            <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
              Test Coverage
            </h3>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              Jest test suite covering integration tests (auth, jobs, notes,
              dashboard routes) and unit tests (middleware, job helpers).
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* State Management Flow */}
      <section className='py-16 px-6 lg:px-8 bg-slate-50 dark:bg-slate-800'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-8 text-center'>
            State Management Flow
          </h2>
          <p className='text-slate-600 dark:text-slate-400 text-center mb-8 max-w-3xl mx-auto'>
            Five Redux Toolkit slices cover auth, job search, notes, saved
            searches, and the dashboard. NYC jobs are refreshed every 6 hours
            server-side via a cron job and served from MongoDB. Federal and NYS
            jobs are fetched live.
          </p>
          <div className='flex justify-center'>
            <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700 rounded-lg w-full'>
              <MermaidDiagram
                chart={`
flowchart LR
    A[User Action] --> B{Action Type}

    B -->|Auth| C[authSlice]
    B -->|Jobs| D[jobsSlice]
    B -->|Notes| E[notesSlice]
    B -->|Searches| F[searchesSlice]
    B -->|Dashboard| G[dashboardSlice]

    C --> LS[localStorage]

    D --> H{Job Source}
    H -->|NYC| I[MongoDB Cache<br/>6h cron refresh]
    H -->|Federal / NYS| J[Live API Call]

    E --> K[Backend API]
    F --> K
    G --> K

    I --> UI[UI Update]
    J --> UI
    K --> UI
    LS --> UI

    style A fill:#4a90e2,stroke:#2563eb,stroke-width:2px,color:#fff
    style C fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style D fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style E fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style F fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style G fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style I fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style UI fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
`}
                id='nyc-jobs-state-flow'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <SectionContainer>
        <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-8 text-center'>
          Project Highlights
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <HighlightCard
            icon={
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
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            }
            title='6,000+ Job Postings'
            description='NYC city + federal positions in one search'
          />
          <HighlightCard
            icon={
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
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            }
            title='Map View'
            description='Browse jobs on an interactive Mapbox GL map'
          />
          <HighlightCard
            icon={
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
                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            }
            title='Comprehensive Notes'
            description='Job-linked notes with categorization'
          />
          <HighlightCard
            icon={
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
                  d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
                />
              </svg>
            }
            title='Advanced Filtering'
            description='Multi-criteria search with real-time results'
          />
          <HighlightCard
            icon={
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
                  d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
                />
              </svg>
            }
            title='Saved Searches'
            description='Save and rerun searches instantly'
          />
          <HighlightCard
            icon={
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
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            }
            title='Role-Based Access'
            description='Secure authentication with admin controls'
          />
        </div>
      </SectionContainer>

      {/* Image Modal */}
      <ImageModal
        images={nycJobsImages}
        isOpen={isModalOpen}
        onClose={closeModal}
        initialIndex={modalImageIndex}
      />
    </div>
  );
}
