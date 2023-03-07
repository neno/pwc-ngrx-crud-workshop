/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    // extend: {
    //   colors: {
    //     primary: "#2563eb",
    //     danger: "#ef4444",
    //     secondary: "#9ca3af",
    //     disabled: "#9ca3af",
    //     disabledBg: "#e5e7eb",
    //   },
    // },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
