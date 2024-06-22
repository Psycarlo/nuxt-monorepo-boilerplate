import sharedConfig from '@nuxt-monorepo-boilerplate/tailwind-config/tailwind.config'
import type { Config } from 'tailwindcss'

export default (<Partial<Config>>{
  presets: [sharedConfig]
})
