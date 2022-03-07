
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./scripts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#08fdd8",
        "secondary": "#fd1056",
        "gr" : "#515152",
        "bground": "#1D1D1D"
      },
      fontFamily:{
        "roboto": ["Roboto"],
        "redressed" : ["Redressed"],
        "lobs" : ["Lobster"],
        "pm": ["Kaushan Script"]
      }
    },
  },
  plugins: [],
  important: true,
}
