'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'JOSÉ LUIZ',
      course: 'FORMADO EM PUBLICIDADE PELA UNIVILLE',
      text: 'Muito show o curso eu a-do-rei.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'MARIA SILVA',
      course: 'FORMADA EM GASTRONOMIA PELA UNIVILLE',
      text: 'A universidade me proporcionou uma formação completa e de qualidade.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'PEDRO SANTOS',
      course: 'FORMADO EM MEDICINA PELA UNIVILLE',
      text: 'Experiência incrível, professores excelentes e estrutura moderna.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              O QUE DIZEM NOSSOS ALUNOS
            </h2>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-sm text-gray-600 uppercase">
                    {testimonials[currentTestimonial].course}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-700 italic">
                &quot;{testimonials[currentTestimonial].text}&quot;
              </blockquote>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex space-x-2 ml-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={testimonials[currentTestimonial].image}
              alt="Estudante"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
