import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        habito: {
          teal: {
            primary: "#0D9488",
            deep: "#0A6B61",
            light: "#E6F7F5",
          },
          neutral: {
            dark: "#1F2937",
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-lora)"],
      }
    },
  },
  plugins: [],
};
export default config;
