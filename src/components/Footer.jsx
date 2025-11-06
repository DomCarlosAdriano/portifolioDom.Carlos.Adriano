import React from 'react';

// --- COMPONENTE: Footer ---
// Rodapé
const Footer = () => {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} [Seu Nome]. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Feito com React, Tailwind CSS e ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;