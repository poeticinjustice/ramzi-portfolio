import Navigation from '@/components/Navigation';

export default function TempEhPrivacyPolicy() {
  return (
    <div className='min-h-screen bg-white dark:bg-slate-900'>
      <Navigation />

      <main id='main-content'>
        <section className='hero-gradient pt-24 pb-16 px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 dark:text-white mb-4 tracking-tight'>
              Privacy Policy
            </h1>
            <p className='text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-6'>
              Temp, eh?
            </p>
            <p className='text-base text-slate-500 dark:text-slate-400'>
              Last updated: April 28, 2026
            </p>
          </div>
        </section>

        <section className='section-gradient py-16 px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <div className='space-y-12 text-slate-600 dark:text-slate-400 leading-relaxed'>
              <div>
                <p>
                  Temp, eh? is a weather app that shows temperatures in both
                  Celsius and Fahrenheit. Your privacy is important to us.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-light text-slate-900 dark:text-white mb-4 tracking-tight'>
                  Information We Collect
                </h2>
                <p className='mb-4'>
                  Temp, eh? uses your device&apos;s location to provide weather
                  data for your current area. Location data is sent to
                  Apple&apos;s WeatherKit service to retrieve weather
                  forecasts. We do not collect, store, or transmit your
                  location data to any other server or third party.
                </p>
                <p>
                  Saved locations are stored locally on your device and shared
                  between the app and its widget using on-device App Groups
                  storage. This data never leaves your device.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-light text-slate-900 dark:text-white mb-4 tracking-tight'>
                  Third-Party Services
                </h2>
                <p>
                  Weather data is provided by Apple WeatherKit. Your use of
                  weather data is subject to Apple&apos;s terms and privacy
                  policy.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-light text-slate-900 dark:text-white mb-4 tracking-tight'>
                  Data Sharing
                </h2>
                <p>
                  We do not share, sell, or transmit any personal data to third
                  parties. The app does not include analytics, advertising, or
                  tracking of any kind.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-light text-slate-900 dark:text-white mb-4 tracking-tight'>
                  Data Storage
                </h2>
                <p>
                  All app data (saved locations, temperature unit preference)
                  is stored locally on your device. There are no user accounts,
                  no cloud sync, and no remote servers.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-light text-slate-900 dark:text-white mb-4 tracking-tight'>
                  Contact
                </h2>
                <p>
                  If you have questions about this privacy policy, you can
                  reach us at{' '}
                  <a
                    href='mailto:ramzi.kanazi@gmail.com'
                    className='text-slate-900 dark:text-white underline hover:opacity-80 transition-opacity'
                  >
                    ramzi.kanazi@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='py-8 px-6 lg:px-8 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700'>
        <div className='max-w-6xl mx-auto text-center'>
          <p className='text-slate-600 dark:text-slate-400 text-sm'>
            © 2026 Ramzi Kanazi. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
