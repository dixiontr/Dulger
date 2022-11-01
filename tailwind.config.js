/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/assets/images/hero/heroimage.jpg')",
        'why-us-image': "url('/assets/images/hero/why-us-image.jpg')",
        'about-us-image': "url('/assets/images/hero/about-us-image.webp')",
      }
    },
  },
  plugins: [],
}
