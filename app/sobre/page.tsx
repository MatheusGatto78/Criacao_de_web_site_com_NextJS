export const metadata = {
  title: 'Sobre - UNIVILLE',
  description: 'Conheça a história da UNIVILLE, nossa missão e valores.',
};

export default function SobrePage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Sobre a UNIVILLE</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            A UNIVILLE é uma universidade referência na região, com mais de 40 anos de experiência 
            em educação superior. Nossa missão é formar profissionais competentes e cidadãos conscientes, 
            contribuindo para o desenvolvimento social, econômico e cultural da região.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Com uma estrutura moderna e completa, oferecemos mais de 80 cursos de graduação e 
            pós-graduação, sempre com foco na qualidade do ensino e na formação integral do aluno.
          </p>
          <p className="text-lg text-gray-700">
            Nossos professores são altamente qualificados e nossos laboratórios estão equipados 
            com tecnologia de ponta, proporcionando aos estudantes uma experiência educacional 
            de excelência.
          </p>
        </div>
      </div>
    </div>
  );
}
