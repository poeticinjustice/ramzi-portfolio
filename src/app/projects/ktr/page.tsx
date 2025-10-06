'use client';

import Navigation from '@/components/Navigation';
import MermaidDiagram from '@/components/MermaidDiagram';
import ImageModal from '@/components/ImageModal';
import ExpandableStory from '@/components/ExpandableStory';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectGallery from '@/components/project/ProjectGallery';
import FeatureCard from '@/components/project/FeatureCard';
import HighlightCard from '@/components/project/HighlightCard';
import TechStackItem from '@/components/project/TechStackItem';
import SectionContainer from '@/components/project/SectionContainer';
import { useImageModal } from '@/hooks/useImageModal';

export default function KTRCaseStudy() {
  const { isModalOpen, modalImageIndex, openModal, closeModal } =
    useImageModal();

  const ktrImages = [
    {
      src: 'https://res.cloudinary.com/ramziscloud/image/upload/v1759687768/portfolio/vk2nu8df6n4ikyz02kmp.png',
      alt: 'Know The Ropes Vote Analysis - Detailed vote information with member voting records',
      caption:
        'Vote Analysis - Comprehensive vote details with member records and community discussion features',
    },
    {
      src: 'https://res.cloudinary.com/ramziscloud/image/upload/v1759687767/portfolio/vksdlh0aoqkomlormm0v.png',
      alt: 'Know The Ropes Dashboard - Congressional vote browsing and filtering interface',
      caption:
        'Dashboard View - Browse and filter thousands of congressional votes with real-time data from House and Senate',
    },
  ];

  return (
    <div className='min-h-screen bg-white dark:bg-slate-900'>
      <Navigation />

      <ProjectHero
        title='Know The Ropes'
        subtitle='Congressional Information & Community Discussion Platform'
      />

      {/* Project Overview */}
      <section className='section-gradient py-8 px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-16'>
            <div>
              <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-6'>
                Project Overview
              </h2>
              <ExpandableStory teaser='...' fullStory='...' className='mb-6' />
            </div>
            <div className='space-y-6'>
              <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
                <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                  Live Demo
                </h3>
                <a
                  href='https://ktr-c75c27a564a2.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors'
                >
                  ktr-c75c27a564a2.herokuapp.com
                </a>
              </div>
              <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
                <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                  Source Code (Private)
                </h3>
                <a
                  href='https://github.com/poeticinjustice/ktr'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors'
                >
                  github.com/poeticinjustice/ktr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectGallery images={ktrImages} onImageClick={openModal} />

      {/* Key Features */}
      <SectionContainer variant='gradient'>
        <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-12 text-center'>
          Key Features
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <FeatureCard
            icon={
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
                  d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
                />
              </svg>
            }
            title='Real-time Vote Scraping'
            description='Python-based web scraper using lxml to extract live vote data directly from House (clerk.house.gov) and Senate websites, processing HTML into structured JSON with batch processing and SSE progress tracking.'
          />
          <FeatureCard
            icon={
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
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            }
            title='Member Profiles'
            description='Congressional member profiles with voting history, party affiliations, and biographical information.'
          />
          <FeatureCard
            icon={
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
                  d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
                />
              </svg>
            }
            title='Filtering'
            description='Filter by congress session, chamber (House/Senate), vote type, and member characteristics.'
          />
          <FeatureCard
            icon={
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
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
              </svg>
            }
            title='Post & Discussion System'
            description='Social features allowing users to create posts about specific votes with embedded vote details and external links for community engagement.'
          />
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
              Backend
            </h3>
            <div className='space-y-4'>
              <TechStackItem text='Node.js with Express.js framework' />
              <TechStackItem text='MongoDB with Mongoose ODM for data persistence' />
              <TechStackItem text='Server-Sent Events (SSE) for real-time updates' />
              <TechStackItem text='Cloudinary for image storage and optimization' />
              <TechStackItem text='JWT for authentication and authorization' />
              <TechStackItem text='Python with lxml for web scraping House/Senate sites' />
            </div>
          </div>
          <div>
            <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-6'>
              Frontend
            </h3>
            <div className='space-y-4'>
              <TechStackItem text='React 19 with functional components and hooks' />
              <TechStackItem text='Redux Toolkit with RTK Query for state management' />
              <TechStackItem text='Bootstrap 5 for responsive UI components' />
              <TechStackItem text='Vite and monorepo architecture for development and builds' />
              <TechStackItem text='React Router for client-side navigation' />
            </div>
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
            Hybrid Redux architecture combining standard Redux slice for
            authentication with RTK Query for automated API caching and
            tag-based invalidation.
          </p>
          <div className='flex justify-center'>
            <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700 rounded-lg w-full'>
              <MermaidDiagram
                chart={`
flowchart LR
    A[User Action] --> B{Action Type}

    B -->|Login/Logout| C[authSlice]
    B -->|Fetch Data| D[RTK Query]
    B -->|Modify Data| E[RTK Mutation]

    C --> F[Redux Store]
    F --> G[localStorage]

    D --> H{Cache?}
    H -->|Hit| I[Return Data]
    H -->|Miss| J[API Call]
    J --> K[Cache Data]

    E --> L[API Call]
    L --> M[Invalidate Tags]
    M --> N[Auto-Refetch]

    I --> O[UI Update]
    K --> O
    N --> O
    G --> O

    style A fill:#4a90e2,stroke:#2563eb,stroke-width:2px,color:#fff
    style C fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style D fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style E fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style H fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style M fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style O fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
`}
                id='ktr-state-flow'
              />
            </div>
          </div>
          <div className='mt-8 grid md:grid-cols-2 gap-6'>
            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                Authentication State
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
                Standard Redux slice managing user authentication with automatic
                localStorage synchronization for persistent sessions (30-day
                expiration).
              </p>
            </div>
            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                RTK Query API Layer
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
                Automated caching with tag-based invalidation for Users, Posts,
                Congress Members, and Votes. Includes request deduplication and
                background refetching.
              </p>
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
                  d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
                />
              </svg>
            }
            title='Handles Thousands of Votes'
            description='Batch processing for congressional vote data'
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
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            }
            title='Real-Time Updates'
            description='SSE-based live progress monitoring'
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
                  d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                />
              </svg>
            }
            title='Member Profiles'
            description='Current and former congressional members'
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
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
              </svg>
            }
            title='Community Discussion'
            description='Posts and comments on legislative activity'
          />
        </div>
      </SectionContainer>

      {/* Image Modal */}
      <ImageModal
        images={ktrImages}
        isOpen={isModalOpen}
        onClose={closeModal}
        initialIndex={modalImageIndex}
      />
    </div>
  );
}
