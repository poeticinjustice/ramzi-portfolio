interface TechStackItemProps {
  text: string;
}

export default function TechStackItem({ text }: TechStackItemProps) {
  return (
    <div className='flex items-center space-x-3'>
      <div className='w-2 h-2 bg-slate-400 rounded-full'></div>
      <span className='text-slate-600 dark:text-slate-400'>{text}</span>
    </div>
  );
}
