import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ramzi Kanazi - Full-Stack Developer',
  description:
    'Full-stack developer specializing in web applications, primarily focused on React, Redux, Node.js, and modern development practices.',
  keywords: [
    'full-stack developer',
    'React',
    'Node.js',
    'TypeScript',
    'MongoDB',
    'Express',
    'web application development',
  ],
  authors: [{ name: 'Ramzi Kanazi' }],
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: 'Ramzi Kanazi - Full-Stack Developer',
    description: 'Full-stack developer specializing in web applications',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                  document.documentElement.style.backgroundColor = '#0f172a';
                } else {
                  document.documentElement.style.colorScheme = 'light';
                  document.documentElement.style.backgroundColor = '#ffffff';
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
