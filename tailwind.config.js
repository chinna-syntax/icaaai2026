/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        teal: {
          active: '#b45309', /* Premium Amber Accent */
          light: '#fef3c7' /* Soft Amber Light Accent */
        },
        neutralDark: '#111827', /* Premium Midnight Dark */
        neutralLight: '#f4f6f8', /* Clean Academic Off-White Background */
        lavender: '#c8a2ca', /* Soft Premium Lavender Accent */
        charcoal: '#212529', /* Soft Charcoal Black */
        slateGray: '#4A4A4A', /* Slate Gray */
        metaGray: '#555555', /* Accent/Meta text gray */
        accentRed: '#D9534F', /* Crimson Accent for Pricing */
        accentCoral: '#E07A5F' /* Coral Flag for Main CTAs */
      }
    },
  },
  plugins: [],
}
