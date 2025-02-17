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
        gray: {
          100: "#eee9e6",
          200: "#193337",
          300: "#747c7d",
          400: "#1d1d1d",
        },
        pink: {
          100: "#efd5d0",
          200: "#c59288",
          300: "#fb6f92",
        },
        yellow: {
          100: "#f6ef7c",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
