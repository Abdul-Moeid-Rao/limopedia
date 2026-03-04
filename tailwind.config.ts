import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#DBEAFE",
        background: "#F0F9FF",
        navy: {
          light: "#112240",
          DEFAULT: "#1E3A5F",
          dark: "#0a192f",
        },
        accent: "#0EA5E9",
        gold: {
          DEFAULT: "#C8922A",
          hover: "#A67B23",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
