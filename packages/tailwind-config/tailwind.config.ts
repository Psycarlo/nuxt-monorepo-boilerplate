import type { Config } from 'tailwindcss'

export default (<Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          // Define your colors here
          primary: '#302CFB',

          light: '#FFFFFF',
          dark: '#282828'
        }
      },
      fontFamily: {
        // Define your fonts here
        brand: ['Inter', 'sans-serif']
      },
      animation: {
        // Define your animations here
        selectHide: 'selectHide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        selectDown: 'selectDown 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        selectLeft: 'selectLeft 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        selectUp: 'selectUp 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        selectRight: 'selectRight 150ms cubic-bezier(0.16, 1, 0.3, 1)'
      },
      keyframes: {
        // Define your keyframes here
        selectHide: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        selectDown: {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        selectLeft: {
          from: { opacity: '0', transform: 'translateX(6px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        selectUp: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        selectRight: {
          from: { opacity: '0', transform: 'translateX(-6px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: []
})
