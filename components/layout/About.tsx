import Button from '../ui/Button';

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">Prédio da Universidade</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              SOBRE A UNIVILLE
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Somos uma Universidade referência na região, com ampla estrutura, 
              professores qualificados e cursos reconhecidos pelo MEC, proporcionando 
              atividades de ensino, pesquisa e extensão nas mais diversas áreas do conhecimento.
            </p>
            <Button 
              variant="primary"
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              CONTINUAR LENDO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
