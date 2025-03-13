/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./stories/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Add your custom colors here
          // 'primary': '#ff0000',
          // 'secondary': '#00ff00',
        },
        fontFamily: {
          // Add your custom fonts here
          // 'sans': ['Graphik', 'sans-serif'],
          // 'mono': ['Space Mono', 'monospace'],
          'nudista': ["var(--font-nudista)", "sans-serif"],
          'vcr-osd-mono': ["var(--font-vcr-osd-mono)", "monospace"],
   
        },
        spacing: {
          // Add custom spacing values
          // '72': '18rem',
          // '84': '21rem',
          // '96': '24rem',
        },
        // Extend other theme properties as needed
      },
    },
    plugins: [
      // Add any Tailwind CSS plugins here
      require('@tailwindcss/forms'),
      // require('@tailwindcss/typography'),
      // require('@tailwindcss/aspect-ratio'),
    ],
  }