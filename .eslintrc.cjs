module.exports = {
  root: true,
  env: { es2022: true, node: true },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  extends: ["eslint:recommended", "plugin:import/recommended", "prettier"],
  settings: { "import/resolver": { node: true } },
  rules: { "import/order": ["warn", { "newlines-between": "always" }] }
};
