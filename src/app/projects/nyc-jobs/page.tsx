'use client';

import Navigation from '@/components/Navigation';
import MermaidDiagram from '@/components/MermaidDiagram';
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
        'Advanced Job Search - Real-time search through 3,000+ NYC government positions with multi-criteria filtering and smart caching',
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
        subtitle='New York City Job Search Application'
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
                      their public Jobs NYC Postings API endpoint.
                    </p>
                    <p>
                      The city&apos;s own jobs site is very nice. First, it
                      loads right away! It&apos;s not running on Render&apos;s
                      free tier like mine, and the best way to apply is on it,
                      but one can&apos;t search and filter by salary. For one of
                      the world&apos;s most expensive cities, they make their
                      applicants work to figure out whether they can afford to
                      live there. Still, they have thousands of great jobs, and
                      I felt that there should be a site that could provide that
                      needed service, so I made it.
                    </p>
                    <p>
                      To make the process of applying to city jobs easier, users
                      can set up profiles and add job-linked notes with priority
                      levels and tags to track applications and organize their
                      search process. They can also add a blank note if
                      they&apos;d like to track a job outside of the city
                      government. It&apos;s an exciting time in NYC, and many
                      more people might want to work for the upcoming mayor. He
                      talks a lot about affordability, so this app can help
                      satisfy one aspect of that.
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
                Advanced Job Search System
              </h3>
              <ul className='space-y-2 text-slate-600 dark:text-slate-400 text-sm'>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>Real-time search with caching</span>
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
                Comprehensive Notes Management
              </h3>
              <ul className='space-y-2 text-slate-600 dark:text-slate-400 text-sm'>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Job-linked note creation with automatic job data fetching
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Note categorization (general, interview, application,
                    followup, research)
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>Priority levels and tagging system</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Advanced filtering and pagination for large note collections
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className='space-y-6'>
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
                  <span>Profile management and password security</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Admin dashboard for user management and system analytics
                  </span>
                </li>
              </ul>
            </div>

            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                Modern User Experience
              </h3>
              <ul className='space-y-2 text-slate-600 dark:text-slate-400 text-sm'>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>Mobile-first responsive design</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>Real-time feedback with toast notifications</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>Loading states and error handling</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>Accessibility features and keyboard navigation</span>
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
              <TechStackItem text='React Hook Form with built-in validation' />
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
              Connects to NYC Jobs API with caching to respect rate limits.
              Error handling with timeout protection.
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
            Redux Toolkit manages the application state, handling user
            authentication, job search results, and personal notes with
            efficient caching and optimistic updates.
          </p>
          <div className='flex justify-center'>
            <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700 rounded-lg w-full'>
              <MermaidDiagram
                chart={`
flowchart LR
    A[User Action] --> B{Action Type}

    B -->|Auth| C[authSlice]
    B -->|Search Jobs| D[jobsSlice]
    B -->|Manage Notes| E[notesSlice]

    C --> F[Redux Store]
    F --> G[localStorage]

    D --> H[NYC Jobs API]
    H --> I[Cache Results]
    I --> J[Update Jobs State]

    E --> K[Backend API]
    K --> L[CRUD Operations]
    L --> M[Update Notes State]

    J --> N[UI Update]
    M --> N
    G --> N

    style A fill:#4a90e2,stroke:#2563eb,stroke-width:2px,color:#fff
    style C fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style D fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style E fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style I fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style N fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
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
        <div className='grid md:grid-cols-4 gap-8'>
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
            title='3,000+ Job Postings'
            description='Searchable NYC government positions'
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
