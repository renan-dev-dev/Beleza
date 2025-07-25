export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        assinatura: ['"Mr De Haviland"', 'cursive'], // ← CORRIGIDO AQUI
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '.5rem',
          sm: '1rem',
        },
      },
    },
  },
}