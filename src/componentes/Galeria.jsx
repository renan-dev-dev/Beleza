import React, { useState } from 'react'
import img1 from '../assets/fr.jpg'
import img2 from '../assets/fr.jpg'
import img3 from '../assets/fr.jpg'
import img4 from '../assets/fr.jpg'
import img5 from '../assets/fr.jpg'
import img6 from '../assets/fr.jpg'
import img7 from '../assets/fr.jpg'
import img8 from '../assets/fr.jpg'


const categorias = [
  
  { nome: 'Cortes', chave: 'cortes' },
  { nome: 'Coloração', chave: 'coloracao' },
  { nome: 'Maquiagem', chave: 'maquiagem' },
  { nome: 'Massagem', chave: 'massagem' },
  { nome: 'Destaques', chave: 'destaques' },
]

const imagens = {
  cortes:   [img1, img2, img3, img4, img5, img6, img7, img8],      // Imagens do botão Cortes
  coloracao:[img2, img3, img4, img5, img6, img7, img8, img1],      // Imagens do botão Coloração
  maquiagem:[img3, img4, img5, img6, img7, img8, img1, img2],      // Imagens do botão Maquiagem
  massagem: [img4, img5, img6, img7, img8, img1, img2, img3],      // Imagens do botão Massagem
  destaques:[img5, img6, img7, img8, img1, img2, img3, img4],      // Imagens do botão Destaques
}

const Galeria = () => {
  const [categoria, setCategoria] = useState('cortes')

  return (
    <section className="min-h-screen bg-[#bf855d]/80 flex flex-col justify-center items-center py-16">
      <h2 className="text-3xl text-[#2d3d28] font-semibold mb-6">Galeria</h2>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categorias.map(cat => (
          <button
            key={cat.chave}
            onClick={() => setCategoria(cat.chave)}
            className={`px-4 py-2 rounded-full font-medium border ${
              categoria === cat.chave
                ? 'bg-[#ffeacb] border-[#2d3d28] text-[#2d3d28]'
                : 'bg-white border-gray-300 text-gray-600'
            } transition`}
          >
            {cat.nome}
            {/* Botão: {cat.chave} */}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {imagens[categoria].map((img, idx) => (
          <div key={idx} className="bg-white rounded-lg overflow-hidden shadow">
            <img src={img} alt={`Galeria ${idx + 1}`} className="w-full h-32 object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Galeria
