/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/hugo-book/layouts/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        // используем CSS‑переменные, которые уже задаются в _main.scss
        'dojo-accent': 'rgb(var(--landing-accent-rgb) / 1)',
      },

    },
  },
  plugins: [],
}

