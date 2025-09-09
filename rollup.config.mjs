import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
import terser from '@rollup/plugin-terser';

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        plugins: [terser()]
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        plugins: [terser()]
      },
    ],
    plugins: [
      resolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },

  {
    input: "dist/types/index.d.ts", // saída do tsc (tsconfig.types.json)
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
