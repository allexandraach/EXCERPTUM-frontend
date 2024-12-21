import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["dist/"]
  },
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: globals.browser
    },
    settings: {
      react: {
        version: "detect",
      }
    },
    plugins: { react: pluginReact, prettier: pluginPrettier, },
    rules: {
      "no-multi-spaces": "error",
      "space-before-blocks": "error",
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      "no-underscore-dangle": "off",
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "no-bitwise": "off",
      "func-names": "off",
      "no-param-reassign": ["error", { "props": false }],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat['jsx-runtime']
];


