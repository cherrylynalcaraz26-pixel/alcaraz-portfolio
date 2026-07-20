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
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--color-accent-soft) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        rule: "rgb(var(--color-rule) / <alpha-value>)",
        tbd: "rgb(var(--color-tbd) / <alpha-value>)",
        cdsc: "#E0480A",
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "'Arial Narrow'", "sans-serif"],
        sans: ["'Public Sans'", "-apple-system", "Segoe UI", "sans-serif"],
        data: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        sheet: "960px",
      },
    },
  },
  plugins: [],
};
