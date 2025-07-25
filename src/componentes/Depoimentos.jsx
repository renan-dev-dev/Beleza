import React, { useState } from 'react';
import foto1 from '../assets/fot.png';
import foto2 from '../assets/fot.png';
import foto3 from '../assets/fot.png';
import foto4 from '../assets/fot.png';
import foto5 from '../assets/fot.png';
import foto6 from '../assets/fot.png';
import cabe from '../assets/cabe.jpg';

const depoimentos = [
  { nome: 'Ana Paula', data: '10 de julho de 2025', texto: 'Atendimento excelente! O salão é aconchegante e a equipe muito profissional. Saí muito satisfeita com o resultado.', foto: foto1 },
  { nome: 'Juliana Souza', data: '02 de julho de 2025', texto: 'Adorei o corte e a coloração! Me senti muito bem recebida e com certeza voltarei mais vezes.', foto: foto2 },
  { nome: 'Camila Rocha', data: '25 de junho de 2025', texto: 'Ambiente limpo, organizado e profissionais atenciosas. Recomendo para quem busca qualidade.', foto: foto3 },
  { nome: 'Fernanda Alves', data: '18 de junho de 2025', texto: 'Fui para uma massagem e saí renovada! Ótimo atendimento e ambiente relaxante.', foto: foto4 },
  { nome: 'Tatiane Souza', data: '12 de junho de 2025', texto: 'Amei a maquiagem para meu evento, ficou perfeita! Profissionais super caprichosas.', foto: foto5 },
  { nome: 'Marina Egorova', data: '05 de junho de 2025', texto: 'Minha sobrancelha nunca ficou tão bonita! Atendimento rápido e resultado incrível.', foto: foto6 },
];

const Depoimentos = () => {
  const [atual, setAtual] = useState(0);

  const anterior = () => {
    setAtual(atual === 0 ? depoimentos.length - 1 : atual - 1);
  };

  const proximo = () => {
    setAtual(atual === depoimentos.length - 1 ? 0 : atual + 1);
  };

  const getIndices = () => {
    const total = depoimentos.length;
    const prev = (atual - 1 + total) % total;
    const next = (atual + 1) % total;
    return [prev, atual, next];
  };

  const indices = getIndices();

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center py-16 bg-fixed bg-cover bg-center relative"
      style={{ backgroundImage: `url(${cabe})` }}
    >
      <div className="  px-6 py-10 ">
        <h2 className="text-3xl font-semibold text-[#2d3d28] mb-8 text-center">Depoimentos</h2>

        <div className="relative w-full max-w-5xl flex items-center justify-center">
          {/* Seta esquerda */}
          <button
            onClick={anterior}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow p-2 hover:bg-[#ffeacb] transition z-10"
            aria-label="Anterior"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path d="M15.5 19l-7-7 7-7" stroke="#bfa16b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Cards */}
          <div className="flex w-full justify-center items-center gap-8">
            {indices.map((idx, i) => (
              <div
                key={idx}
                className={`bg-white/90 rounded-2xl shadow p-10 w-[400px] min-h-[220px] flex flex-col items-center transition overflow-hidden ${
                  i === 1 ? 'opacity-100 scale-105 z-10' : 'opacity-40 scale-95'
                }`}
                style={{ pointerEvents: i === 1 ? 'auto' : 'none' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={depoimentos[idx].foto}
                    alt={depoimentos[idx].nome}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#bfa16b]"
                  />
                  <span className={`text-xl font-bold font-cursive ${i === 1 ? 'text-[#2d3d28]' : 'text-[#bfa16b]'}`}>
                    {depoimentos[idx].nome}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#bfa16b] text-lg">★ ★ ★ ★ ★</span>
                  <span className="text-gray-400 text-xs">{depoimentos[idx].data}</span>
                </div>
                <p className="text-gray-700 text-center text-sm">{depoimentos[idx].texto}</p>
              </div>
            ))}
          </div>

          {/* Seta direita */}
          <button
            onClick={proximo}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow p-2 hover:bg-[#ffeacb] transition z-10"
            aria-label="Próximo"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path d="M8.5 5l7 7-7 7" stroke="#bfa16b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="flex gap-2 mt-6 justify-center">
          {depoimentos.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full ${idx === atual ? 'bg-[#bfa16b]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
