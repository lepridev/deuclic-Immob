/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#ffffff",
      primary: {
        400: "#62CFAB",
        DEFAULT: "#0FCA98",
      },
      secondary: {
        DEFAULT: "#FFA50D",
        400: "#FFA50D",
      },
      gray: {
        300: "#FAFAFA",
        400: "#F2F2F2",
        500: "#E5E5E5",
        600: "#B2B2B2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#2D3954",
      },
      alert: {
        danger: "#FF4E4E",
        success: "#90DA1A",
        warning: "#FEB72F",
      },
    },
    fontSize: {
      "8xl": [
        "72px",
        {
          lineHeight: "120px",
          letterSpacing: "-6px",
          fontWeight: "500",
        },
      ],
      "7xl": [
        "52px",
        {
          lineHeight: "80px",
          letterSpacing: "-4.5px",
          fontWeight: "600",
        },
      ],
      "6xl": [
        "48px",
        {
          lineHeight: "60px",
          letterSpacing: "-2.5px",
          fontWeight: "500",
        },
      ],
      "5xl": [
        "40px",
        {
          lineHeight: "54px",
          letterSpacing: "-1.6px",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "32px",
        {
          lineHeight: "44px",
          letterSpacing: "-1.2px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "26px",
        {
          lineHeight: "34px",
          letterSpacing: "-0.8px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "22px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      xl: [
        "18px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      lg: [
        "16px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.8px",
          fontWeight: "400",
        },
      ],
      base: [
        "15px",
        {
          lineHeight: "25px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "23px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
      ],
      caption1: [
        "13px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
      ],
      caption2: [
        "12px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.3px",
          fontWeight: "400",
        },
      ],
      caption3: [
        "10px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.5px",
          fontWeight: "400",
        },
      ],
      caption4: [
        "8px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.2px",
          fontWeight: "400",
        },
      ],
    },
    // borderRadius: {
    //   DEFAULT: "8px",
    //   full: "999px",

    // },

    extend: {},
  },
  plugins: [],
};
