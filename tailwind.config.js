/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a6cf7',
        secondary: '#5e17eb',
        light: '#f9f9f9',
        dark: '#111827',
        'text-primary': '#333',
        'text-light': '#767676',
        'border-color': '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 5px 15px rgba(0, 0, 0, 0.05)',
        'custom-medium': '0 10px 20px rgba(0, 0, 0, 0.1)',
        'custom-heavy': '0 15px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 