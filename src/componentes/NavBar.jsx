import React, { useState, useEffect } from 'react'

const NavBar = ({
  brand = 'leidy',
  logoSrc = '/logo.png',
  logoAlt = 'Logo',
  ctaText = 'Agendar',
  ctaHref = '#contato',
}) => {
  const [openNav, setOpenNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' },
  ]

  const renderLinks = () => (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((link, index) => (
        <li key={index} className="p-1 font-normal text-[#5C3C21]">
          <a
            href={link.href}
            className="flex items-center relative group transition-colors hover:text-[#bfa16b]"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bfa16b] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </li>
      ))}
    </ul>
  )

  const renderCTA = (className = '') => (
    <a
      href={ctaHref}
      className={`btn41-43 btn-43 px-4 py-2 text-sm font-medium   transition-all ${className}`}
    >
      {ctaText}
    </a>
  )

  const renderLogo = () => (
    <a href="/" className="flex items-center gap-2">
      {logoSrc && <img src={logoSrc} alt={logoAlt} className="h-8 w-auto" />}
      <span className="text-lg font-semibold text-[#5C3C21]">{brand}</span>
    </a>
  )

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-[background-color,box-shadow] duration-500 ease-in-out ${
        scrolled ? 'bg-[#e3d4ca] shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 lg:px-8 lg:py-4">
        {renderLogo()}
        <div className="hidden lg:flex items-center gap-6">
          {renderLinks()}
          {renderCTA()}
        </div>
        <button
          className="lg:hidden  focus:outline-none"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {openNav && (
        <div className="lg:hidden px-4 pt-2 pb-4 border-t bg-[#fff7f2]">
          {renderLinks()}
          <div className="mt-4">{renderCTA('w-full block text-center')}</div>
        </div>
      )}
    </header>
  )
}

export default NavBar
