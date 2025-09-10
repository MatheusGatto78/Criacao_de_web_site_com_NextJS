import CourseHero from '@/components/layout/CourseHero';
import CourseContent from '@/components/layout/CourseContent';
import CourseFaculty from '@/components/layout/CourseFaculty';
import CourseProjects from '@/components/layout/CourseProjects';
import CourseFAQ from '@/components/layout/CourseFAQ';
import Newsletter from '@/components/layout/Newsletter';

export const metadata = {
  title: 'Medicina - UNIVILLE',
  description: 'Curso de Medicina da UNIVILLE. Forme-se médico com excelência.',
};

export default function MedicinaPage() {
  const courseData = {
    title: 'MEDICINA',
    backgroundImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop',
    description: `O curso de Medicina da UNIVILLE forma médicos com sólida base científica, humanística e ética, preparados para atuar com excelência no cuidado à saúde da população, sempre primando pela qualidade e responsabilidade social.`,
    careerInfo: `O médico formado pode atuar em hospitais, clínicas, unidades básicas de saúde, pesquisa médica, docência, ou especializar-se em diversas áreas como cardiologia, pediatria, cirurgia, entre outras especialidades médicas.`,
    courseDetails: `Nosso curso conta com hospital escola, laboratórios modernos, parceria com o SUS e estágios em diferentes níveis de atenção à saúde, proporcionando formação completa e prática desde os primeiros períodos.`,
    callToAction: `Realize seu sonho de ser médico na UNIVILLE e faça a diferença na vida das pessoas!`,
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
