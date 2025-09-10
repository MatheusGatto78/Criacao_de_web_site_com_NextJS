export default function CourseProjects() {
  const projects = [
    {
      title: 'Planejamento de Redes Sociais',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      description: 'Projetos de estratégia digital e gestão de redes sociais para empresas reais.',
    },
    {
      title: 'Branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      description: 'Desenvolvimento de identidade visual e posicionamento de marca.',
    },
    {
      title: 'Campanhas Publicitárias',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
      description: 'Criação de campanhas integradas para diferentes mídias e públicos.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Projetos realizados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira vídeos demonstrativos dos projetos realizados 
            durante o curso de Publicidade e Propaganda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                <div className="aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-green-600 text-white p-4">
                  <h3 className="font-bold text-lg text-center">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm text-center">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
