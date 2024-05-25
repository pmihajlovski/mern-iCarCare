/** @type {import('tailwindcss').Config} */
//here you can put styles that you want to override in tailwind
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],//specificies the file type that we want to apply tailwind styles
  theme: {
    extend: {},
    container: {
      padding: {
        //responsive properties
        md: "10rem",
      }
    },
  },
  plugins: [],
}

