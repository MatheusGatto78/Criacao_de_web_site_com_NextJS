'use client';

import { useState } from 'react';

export default function CourseFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: 'O que abrange Publicidade e Propaganda?',
      answer: 'O curso de Publicidade e Propaganda abrange criação, planejamento, mídia, atendimento, produção e gestão de campanhas publicitárias. Os estudantes aprendem sobre comportamento do consumidor, pesquisa de mercado, marketing digital, branding e todas as áreas da comunicação publicitária.',
    },
    {
      question: 'Quais as Publicidade e Propaganda trabalha com o quê?',
      answer: 'O profissional pode trabalhar em agências de publicidade, departamentos de marketing de empresas, produtoras, veículos de comunicação, consultorias, ou como freelancer. As áreas incluem criação, planejamento, mídia, atendimento, pesquisa, produção e gestão de contas.',
    },
    {
      question: 'O que se aprende na faculdade de Publicidade e Propaganda?',
      answer: 'Durante o curso, você aprenderá sobre criação publicitária, planejamento de campanhas, pesquisa de mercado, comportamento do consumidor, marketing digital, produção audiovisual, fotografia, design gráfico, mídia, ética publicitária e gestão de marcas.',
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas frequentes (FAQs)
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openItems.includes(index) ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
