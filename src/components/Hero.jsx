import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

// --- COMPONENTE: Hero ---
// Seção principal de boas-vindas
const Hero = ({ onLinkClick }) => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center text-center bg-slate-900 px-6">
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Olá, eu sou <span className="text-indigo-400">Carlos</span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8">
          Desenvolvedor Web
        </h3>
        <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
          Transformando ideias em soluções digitais robustas e escaláveis, do front-end ao back-end.
        </p>
        
        {/* Botões CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => onLinkClick('projetos')}
            className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg"
          >
            Meus Projetos
          </button>
          <button
            onClick={() => onLinkClick('contato')}
            className="bg-slate-700 text-gray-200 font-semibold px-8 py-3 rounded-lg hover:bg-slate-600 transition-all duration-300 shadow-lg"
          >
            Entre em Contato
          </button>
        </div>
        
        {/* Links Sociais */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <Linkedin size={32} />
          </a>
          <a href="mailto:seu.email@exemplo.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <Mail size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;