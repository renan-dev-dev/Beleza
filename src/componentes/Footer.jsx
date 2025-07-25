import React from 'react';
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
} from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="bg-[#281000] text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* Logo */}
        <div>
          <h2 className="text-xl font-semibold text-white">Leidy</h2>
        </div>

        {/* Links de navegação */}
        <div>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Serviços</a></li>
            <li><a href="#about" className="hover:text-white">Sobre mim</a></li>
            <li><a href="#reviews" className="hover:text-white">Avaliações</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white">Contatos</a></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <p className="text-sm mb-2">Estamos nas redes</p>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-green-400">
              <IconBrandWhatsapp size={20} />
            </a>
            <a href="#" className="text-white hover:text-pink-400">
              <IconBrandInstagram size={20} />
            </a>
            
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="mt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p className="text-center text-sm text-gray-500">
  Ivory Skin Bar® • {new Date().getFullYear()}
</p>

        <p>
          <a style={{ fontFamily: '"Mr De Haviland", cursive' }} href="#" className="text-white font-assinatura hover:text-orange-100 text-3xl" >
            Renan|Dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

