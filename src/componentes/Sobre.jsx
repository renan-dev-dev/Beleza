import React from 'react'

import foto1 from '../assets/gseeef.jpg'
import foto2 from '../assets/imgh.avif'
import foto3 from '../assets/sa1.jpeg'
import pl4 from '../assets/pl4.png'

const Sobre = () => {
  return (
    <section className="min-h-screen bg-[#f1ede7]/80 flex flex-col justify-center items-center py-16">
      {/* Seção Sobre */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Lado esquerdo - Imagens decorativas */}
          <div className="flex flex-col md:flex-row gap-6 w-full p-4 md:p-8 rounded-[32px] relative">
            {/* Quadrado decorativo superior, sem borda, só fundo */}
            <div className="absolute left-0 top-0 w-44 h-32 rounded-[16px] z-0 bg-[#e4c6a9] shadow-lg"></div>
          
            <div className="absolute left-30 top-55 w-60 h-70 rounded-[24px] z-0 border-6 border-[#e4c6a9] bg-transparent "></div>
            
            {/* Imagem grande à esquerda com canto especial inferior esquerdo */}
            <div className="flex-1 relative overflow-hidden rounded-tl-[32px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[96px]">
              <img 
                src={foto1}  
                alt="Salão de beleza" 
                className="w-full h-full object-cover z-10"
              />
            </div>

            {/* Duas imagens menores à direita, empilhadas */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="rounded-[16px] overflow-hidden">
                <img 
                  src={foto2}  
                  alt="Procedimento facial" 
                  className="w-full z-10 relative rounded-[24px] "
                  style={{ display: 'block', maxWidth: '80%', height: 'auto', objectFit: 'contain', margin: '0 auto' }}
                />
              </div>
              <div className="relative h-[150px]">
  <img 
    src={foto3}  
    alt="Equipe do salão" 
    className="absolute  -left-10 w-full h-[150px] object-cover rounded-bl-[64px] rounded-[20px] z-20 "
  />
</div>
            </div>
          </div>

          {/* Lado direito - Conteúdo */}
          <div className="space-y-6 mr-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#2d3d28] mb-8">
              Sobre nós
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                O diferencial do nosso salão é a tecnologia moderna, eficiente e princípios sólidos de atendimento.
              </p>
              <p>
                Oferecemos uma gama completa de serviços, de cortes a cuidados corporais. Sempre há promoções e descontos para clientes fiéis.
              </p>
              <p>
                Nossa equipe altamente profissional está pronta para oferecer o melhor cuidado para cabelo, rosto e corpo, personalizado para você.
              </p>
            </div>
          </div>
        </div>
        
        {/* Imagem PNG decorativa no fundo */}
        <img
          src={pl4}
          alt="Decoração"
          className="absolute -right-110 top-5 opacity-4 pointer-events-none w-160 h-auto"
          style={{ zIndex: 0 }}
        />
      </div>
    </section>
  )
}

export default Sobre
