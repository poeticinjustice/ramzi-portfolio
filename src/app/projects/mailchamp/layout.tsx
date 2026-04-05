import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MailChamp - Email Marketing Analytics | Ramzi Kanazi',
  description:
    'Email marketing analytics platform that automates campaign reporting with customizable link exclusion, dual-format exports, and visual analytics dashboards.',
  openGraph: {
    title: 'MailChamp - Email Marketing Analytics Platform',
    description:
      'Automates campaign reporting with customizable link exclusion, dual-format exports, and visual analytics.',
    type: 'website',
  },
};

export default function MailChampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
