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
      }
    }
  },
  plugins: []
})
