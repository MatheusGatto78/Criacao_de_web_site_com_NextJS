import Link from 'next/link';

interface CourseCardProps {
  title: string;
  image: string;
  description: string;
}

export default function CourseCard({ title, image, description }: CourseCardProps) {
  const courseSlug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  
  return (
    <Link href={`/cursos/${courseSlug}`}>
      <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
        <div className="aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-sm opacity-90">{description}</p>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-green-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <span className="bg-white text-green-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Saiba Mais
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
