import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NYC Jobs - Government Job Search & Tracker | Ramzi Kanazi',
  description:
    'Job search platform aggregating NYC, federal, and NYS government positions. Track applications, browse jobs on a map, save searches, and manage notes with priority levels.',
  openGraph: {
    title: 'NYC Jobs - Government Job Search & Application Tracker',
    description:
      'Job search platform aggregating NYC, federal, and NYS government positions with application tracking.',
    type: 'website',
  },
};

export default function NYCJobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
