import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-deep": "#0a1428",
        navy: "#0f2547",
        "navy-light": "#1a3a5c",
        gold: "#d4a054",
        "gold-bright": "#e8b968",
        "gold-muted": "#8b6f3c",
        cream: "#faf8f3",
        "grey-light": "#a0aec0",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
};

export default config;
