// rollup.config.mjs
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.min.js",
      format: "iife",
      name: "stringUtils",
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
};
