import Link from 'next/link';

interface CourseGridCardProps {
  name: string;
  image: string;
}

export default function CourseGridCard({ name, image }: CourseGridCardProps) {
  const courseSlug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  
  return (
    <Link href={`/cursos/${courseSlug}`}>
      <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-105">
        <div className="aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-4 w-full">
            <h3 className="text-white text-lg font-bold text-center">
              {name}
            </h3>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-green-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <h3 className="text-xl font-bold mb-4">{name}</h3>
            <span className="bg-white text-green-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Saiba Mais
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
