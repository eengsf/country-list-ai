import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // dark: "#101010",
        dark: "#000000",
        light: "#ffffff",

        primary: "#013b2d",
        secondary: "#1fe72d",

        sunThin: "#fef9c2",
        sunMedium: "#f97216",
        sunStrong: "#991b1c",
        moonThin: "#3b82f6",
        moonMedium: "#1e1b4a",
        moonStrong: "#000000",
      },
    },

  },
  plugins: [],
} satisfies Config;
