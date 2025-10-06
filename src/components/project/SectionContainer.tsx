interface SectionContainerProps {
  variant?: 'default' | 'gradient';
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({
  variant = 'default',
  children,
  className = '',
}: SectionContainerProps) {
  const bgClass =
    variant === 'gradient' ? 'bg-slate-50 dark:bg-slate-800' : '';

  return (
    <section className={`py-16 px-6 lg:px-8 ${bgClass} ${className}`}>
      <div className='max-w-6xl mx-auto'>{children}</div>
    </section>
  );
}
