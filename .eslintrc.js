module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@next/next/recommended",
    "prettier",
  ],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/require-await": "off",
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
