import React from 'react'
import NavBar from './componentes/NavBar.jsx'
import Hero from './componentes/Hero.jsx'
import Sobre from './componentes/Sobre.jsx'
import Equipe from './componentes/Equipe.jsx'
import Servicos from './componentes/Servicos.jsx'
import Galeria from './componentes/Galeria.jsx'
import Depoimentos from './componentes/Depoimentos.jsx'
import Contato from './componentes/Contato.jsx'
import Footer from './componentes/Footer.jsx'



const App = () => {
  return (
    <div>
      <NavBar />
      <Hero  />
      <Sobre  />
      <Equipe />
      <Servicos  />
      <Galeria />
      <Depoimentos />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
