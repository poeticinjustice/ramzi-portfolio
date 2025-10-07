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

export default function MailChampCaseStudy() {
  const { isModalOpen, modalImageIndex, openModal, closeModal } =
    useImageModal();

  const mailchampImages = [
    {
      src: 'https://res.cloudinary.com/ramziscloud/image/upload/v1759689259/portfolio/f6enqcp9q0ud9qro4k8i.png',
      alt: 'MailChamp Analytics Dashboard - Comprehensive email campaign performance metrics and visual analytics',
      caption:
        'Analytics Dashboard - Comprehensive campaign performance metrics with visual charts and automated data extraction',
    },
    {
      src: 'https://res.cloudinary.com/ramziscloud/image/upload/v1759689258/portfolio/kesmosqqer7ylnsqktew.png',
      alt: 'MailChamp Report Generation - Automated report creation with dual-format export capabilities',
      caption:
        'Report Generation Interface - Automated report creation with link filtering, dual-format exports, and team collaboration features',
    },
  ];

  return (
    <div className='min-h-screen bg-white dark:bg-slate-900'>
      <Navigation />

      <ProjectHero
        title='MailChamp'
        subtitle='Email Marketing Analytics Platform'
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
                teaser="MailChimp doesn't give us the customized reports that we need, and we used spend quite a bit of time preparing our own."
                fullStory={
                  <>
                    <p>
                      MailChimp doesn&apos;t give us the customized reports that
                      we need at my job, and we used spend quite a bit of time
                      preparing our own. We&apos;d have to navigate its (often
                      slow loading) interface and copy data between pages to
                      then calculate engagement metrics in spreadsheets. Then
                      there was email formatting. It was repetitive, boring and
                      could be error prone.
                    </p>
                    <p>
                      I made the first version of this app in 2019, and
                      it&apos;s evolved along the way, making the report process
                      a little easier every time. Now, with the click of a
                      button, one can copy either unformatted tables for
                      spreadsheet integration or Outlook formatted reports for
                      email distribution. There&apos;s intelligent link
                      filtering to exclude template links (like homepage URLs)
                      and recalculate engagement metrics for external content.
                    </p>
                    <p>
                      I&apos;ve learned the most about React and Redux while
                      working on this too. The first version was just frontend,
                      and it&apos;s since become a robust full-stack app that
                      uses RTK query. And I have more plans for the future.
                    </p>
                  </>
                }
                className='mb-6'
              />
            </div>
            <div className='space-y-6'>
              <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
                <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                  Source Code (Private)
                </h3>
                <a
                  href='https://github.com/poeticinjustice/MailChamp2024'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors'
                >
                  github.com/poeticinjustice/MailChamp
                </a>
              </div>
              <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
                <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                  Status
                </h3>
                <p className='text-slate-600 dark:text-slate-400 text-sm'>
                  Private Project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className='py-16 px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-12 text-center'>
            Problem & Solution
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-4'>
                Previous Workflow Challenges
              </h3>
              <ul className='space-y-3 text-slate-600 dark:text-slate-400 text-sm'>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Navigate through multiple MailChimp pages to gather campaign
                    data
                  </span>
                </li>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Manually copy and paste data into spreadsheets for analysis
                  </span>
                </li>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Calculate specific statistics using external tools
                  </span>
                </li>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Spend significant time preparing reports for stakeholders
                  </span>
                </li>
              </ul>
            </div>
            <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700'>
              <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-4'>
                MailChamp Solutions
              </h3>
              <ul className='space-y-3 text-slate-600 dark:text-slate-400 text-sm'>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>One-click data extraction from MailChimp API</span>
                </li>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Smart link exclusion with comma-separated URL input and
                    automatic stat recalculation
                  </span>
                </li>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Dual-format output: unformatted for spreadsheets, formatted
                    for Outlook and Gmail
                  </span>
                </li>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0'></div>
                  <span>
                    Save reports with personal comments for team collaboration
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ProjectGallery images={mailchampImages} onImageClick={openModal} />

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
                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                />
              </svg>
            }
            title='Campaign Analytics'
            description='Comprehensive email campaign performance metrics including open rates, click rates, bounce rates, and unsubscribe data with detailed breakdowns and trend analysis.'
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
                  d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                />
              </svg>
            }
            title='Link Analysis'
            description='Detailed click tracking with ability to exclude specific URLs (like homepage links) for more accurate external engagement metrics and cleaner analytics.'
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
                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            }
            title='Data Export'
            description='Both unformatted tables for spreadsheet integration and formatted reports optimized for email distribution, providing flexibility for different use cases.'
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
                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                />
              </svg>
            }
            title='Visual Dashboard'
            description='Interactive charts and graphs using Recharts library for data visualization, making complex email marketing data easily understandable and actionable.'
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
                  d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
                />
              </svg>
            }
            title='Comments & Collaboration'
            description='Save reports for later reference and add, edit, or delete personal comments for team collaboration and tracking campaign insights.'
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
                  d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            }
            title='API-First Design'
            description='RESTful API architecture with clear separation of concerns, enabling future mobile app development and third-party integrations.'
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
              Backend (Node.js/Express)
            </h3>
            <div className='space-y-4'>
              <TechStackItem text='Node.js with ES6 modules' />
              <TechStackItem text='Express.js for RESTful API development' />
              <TechStackItem text='MongoDB with Mongoose ODM' />
              <TechStackItem text='JWT with bcryptjs for password hashing' />
              <TechStackItem text='Axios for MailChimp API communication' />
              <TechStackItem text='CORS, cookie-parser, custom middleware' />
            </div>
          </div>
          <div>
            <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-6'>
              Frontend (React)
            </h3>
            <div className='space-y-4'>
              <TechStackItem text='React 19 with functional components and hooks' />
              <TechStackItem text='Redux Toolkit (RTK) with RTK Query' />
              <TechStackItem text='React Router DOM v6 with protected routes' />
              <TechStackItem text='React Bootstrap 5 with custom styling' />
              <TechStackItem text='Recharts for interactive charts and graphs' />
              <TechStackItem text='React Toastify for user feedback' />
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
            Hybrid Redux architecture combining standard auth slice with RTK
            Query API slices for automated caching of MailChimp data and saved
            reports.
          </p>
          <div className='flex justify-center'>
            <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700 rounded-lg w-full'>
              <MermaidDiagram
                chart={`
flowchart LR
    A[User Action] --> B{Action Type}

    B -->|Auth| C[authSlice]
    B -->|Fetch Reports| D[mcReportsApiSlice]
    B -->|Save/Comment| E[mcSavedReportsApiSlice]

    C --> F[Redux Store]
    F --> G[localStorage]

    D --> H{Cache?}
    H -->|Hit| I[Return Data]
    H -->|Miss| J[MailChimp API]
    J --> K[Cache 10min]

    E --> L[Backend API]
    L --> M[Mutations]
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
                id='mailchamp-state-flow'
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
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            }
            title='Automated Extraction'
            description='Turns hours of manual work into seconds'
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
                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            }
            title='Dual-Format Export'
            description='Spreadsheet and email-ready formats'
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
                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                />
              </svg>
            }
            title='Visual Analytics'
            description='Interactive charts with Recharts library'
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
                  d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                />
              </svg>
            }
            title='Customizable Reports'
            description='Link exclusion and filtering options'
          />
        </div>
      </SectionContainer>

      {/* Image Modal */}
      <ImageModal
        images={mailchampImages}
        isOpen={isModalOpen}
        onClose={closeModal}
        initialIndex={modalImageIndex}
      />
    </div>
  );
}
