import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bill Progress - Congressional Vote Tracking | Ramzi Kanazi',
  description:
    'Full-stack platform for tracking congressional votes, bills, and members on web and iOS. Features voting history, member report cards, FEC campaign finance data, and community discussion.',
  openGraph: {
    title: 'Bill Progress - Congressional Vote Tracking',
    description:
      'Full-stack platform for tracking congressional votes, bills, and members on web and iOS.',
    type: 'website',
  },
};

export default function BillProgressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
