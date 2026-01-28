import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ["dist/", "node_modules/", ".astro/"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.astro", "**/*.mjs"],
    rules: {
      // Relax rules for Astro projects - unused vars/imports are common during development
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      // Allow triple-slash references for Astro env.d.ts
      "@typescript-eslint/triple-slash-reference": "off",
      // Allow third-party tracking scripts patterns
      "@typescript-eslint/no-unused-expressions": "off",
      "prefer-rest-params": "off",
    },
  },
];
