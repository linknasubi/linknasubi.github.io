/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Next.js padrão
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Next.js antigo/páginas extras
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Seus componentes globais
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sansation', 'ui-sans-serif', 'system-ui'],
        mono: ['Geist Mono', 'Menlo', 'monospace'], // Se quiser, pode deixar só 'monospace'
      },
      colors: {
        // Exemplos de cores customizadas que já usa no layout
        darkbg: "#151414",
        deepdark: "#131313",
        // Adicione outras cores do seu design system, se desejar
      },
        animation: {
        'wipe-up': 'wipe-up 0.8s ease-in-out forwards',
        'wipe-down': 'wipe-down 0.8s ease-in-out forwards',
      },
      keyframes: {
        'wipe-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'wipe-down': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Adicione outros plugins se precisar
  ],
};
