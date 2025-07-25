import React from 'react'
import fsafefw from '../assets/fsafefw.jpg'


const servicos = [
  {
    imagem: fsafefw,
    titulo: 'Corte de cabelo',
    descricao: 'Cortes modernos e personalizados para todos os estilos.',
  },
  {
    imagem: fsafefw,
    titulo: 'Coloração',
    descricao: 'Cores vibrantes e técnicas inovadoras para realçar sua beleza.',
  },
  {
    imagem: fsafefw,
    titulo: 'Tratamento capilar',
    descricao: 'Cuidados especiais para fortalecer e dar brilho aos cabelos.',
  },
  {
    imagem: fsafefw,
    titulo: 'Design de sobrancelha',
    descricao: 'Sobrancelhas perfeitas para valorizar seu olhar.',
  },
  {
    imagem: fsafefw,
    titulo: 'Barbearia',
    descricao: 'Serviços completos para barba e cabelo masculino.',
  },
  {
    imagem: fsafefw,
    titulo: 'Maquiagem',
    descricao: 'Maquiagem profissional para todas as ocasiões.',
  },
]

const Servicos = () => {
  return (
    <section className="bg-[#f1ede7] py-12">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-[#2d3d28] font-semibold mb-10">SERVIÇOS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((servico, idx) => (
            <div
              key={idx}
              className="border-4 border-[#5C3C21] bg-white p-3"
            >
              <img
                src={servico.imagem}
                alt={servico.titulo}
                className="w-full h-32 object-cover mb-3"
              />
              <h3 className="text-base font-semibold text-gray-800 mb-1">{servico.titulo}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-snug">{servico.descricao}</p>
              <button className="text-sm text-gray-800 font-medium border-b border-gray-800 pb-0.5 hover:opacity-75 transition">
                LER MAIS
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Servicos



