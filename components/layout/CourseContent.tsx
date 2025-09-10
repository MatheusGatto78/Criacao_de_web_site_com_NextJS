interface CourseData {
  title: string;
  backgroundImage: string;
  description: string;
  careerInfo: string;
  courseDetails: string;
  callToAction: string;
}

interface CourseContentProps {
  courseData: CourseData;
}

export default function CourseContent({ courseData }: CourseContentProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {courseData.description}
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {courseData.careerInfo}
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {courseData.courseDetails}
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <p className="text-lg text-green-800 font-medium">
                {courseData.callToAction}
              </p>
            </div>
          </div>

          {/* Right Content - Course Highlights */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=600&fit=crop"
              alt="Estudantes de Publicidade"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            
            {/* Additional Info Cards */}
            <div className="mt-8 space-y-4">
              <div className="bg-green-600 text-white p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">SAIBA MAIS!</h3>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Mais informações sobre o curso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
