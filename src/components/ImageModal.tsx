'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
      {/* Close button */}
      <button
        onClick={onClose}
        className='absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors'
        aria-label='Close modal'
      >
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            )
          }
          className='absolute left-4 top-1/2 transform -translate-y-1/2 z-40 text-white hover:text-gray-300 transition-colors'
          aria-label='Previous image'
        >
          <svg
            className='w-8 h-8'
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

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            )
          }
          className='absolute right-4 top-1/2 transform -translate-y-1/2 z-40 text-white hover:text-gray-300 transition-colors'
          aria-label='Next image'
        >
          <svg
            className='w-8 h-8'
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

      {/* Main image container */}
      <div className='relative max-w-full max-h-full'>
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={1920}
          height={1080}
          className='max-w-full max-h-full object-contain rounded-lg'
          style={{
            maxHeight: '80vh',
            maxWidth: '90vw',
          }}
          priority
        />

        {/* Caption */}
        {currentImage.caption && (
          <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg'>
            <p className='text-sm text-center'>{currentImage.caption}</p>
          </div>
        )}
      </div>

      {/* Image counter */}
      {images.length > 1 && (
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40'>
          <span className='text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full'>
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}

      {/* Click outside to close */}
      <div className='absolute inset-0 -z-10' onClick={onClose} />
    </div>
  );
};

export default ImageModal;
