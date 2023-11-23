import type { Config } from 'tailwindcss/types/config'
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['TF2 Build', 'sans-serif'],
      },
      colors: {
        quality: {
          normal: '#B2B2B2',
          unique: '#FFD700',
          vintage: '#476291',
          genuine: '#4D7455',
          strange: '#CF6A32',
          unusual: '#8650AC',
          haunted: '#38F3AB',
          collectors: '#AA0000',
          decorated: {
            DEFAULT: '#FAFAFA',
            civilian: '#B0C3D9',
            freelance: '#5E98D9',
            mercenary: '#4B69FF',
            commando: '#8847FF',
            assassin: '#D32CE6',
            elite: '#EB4B4B',
          },
          community: '#70B04A',
          selfmade: '#70B04A',
          valve: '#A50F79',
          unset: '#B2B2B2',
        },
      },
    },
  },
} satisfies Config
