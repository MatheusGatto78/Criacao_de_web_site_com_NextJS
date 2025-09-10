export default function CoursesHero() {
  return (
    <section 
      className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-700"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          CURSOS
        </h1>
      </div>
    </section>
  );
}
