import React, { useState, useEffect } from 'react';

// Importando os componentes da pasta 'components'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// --- COMPONENTE PRINCIPAL: App ---
// Monta todas as seções
export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Lógica para destacar o link ativo no Navbar
  useEffect(() => {
    const sectionIds = ['inicio', 'sobre', 'habilidades', 'projetos', 'contato'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        // Ativa quando a seção está mais ou menos no meio da tela
        rootMargin: '-30% 0px -70% 0px',
        threshold: 0 
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Limpa o observer ao desmontar o componente
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Lógica para scroll suave ao clicar em um link
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // Tailwind classes para fundo, fonte e rolagem suave
    <div className="bg-slate-900 text-gray-100 font-sans scroll-smooth">
      {/* Navbar com destaque dinâmico */}
      <Navbar activeSection={activeSection} onLinkClick={scrollToSection} />

      <main>
        <Hero onLinkClick={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
