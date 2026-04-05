import Image from 'next/image';

interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

interface ProjectGalleryProps {
  images: ProjectImage[];
  onImageClick: (index: number) => void;
}

export default function ProjectGallery({
  images,
  onImageClick,
}: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <section className='py-16 px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-8'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? 'accent-border' : 'accent-border-alt'
              } rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer`}
              onClick={() => onImageClick(index)}
            >
              <div className='p-[1px]'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  className='w-full h-96 object-cover object-left'
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2UyZThmMCIvPjwvc3ZnPg=='
                />
                <div className='p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700'>
                  <p className='text-slate-600 dark:text-slate-400 text-sm text-center leading-relaxed'>
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
