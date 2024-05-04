module.exports= {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx1}"
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: {
        max: "1050px"
      },
      sm: {
        max: "550px"
      }
    },
    extend: {
      colors: {
        gray: {
          50: "#fafbfd",
          100: "#f5f6fb",
          200: "#e5e8eb",
          500: "#a098ae",
          600: "#908383",
          800: "#453d3d",
          900: "#121212",
          "900_96": "#12121296",
          "100_01": "#15f6fa",
          "100_03": "#f1f2f7",
          
          "900_87": "#08243187",
          "300_07": "#e2e7e7",
          "200_03": "#e5e8eb",
          "300_08": "#dadada",
          "100_08": "#flf2f7",
          "900_99_02": "#12121299",
          "100_07": "#f5f6fa",
          "300_06": "#dbdde8",
          "400_03": "#c4c4c4",
          "200_01": "#eee9e9",
          "400_01": "#bebbbb",
          "100_02": "#f3f3f3",
          "100_04": "#f6f3f3",
          "900_99": "#12121299",
          "300_02": "#e2e7e7",
        },
        black: {
          900: "#0000000",
          "900_02": "#000000",
          "900_87_02": "#000000087",
          "900_87": "#00000087"
        },
        white: {
          A700: "#ffffff",
          A700_02: "#ffffff",
          A800:"F6F6FB"
        },
        blue_gray: {
          lee: "#cdcace",
          400: "#7f8690",
          900: "#273240",
          "900_75": "#1f384c75",
          "900_01": "#1f384c",
          "500_87_02": "#737b8b87",
          "100_06": "#c7cad8",
          "900_05": "#1f384c",
          "900_75_02": "#1f384c75",
          "400_05": "#888888",
          "900_06": "#273240",
          "100_02": "#c7cad8",
          "500_87": "#737b8b87",
          "900_02": "#2d3748",
        },
        yellow: {
          100: "#ffe6cc",
          "100_02": "#ffe6cc"
        },
        indigo: {
          50: "#dde4f0",
          100: "#c1bbeb",
          200: "#a6abc8",
          300: "#707fdd",
          400: "#5664c0",
          500: "#4d44b5",
          900: "#303972",
          "400_02": "#5969cf",
          "400_01": "#5a67ba",
          "400_06": "#5969cf",
          "400_03": "#6463d6",
          A100: "#8593ec",
          "400_07": "#5a67ba"
        },
        blue: {
          100: "#c7ceff",
          "100_02": "#c7ceff"
        },
        green: {
          500: "#31d06c",
          "500_02": "#31d06c",
          "700_99_02": "#149d5299"
        },
        orange: {
          A200_02: "#f9a644",
          A200: "#f9a644"
        },
        red: {
          "500_99_02": "#ff2383a99"
        },
        amber: {
          A400_99_02: "#ffc00099"
        },
        light_blue: {
          A700_02: "#008eff",
          A700: "#008eff"
        },
        cyan: {
          400: "#2fbede"
        },
        pink: {
          200: "#f7a5b9"
        }
      },
      boxShadow: {
        xs: "0px 4px 7px 0px #00000068",
        sm: "0px 10px 20px 0px #40485259",
        md: "-4px 4px 26px 0px #4b6477af",
        lg: "0px 2px 1px 0px #4048520c",
        xl: "0px 0px 2px 0px #0000003f, 0px 23.4px 58px 0px #bf156c0c"
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        mulish: "Mulish",
        merienda: "Merienda"
      },
      opacity: {
        0.5: 0.5,
        0.7: 0.7,
        0.8: 0.8,
        0.9: 0.9
      },
      textShadow: {
        ts: "0px 4px 12px #00000023",
        tsl: "0px 6.58px 15px #00000023"
      }
    },
    plugins: [require("@tailwindcss/forms")]
  }
};




// import type { Config } from "tailwindcss";
// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
      
//       black: { 900: "#000000", "900_87": "#00000087", "900_02": "#000000" },
//       white: { A700: "#ffffff", A700_02: "#ffffff" },
//       yellow: { 100: "#ffe6cc", "100_02": "#ffe6cc" },
//       blue: { 100: "#c7ceff", "100_02": "#c7ceff" },
//       green: { 500: "#31d06c" },
//       cyan: { 400: "#2fbede" },
//       pink: { 200: "#f7a5b9" },
//       orange: { A200: "#f9a644" },
//       light_blue: { A700: "#008eff" },
//       green_700: "#149d52",
//       blue_gray_500: "#737b8b",
//       indigo: {
//         50: "#dde4f0",
//         100: "#c1bbeb",
//         200: "#a6abc8",
//         300: "#707fdd",
//         400: "#5664c0",
//         "400_02": "#5969cf",
//         "400_01": "#5a67ba",
//         "400_06": "#5969cf",
//         "400_03": "#6463d6",
//         A100: "#8593ec",
//         "400_07": "#5a67ba",
//       },
//       blue_gray: {
//         900: "#273240",
//         "900_75": "#1f384c75",
//         "900_01": "#1f384c",
//         "100_02": "#c7cad8",
//         "500_87": "#737b8b87",
//       },
//       gray: {
//         50: "#fafbfd",
//         200: "#e5e8eb",
//         800: "#453d3d",
//         "900_96": "#12121296",
//         "100_01": "#f5f6fa",
//         "100_03": "#f1f2f7",
//         "900_87": "#08243187",
//         "200_01": "#eee9e9",
//         "900_99": "#12121299",
//         "300_02": "#e2e7e7",
//         "100_02": "#f3f3f3",
//         "100_07": "#f5f6fa",
//         "400_01": "#bebbbb",
//       },
      
      
//     },
//     //fontFamily: { poppins: "Poppins", inter: "Inter", merienda: "Merienda" },
//     boxShadow: { xs: "0px 2px  1px 0px #4048520c", sm: "0px 4px  7px 0px #00000068" },
//   },
//   plugins: [require("@tailwindcss/forms")],
// };
// export default config;
