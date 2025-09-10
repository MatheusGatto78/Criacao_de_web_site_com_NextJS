export default function CourseFaculty() {
  const sections = [
    { title: 'Disciplinas', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop' },
    { title: 'Professores', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop' },
    { title: 'Estrutura', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },
  ];

  const faculty = [
    {
      name: 'Carolina Silva',
      title: 'Coordenadora',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face',
      description: 'Graduada em Comunicação Social - habilitação em Publicidade e Propaganda pela Universidade do Estado de Santa Catarina (UDESC) em 2001 e Mestre em Educação pela mesma Universidade em 2004. Tem experiência na área de Comunicação, com ênfase em Publicidade e Propaganda.',
    },
    {
      name: 'Juliano Pereira',
      title: 'Professor Doutor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      description: 'Doutor em Comunicação e Semiótica pela PUC-SP. Professor e pesquisador em comunicação digital e novas mídias.',
    },
    {
      name: 'Eduarda Rocha',
      title: 'Professora Mestre',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      description: 'Mestre em Comunicação pela UFSC. Especialista em marketing digital e gestão de marcas.',
    },
    {
      name: 'Rafael Almeida',
      title: 'Professor Especialista',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      description: 'Especialista em Criação Publicitária. Profissional com mais de 15 anos de mercado em agências de publicidade.',
    },
    {
      name: 'Fabiana Melo',
      title: 'Professora Doutora',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      description: 'Doutora em Comunicação Social. Pesquisadora em comportamento do consumidor e psicologia da comunicação.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Top Section Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {sections.map((section, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
              <div className="aspect-video">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                <h3 className="text-white text-xl font-bold">{section.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Conheça o <span className="text-green-600">corpo docente!</span>
          </h2>
        </div>

        {/* Main Faculty Member */}
        <div className="bg-green-600 rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={faculty[0].image}
                alt={faculty[0].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white flex-1">
              <h3 className="text-2xl font-bold mb-2">{faculty[0].name}</h3>
              <p className="text-green-100 mb-4">{faculty[0].title}</p>
              <p className="leading-relaxed">{faculty[0].description}</p>
            </div>
          </div>
        </div>

        {/* Other Faculty Members */}
        <div className="grid md:grid-cols-2 gap-6">
          {faculty.slice(1).map((professor, index) => (
            <div key={index} className="bg-green-100 rounded-lg p-6 flex items-start gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={professor.image}
                  alt={professor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-1">{professor.name}</h4>
                <p className="text-green-600 text-sm mb-2">{professor.title}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{professor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
