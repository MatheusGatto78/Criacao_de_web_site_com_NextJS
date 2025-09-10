import CourseHero from '@/components/layout/CourseHero';
import CourseContent from '@/components/layout/CourseContent';
import CourseFaculty from '@/components/layout/CourseFaculty';
import CourseProjects from '@/components/layout/CourseProjects';
import CourseFAQ from '@/components/layout/CourseFAQ';
import Newsletter from '@/components/layout/Newsletter';

export const metadata = {
  title: 'Publicidade e Propaganda - UNIVILLE',
  description: 'Curso de Publicidade e Propaganda da UNIVILLE. Forme-se com os melhores profissionais.',
};

export default function PublicidadePage() {
  const courseData = {
    title: 'PUBLICIDADE E PROPAGANDA',
    backgroundImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop',
    description: `Gosta de inovação, criatividade e empreendedorismo? O curso de Publicidade e Propaganda pode ser uma das experiências que você precisa para se comunicar com o mundo. A profissão do publicitário precisa ser dinâmica, bem criativa e antenada para não somente conhecer a prática da publicidade e os produtos que ela propõe, mas também saber identificar e avaliar os fatores demográficos, econômicos, sociais e tecnológicos e a análise dos chamados tipos mais convenientes de comunicação adequada para as mensagens e construção de materiais imagéticos, análise de impactos e retornos dos meios.`,
    careerInfo: `Poderá trabalhar como atendimento, criação, gestão de produtos e marcas, marketing, mídia, pesquisa, produção de promoção de vendas em agências de publicidade, empresas de eventos, empresas ou escritórios independentes ou empreendedor.`,
    courseDetails: `Nossos cursos oferecem inovações pedagógicas e curriculares como muitas atividades acadêmicas e vivências na extensão universitária, proporcionando o contato direto com as necessidades da comunidade, núcleos comuns, disciplinas compartilhadas e metodologias criativas e aprendizagem incentivadoras.`,
    callToAction: `Você faz a sua jornada na Univille, então aproveite ao máximo as oportunidades para as melhores experiências da sua futura carreira.`,
  };

  return (
    <div className="min-h-screen">
      <CourseHero 
        title={courseData.title}
        backgroundImage={courseData.backgroundImage}
      />
      <CourseContent courseData={courseData} />
      <CourseFaculty />
      <CourseProjects />
      <CourseFAQ />
      <Newsletter />
    </div>
  );
}
