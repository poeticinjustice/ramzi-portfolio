interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className='bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700'>
      <div className='w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-6'>
        {icon}
      </div>
      <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-3'>
        {title}
      </h3>
      <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
        {description}
      </p>
    </div>
  );
}
