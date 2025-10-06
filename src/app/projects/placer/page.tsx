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

export default function PlacerCaseStudy() {
  const { isModalOpen, modalImageIndex, openModal, closeModal } =
    useImageModal();

  const placerImages = [
    {
      src: 'https://res.cloudinary.com/ramziscloud/image/upload/v1759687833/portfolio/qlprp8smw8xeoswnbong.png',
      alt: 'Placer Location Discovery - Interactive map view showing user-submitted places with photos and descriptions',
      caption:
        'Interactive Map View - Location discovery platform with Leaflet maps, geolocation search, and user-submitted places with photos',
    },
    {
      src: 'https://res.cloudinary.com/ramziscloud/image/upload/v1759687832/portfolio/cgwfxoqui7ch05orvbjt.png',
      alt: 'Placer Place Details - Rich place profiles with photo galleries, comments, and location information',
      caption:
        'Place Details & Gallery - Rich place profiles with photo galleries, user comments, and comprehensive location information',
    },
  ];

  return (
    <div className='min-h-screen bg-white dark:bg-slate-900'>
      <Navigation />

      <ProjectHero
        title='Placer'
        subtitle='Community-driven platform for discovering and sharing interesting locations'
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
                  href='https://placer-app-cffc6463c817.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors'
                >
                  placer-app-cffc6463c817.herokuapp.com
                </a>
              </div>
              <div className='bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700'>
                <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
                  Source Code
                </h3>
                <a
                  href='https://github.com/poeticinjustice/placer'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors'
                >
                  github.com/poeticinjustice/placer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectGallery images={placerImages} onImageClick={openModal} />

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
                  d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
                />
              </svg>
            }
            title='Interactive Maps'
            description='Leaflet maps integration with geolocation, place markers, and visual place discovery using OpenStreetMap for seamless location-based exploration.'
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
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            }
            title='Photo Sharing'
            description='Cloudinary integration for seamless photo uploads and storage, enabling users to document and share their place experiences with high-quality image management.'
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
            title='User Profiles'
            description='Comprehensive user profile management with avatar uploads, personal information, and paginated place collections (20 per page) for building community connections.'
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
            title='Comments System'
            description='Social interaction features with comments on places, enabling users to share experiences, ask questions, and build community around shared locations.'
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
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            }
            title='Search & Filtering'
            description='Advanced filtering with MongoDB text search, distance-based filtering using geolocation and Haversine formula (default 16km radius), tag autocomplete, and multi-field sorting (date, name, rating, likes). Active filter chips with one-click removal.'
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
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            }
            title='Admin Dashboard'
            description='Complete admin system with dedicated Redux slice (adminSlice) for user approvals, content moderation, and role management. Features email notifications via Nodemailer for new signups, toggle admin status, feature/unfeature places, pagination (20 per page), and user/place deletion with role-based access control.'
          />
        </div>
      </SectionContainer>

      {/* Technology Stack */}
      <SectionContainer>
        <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-12 text-center'>
          Technology Stack
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-6'>
              Backend
            </h3>
            <div className='space-y-4'>
              <TechStackItem text='Node.js ≥18 - ES Modules runtime' />
              <TechStackItem text='Express 4.19 - MVC architecture' />
              <TechStackItem text='MongoDB 8.8 - Mongoose ODM, GeoJSON' />
              <TechStackItem text='JWT 9.0 - 30-day token expiration' />
              <TechStackItem text='bcrypt 2.4 - 12 rounds hashing' />
              <TechStackItem text='Nodemailer 7.0 - Email notifications' />
            </div>
          </div>
          <div>
            <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-6'>
              Frontend
            </h3>
            <div className='space-y-4'>
              <TechStackItem text='React 19.1 - Component-based UI' />
              <TechStackItem text='Redux Toolkit 2.9 - 5-slice architecture' />
              <TechStackItem text='Vite 7.1 - Fast dev & build tooling' />
              <TechStackItem text='React Router 7.9 - Client-side routing' />
              <TechStackItem text='Tiptap 3.6 - WYSIWYG rich text editor' />
              <TechStackItem text='DOMPurify 3.2 - XSS protection' />
            </div>
          </div>
          <div>
            <h3 className='text-xl font-medium text-slate-900 dark:text-white mb-6'>
              Services & APIs
            </h3>
            <div className='space-y-4'>
              <TechStackItem text='Cloudinary 2.5 - Image storage & CDN' />
              <TechStackItem text='Leaflet 1.9 - Interactive mapping' />
              <TechStackItem text='Nominatim - Geocoding & reverse geocoding' />
              <TechStackItem text='Helmet 8.0 - Security headers & CSP' />
              <TechStackItem text='Rate Limiter - 500 req/15min protection' />
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
              Authentication & Authorization System
            </h3>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              Multi-layered auth with JWT tokens (30-day expiration), bcrypt
              password hashing (12 rounds), and three-tier middleware chain
              (authenticate, requireAdmin, requireApproval). Features
              auto-login after signup, auto-logout on 401 via Axios
              interceptors, password change with verification, and admin
              approval workflow. Token stored in localStorage with automatic
              injection in all API requests.
            </p>
          </div>
          <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700'>
            <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
              Cloudinary Integration & Image Handling
            </h3>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              Seamless image upload pipeline: Browser FormData → Multer memory
              storage → Cloudinary stream upload with automatic optimization
              (1200x800 max, auto quality, WebP format). Supports 1-10 photos
              per place with captions, image lightbox viewer, and lazy
              loading. Secure storage with cloudinaryId tracking for deletion.
            </p>
          </div>
          <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700'>
            <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
              Rich Text Editor & Content Management
            </h3>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              Tiptap 3.6 WYSIWYG editor with full formatting support (bold,
              italic, headings, lists, blockquotes, code blocks, links).
              Custom link dialog implementation without window.prompt,
              DOMPurify XSS sanitization on all HTML output, and placeholder
              text support. Place descriptions support rich formatting with
              secure content rendering.
            </p>
          </div>
          <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700'>
            <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
              iOS-Style Design System
            </h3>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              Custom CSS design system inspired by iOS interfaces, featuring
              CSS variables for dark/light theming (uiSlice manages theme
              state), responsive gallery layouts (2 columns on mobile,
              expanding on desktop), touch-friendly interactions,
              -apple-system font stack, and mobile-first responsive design.
              Includes image lightbox, skeleton loading states, and seamless
              transitions across all devices.
            </p>
          </div>
          <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700'>
            <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
              Security & Performance
            </h3>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              Enterprise-grade security with JWT authentication (30-day
              expiration), bcrypt password hashing (12 rounds), rate limiting
              (500 requests per 15 minutes), CORS configuration, Helmet
              security headers with CSP, MongoDB injection protection, and XSS
              protection via DOMPurify. Input validation with
              express-validator ensures data integrity. File uploads limited
              to 5MB with type validation.
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
            Redux Toolkit architecture with 5 slices (auth, places, admin, user,
            ui) orchestrates authentication, place CRUD, admin workflows, and
            geolocation-based searching. Features localStorage persistence,
            async thunks for API calls, and optimistic UI updates for seamless
            user experience.
          </p>
          <div className='flex justify-center'>
            <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700 rounded-lg w-full'>
              <MermaidDiagram
                chart={`
flowchart TB
    A[User Action] --> B{Action Type}

    B -->|Login/Signup| C[authSlice]
    B -->|Browse/Search/CRUD| D[placesSlice]
    B -->|User Management| E[adminSlice]
    B -->|Profile/Comments| F[userSlice]
    B -->|Theme/Modals| G[uiSlice]

    C --> H[Async Thunks]
    D --> H
    E --> H
    F --> H

    H --> I[API Layer<br/>Axios Interceptors]
    I --> J[Express Backend<br/>MVC Architecture]

    J --> K[Authentication<br/>Middleware]
    K --> L{Auth Check}
    L -->|Valid JWT| M[Controllers]
    L -->|Invalid| N[401 Auto-Logout]

    M --> O[MongoDB<br/>User & Place Models]
    O --> P[External Services]

    P --> Q[Cloudinary<br/>Image Upload]
    P --> R[Nominatim<br/>Geocoding]
    P --> S[Nodemailer<br/>Email Notifications]

    J --> T[Response]
    T --> U[Redux Store<br/>State Update]

    U --> V[localStorage<br/>Persistence]
    U --> W[UI Re-render]

    G --> X[Theme/Modal State]
    X --> W

    N --> Y[Clear Auth State]
    Y --> Z[Redirect to Login]

    style A fill:#4a90e2,stroke:#2563eb,stroke-width:2px,color:#fff
    style C fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style D fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style E fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style F fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style G fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Q fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style R fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style S fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style W fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
`}
                id='placer-state-flow'
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
                  d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
                />
              </svg>
            }
            title='Interactive Mapping'
            description='Leaflet maps with geolocation and place markers'
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
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            }
            title='Photo Management'
            description='Cloudinary integration with gallery lightbox'
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
                  d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            }
            title='Community Features'
            description='User profiles, comments, and social engagement'
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
            title='Mobile-First Design'
            description='iOS-style interface optimized for all devices'
          />
        </div>
      </SectionContainer>

      {/* Image Modal */}
      <ImageModal
        images={placerImages}
        isOpen={isModalOpen}
        onClose={closeModal}
        initialIndex={modalImageIndex}
      />
    </div>
  );
}
