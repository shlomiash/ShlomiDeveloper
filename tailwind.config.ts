import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      animation: {
        'move-left' : "move-left 1s linear infinite"
      },

      keyframes: {
        'move-left': {
          '0%' : {
            transform : 'translateX(0%)'
          },
          '100%' :{
            transform : 'translateX(-150%)'
          }
        }
      },

      fontFamily:{
        sans:'var(--font-sans)',
        serif:'var(--font-serif)'
      }
    },
  },
  plugins: [],
};
export default config;
