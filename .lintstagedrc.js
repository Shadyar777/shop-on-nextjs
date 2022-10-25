const path = require('path')

const buildEslintCommand = (filenames) => {
  return [
    `next lint --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' --file ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ]
}

module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'tsc --project tsconfig.json --pretty --noEmit',

  // Lint then format TypeScript and JavaScript files
  '*.{js,jsx,ts,tsx}': buildEslintCommand,

  '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
}
