import type { Config } from "tailwindcss";

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
        primary: "rgb(42,39,72)"
      },
      keyframes: {
        colorCycle: {
          '0%': { color: '#9ca3af' }, // gray-400
          '33%': { color: '#000000' }, // black
          '66%': { color: '#d1d5db' }, // gray-300
          '100%': { color: '#9ca3af' }, // gray-400 again
        },
      },
      animation: {
        colorCycle: 'colorCycle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
