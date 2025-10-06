'use client';

import { useState } from 'react';

interface ExpandableStoryProps {
  teaser: string;
  fullStory: string;
  className?: string;
}

const ExpandableStory: React.FC<ExpandableStoryProps> = ({
  teaser,
  fullStory,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={className}>
      <p
        className={`text-slate-600 dark:text-slate-400 leading-relaxed ${
          !isExpanded ? 'line-clamp-4' : ''
        }`}
      >
        {isExpanded ? fullStory : teaser}
        {!isExpanded && (
          <span className='text-slate-400 dark:text-slate-500'>...</span>
        )}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='mt-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-2'
        aria-expanded={isExpanded}
      >
        {isExpanded ? (
          <>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 15l7-7 7 7'
              />
            </svg>
            Show Less
          </>
        ) : (
          <>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
            Read More
          </>
        )}
      </button>
    </div>
  );
};

export default ExpandableStory;
