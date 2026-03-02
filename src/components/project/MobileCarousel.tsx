'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

interface MobileScreenshot {
  src: string;
  alt: string;
  caption: string;
}

interface MobileCarouselProps {
  images: MobileScreenshot[];
  onImageClick?: (index: number) => void;
}

export default function MobileCarousel({
  images,
  onImageClick,
}: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <section className='section-gradient py-16 px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-2xl font-medium text-slate-900 dark:text-white mb-4 text-center'>
          Mobile App
        </h2>
        <p className='text-slate-600 dark:text-slate-400 text-center mb-10 max-w-2xl mx-auto text-sm'>
          Available on the App Store for iPhone and iPad, built with React
          Native and Expo SDK 54.
        </p>

        <div className='relative flex items-center justify-center'>
          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={goToPrevious}
              className='absolute left-0 md:left-8 lg:left-16 z-10 p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-200 shadow-sm'
              aria-label='Previous screenshot'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
          )}

          {/* Screenshot container */}
          <div className='flex flex-col items-center max-w-xs mx-auto'>
            <div
              className='relative rounded-[2rem] border-[3px] border-slate-300 dark:border-slate-600 overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 bg-black'
              onClick={() => onImageClick?.(currentIndex)}
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={390}
                height={844}
                className='w-64 h-auto object-contain'
                loading='lazy'
              />
            </div>

            {/* Caption */}
            <p className='mt-4 text-slate-600 dark:text-slate-400 text-sm text-center leading-relaxed max-w-sm'>
              {images[currentIndex].caption}
            </p>
          </div>

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={goToNext}
              className='absolute right-0 md:right-8 lg:right-16 z-10 p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-200 shadow-sm'
              aria-label='Next screenshot'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          )}
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className='flex justify-center gap-2 mt-6'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-slate-700 dark:bg-slate-300 w-4'
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <p className='text-center text-xs text-slate-400 dark:text-slate-500 mt-3'>
            {currentIndex + 1} of {images.length}
          </p>
        )}
      </div>
    </section>
  );
}
