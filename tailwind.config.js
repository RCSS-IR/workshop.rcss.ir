/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1140px',
        },
      },
    }
  },
  plugins: []
};