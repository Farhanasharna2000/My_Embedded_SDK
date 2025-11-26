// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";

export default [
  // ---------- CJS + ESM for React Frameworks ----------
  {
    input: "src/index.ts",
    output: [
      { file: "dist/index.cjs", format: "cjs", sourcemap: true },
      { file: "dist/index.mjs", format: "esm", sourcemap: true }
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        babelHelpers: "bundled",
        extensions: [".ts", ".tsx"],
        presets: ["@babel/preset-react"]
      })
    ]
  },

  // ---------- IIFE BUILD FOR PLAIN HTML ----------
  {
    input: "src/bundle.tsx",
    output: {
      file: "dist/bundle.js",
      format: "iife",
      name: "EmbeddedFormBundle",
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        babelHelpers: "bundled",
        extensions: [".ts", ".tsx"],
        presets: ["@babel/preset-react"]
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        preventAssignment: true
      })
    ]
  }
];
