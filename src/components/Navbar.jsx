import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// --- COMPONENTE: Navbar ---
// Barra de navegação fixa com efeito "glassmorphism" e menu responsivo
const Navbar = ({ activeSection, onLinkClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', title: 'Início' },
    { id: 'sobre', title: 'Sobre' },
    { id: 'habilidades', title: 'Habilidades' },
    { id: 'projetos', title: 'Projetos' },
    { id: 'contato', title: 'Contato' },
  ];

  const handleLinkClick = (id) => {
    onLinkClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-slate-900 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo ou Nome */}
        <h1 
          className="text-lg font-bold text-white cursor-pointer hover:text-indigo-400 transition-colors"
          onClick={() => handleLinkClick('inicio')}
        >
          @Dom_Carlos_Adriano
        </h1>

        {/* Links do Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`
                cursor-pointer
                text-lg 
                ${activeSection === link.id 
                  ? 'text-indigo-400 font-semibold' 
                  : 'text-gray-300 hover:text-indigo-400'}
                transition-colors duration-300
              `}
            >
              {link.title}
            </button>
          ))}
        </div>

        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-4 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`
                text-xl 
                ${activeSection === link.id 
                  ? 'text-indigo-400 font-semibold' 
                  : 'text-gray-200 hover:text-indigo-400'}
                transition-colors duration-300
              `}
            >
              {link.title}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;