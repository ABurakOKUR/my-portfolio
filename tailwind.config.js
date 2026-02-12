/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Görseldeki Dark Mode geçişi için kritik!
  theme: {
    extend: {
      colors: {
        'custom-purple': '#4731D3', // Tasarımdaki mor
        'custom-dark': '#252128',   // Dark mode arka planı
      },
    },
  },
  plugins: [],
}