const About = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Sobre Mim
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Imagem ou Placeholder */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-linear-to-br from-indigo-500 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center">
              {/* Você pode substituir isso por uma foto sua */}
              <img 
                 src="./persona.png"
                 alt="Foto do Perfil"
                 className="w-full h-full object-cover rounded-full border-4 border-slate-800"
              />
            </div>
          </div>
          
          {/* Texto */}
          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Olá! Eu sou um desenvolvedor full-stack apaixonado por criar aplicações web eficientes e intuitivas. Com experiência sólida tanto no front-end quanto no back-end, meu objetivo é construir soluções completas que atendam às necessidades dos usuários e dos negócios.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Minha jornada na programação começou com [sua história]. Hoje, me especializo em tecnologias como React e Node.js, e estou sempre buscando aprender e me adaptar às novas tendências do mercado.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Seja desenvolvendo uma API RESTful robusta ou uma interface de usuário interativa, eu me dedico a entregar código limpo, testável e de alta qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;