'use client';

import { useState } from 'react';
import Button from '../ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar o email
    console.log('Email cadastrado:', email);
    setEmail('');
  };

  return (
    <section 
      className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 relative"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            RECEBA MAIS INFORMAÇÕES
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Preencha o campo abaixo para receber mais informações sobre o seu curso.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu endereço de e-mail"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <Button 
              type="submit"
              variant="primary"
              className="bg-green-600 hover:bg-green-700 whitespace-nowrap"
            >
              Receber Informações
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
