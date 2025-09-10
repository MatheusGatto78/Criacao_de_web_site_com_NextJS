'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'INÍCIO', href: '/' },
    { name: 'SOBRE', href: '/sobre' },
    { name: 'CURSOS', href: '/cursos' },
    { name: 'CONTATO', href: '/contato' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Back Button (only on non-home pages) */}
          {pathname !== '/' && (
            <button 
              onClick={() => window.history.back()}
              className="text-white hover:text-gray-300 transition-colors mr-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          )}

          {/* Logo/Brand */}
          <div className="text-white font-bold text-xl">
            <Link href="/">UNIVILLE</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white hover:text-gray-300 transition-colors duration-200 font-medium ${
                  pathname === item.href ? 'border-b-2 border-white pb-1' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Icon */}
          <div className="hidden md:block">
            <button className="text-white hover:text-gray-300 transition-colors">
              <svg
                className="w-6 h-6"
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
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-white hover:text-gray-300 transition-colors duration-200 py-2 ${
                    pathname === item.href ? 'border-l-4 border-white pl-4' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
