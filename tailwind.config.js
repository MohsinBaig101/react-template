module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#2f3033",
        darkBlack: "#1E1014",
        gray: "#dee2e3",
        darkGray: "#2f3033",
        lightGray: "#C6C7C4",
        lighterGray: "#808080",
        foggySummer: "#F6F7F8",
        GeminiGray: "#707070",
        Sonia: "#EB5A32",
        OlderGray: "#B2B2B2",
        Frei: "#3B3B3B",
        CharcoalSoul: "#434343",
      },
      spacing: {
        49: "12.5rem",
      },
      maxWidth: {
        "8xl": "37.75rem",
        "9xl": "13rem",
        "95%": "95%",
        "90%": "90%",
        "85%": "85%",
        "80%": "80%",
        md: "26.563rem",
      },
      minWidth: {
        36: "2.25rem",
      },
      borderRadius: {
        20: "1.25rem",
        "50%": "50%",
        "l-t-b": "6px 0px 0px 6px",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "22px": "1.375rem",
      },
      boxShadow: {
        sm: "2px 4px 20px #030E1A14",
        xs: "0px 2px 6px #00000014",
        "3xl": "2px 2px 15px #04041C14;",
        "4xl": "0px 2px 12px #040B1D1F;",
      },
      width: {
        23: "1.438rem",
        53: "13.3rem",
        "70%": "70%",
        "30%": "30%",
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      },
      screens: {
        "1xl": "1300px",
        xs: "992px",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  // eslint-disable-next-line global-require, import/no-unresolved
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
