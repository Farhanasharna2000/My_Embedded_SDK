import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';


export default [
  // 1️ React/Next.js projects (CJS + ESM)
  {
    input: "src/index.ts",
    output: [
      { file: "dist/index.cjs.js", format: "cjs", sourcemap: true },
      { file: "dist/index.esm.js", format: "esm", sourcemap: true }
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })]
  },

  // Browser / plain HTML (IIFE)
  {
    input: "src/bundle.tsx",
    output: {
      file: "dist/bundle.js",
      format: "iife",
      name: "EmptyBDFormBundle",
      sourcemap: true
    },
    plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    })
  ],
    external: [] // bundle React + ReactDOM inside if plain HTML users need it
  }
];