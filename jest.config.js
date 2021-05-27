module.exports = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.composition.{ts,tsx}'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@jesus-film)/)',
    '\\.pnp\\.[^\\/]+$'
  ],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/file-transform.js',
    '\\.(ts|tsx|js|jsx)$': 'babel-jest'
  }
}
