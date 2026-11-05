import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cpa: {
          navy: {
            DEFAULT: "#101D33", // Deep navy
            deep: "#101D33",
            secondary: "#192B46", // Secondary navy
            darkest: "#0A1322",
            border: "#1F3352",
          },
          white: "#FFFFFF",
          offwhite: "#F5F7FA", // Off-white ground
          surface: {
            subtle: "#EDF2F7",
            border: "#E2E8F0",
          },
          gold: {
            DEFAULT: "#B89A5A", // Gold accent
            light: "#C9AD6D",
            hover: "#D4B97B",
            dark: "#9E8246",
            surface: "rgba(184, 154, 90, 0.12)",
          },
          text: {
            primary: "#172033", // Primary text
            secondary: "#626D7D", // Secondary text
            muted: "#8A96A6",
            inverse: "#FFFFFF",
            "inverse-muted": "#A2ADC0",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "Cambria", "Times New Roman", "serif"],
        mono: ["var(--font-mono)", "Space Mono", "monospace"],
      },
      maxWidth: {
        container: "1240px",
      },
      borderRadius: {
        sm: "3px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(16, 29, 51, 0.05)",
        card: "0 4px 16px rgba(16, 29, 51, 0.06)",
        dropdown: "0 10px 30px rgba(16, 29, 51, 0.12)",
        glow: "0 0 20px rgba(184, 154, 90, 0.25)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        beam: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(250%) skewX(-20deg)" },
        },
        auraGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.08)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s infinite",
        "pulse-slow": "pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 4s ease-in-out infinite",
        "gradient-move": "gradientMove 8s ease infinite",
        marquee: "marquee 25s linear infinite",
        beam: "beam 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "aura-glow": "auraGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
