import React from 'react';
import { Github, Linkedin } from 'lucide-react';

// --- COMPONENTE: Contact ---
// Seção de Contato
const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Entre em Contato
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Estou sempre aberto a novas oportunidades e conexões. Se você tem um projeto em mente ou apenas quer dizer "oi", sinta-se à vontade para me enviar um e-mail.
        </p>
        
        <a 
          href="mailto:seu.email@exemplo.com"
          className="inline-block bg-indigo-600 text-white font-semibold px-10 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg text-lg"
        >
          Mandar um E-mail
        </a>
        
        <div className="flex justify-center space-x-8 mt-16">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <Github size={36} />
          </a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <Linkedin size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;