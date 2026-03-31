import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-unused-vars": "error",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
