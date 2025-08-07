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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Adicione outros plugins se precisar
  ],
};
