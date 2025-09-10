import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/jupiter-planet.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          GRADUAÇÃO UNI
        </h1>
        
        <div className="mb-12">
          <Button 
            variant="secondary"
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg"
          >
            EMBARQUE
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="bg-green-600 p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">80+</div>
            <div className="text-sm">cursos para escolher</div>
          </div>
          <div className="bg-green-600 p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">40</div>
            <div className="text-sm">anos de experiência</div>
          </div>
          <div className="bg-green-600 p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">10/10</div>
            <div className="text-sm">nota máxima no MEC</div>
          </div>
          <div className="bg-green-600 p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">50.000</div>
            <div className="text-sm">alunos formados</div>
          </div>
        </div>
      </div>

      {/* Decorative Element - Moon/Satellite */}
      <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 opacity-90 shadow-lg"></div>
      <div className="absolute bottom-12 right-12 w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 opacity-60"></div>
    </section>
  );
}
