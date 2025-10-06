interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function HighlightCard({
  icon,
  title,
  description,
}: HighlightCardProps) {
  return (
    <div className='text-center'>
      <div className='w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-4'>
        {icon}
      </div>
      <h3 className='text-lg font-medium text-slate-900 dark:text-white mb-2'>
        {title}
      </h3>
      <p className='text-slate-600 dark:text-slate-400 text-sm'>
        {description}
      </p>
    </div>
  );
}
