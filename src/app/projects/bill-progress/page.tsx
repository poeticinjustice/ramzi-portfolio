'use client';

import Navigation from '@/components/Navigation';
import MermaidDiagram from '@/components/MermaidDiagram';
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
        subtitle='Congressional Information & Community Discussion Platform'
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
                teaser='This was an exciting project for me. I wanted to use the ProPublica Congress API, but they stopped giving out API keys and ultimately sunsetted the project before I had a chance to access it.'
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
                      official House and Senate sources for new votes and syncing
                      member and bill data from the Congress.gov API. GovTrack
                      is a fantastic website with a ton of information about
                      what&apos;s going on in Congress. I wanted to create a
                      simpler site that just tracks congress members and their
                      votes. I also wanted to give it more of a social aspect
                      where one can focus on members&apos; specific votes and
                      trends.
                    </p>
                    <p>
                      The project has grown into a cross-platform experience
                      with both a React web app and a React Native mobile app
                      available on the App Store for iPhone and iPad. I think
                      it&apos;s pretty interesting. Check it out. It will be
                      evolving.
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
            description='Native iOS app built with React Native and Expo SDK 54, available on the App Store for iPhone and iPad with the same congressional data and features.'
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
              <TechStackItem text='React Router for client-side navigation' />
            </div>
          </div>
          <div>
            <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-6'>
              Mobile
            </h3>
            <div className='space-y-4'>
              <TechStackItem text='React Native with Expo SDK 54' />
              <TechStackItem text='Available on App Store for iPhone and iPad' />
              <TechStackItem text='Native iOS experience with shared backend' />
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
            Shared Express/MongoDB backend serving both the React web app
            (Redux Toolkit + RTK Query) and the React Native mobile app (Expo
            SDK 54). Both clients consume the same REST API with
            platform-specific state management.
          </p>
          <div className='flex justify-center'>
            <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700 rounded-lg w-full'>
              <MermaidDiagram
                chart={`
flowchart TB
    subgraph Clients
        direction LR
        W[React Web App<br/>Redux + RTK Query]
        M[React Native App<br/>Expo SDK 54]
    end

    W --> API[Express REST API<br/>Node.js Backend]
    M --> API

    API --> AUTH[JWT Authentication<br/>30-day tokens]
    API --> SCRAPER[Python Scraper<br/>lxml + House/Senate]

    AUTH --> DB[(MongoDB Atlas<br/>Members, Votes,<br/>Posts, Users)]
    SCRAPER --> DB

    subgraph WebState["Web State"]
        direction LR
        AS[authSlice] --- RTK[RTK Query<br/>Cache + Tags]
    end

    subgraph MobileState["Mobile State"]
        direction LR
        MS[Auth Context] --- MQ[API Layer]
    end

    W --> WebState
    M --> MobileState

    WebState --> UI1[Web UI Update]
    MobileState --> UI2[Mobile UI Update]

    style W fill:#4a90e2,stroke:#2563eb,stroke-width:2px,color:#fff
    style M fill:#4a90e2,stroke:#2563eb,stroke-width:2px,color:#fff
    style API fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style DB fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style SCRAPER fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style UI1 fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style UI2 fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
`}
                id='bill-progress-state-flow'
              />
            </div>
          </div>
          <div className='mt-8 grid md:grid-cols-3 gap-6'>
            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                Shared Backend
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
                Express REST API with MongoDB Atlas serves both web and mobile
                clients. Python scraper updates congressional data from House
                and Senate sites.
              </p>
            </div>
            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                Web State (Redux)
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
                Redux Toolkit with RTK Query for automated caching and
                tag-based invalidation across Users, Posts, Congress Members,
                and Votes.
              </p>
            </div>
            <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                Mobile State (Expo)
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
                React Native with Expo SDK 54 for iOS. Native mobile
                experience on iPhone and iPad, available on the App Store.
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
