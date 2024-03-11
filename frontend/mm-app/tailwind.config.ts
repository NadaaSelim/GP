import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      black: { 900: "#000000", "900_87": "#00000087", "900_02": "#000000" },
      white: { A700: "#ffffff", A700_02: "#ffffff" },
      yellow: { 100: "#ffe6cc", "100_02": "#ffe6cc" },
      blue: { 100: "#c7ceff", "100_02": "#c7ceff" },
      green: { 500: "#31d06c" },
      cyan: { 400: "#2fbede" },
      pink: { 200: "#f7a5b9" },
      orange: { A200: "#f9a644" },
      light_blue: { A700: "#008eff" },
      green_700: "#149d52",
      blue_gray_500: "#737b8b",
      indigo: {
        50: "#dde4f0",
        100: "#c1bbeb",
        200: "#a6abc8",
        300: "#707fdd",
        400: "#5664c0",
        "400_02": "#5969cf",
        "400_01": "#5a67ba",
        "400_06": "#5969cf",
        "400_03": "#6463d6",
        A100: "#8593ec",
        "400_07": "#5a67ba",
      },
      blue_gray: {
        900: "#273240",
        "900_75": "#1f384c75",
        "900_01": "#1f384c",
        "100_02": "#c7cad8",
        "500_87": "#737b8b87",
      },
      gray: {
        50: "#fafbfd",
        200: "#e5e8eb",
        800: "#453d3d",
        "900_96": "#12121296",
        "100_01": "#f5f6fa",
        "100_03": "#f1f2f7",
        "900_87": "#08243187",
        "200_01": "#eee9e9",
        "900_99": "#12121299",
        "300_02": "#e2e7e7",
        "100_02": "#f3f3f3",
        "100_07": "#f5f6fa",
        "400_01": "#bebbbb",
      },
      
      
    },
    //fontFamily: { poppins: "Poppins", inter: "Inter", merienda: "Merienda" },
    boxShadow: { xs: "0px 2px  1px 0px #4048520c", sm: "0px 4px  7px 0px #00000068" },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
