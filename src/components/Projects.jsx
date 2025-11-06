import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

// --- COMPONENTE: Projects ---
// Seção de Projetos
const ProjectCard = ({ title, description, tags, imageUrl, repoUrl, demoUrl }) => (
  <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    <img 
      src={imageUrl} 
      alt={`Thumbnail do ${title}`}
      className="w-full h-56 object-cover"
      onError={(e) => { e.target.src = 'https://placehold.co/600x400/1e293b/94a3b8?text=Projeto'; e.target.alt = 'Placeholder do projeto'; }}
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="bg-indigo-500/30 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Links */}
      <div className="flex justify-start space-x-4">
        <a 
          href={repoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-indigo-400 font-medium flex items-center gap-2 transition-colors"
        >
          <Github size={20} />
          Código
        </a>
        <a 
          href={demoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-indigo-400 font-medium flex items-center gap-2 transition-colors"
        >
          <ArrowUpRight size={20} />
          Demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectData = [
    {
      title: "Projeto 1: E-commerce",
      description: "Plataforma de e-commerce completa com carrinho, checkout e painel de admin. Construído com MERN Stack.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      imageUrl: "https://placehold.co/600x400/1e293b/94a3b8?text=E-commerce",
      repoUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Projeto 2: Rede Social",
      description: "Clone de rede social com posts, comentários, curtidas e perfis de usuário. Foco em real-time com Socket.io.",
      tags: ["React", "Socket.io", "Tailwind CSS", "Firebase"],
      imageUrl: "https://placehold.co/600x400/1e293b/94a3b8?text=Rede+Social",
      repoUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Projeto 3: App de Finanças",
      description: "Dashboard de finanças pessoais para rastreamento de despesas e receitas, com gráficos interativos.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      imageUrl: "https://placehold.co/600x400/1e293b/94a3b8?text=Finan%C3%A7as+App",
      repoUrl: "#",
      demoUrl: "#"
    },
     {
      title: "Projeto 3: App de Finanças",
      description: "Dashboard de finanças pessoais para rastreamento de despesas e receitas, com gráficos interativos.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      imageUrl: "https://placehold.co/600x400/1e293b/94a3b8?text=Finan%C3%A7as+App",
      repoUrl: "#",
      demoUrl: "#"
    },
  ];

  return (
    <section id="projetos" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;