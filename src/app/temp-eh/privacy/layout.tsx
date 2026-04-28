import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Temp, eh? | Ramzi Kanazi',
  description:
    'Privacy policy for Temp, eh?, an iOS weather app that shows temperatures in both Celsius and Fahrenheit.',
  openGraph: {
    title: 'Privacy Policy — Temp, eh?',
    description:
      'Privacy policy for Temp, eh?, an iOS weather app that shows temperatures in both Celsius and Fahrenheit.',
    type: 'website',
  },
};

export default function TempEhPrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
