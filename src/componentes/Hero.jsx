import { IconPlayerPlay } from '@tabler/icons-react';
import caImage from '../assets/fsafefw.jpg';
import bgImage from '../assets/imgh.avif'; // importe sua imagem de fundo

const Hero = () => {
  return (
    <section
      className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 relative overflow-hidden bg-[#f1ede7]"
    >
      {/* Imagem de fundo cobrindo toda a seção 
      <img
        src={bgImage}
        alt="Fundo decorativo"
        className="absolute inset-0 w-full h-full object-cover opacity-0 z-0"
        aria-hidden="true"
      />*/}

      {/* Texto da Esquerda */}
      <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start z-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4 text-[#2d3d28] drop-shadow-sm">
          Realce sua <span className="text-[#AF815A]">beleza</span> <br />
          com <span className="text-[#AF815A]">elegância</span> e cuidado
        </h1>
        <p className="text-gray-700 mb-8 max-w-md text-lg">
          No nosso salão, cada detalhe é pensado para você se sentir única. Agende
          seu horário e viva uma experiência de beleza, conforto e bem-estar.
        </p>
        <a
          href="#servicos"
          className="btn41-43 btn-43 inline-block px-8 py-3 font-semibold transition mb-2 group"
        >
          <span className="flex items-center gap-2">
            Conheça nossos serviços
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </a>
        
      </div>

      {/* Imagem da Direita */}
      <div className="md:w-1/2 relative flex justify-center items-center z-10">
        {/* Imagem principal circular grande */}
        <img
          src={caImage}
          alt="Cliente feliz no salão"
          className="rounded-full w-[450px] md:w-[480px] h-[450px] md:h-[480px] object-cover z-10 "
          style={{ objectPosition: 'center' }}
        />
        {/* Imagem sobreposta menor circular */}
        <img
          src={bgImage}
          alt="Ambiente do salão"
          className="absolute bottom-4 left-2 rounded-full w-[230px] h-[230px] object-cover z-20 "
          style={{ objectPosition: 'center' }}
        />
      </div>
    </section>
  );
};

export default Hero;


