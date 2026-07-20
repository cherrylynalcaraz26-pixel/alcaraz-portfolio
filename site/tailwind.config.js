/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        "paper-raised": "rgb(var(--color-paper-raised) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--color-accent-soft) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        rule: "rgb(var(--color-rule) / <alpha-value>)",
        tbd: "rgb(var(--color-tbd) / <alpha-value>)",
        cdsc: "#E0480A",
      },
      fontFamily: {
        display: ["Manrope", "-apple-system", "Segoe UI", "sans-serif"],
        sans: ["Inter", "-apple-system", "Segoe UI", "sans-serif"],
        data: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        sheet: "960px",
      },
    },
  },
  plugins: [],
};
