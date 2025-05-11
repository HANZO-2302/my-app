import "tailwindcss"

module.exports = {
  theme: {
    extend: {
      // Добавляет will-change: transform
      willChange: {
        'transform': 'transform',
      },
    },
  },
  plugins: [
    // Добавляет кастомные утилиты для мобильной прокрутки
    function ({ addUtilities }) {
      const newUtilities = {
        // Аналог .scroll-touch-smooth
        '.scroll-touch': {
          '-webkit-overflow-scrolling': 'touch',
        },
        // Аналог @media (pointer: coarse) .scroll-area
        '@media (pointer: coarse)': {
          '.scroll-area': {
            '-webkit-overflow-scrolling': 'touch',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}