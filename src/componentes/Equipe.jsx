import React from 'react'
import mulher1 from '../assets/fot.png'
import mulher2 from '../assets/fot.png'
import mulher3 from '../assets/fot.png'
import mulher4 from '../assets/fot.png'
import mulher5 from '../assets/fot.png'
import mulher6 from '../assets/fot.png'

const equipeDados = [
  {
    nome: 'Marina Egorova',
    cargo: 'Especialista em cabelos',
    descricao: 'Profissional dedicada ao cuidado e transformação dos cabelos.',
    foto: mulher1,
  },
  {
    nome: 'Ana Pires',
    cargo: 'Manicure e Pedicure',
    descricao: 'Especialista em unhas e embelezamento das mãos e pés.',
    foto: mulher2,
  },
  {
    nome: 'Tatiane Souza',
    cargo: 'Colorista',
    descricao: 'Expert em coloração e técnicas modernas.',
    foto: mulher3,
  },
  {
    nome: 'Juliana Lima',
    cargo: 'Maquiadora',
    descricao: 'Maquiagem profissional para todas as ocasiões.',
    foto: mulher4,
  },
  {
    nome: 'Camila Rocha',
    cargo: 'Designer de sobrancelhas',
    descricao: 'Valoriza o olhar com técnicas de design.',
    foto: mulher5,
  },
  {
    nome: 'Fernanda Alves',
    cargo: 'Massoterapeuta',
    descricao: 'Especialista em relaxamento e bem-estar.',
    foto: mulher6,
  },
]

const Equipe = () => {
  return (
    <section className="min-h-screen bg-[#bf855d]/80 flex flex-col justify-center items-center py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Parte de cima: texto e dois cards */}
        <div className="w-full flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="md:w-1/2 flex flex-col justify-start items-start">
            <h2 className="text-4xl font-bold text-[#2d3d28] mb-2 text-left">EQUIPE</h2>
            <p className="text-gray-700 mb-10 text-left">
              Nossas especialistas vão ajudar você a se sentir ainda melhor e realizar seus desejos de beleza.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-4 w-full">
              {equipeDados.slice(0,2).map((m, idx) => (
                <div key={idx} className="bg-white border border-black shadow-md flex flex-col items-center p-0 pb-2 transition-all duration-200 hover:border-[#e4c6a9] hover:bg-[#fcead9]/60 hover:shadow-lg" style={{ minHeight: 220, maxWidth: 180 }}>
                  <div className="w-full h-28 flex items-center justify-center overflow-hidden border-b border-black">
                    <img src={m.foto} alt={m.nome} className="w-full h-full object-cover" style={{ aspectRatio: '1/1', maxHeight: '112px', maxWidth: '100%' }} />
                  </div>
                  <div className="w-full flex flex-col items-center px-2 pt-2">
                    <h3 className="text-sm font-bold text-[#2d3d28] mb-1 text-center">{m.nome}</h3>
                    <span className="text-xs font-semibold text-gray-700 mb-1 text-center uppercase tracking-wide">{m.cargo}</span>
                    <p className="text-xs text-gray-500 text-center">{m.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Parte de baixo: cards restantes */}
        <div className="w-full flex flex-col">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {equipeDados.slice(2).map((m, idx) => (
              <div key={idx} className="bg-white border border-black shadow-md flex flex-col items-center p-0 pb-2 transition-all duration-200 hover:border-[#e4c6a9] hover:bg-[#fcead9]/60 hover:shadow-lg" style={{ minHeight: 220, maxWidth: 180 }}>
                <div className="w-full h-28 flex items-center justify-center overflow-hidden border-b border-black">
                  <img src={m.foto} alt={m.nome} className="w-full h-full object-cover" style={{ aspectRatio: '1/1', maxHeight: '112px', maxWidth: '100%' }} />
                </div>
                <div className="w-full flex flex-col items-center px-2 pt-2">
                  <h3 className="text-sm font-bold text-[#2d3d28] mb-1 text-center">{m.nome}</h3>
                  <span className="text-xs font-semibold text-gray-700 mb-1 text-center uppercase tracking-wide">{m.cargo}</span>
                  <p className="text-xs text-gray-500 text-center">{m.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Equipe
