import Hero from '@/components/layout/Hero';
import About from '@/components/layout/About';
import Courses from '@/components/layout/Courses';
import Testimonials from '@/components/layout/Testimonials';
import Newsletter from '@/components/layout/Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
