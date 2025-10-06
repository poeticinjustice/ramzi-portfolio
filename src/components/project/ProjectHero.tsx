interface ProjectHeroProps {
  title: string;
  subtitle: string;
}

export default function ProjectHero({ title, subtitle }: ProjectHeroProps) {
  return (
    <section className='hero-gradient pt-16 pb-12 px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mt-8 mb-2'>
          <h1 className='text-4xl md:text-5xl font-light bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent mb-8 tracking-tight'>
            {title}
          </h1>
          <p className='text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed'>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
