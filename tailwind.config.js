/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./astro.config.mjs",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        "secondary-background": "var(--color-secondary-background)",
      },
    },
  },
  plugins: [],
};
