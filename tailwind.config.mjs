/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        inconsolata: ['var(--font-inconsolata-mono)'],
      },
      colors: {
        primarias: {
          black: '#FFFF00',
          mid: '#FFFF4D',
          light: '#FFFF99'
        },
        secundarias: {
          verdeAgua: '#1FBFAE',
          roxo: '#9147FF',
          vermelho: '#AE2831',
          azul: '#2A52F0',
          azulMarinho: '#40C2E9'
        },
        neutras: {
          white: '#F5F5F5',
          black: '#171819',
          gray: '#3A3A3A',
          mid: '#848484',
          whiteMid: '#E7E7E7',
          prata: '#C7C7C7'
        },
        aviso: {
          alert: '#D4D41C'
        },
        erro: {
          black: '#FF0D11',
          light: '#FF5E5E'
        },
        sucess: {
          black: '#0BBF02',
          light: '#72FE6B'
        },
        customColor: {
          primary: 'var(--color-primary)',
        }
      }
    },
  },
  plugins: [],
};
