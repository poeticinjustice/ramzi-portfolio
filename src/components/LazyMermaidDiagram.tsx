import dynamic from 'next/dynamic';

const MermaidDiagram = dynamic(() => import('./MermaidDiagram'), {
  loading: () => (
    <div className='flex justify-center py-8'>
      <div className='animate-pulse bg-slate-200 dark:bg-slate-700 rounded-lg w-full max-w-2xl h-64' />
    </div>
  ),
  ssr: false,
});

export default MermaidDiagram;
