interface CourseHeroProps {
  title: string;
  backgroundImage: string;
}

export default function CourseHero({ title, backgroundImage }: CourseHeroProps) {
  return (
    <section 
      className="relative min-h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
