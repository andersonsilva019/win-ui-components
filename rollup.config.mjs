import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };

export default [
  // JS (CJS + ESM)
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main, // dist/cjs/index.js
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module, // dist/esm/index.js
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json", // sem declarações
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },

  // Types (.d.ts)
  {
    input: "dist/types/index.d.ts", // saída do tsc (tsconfig.types.json)
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
