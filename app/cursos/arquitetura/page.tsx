import CourseHero from '@/components/layout/CourseHero';
import CourseContent from '@/components/layout/CourseContent';
import CourseFaculty from '@/components/layout/CourseFaculty';
import CourseProjects from '@/components/layout/CourseProjects';
import CourseFAQ from '@/components/layout/CourseFAQ';
import Newsletter from '@/components/layout/Newsletter';

export const metadata = {
  title: 'Arquitetura - UNIVILLE',
  description: 'Curso de Arquitetura e Urbanismo da UNIVILLE. Projete o futuro.',
};

export default function ArquiteturaPage() {
  const courseData = {
    title: 'ARQUITETURA E URBANISMO',
    backgroundImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=1080&fit=crop',
    description: `O curso de Arquitetura e Urbanismo da UNIVILLE forma profissionais capazes de projetar e planejar espaços que harmonizam funcionalidade, estética e sustentabilidade, sempre considerando as necessidades humanas e o meio ambiente.`,
    careerInfo: `O arquiteto pode trabalhar em escritórios de arquitetura, construtoras, órgãos públicos de planejamento urbano, consultorias em sustentabilidade, design de interiores, paisagismo, ou abrir seu próprio escritório.`,
    courseDetails: `Nosso curso oferece ateliês de projeto, laboratórios de maquetes, software especializado e parcerias com escritórios renomados, proporcionando experiência prática e contato direto com o mercado profissional.`,
    callToAction: `Construa seu futuro como arquiteto na UNIVILLE e transforme espaços em lugares únicos!`,
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
