import CourseHero from '@/components/layout/CourseHero';
import CourseContent from '@/components/layout/CourseContent';
import CourseFaculty from '@/components/layout/CourseFaculty';
import CourseProjects from '@/components/layout/CourseProjects';
import CourseFAQ from '@/components/layout/CourseFAQ';
import Newsletter from '@/components/layout/Newsletter';

export const metadata = {
  title: 'Gastronomia - UNIVILLE',
  description: 'Curso de Gastronomia da UNIVILLE. Desenvolva suas habilidades culinárias.',
};

export default function GastronomiaPage() {
  const courseData = {
    title: 'GASTRONOMIA',
    backgroundImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop',
    description: `O curso de Gastronomia da UNIVILLE forma profissionais capacitados para atuar em diversos segmentos do setor alimentício, combinando técnicas culinárias tradicionais e contemporâneas com gestão empresarial e inovação.`,
    careerInfo: `O profissional formado pode trabalhar em restaurantes, hotéis, buffets, consultorias gastronômicas, indústria alimentícia, ou abrir seu próprio negócio. As possibilidades incluem chef de cozinha, consultor gastronômico, crítico culinário e empreendedor.`,
    courseDetails: `Nosso curso oferece laboratórios modernos, parceria com restaurantes renomados e experiências práticas que preparam o aluno para o mercado de trabalho com excelência técnica e visão empresarial.`,
    callToAction: `Transforme sua paixão pela culinária em uma carreira de sucesso na UNIVILLE!`,
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
