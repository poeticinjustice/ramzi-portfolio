'use client';

import Navigation from '@/components/Navigation';
import MermaidDiagram from '@/components/LazyMermaidDiagram';
import ImageModal from '@/components/ImageModal';
import ExpandableStory from '@/components/ExpandableStory';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectGallery from '@/components/project/ProjectGallery';
import MobileCarousel from '@/components/project/MobileCarousel';
import FeatureCard from '@/components/project/FeatureCard';
import HighlightCard from '@/components/project/HighlightCard';
import TechStackItem from '@/components/project/TechStackItem';
import SectionContainer from '@/components/project/SectionContainer';
import { useImageModal } from '@/hooks/useImageModal';

export default function BillProgressCaseStudy() {
  const { isModalOpen, modalImageIndex, openModal, closeModal } =
    useImageModal();
  const {
    isModalOpen: isMobileModalOpen,
    modalImageIndex: mobileModalIndex,
    openModal: openMobileModal,
    closeModal: closeMobileModal,
  } = useImageModal();

  const mobileScreenshots = [
    {
      src: '/images/bill-progress/mobile-members.png',
      alt: 'Bill Progress mobile app - Members list showing congress members',
      caption: 'Members - Browse congress members with party and state info',
    },
    {
      src: '/images/bill-progress/mobile-my-reps.png',
      alt: 'Bill Progress mobile app - My Representatives with interactive map',
      caption: 'My Reps - Find your representatives with an interactive map',
    },
    {
      src: '/images/bill-progress/mobile-legislation.png',
      alt: 'Bill Progress mobile app - Legislation votes and bills',
      caption: 'Legislation - Browse and filter congressional votes and bills',
    },
    {
      src: '/images/bill-progress/mobile-roll-call.png',
      alt: 'Bill Progress mobile app - Roll call vote details',
      caption: 'Roll Call - Detailed vote breakdown by party and member',
    },
    {
      src: '/images/bill-progress/mobile-bill-details.png',
      alt: 'Bill Progress mobile app - Bill details with full bill text',
      caption: 'Bill Details - Read full bill text and track progress',
    },
    {
      src: '/images/bill-progress/mobile-timeline.png',
      alt: 'Bill Progress mobile app - Bill progress timeline',
      caption: 'Timeline - Track a bill through the legislative process',
    },
    {
      src: '/images/bill-progress/mobile-comparison.png',
      alt: 'Bill Progress mobile app - Member comparison view',
      caption: 'Compare - Side-by-side comparison of member voting records',
    },
    {
      src: '/images/bill-progress/mobile-profile.png',
      alt: 'Bill Progress mobile app - Member profile with voting history',
      caption: 'Profile - Detailed member profile with voting history',
    },
  ];

  const billProgressImages = [
    {
      src: 'https://res.cloudinary.com/ramziscloud/image/upload/v1759687768/portfolio/vk2nu8df6n4ikyz02kmp.png',
      alt: "Bill Progress gallery of congress members - includes general information and links to member's comprehensive vote details",
      caption:
        "Congress Member View - Links to member's comprehensive vote details with member records and community discussion features",
    },
    {
      src: 'https://res.cloudinary.com/ramziscloud/image/upload/v1759687767/portfolio/vksdlh0aoqkomlormm0v.png',
      alt: 'Bill Progress Dashboard - Congressional vote browsing and filtering interface',
      caption:
        'Dashboard View - Update, browse and filter thousands of congressional votes with real-time data from House and Senate',
    },
  ];

  return (
    <div className='min-h-screen bg-white dark:bg-slate-900'>
      <Navigation />

      <ProjectHero
        title='Bill Progress'
        subtitle='Congressional Vote Tracking, Analysis & Community Platform'
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
                defaultExpanded
                teaser='What started as a MERN web app for tracking congressional votes evolved into a cross-platform experience—after exploring native iOS with Swift, I moved to React Native to share a Redux store across web and mobile.'
                fullStory={
                  <>
                    <p>
                      This was an exciting project for me. I wanted to use the
                      ProPublica Congress API, but they stopped giving out API
                      keys and ultimately sunsetted the project before I had a
                      chance to access it. It became very exciting when I
                      discovered a web scraping tool that pulls data from the
                      house and senate pages. I think some people from the
                      ProPublica and GovTrack teams maintain that tool, which
                      became very helpful for me to update the database.
                    </p>
                    <p>
                      It&apos;s a python tool, and I use it in my admin panels.
                      I also have sync scripts running on Heroku Scheduler that
                      pull incremental updates throughout the day—probing
                      official House and Senate sources for new votes and
                      syncing member and bill data from the Congress.gov API.
                      GovTrack is a fantastic website with a ton of information
                      about what&apos;s going on in Congress. I wanted to create
                      a simpler site that just tracks congress members and their
                      votes. I also wanted to give it more of a social aspect
                      where one can focus on members&apos; specific votes and
                      trends.
                    </p>
                    <p>
                      Once the web app was in a good place, I wanted to bring it
                      to mobile. I started exploring native iOS development with
                      Swift and Xcode, which was a great learning experience—but
                      I realized React Native would let me share the same Redux
                      store and business logic across both platforms. That turned
                      out to be the right call. The app is now on the App Store
                      for iPhone and iPad, and the web and mobile clients both
                      pull from the same shared packages in a monorepo.
                    </p>
                    <p>
                      In 2026, I did a big overhaul—migrating to a monorepo with
                      React 19 + Vite on web and React Native with Expo SDK 54
                      on mobile, rebuilding the data pipeline with nightly sync
                      scripts, adding FEC campaign finance data and member report
                      cards, saved bill and vote tracking with new-activity
                      alerts, and role management for moderated community posts.
                      The shared Redux store across web and mobile has been one
                      of the more interesting architectural decisions—10+ RTK
                      Query slices all living in one shared package.
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
                  href='https://billprogress.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors'
                >
                  billprogress.com
                </a>
              </div>
              <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
                <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                  Mobile App
                </h3>
                <p className='text-slate-600 dark:text-slate-400 text-sm'>
                  Available on the App Store for iPhone and iPad
                </p>
                <p className='text-slate-500 dark:text-slate-500 text-xs mt-1'>
                  com.billprogress.app
                </p>
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

      <ProjectGallery images={billProgressImages} onImageClick={openModal} />

      {/* Mobile App Carousel */}
      <MobileCarousel
        images={mobileScreenshots}
        onImageClick={openMobileModal}
      />

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
                  d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                />
              </svg>
            }
            title='Cross-Platform Mobile App'
            description='Started with native Swift/Xcode exploration, then moved to React Native with Expo SDK 54 to share the Redux store across platforms. Available on the App Store for iPhone and iPad.'
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
                  d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
                />
              </svg>
            }
            title='Saved Bills & Vote Tracking'
            description='Save bills and votes to follow. The app tracks new votes added since your last visit and surfaces them on your dashboard—so you never miss an update on legislation you care about.'
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
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            }
            title='Campaign Finance Data'
            description='FEC API integration surfaces campaign finance data on member profiles—donors, contribution totals, and PAC funding—linking voting patterns to financial backing.'
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
                  d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                />
              </svg>
            }
            title='Member Report Cards'
            description='Automated scoring and grading of congressional members based on voting history, party-line alignment, and participation rates—turning raw vote data into digestible performance summaries.'
          />
        </div>
      </SectionContainer>

      {/* Technology Stack */}
      <SectionContainer>
        <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-12 text-center'>
          Technology Stack
        </h2>
        <div className='grid md:grid-cols-3 gap-12'>
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
              Web Frontend
            </h3>
            <div className='space-y-4'>
              <TechStackItem text='React 19 with functional components and hooks' />
              <TechStackItem text='Redux Toolkit with RTK Query for state management' />
              <TechStackItem text='Bootstrap 5 for responsive UI components' />
              <TechStackItem text='Vite and monorepo architecture for development and builds' />
              <TechStackItem text='React Router v7 for client-side navigation' />
            </div>
          </div>
          <div>
            <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-6'>
              Mobile
            </h3>
            <div className='space-y-4'>
              <TechStackItem text='React Native with Expo SDK 54' />
              <TechStackItem text='Shared Redux store (packages/shared) across web and mobile' />
              <TechStackItem text='Available on App Store for iPhone and iPad' />
              <TechStackItem text='Initially explored native Swift/Xcode before choosing React Native' />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* State Management Flow */}
      <section className='py-16 px-6 lg:px-8 bg-slate-50 dark:bg-slate-800'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-8 text-center'>
            Architecture & State Management
          </h2>
          <p className='text-slate-600 dark:text-slate-400 text-center mb-8 max-w-3xl mx-auto'>
            Monorepo with a shared Redux store consumed by both the React web
            app and the React Native mobile app. 10+ RTK Query slices—votes,
            bills, members, finance, posts, notes, saves, follows—all inject
            into a single base apiSlice in packages/shared.
          </p>
          <div className='flex justify-center'>
            <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700 rounded-lg w-full'>
              <MermaidDiagram
                chart={`
flowchart TB
    subgraph Clients["Client Apps"]
        direction LR
        W["React Web App<br/>React 19 + Vite"]
        M["React Native App<br/>Expo SDK 54"]
    end

    subgraph Shared["packages/shared"]
        direction LR
        AS[authSlice] --- RTK["apiSlice (RTK Query)<br/>10+ injected slices"]
    end

    W --> Shared
    M --> Shared

    Shared --> API["Express REST API<br/>Node.js + JWT"]

    API --> DB[(MongoDB Atlas)]
    API --> CONG["Congress.gov API"]
    API --> FEC["FEC Campaign<br/>Finance API"]
    SCRAPER["Python Scraper<br/>lxml"] --> DB
    API --> SCRAPER

    style W fill:#4a90e2,stroke:#2563eb,stroke-width:2px,color:#fff
    style M fill:#4a90e2,stroke:#2563eb,stroke-width:2px,color:#fff
    style API fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style DB fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style SCRAPER fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style FEC fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style CONG fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
`}
                id='bill-progress-state-flow'
              />
            </div>
          </div>
          <div className='mt-8 grid md:grid-cols-3 gap-6'>
            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                Shared Redux Store
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
                Both clients import from packages/shared—one store, one set of
                RTK Query slices covering votes, bills, members, finance, posts,
                notes, saves, and follows.
              </p>
            </div>
            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                RTK Query Caching
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
                Tag-based cache invalidation across all slices. Saved bills and
                votes track new activity since your last visit, surfacing alerts
                on your dashboard.
              </p>
            </div>
            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                Data Pipeline
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
                Nightly scripts sync votes from Congress.gov and official
                House/Senate sources. FEC API enriches member profiles with
                campaign finance data on demand.
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
                  d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                />
              </svg>
            }
            title='iOS App'
            description='Native mobile experience on iPhone and iPad'
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
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            }
            title='Campaign Finance'
            description='FEC data links donor money to member votes'
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
                  d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                />
              </svg>
            }
            title='Report Cards'
            description='Automated member scoring from voting history'
          />
        </div>
      </SectionContainer>

      {/* Image Modals */}
      <ImageModal
        images={billProgressImages}
        isOpen={isModalOpen}
        onClose={closeModal}
        initialIndex={modalImageIndex}
      />
      <ImageModal
        images={mobileScreenshots}
        isOpen={isMobileModalOpen}
        onClose={closeMobileModal}
        initialIndex={mobileModalIndex}
      />
    </div>
  );
}
