'use client';

import { useState } from 'react';
import CourseGridCard from '../ui/CourseGridCard';

export default function CoursesList() {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    { id: 1, name: 'Publicidade', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=300&fit=crop' },
    { id: 2, name: 'Gastronomia', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop' },
    { id: 3, name: 'Medicina', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop' },
    { id: 4, name: 'Arquitetura', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=300&fit=crop' },
    { id: 5, name: 'Publicidade', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=300&fit=crop' },
    { id: 6, name: 'Gastronomia', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop' },
    { id: 7, name: 'Medicina', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop' },
    { id: 8, name: 'Arquitetura', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=300&fit=crop' },
    { id: 9, name: 'Publicidade', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=300&fit=crop' },
    { id: 10, name: 'Gastronomia', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop' },
    { id: 11, name: 'Medicina', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop' },
    { id: 12, name: 'Arquitetura', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=300&fit=crop' },
  ];

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Conheça Nossos Cursos
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Sed ullamcorper porttitor justo non suscipit. Nam ac diam tincidunt, hendrerit 
            purus in, lacinia urna. Fusce a arcu non ipsum tempor dictique.Sed ullamcorper 
            porttitor justo non suscipit. Nam ac diam tincidunt, hendrerit purus in
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg 
                className="h-5 w-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseGridCard
              key={course.id}
              name={course.name}
              image={course.image}
            />
          ))}
        </div>

        {/* No results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum curso encontrado para "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
