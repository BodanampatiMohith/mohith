/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fbi: {
          black: '#0a0a0a',
          gray: '#1a1a1a',
          'dark-gray': '#2a2a2a',
          red: '#dc143c',
          'blood-red': '#8b0000',
          'neon-green': '#00ff41',
        }
      },
      fontFamily: {
        'motel': ['Motel King', 'cursive'],
        'crimes': ['Fredoka One', 'sans-serif'],
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'scan-line': {
          '0%': { top: '-100%' },
          '100%': { top: '100%' },
        },
        'blood-drip': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(20px)', opacity: '0' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        glitch: 'glitch 0.3s infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'blood-drip': 'blood-drip 1.5s ease-in infinite',
        'particle-float': 'particle-float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
