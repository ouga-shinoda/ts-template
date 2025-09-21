module.exports = {
  root: true,
  env: { es2022: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module", project: false },
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  settings: { "import/resolver": { node: true } },
  rules: {
    "import/order": ["warn", { "newlines-between": "always" }],
  },
  overrides: [
    {
      files: ["**/*.ts"],
      rules: {
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      },
    },
  ],
};
