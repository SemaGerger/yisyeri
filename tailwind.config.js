/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
       wiggleOnce: {
      '0%, 40%, 100%': { transform: 'rotate(0deg)' },
      '10%, 30%': { transform: 'rotate(8deg)' },
      '10%': { transform: 'rotate(-8deg)' },
     
    },
  },
  animation: {
    wiggleOnce: 'wiggleOnce 10s ease-in-out infinite',
  },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
}
