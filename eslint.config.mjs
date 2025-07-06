import js from "@eslint/js";
import globals from "globals";
<<<<<<< HEAD
import tseslint from "typescript-eslint";
=======
>>>>>>> 06d54bcf6c8dc27281865e07fdbe3d5005963bea
import { defineConfig } from "eslint/config";


export default defineConfig([
<<<<<<< HEAD
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
=======
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
>>>>>>> 06d54bcf6c8dc27281865e07fdbe3d5005963bea
]);
