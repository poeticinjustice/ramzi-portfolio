import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Placer - Location Discovery Platform | Ramzi Kanazi',
  description:
    'Community-driven platform for discovering and sharing interesting locations with photo galleries, interactive maps, geolocation search, and user profiles.',
  openGraph: {
    title: 'Placer - Location Discovery & Sharing Platform',
    description:
      'Community-driven platform for discovering and sharing interesting locations with interactive maps and photo galleries.',
    type: 'website',
  },
};

export default function PlacerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
