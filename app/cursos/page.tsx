import CoursesHero from '@/components/layout/CoursesHero';
import CoursesList from '@/components/layout/CoursesList';
import Newsletter from '@/components/layout/Newsletter';

export const metadata = {
  title: 'Cursos - UNIVILLE',
  description: 'Conheça todos os cursos da UNIVILLE. Mais de 80 opções para sua carreira.',
};

export default function CursosPage() {
  return (
    <div className="min-h-screen">
      <CoursesHero />
      <CoursesList />
      <Newsletter />
    </div>
  );
}
