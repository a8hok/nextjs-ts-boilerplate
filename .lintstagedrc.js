module.exports = {
  // Run type-check on changes to TypeScript files
  "**/*.ts?(x)": () => "yarn type-check",
  // Lint & Prettify TS and JS files
  "**/*.(ts|tsx|js)": (filenames) => [
    `npm run lint:fix . ${filenames.join(" ")}`,
    `npm run prettier --write ${filenames.join(" ")}`,
  ],
};
