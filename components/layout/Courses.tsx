import CourseCard from '../ui/CourseCard';

export default function Courses() {
  const courses = [
    {
      title: 'Publicidade',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      description: 'Curso de Publicidade e Propaganda',
    },
    {
      title: 'Gastronomia',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      description: 'Curso de Gastronomia',
    },
    {
      title: 'Medicina',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      description: 'Curso de Medicina',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            CONHEÇA NOSSOS CURSOS
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Um universo de oportunidades
          </p>
          <button className="inline-flex items-center text-green-600 font-bold hover:text-green-700 transition-colors">
            Confira
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              image={course.image}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
