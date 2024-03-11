import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    ".\page.tsx"
  ],
  theme: {
    extend: {
      
        colors: {
            gray: {
              50: "#fafbfd",
              "900_96": "#12121296",
              "100_01": "#f5f6fa",
              "100_03": "#f1f2f7",
              "900_87": "#08243187",
              "400_01": "#bebbbb",
              "100_02": "#f3f3f3",
              "100_07": "#f5f6fa",
            },
            black: { 900: "#000000", "900_02": "#000000" },
            white: { A700: "#ffffff", A700_02: "#ffffff" },
            blue_gray: { 100: "#cdcaca", 900: "#273240", "900_75": "#1f384c75", "900_01": "#1f384c" },
            yellow: { 100: "#ffe6cc", "100_02": "#ffe6cc" },
            indigo: {
              100: "#c1bbeb",
              300: "#707fdd",
              "400_02": "#5969cf",
              "400_01": "#5a67ba",
              "400_06": "#5969cf",
              "400_07": "#5a67ba",
            },
            blue: { "100_02": "#c7ceff" },
            blue_gray_800: "#1f485b",
          },
          boxShadow: {
            xs: "-4px 4px  26px 0px #4b6477af",
            sm: "0px 4px  7px 0px #00000068",
            md: "0px 2px  1px 0px #4048520c",
          },
          fontFamily: { poppins: "Poppins" },
    
    },
    //fontFamily: { poppins: "Poppins", inter: "Inter", merienda: "Merienda" },
    boxShadow: { xs: "0px 2px  1px 0px #4048520c", sm: "0px 4px  7px 0px #00000068" },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
