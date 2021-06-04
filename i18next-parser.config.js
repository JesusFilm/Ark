module.exports = {
  indentation: 4,
  lexers: {
    js: ['JsxLexer'],
    ts: ['JsxLexer'],
    jsx: ['JsxLexer'],
    tsx: ['JsxLexer'],
    default: ['JsxLexer']
  },
  locales: ['en'],
  output: 'build/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.{js,jsx,ts,tsx}'],
  verbose: true,
  nsSeparator: false,
  keySeparator: false,
  useKeysAsDefaultValue: true
}
