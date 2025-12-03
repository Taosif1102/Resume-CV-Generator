/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-color)',
        text: 'var(--text-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        panel: 'var(--panel-bg)',
        border: 'var(--border-color)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        ghost: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(-15px)', opacity: '0.6' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'ghost': 'ghost 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
