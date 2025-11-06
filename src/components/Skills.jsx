import React from 'react';
import { 
  Code, 
  Database, 
  Server,
  Palette,
  Monitor,
  Cloud
} from 'lucide-react';

// --- COMPONENTE: Skills ---
// Seção de Habilidades
const SkillCard = ({ icon, title, description }) => (
  <div className="bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-shadow duration-300">
    <div className="mb-4 text-indigo-400">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Skills = () => {
  const skillsData = [
    { 
      icon: <Palette size={40} />, 
      title: "Front-End", 
      description: "React, Next.js, Tailwind CSS, HTML5, CSS3. Crio interfaces rápidas, responsivas e bonitas." 
    },
    { 
      icon: <Server size={40} />, 
      title: "Back-End", 
      description: "Node.js, Express, Python (Django/Flask). Construo APIs seguras, rápidas e escaláveis." 
    },
    { 
      icon: <Database size={40} />, 
      title: "Bancos de Dados", 
      description: "PostgreSQL, MySQL, MongoDB. Modelagem e otimização de bancos de dados relacionais e NoSQL." 
    },
    { 
      icon: <Cloud size={40} />, 
      title: "DevOps & Cloud", 
      description: "Docker, AWS, Vercel. Gerenciamento de infraestrutura e pipelines de CI/CD." 
    },
    { 
      icon: <Monitor size={40} />, 
      title: "Design de UI/UX", 
      description: "Figma, design responsivo. Foco na experiência do usuário e interfaces intuitivas." 
    },
    { 
      icon: <Code size={40} />, 
      title: "Outras Ferramentas", 
      description: "Git, Agile (Scrum), Testes (Jest), TypeScript. Metodologias e ferramentas modernas." 
    },
  ];

  return (
    <section id="habilidades" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Habilidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;